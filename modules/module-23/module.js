/**
 * Module 23 - Viabilisation projet professionnel
 * Analyse SWOT et validation de la piste principale
 */

class Module23Class {
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
            setSCORMData('module23_data', JSON.stringify(this.moduleData));
            setSCORMData('module23_completed', 'true');
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
                <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
                <h3 style="color: var(--white); font-size: 1.5rem; margin-bottom: 1rem;">
                    Module 23 complété !
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
                    module: 'module-23',
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

        localStorage.setItem('module23_data', JSON.stringify(data));

        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module23_data', JSON.stringify(this.moduleData));
        }
    }

    loadSavedData() {
        let savedData = null;
        
        if (typeof getSCORMData !== 'undefined') {
            const scormData = getSCORMData('module23_data');
            if (scormData) {
                savedData = { moduleData: JSON.parse(scormData) };
            }
        }

        if (!savedData) {
            const localData = localStorage.getItem('module23_data');
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
    new Module23Class();
});

// Fonction globale pour la navigation vers le module suivant
function goToNextModule() {
    window.location.href = '/module/24';
}

// Fonction pour afficher le message de succès standardisé
function showSuccessMessage() {
    // Masquer le contenu principal
    const mainContent = document.querySelector('.module-container, .slideshow-container, .container, main');
    if (mainContent) {
        mainContent.style.display = 'none';
    }
    
    // Afficher le message de succès
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'block';
        
        // Animation de confettis
        celebrateSuccess();
    }
    
    // Sauvegarder la complétion
    localStorage.setItem('module23_completed', 'true');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animation de confettis standardisée
function celebrateSuccess() {
    const colors = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -10px;
                opacity: 1;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
            `;
            document.body.appendChild(confetti);
            
            let posY = -10;
            let posX = parseFloat(confetti.style.left);
            let opacity = 1;
            
            const fall = setInterval(() => {
                posY += 2;
                posX += Math.sin(posY / 10) * 1;
                opacity -= 0.01;
                
                confetti.style.top = `${posY}px`;
                confetti.style.left = `${posX}%`;
                confetti.style.opacity = opacity;
                
                if (posY > window.innerHeight || opacity <= 0) {
                    clearInterval(fall);
                    confetti.remove();
                }
            }, 20);
        }, i * 50);
    }
}