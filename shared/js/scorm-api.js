// API SCORM centralisée pour tout le parcours Bilan de Compétences
class BilanSCORM {
    constructor() {
        this.API = null;
        this.initialized = false;
        this.startTime = new Date();
        this.timerInterval = null;
        this.init();
    }

    init() {
        try {
            this.API = this.findAPI(window);
            if (this.API) {
                const result = this.API.LMSInitialize("");
                this.initialized = (result === "true");
                
                if (this.initialized) {
                    console.log("SCORM API initialisée avec succès");
                    this.startTimer();
                    
                    // Récupérer les données de l'étape courante
                    const etapeData = this.getValue("cmi.launch_data");
                    if (etapeData) {
                        const params = new URLSearchParams(etapeData);
                        window.currentEtape = params.get('etape');
                        window.currentModule = params.get('module');
                    }
                } else {
                    console.warn("Échec de l'initialisation SCORM");
                }
            }
        } catch (e) {
            console.error("Erreur lors de l'initialisation SCORM:", e);
        }
    }

    findAPI(win) {
        let attempts = 0;
        const maxAttempts = 20;
        
        while ((win.API == null) && (win.parent != null) && (win.parent != win) && (attempts < maxAttempts)) {
            attempts++;
            win = win.parent;
        }
        
        // Chercher aussi dans les frames
        if (win.API == null && win.frames.length > 0) {
            for (let i = 0; i < win.frames.length; i++) {
                try {
                    if (win.frames[i].API) {
                        return win.frames[i].API;
                    }
                } catch (e) {
                    // Ignorer les erreurs de cross-origin
                }
            }
        }
        
        return win.API;
    }

    setValue(parameter, value) {
        if (this.initialized && this.API) {
            try {
                const result = this.API.LMSSetValue(parameter, value);
                this.API.LMSCommit("");
                return result === "true";
            } catch (e) {
                console.error("Erreur SCORM setValue:", e);
                return false;
            }
        }
        return false;
    }

    getValue(parameter) {
        if (this.initialized && this.API) {
            try {
                return this.API.LMSGetValue(parameter);
            } catch (e) {
                console.error("Erreur SCORM getValue:", e);
                return "";
            }
        }
        return "";
    }

    setStatus(status) {
        return this.setValue("cmi.core.lesson_status", status);
    }

    setScore(score) {
        return this.setValue("cmi.core.score.raw", score.toString());
    }

    setSuspendData(data) {
        return this.setValue("cmi.core.suspend_data", JSON.stringify(data));
    }

    getSuspendData() {
        const data = this.getValue("cmi.core.suspend_data");
        if (data) {
            try {
                return JSON.parse(data);
            } catch (e) {
                console.error("Erreur parsing suspend_data:", e);
                return {};
            }
        }
        return {};
    }

    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        this.timerInterval = setInterval(() => {
            const currentTime = new Date();
            const timeSpent = Math.floor((currentTime - this.startTime) / 1000);
            this.setValue("cmi.core.session_time", this.formatTime(timeSpent));
        }, 10000); // Update every 10 seconds
    }

    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;
    }

    pad(num) {
        return num.toString().padStart(2, '0');
    }

    getTimeSpent() {
        const currentTime = new Date();
        return Math.floor((currentTime - this.startTime) / 1000);
    }

    recordInteraction(id, type = "fill-in", response = "", result = "correct") {
        if (!this.initialized) return false;

        try {
            const interactionCount = parseInt(this.getValue("cmi.interactions._count") || "0");
            const prefix = `cmi.interactions.${interactionCount}`;
            
            this.setValue(`${prefix}.id`, id);
            this.setValue(`${prefix}.type`, type);
            this.setValue(`${prefix}.student_response`, response);
            this.setValue(`${prefix}.result`, result);
            this.setValue(`${prefix}.time`, new Date().toISOString());
            
            return true;
        } catch (e) {
            console.error("Erreur enregistrement interaction:", e);
            return false;
        }
    }

    complete() {
        if (this.initialized && this.API) {
            try {
                this.setStatus("completed");
                this.setScore(100);
                
                if (this.timerInterval) {
                    clearInterval(this.timerInterval);
                }
                
                const result = this.API.LMSFinish("");
                console.log("SCORM terminé:", result);
                return result === "true";
            } catch (e) {
                console.error("Erreur fin SCORM:", e);
                return false;
            }
        }
        return false;
    }

    terminate() {
        if (this.initialized && this.API) {
            try {
                if (this.timerInterval) {
                    clearInterval(this.timerInterval);
                }
                
                const result = this.API.LMSFinish("");
                this.initialized = false;
                return result === "true";
            } catch (e) {
                console.error("Erreur terminaison SCORM:", e);
                return false;
            }
        }
        return false;
    }

    // Méthodes statiques pour accès global
    static getInstance() {
        if (!window.bilanSCORM) {
            window.bilanSCORM = new BilanSCORM();
        }
        return window.bilanSCORM;
    }

    static setValue(parameter, value) {
        return BilanSCORM.getInstance().setValue(parameter, value);
    }

    static getValue(parameter) {
        return BilanSCORM.getInstance().getValue(parameter);
    }

    static setStatus(status) {
        return BilanSCORM.getInstance().setStatus(status);
    }

    static setScore(score) {
        return BilanSCORM.getInstance().setScore(score);
    }

    static getSuspendData() {
        return BilanSCORM.getInstance().getSuspendData();
    }

    static setSuspendData(data) {
        return BilanSCORM.getInstance().setSuspendData(data);
    }

    static recordInteraction(id, type, response, result) {
        return BilanSCORM.getInstance().recordInteraction(id, type, response, result);
    }

    static getTimeSpent() {
        return BilanSCORM.getInstance().getTimeSpent();
    }
}

// Auto-initialize on load
document.addEventListener('DOMContentLoaded', function() {
    BilanSCORM.getInstance();
});

// Handle page unload
window.addEventListener('beforeunload', function() {
    if (window.bilanSCORM) {
        window.bilanSCORM.terminate();
    }
});

// Fonctions globales pour compatibilité avec les modules
function initSCORM() {
    return BilanSCORM.getInstance();
}

function setSCORMData(key, value) {
    return BilanSCORM.setValue(key, value);
}

function getSCORMData(key) {
    return BilanSCORM.getValue(key);
}

function setSCORMComplete() {
    return BilanSCORM.setStatus('completed');
}

// Export pour utilisation dans les modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BilanSCORM, initSCORM, setSCORMData, getSCORMData, setSCORMComplete };
}