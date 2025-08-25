/**
 * Module 4 - Les objectifs du bilan
 * Gestion des objectifs prédéfinis et de l'objectif principal personnalisé
 */

class ObjectivesModule {
    constructor() {
        this.selectedObjectives = [];
        this.primaryObjective = '';
        this.currentStep = 1;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadSavedData();
        this.updateProgress();
        
        // Initialiser SCORM si disponible
        if (typeof initSCORM !== 'undefined') {
            initSCORM();
        }
    }

    bindEvents() {
        // Gestion des cartes objectives
        const objectiveCards = document.querySelectorAll('.objective-card');
        objectiveCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.type !== 'checkbox') {
                    const checkbox = card.querySelector('.objective-checkbox');
                    checkbox.checked = !checkbox.checked;
                    checkbox.dispatchEvent(new Event('change'));
                }
            });
        });

        // Gestion des checkboxes
        const checkboxes = document.querySelectorAll('.objective-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.handleObjectiveSelection(e);
            });
        });

        // Gestion du textarea objectif principal
        const primaryObjectiveInput = document.getElementById('primaryObjective');
        primaryObjectiveInput.addEventListener('input', (e) => {
            this.primaryObjective = e.target.value.trim();
            this.updateCharCount();
            this.updateSubmitButton();
            this.saveData();
        });

        // Navigation entre étapes
        const continueBtn = document.getElementById('continueBtn');
        continueBtn.addEventListener('click', () => {
            this.goToStep(2);
        });

        const backBtn = document.getElementById('backBtn');
        backBtn.addEventListener('click', () => {
            this.goToStep(1);
        });

        // Gestion du bouton de validation
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.addEventListener('click', () => {
            this.validateAndSubmit();
        });
    }

    handleObjectiveSelection(event) {
        const checkbox = event.target;
        const card = checkbox.closest('.objective-card');
        const objectiveType = card.dataset.objective;

        if (checkbox.checked) {
            // Ajouter l'objectif
            if (!this.selectedObjectives.includes(objectiveType)) {
                this.selectedObjectives.push(objectiveType);
            }
            card.classList.add('selected');
        } else {
            // Retirer l'objectif
            const index = this.selectedObjectives.indexOf(objectiveType);
            if (index > -1) {
                this.selectedObjectives.splice(index, 1);
            }
            card.classList.remove('selected');
        }

        this.updateSelectedCount();
        this.updateSubmitButton();
        this.saveData();
    }

    updateSelectedCount() {
        const countElement = document.getElementById('selectedCount');
        const count = this.selectedObjectives.length;
        
        if (count > 0) {
            countElement.style.display = 'inline-block';
            countElement.textContent = `${count} objectif${count > 1 ? 's' : ''} sélectionné${count > 1 ? 's' : ''}`;
        } else {
            countElement.style.display = 'none';
        }
    }

    updateSubmitButton() {
        if (this.currentStep === 1) {
            const continueBtn = document.getElementById('continueBtn');
            const hasObjectives = this.selectedObjectives.length > 0;
            continueBtn.disabled = !hasObjectives;
        } else {
            const submitBtn = document.getElementById('submitBtn');
            const hasObjectives = this.selectedObjectives.length > 0;
            const hasPrimaryObjective = this.primaryObjective.length >= 50; // Minimum 50 caractères
            submitBtn.disabled = !(hasObjectives && hasPrimaryObjective);
        }
    }

    updateCharCount() {
        const charCountElement = document.getElementById('charCount');
        if (charCountElement) {
            charCountElement.textContent = this.primaryObjective.length;
            
            // Changer la couleur selon la longueur
            if (this.primaryObjective.length >= 50) {
                charCountElement.style.color = 'var(--success)';
            } else {
                charCountElement.style.color = 'var(--gray-500)';
            }
        }
    }

    updateProgress() {
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        
        const progress = (this.currentStep / 2) * 100;
        progressBar.style.width = progress + '%';
        progressText.textContent = `Étape ${this.currentStep} sur 2`;
    }

    goToStep(step) {
        // Masquer toutes les étapes
        document.querySelectorAll('.step-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Afficher l'étape demandée
        document.getElementById(`step${step}`).classList.add('active');
        
        this.currentStep = step;
        this.updateProgress();
        this.updateSubmitButton();
        
        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    validateAndSubmit() {
        if (this.selectedObjectives.length === 0) {
            this.showNotification('Veuillez sélectionner au moins un objectif.', 'error');
            this.goToStep(1);
            return;
        }

        if (this.primaryObjective.length < 50) {
            this.showNotification('Veuillez détailler votre objectif principal (minimum 50 caractères).', 'error');
            document.getElementById('primaryObjective').focus();
            return;
        }

        // Sauvegarder les données finales
        this.saveData();
        
        // SCORM - Marquer comme complété
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module4_objectives', JSON.stringify(this.selectedObjectives));
            setSCORMData('module4_primary_objective', this.primaryObjective);
            setSCORMData('module4_completed', 'true');
            setSCORMComplete();
        }

        this.showSuccessMessage();
    }

    showSuccessMessage() {
        // Masquer toutes les étapes
        document.querySelectorAll('.step-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Afficher le message de succès
        document.getElementById('successMessage').style.display = 'block';
        
        // Mettre à jour la barre de progression
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        progressBar.style.width = '100%';
        progressText.textContent = 'Terminé !';

        // Redirection après 3 secondes
        setTimeout(() => {
            if (typeof parent !== 'undefined' && parent.postMessage) {
                parent.postMessage({
                    type: 'module-completed',
                    module: 'module-04',
                    data: {
                        selectedObjectives: this.selectedObjectives,
                        primaryObjective: this.primaryObjective,
                        completed: true
                    }
                }, '*');
            }
        }, 3000);
    }

    // Fonction globale pour navigation vers module suivant
    goToNextModule() {
        if (typeof parent !== 'undefined' && parent.postMessage) {
            parent.postMessage({
                type: 'navigate-to-module',
                module: 'module-05'
            }, '*');
        } else {
            window.location.href = '/module/05';
        }
    }

    showNotification(message, type = 'info') {
        // Créer la notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'error' ? 'var(--error)' : 'var(--info)'};
            color: var(--white);
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
        `;
        notification.textContent = message;

        // Ajouter au DOM
        document.body.appendChild(notification);

        // Retirer après 4 secondes
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);

        // Ajouter les animations CSS si pas déjà présentes
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    saveData() {
        const data = {
            selectedObjectives: this.selectedObjectives,
            primaryObjective: this.primaryObjective,
            timestamp: new Date().toISOString()
        };

        // LocalStorage pour développement
        localStorage.setItem('module4_data', JSON.stringify(data));

        // SCORM pour production
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module4_objectives', JSON.stringify(this.selectedObjectives));
            setSCORMData('module4_primary_objective', this.primaryObjective);
        }
    }

    loadSavedData() {
        // Essayer de charger depuis SCORM d'abord
        let savedData = null;
        
        if (typeof getSCORMData !== 'undefined') {
            const scormObjectives = getSCORMData('module4_objectives');
            const scormPrimary = getSCORMData('module4_primary_objective');
            
            if (scormObjectives && scormPrimary) {
                savedData = {
                    selectedObjectives: JSON.parse(scormObjectives),
                    primaryObjective: scormPrimary
                };
            }
        }

        // Fallback sur localStorage
        if (!savedData) {
            const localData = localStorage.getItem('module4_data');
            if (localData) {
                savedData = JSON.parse(localData);
            }
        }

        if (savedData) {
            // Restaurer les objectifs sélectionnés
            this.selectedObjectives = savedData.selectedObjectives || [];
            this.selectedObjectives.forEach(objectiveType => {
                const card = document.querySelector(`[data-objective="${objectiveType}"]`);
                const checkbox = card?.querySelector('.objective-checkbox');
                if (checkbox) {
                    checkbox.checked = true;
                    card.classList.add('selected');
                }
            });

            // Restaurer l'objectif principal
            if (savedData.primaryObjective) {
                this.primaryObjective = savedData.primaryObjective;
                document.getElementById('primaryObjective').value = this.primaryObjective;
                this.updateCharCount();
            }

            // Mettre à jour l'interface
            this.updateSelectedCount();
            this.updateSubmitButton();
        }
    }
}

// Fonction globale pour navigation (appelée depuis le HTML)
function goToNextModule() {
    if (typeof parent !== 'undefined' && parent.postMessage) {
        parent.postMessage({
            type: 'navigate-to-module',
            module: 'module-05'
        }, '*');
    } else {
        window.location.href = '/module/05';
    }
}

// Initialiser le module au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    new ObjectivesModule();
});