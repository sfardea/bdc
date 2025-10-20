/**
 * Module 1 - Faisons Connaissance
 * Gestion du formulaire multi-étapes et validation
 */

class Module1 {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 3;
        this.formData = {};
        this.init();
    }

    init() {
        // Initialiser les écouteurs d'événements
        this.setupEventListeners();
        
        // Initialiser SCORM si disponible
        if (typeof initSCORM !== 'undefined') {
            initSCORM();
        }
        
        // Charger les données sauvegardées si elles existent
        this.loadSavedData();
        
        // Mettre à jour la progression
        this.updateProgress();
        
        // Initialiser la navigation par étapes
        this.setupStepNavigation();
    }

    setupEventListeners() {
        // Formulaire principal
        const form = document.getElementById('mainForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        // Validation en temps réel
        this.setupRealTimeValidation();
        
        // Navigation clavier
        document.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
    }

    setupStepNavigation() {
        // Clic sur les indicateurs d'étapes
        document.querySelectorAll('.step-indicator').forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                const step = parseInt(e.currentTarget.dataset.step);
                if (this.canNavigateToStep(step)) {
                    this.goToStep(step);
                }
            });
        });
    }

    setupRealTimeValidation() {
        // Validation des champs requis
        document.querySelectorAll('[required]').forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('input', () => this.clearError(field));
        });

        // Validation email
        const emailField = document.getElementById('email');
        if (emailField) {
            emailField.addEventListener('blur', () => this.validateEmail(emailField));
        }

        // Validation téléphone
        const phoneField = document.getElementById('telephone');
        if (phoneField) {
            phoneField.addEventListener('input', (e) => this.formatPhoneNumber(e));
        }
    }

    validateField(field) {
        const errorElement = document.getElementById(field.id + 'Error');
        if (!errorElement) return true;

        if (field.hasAttribute('required') && !field.value.trim()) {
            errorElement.textContent = 'Ce champ est requis';
            field.classList.add('error');
            return false;
        }

        errorElement.textContent = '';
        field.classList.remove('error');
        return true;
    }

    validateEmail(field) {
        const errorElement = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(field.value)) {
            errorElement.textContent = 'Veuillez entrer une adresse email valide';
            field.classList.add('error');
            return false;
        }
        
        errorElement.textContent = '';
        field.classList.remove('error');
        return true;
    }

    formatPhoneNumber(event) {
        let value = event.target.value.replace(/\s/g, '');
        let formattedValue = '';
        
        for (let i = 0; i < value.length && i < 10; i++) {
            if (i > 0 && i % 2 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        
        event.target.value = formattedValue;
    }

    clearError(field) {
        const errorElement = document.getElementById(field.id + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
            field.classList.remove('error');
        }
    }

    canNavigateToStep(step) {
        // Vérifier si on peut naviguer vers cette étape
        if (step < this.currentStep) {
            return true; // Toujours permettre de revenir en arrière
        }
        
        if (step === this.currentStep + 1) {
            return this.validateCurrentStep();
        }
        
        return false;
    }

    validateCurrentStep() {
        const currentStepElement = document.getElementById(`step${this.currentStep}`);
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        // Validation spécifique pour l'email
        if (this.currentStep === 1) {
            const emailField = document.getElementById('email');
            if (emailField && !this.validateEmail(emailField)) {
                isValid = false;
            }
        }
        
        return isValid;
    }

    goToStep(step) {
        // Sauvegarder les données du step actuel
        this.saveStepData();
        
        // Masquer l'étape actuelle
        document.getElementById(`step${this.currentStep}`).classList.remove('active');
        
        // Afficher la nouvelle étape
        document.getElementById(`step${step}`).classList.add('active');
        
        // Mettre à jour la navigation
        this.updateStepIndicators(step);
        
        // Si on va à l'étape 3 (récapitulatif), afficher le résumé
        if (step === 3) {
            this.displaySummary();
        }
        
        this.currentStep = step;
        this.updateProgress();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    updateStepIndicators(step) {
        document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
            const stepNum = index + 1;
            
            indicator.classList.remove('active', 'completed');
            
            if (stepNum === step) {
                indicator.classList.add('active');
            } else if (stepNum < step) {
                indicator.classList.add('completed');
            }
        });
        
        // Mettre à jour les connecteurs
        document.querySelectorAll('.step-connector').forEach((connector, index) => {
            if (index < step - 1) {
                connector.classList.add('completed');
            } else {
                connector.classList.remove('completed');
            }
        });
    }

    saveStepData() {
        const stepElement = document.getElementById(`step${this.currentStep}`);
        const inputs = stepElement.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            if (input.type === 'radio') {
                if (input.checked) {
                    this.formData[input.name] = input.value;
                }
            } else if (input.type === 'checkbox') {
                this.formData[input.name] = input.checked;
            } else {
                this.formData[input.name] = input.value;
            }
        });
        
        // Sauvegarder dans le localStorage
        localStorage.setItem('module1_data', JSON.stringify(this.formData));
    }

    loadSavedData() {
        const savedData = localStorage.getItem('module1_data');
        if (savedData) {
            this.formData = JSON.parse(savedData);
            
            // Remplir les champs avec les données sauvegardées
            Object.keys(this.formData).forEach(key => {
                const element = document.querySelector(`[name="${key}"]`);
                if (element) {
                    if (element.type === 'radio') {
                        const radio = document.querySelector(`[name="${key}"][value="${this.formData[key]}"]`);
                        if (radio) radio.checked = true;
                    } else if (element.type === 'checkbox') {
                        element.checked = this.formData[key];
                    } else {
                        element.value = this.formData[key];
                    }
                }
            });
        }
    }

    displaySummary() {
        // Afficher les informations personnelles
        const personalSummary = document.getElementById('personalSummary');
        if (personalSummary) {
            personalSummary.innerHTML = `
                <div class="summary-item">
                    <span class="summary-label">Nom complet</span>
                    <span class="summary-value">${this.formData.prenom || ''} ${this.formData.nom || ''}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Email</span>
                    <span class="summary-value">${this.formData.email || ''}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Téléphone</span>
                    <span class="summary-value">${this.formData.telephone || 'Non renseigné'}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Date de naissance</span>
                    <span class="summary-value">${this.formatDate(this.formData.dateNaissance) || ''}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Région</span>
                    <span class="summary-value">${this.getRegionLabel(this.formData.region) || ''}</span>
                </div>
            `;
        }
        
        // Afficher les informations professionnelles
        const professionalSummary = document.getElementById('professionalSummary');
        if (professionalSummary) {
            professionalSummary.innerHTML = `
                <div class="summary-item">
                    <span class="summary-label">Niveau d'études</span>
                    <span class="summary-value">${this.getEducationLabel(this.formData.niveauEtudes) || ''}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Situation professionnelle</span>
                    <span class="summary-value">${this.getSituationLabel(this.formData.situationPro) || ''}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Expérience</span>
                    <span class="summary-value">${this.getExperienceLabel(this.formData.experience) || ''}</span>
                </div>
            `;
        }
    }

    formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
    }

    getRegionLabel(value) {
        const select = document.getElementById('region');
        if (select && value) {
            const option = select.querySelector(`option[value="${value}"]`);
            return option ? option.textContent : value;
        }
        return value;
    }

    getEducationLabel(value) {
        const select = document.getElementById('niveauEtudes');
        if (select && value) {
            const option = select.querySelector(`option[value="${value}"]`);
            return option ? option.textContent : value;
        }
        return value;
    }

    getSituationLabel(value) {
        const labels = {
            'salarie-cdi': 'Salarié(e) en CDI',
            'salarie-cdd': 'Salarié(e) en CDD',
            'independant': 'Indépendant(e)',
            'recherche-emploi': 'En recherche d\'emploi',
            'etudiant': 'Étudiant(e)',
            'autre': 'Autre'
        };
        return labels[value] || value;
    }

    getExperienceLabel(value) {
        const select = document.getElementById('experience');
        if (select && value) {
            const option = select.querySelector(`option[value="${value}"]`);
            return option ? option.textContent : value;
        }
        return value;
    }

    updateProgress() {
        const progress = (this.currentStep / this.totalSteps) * 100;
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${Math.round(progress)}% complété`;
        }
    }

    handleKeyNavigation(event) {
        // Navigation avec les touches fléchées
        if (event.key === 'ArrowRight' && event.ctrlKey) {
            this.nextStep();
        } else if (event.key === 'ArrowLeft' && event.ctrlKey) {
            this.previousStep();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        
        // Validation finale
        if (!this.validateCurrentStep()) {
            return;
        }
        
        // Vérifier le consentement
        const consent = document.getElementById('consent');
        if (!consent.checked) {
            alert('Veuillez accepter les conditions pour continuer.');
            return;
        }
        
        // Sauvegarder toutes les données
        this.saveStepData();
        
        // Envoyer les données SCORM si disponible
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module1_completed', 'true');
            setSCORMData('module1_data', JSON.stringify(this.formData));
            setSCORMComplete();
        }
        
        // Afficher le message de succès
        this.showSuccessMessage();
    }

    showSuccessMessage() {
        // Masquer le formulaire et la navigation
        document.getElementById('mainForm').style.display = 'none';
        const stepNav = document.querySelector('.step-navigation');
        if (stepNav) {
            stepNav.style.display = 'none';
        }
        
        // Masquer aussi le header avec la progression
        const moduleHeader = document.querySelector('.module-header');
        if (moduleHeader) {
            moduleHeader.style.display = 'none';
        }
        
        // Afficher le message de succès
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.style.display = 'block';
            
            // Animation de confettis (optionnel)
            this.celebrateSuccess();
        }
        
        // Sauvegarder la complétion
        localStorage.setItem('module1_completed', 'true');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    celebrateSuccess() {
        // Petite animation de célébration
        const colors = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
        const container = document.querySelector('.container');
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: ${Math.random() * 100}%;
                    top: -10px;
                    opacity: 1;
                    transform: rotate(${Math.random() * 360}deg);
                    pointer-events: none;
                    z-index: 9999;
                `;
                container.appendChild(confetti);
                
                // Animation de chute
                let posY = -10;
                let posX = parseFloat(confetti.style.left);
                let rotation = 0;
                let opacity = 1;
                
                const fall = setInterval(() => {
                    posY += 3;
                    posX += Math.sin(posY / 10) * 2;
                    rotation += 5;
                    opacity -= 0.01;
                    
                    confetti.style.top = `${posY}px`;
                    confetti.style.left = `${posX}%`;
                    confetti.style.transform = `rotate(${rotation}deg)`;
                    confetti.style.opacity = opacity;
                    
                    if (posY > window.innerHeight || opacity <= 0) {
                        clearInterval(fall);
                        confetti.remove();
                    }
                }, 20);
            }, i * 50);
        }
    }
}

// Fonctions globales pour les boutons
function nextStep() {
    if (module1.validateCurrentStep()) {
        if (module1.currentStep < module1.totalSteps) {
            module1.goToStep(module1.currentStep + 1);
        }
    }
}

function previousStep() {
    if (module1.currentStep > 1) {
        module1.goToStep(module1.currentStep - 1);
    }
}

function goToNextModule() {
    // Redirection vers le module 2
    window.location.href = '/module/02';
}

function restartModule() {
    // Effacer les données sauvegardées
    localStorage.removeItem('module1_data');
    localStorage.removeItem('module1_completed');
    
    // Recharger la page pour recommencer
    window.location.reload();
}

// Initialiser le module au chargement de la page
let module1;
document.addEventListener('DOMContentLoaded', () => {
    module1 = new Module1();
});