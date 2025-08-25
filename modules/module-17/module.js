/**
 * Module 17 - Réponses en champ libre 6 questions
 * Questions approfondies sur aspirations et motivations
 */

class Module17Class {
    constructor() {
        this.moduleData = {};
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadSavedData();
        
        // Initialiser SCORM si disponible
        if (typeof initSCORM !== 'undefined') {
            initSCORM();
        }
    }

    bindEvents() {
        const validateBtn = document.getElementById('validateBtn');
        validateBtn.addEventListener('click', () => this.validateAndSubmit());
    }

    validateAndSubmit() {
        // Sauvegarder les données finales
        this.saveData();
        
        // SCORM - Marquer comme complété
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module17_data', JSON.stringify(this.moduleData));
            setSCORMData('module17_completed', 'true');
            setSCORMComplete();
        }

        this.showSuccessMessage();
    }

    showSuccessMessage() {
        const container = document.querySelector('.module-container');
        
        const successHtml = `
            <div class="success-message" style="
                background: linear-gradient(135deg, var(--success), var(--secondary-dark));
                color: var(--white);
                padding: 2rem;
                border-radius: var(--radius-2xl);
                text-align: center;
                animation: successAnimation 0.8s ease-out;
                margin-top: 2rem;
            ">
                <div style="font-size: 3rem; margin-bottom: 1rem;">❓</div>
                <h3 style="color: var(--white); font-size: 1.5rem; margin-bottom: 1rem;">
                    Module 17 complété !
                </h3>
                <p style="opacity: 0.9; margin-bottom: 1.5rem;">
                    Excellente progression ! Vos réflexions enrichissent votre profil personnel et professionnel.
                </p>
            </div>
            
            <style>
                @keyframes successAnimation {
                    0% { transform: scale(0.8) rotate(-3deg); opacity: 0; }
                    50% { transform: scale(1.05) rotate(1deg); }
                    100% { transform: scale(1) rotate(0); opacity: 1; }
                }
            </style>
        `;
        
        container.insertAdjacentHTML('beforeend', successHtml);

        // Redirection après 3 secondes
        setTimeout(() => {
            if (typeof parent !== 'undefined' && parent.postMessage) {
                parent.postMessage({
                    type: 'module-completed',
                    module: 'module-17',
                    data: {
                        moduleData: this.moduleData,
                        completed: true
                    }
                }, '*');
            }
        }, 3000);
    }

    saveData() {
        const data = {
            moduleData: this.moduleData,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('module17_data', JSON.stringify(data));

        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module17_data', JSON.stringify(this.moduleData));
        }
    }

    loadSavedData() {
        let savedData = null;
        
        if (typeof getSCORMData !== 'undefined') {
            const scormData = getSCORMData('module17_data');
            if (scormData) {
                savedData = { moduleData: JSON.parse(scormData) };
            }
        }

        if (!savedData) {
            const localData = localStorage.getItem('module17_data');
            if (localData) {
                savedData = JSON.parse(localData);
            }
        }

        if (savedData) {
            this.moduleData = savedData.moduleData || {};
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Module17Class();
});