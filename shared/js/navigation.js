// Système de navigation pour le parcours Bilan de Compétences
class BilanNavigation {
    constructor() {
        this.etapes = [
            { id: 'etape-01', title: 'Présentons-nous', duration: 30 },
            { id: 'etape-02', title: 'Mon autoportrait', duration: 45 },
            { id: 'etape-03', title: 'Mes valeurs professionnelles', duration: 40 },
            // ... autres étapes à définir
        ];
        
        this.currentEtape = window.currentEtape || 'etape-01';
        this.completedEtapes = new Set();
        this.startTime = new Date();
        
        this.loadProgress();
    }

    loadProgress() {
        const suspendData = BilanSCORM.getSuspendData();
        if (suspendData.completedEtapes) {
            this.completedEtapes = new Set(suspendData.completedEtapes);
        }
        if (suspendData.currentEtape) {
            this.currentEtape = suspendData.currentEtape;
        }
    }

    saveProgress() {
        const suspendData = BilanSCORM.getSuspendData();
        suspendData.completedEtapes = Array.from(this.completedEtapes);
        suspendData.currentEtape = this.currentEtape;
        suspendData.lastActivity = new Date().toISOString();
        
        BilanSCORM.setSuspendData(suspendData);
    }

    saveEtapeData(etapeId, data) {
        const suspendData = BilanSCORM.getSuspendData();
        if (!suspendData.etapesData) {
            suspendData.etapesData = {};
        }
        suspendData.etapesData[etapeId] = data;
        
        BilanSCORM.setSuspendData(suspendData);
    }

    getEtapeData(etapeId) {
        const suspendData = BilanSCORM.getSuspendData();
        if (suspendData.etapesData) {
            return suspendData.etapesData[etapeId] || {};
        }
        return {};
    }

    getSuspendData() {
        return BilanSCORM.getSuspendData();
    }

    completeEtape(etapeId) {
        this.completedEtapes.add(etapeId);
        this.saveProgress();
        
        // Calculer le pourcentage de complétion global
        const completionPercentage = Math.round((this.completedEtapes.size / this.etapes.length) * 100);
        BilanSCORM.setScore(completionPercentage);
        
        // Si toutes les étapes sont terminées, marquer le parcours comme complet
        if (this.completedEtapes.size >= this.etapes.length) {
            BilanSCORM.setStatus('completed');
        } else {
            BilanSCORM.setStatus('incomplete');
        }
        
        console.log(`Étape ${etapeId} terminée. Progression: ${completionPercentage}%`);
    }

    isEtapeCompleted(etapeId) {
        return this.completedEtapes.has(etapeId);
    }

    getNextEtape(currentEtapeId) {
        const currentIndex = this.etapes.findIndex(e => e.id === currentEtapeId);
        if (currentIndex < this.etapes.length - 1) {
            return this.etapes[currentIndex + 1];
        }
        return null;
    }

    getPreviousEtape(currentEtapeId) {
        const currentIndex = this.etapes.findIndex(e => e.id === currentEtapeId);
        if (currentIndex > 0) {
            return this.etapes[currentIndex - 1];
        }
        return null;
    }

    canAccessEtape(etapeId) {
        // L'étape 1 est toujours accessible
        if (etapeId === 'etape-01') return true;
        
        // Pour les autres étapes, vérifier que la précédente est terminée
        const etapeIndex = this.etapes.findIndex(e => e.id === etapeId);
        if (etapeIndex === -1) return false;
        
        // Vérifier que toutes les étapes précédentes sont terminées
        for (let i = 0; i < etapeIndex; i++) {
            if (!this.completedEtapes.has(this.etapes[i].id)) {
                return false;
            }
        }
        
        return true;
    }

    goToEtape(etapeId) {
        if (!this.canAccessEtape(etapeId)) {
            alert('Vous devez terminer les étapes précédentes avant d\'accéder à celle-ci.');
            return false;
        }

        this.currentEtape = etapeId;
        this.saveProgress();
        
        // Navigation SCORM ou redirection
        const baseUrl = this.getBaseUrl();
        const targetUrl = `${baseUrl}/etapes/${etapeId}/index.html`;
        
        // Essayer d'utiliser l'API SCORM pour la navigation
        if (this.tryScormNavigation(etapeId)) {
            return true;
        }
        
        // Fallback : redirection simple
        window.location.href = targetUrl;
        return true;
    }

    tryScormNavigation(etapeId) {
        // Certains LMS supportent la navigation programmatique
        try {
            if (window.parent && window.parent.API && window.parent.API.LMSSetValue) {
                window.parent.API.LMSSetValue("adl.nav.request", etapeId);
                return window.parent.API.LMSCommit("") === "true";
            }
        } catch (e) {
            console.log("Navigation SCORM non supportée:", e);
        }
        
        return false;
    }

    getBaseUrl() {
        const path = window.location.pathname;
        const segments = path.split('/');
        
        // Trouver l'index du dossier "etapes"
        const etapesIndex = segments.findIndex(s => s === 'etapes');
        if (etapesIndex > -1) {
            // Reconstruire l'URL de base
            return window.location.origin + segments.slice(0, etapesIndex).join('/');
        }
        
        // Fallback
        return window.location.origin;
    }

    getTimeSpent() {
        const currentTime = new Date();
        return Math.floor((currentTime - this.startTime) / 1000);
    }

    updateProgressIndicator() {
        const indicators = document.querySelectorAll('.etape-indicator');
        indicators.forEach((indicator, index) => {
            const etapeId = this.etapes[index]?.id;
            
            if (etapeId) {
                indicator.classList.remove('active', 'completed', 'locked');
                
                if (this.isEtapeCompleted(etapeId)) {
                    indicator.classList.add('completed');
                    indicator.innerHTML = '✓';
                } else if (etapeId === this.currentEtape) {
                    indicator.classList.add('active');
                    indicator.textContent = index + 1;
                } else if (this.canAccessEtape(etapeId)) {
                    indicator.textContent = index + 1;
                } else {
                    indicator.classList.add('locked');
                    indicator.innerHTML = '🔒';
                }
            }
        });
    }

    // Méthodes statiques pour accès global
    static getInstance() {
        if (!window.bilanNavigation) {
            window.bilanNavigation = new BilanNavigation();
        }
        return window.bilanNavigation;
    }

    static completeEtape(etapeId) {
        return BilanNavigation.getInstance().completeEtape(etapeId);
    }

    static goToEtape(etapeId) {
        return BilanNavigation.getInstance().goToEtape(etapeId);
    }

    static saveEtapeData(etapeId, data) {
        return BilanNavigation.getInstance().saveEtapeData(etapeId, data);
    }

    static getEtapeData(etapeId) {
        return BilanNavigation.getInstance().getEtapeData(etapeId);
    }

    static getSuspendData() {
        return BilanNavigation.getInstance().getSuspendData();
    }

    static getTimeSpent() {
        return BilanNavigation.getInstance().getTimeSpent();
    }

    static updateProgressIndicator() {
        return BilanNavigation.getInstance().updateProgressIndicator();
    }
}

// Auto-initialize on load
document.addEventListener('DOMContentLoaded', function() {
    BilanNavigation.getInstance();
    
    // Mettre à jour l'indicateur de progression si présent
    setTimeout(() => {
        BilanNavigation.updateProgressIndicator();
    }, 100);
});