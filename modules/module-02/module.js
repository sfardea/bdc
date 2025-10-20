/**
 * Module 2 - Blason Personnel
 * Questionnaire gamifié pour créer un blason personnalisé
 */

class BlasonQuestionnaire {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 10;
        this.points = 0;
        this.answers = {};
        this.init();
    }

    init() {
        this.loadSavedData();
        this.updateUI();
        this.bindEvents();
        
        // Initialiser SCORM si disponible
        if (typeof initSCORM !== 'undefined') {
            initSCORM();
        }
    }

    loadSavedData() {
        const saved = localStorage.getItem('blason-questionnaire');
        if (saved) {
            const data = JSON.parse(saved);
            this.currentStep = data.currentStep || 1;
            this.points = data.points || 0;
            this.answers = data.answers || {};
        }
    }

    saveData() {
        localStorage.setItem('blason-questionnaire', JSON.stringify({
            currentStep: this.currentStep,
            points: this.points,
            answers: this.answers
        }));
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.btn-next')) {
                this.nextStep();
            }
            if (e.target.matches('.btn-prev')) {
                this.prevStep();
            }
            if (e.target.matches('.btn-finish')) {
                this.finish();
            }
            if (e.target.matches('.btn-restart')) {
                this.restart();
            }
        });

        document.addEventListener('input', (e) => {
            if (e.target.matches('textarea, input[type="text"]')) {
                this.saveAnswer(e.target);
            }
        });
    }

    saveAnswer(input) {
        const stepId = input.closest('.question-step').id;
        const stepNumber = parseInt(stepId.replace('step-', ''));
        
        if (!this.answers[stepNumber]) {
            this.answers[stepNumber] = {};
        }

        if (input.name === 'strength1' || input.name === 'strength2') {
            if (!this.answers[stepNumber].strengths) {
                this.answers[stepNumber].strengths = {};
            }
            this.answers[stepNumber].strengths[input.name] = input.value;
        } else {
            this.answers[stepNumber].answer = input.value;
        }

        this.saveData();
    }

    nextStep() {
        const currentStepEl = document.getElementById(`step-${this.currentStep}`);
        const isValid = this.validateCurrentStep();
        
        if (!isValid) {
            this.showError('Veuillez compléter cette étape avant de continuer.');
            return;
        }

        if (!this.hasAnsweredStep(this.currentStep)) {
            this.points += 10;
            this.updatePointsDisplay();
        }

        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateUI();
            this.saveData();
        } else {
            this.generateBlason();
            this.showFinalStep();
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateUI();
            this.saveData();
        }
    }

    validateCurrentStep() {
        const currentStepEl = document.getElementById(`step-${this.currentStep}`);
        
        if (this.currentStep === 7) {
            const strength1 = currentStepEl.querySelector('input[name="strength1"]').value.trim();
            const strength2 = currentStepEl.querySelector('input[name="strength2"]').value.trim();
            return strength1 && strength2;
        }
        
        const textarea = currentStepEl.querySelector('textarea');
        const input = currentStepEl.querySelector('input[type="text"]');
        
        if (textarea) {
            return textarea.value.trim().length > 0;
        }
        if (input) {
            return input.value.trim().length > 0;
        }
        
        return false;
    }

    hasAnsweredStep(stepNumber) {
        return this.answers[stepNumber] && 
               (this.answers[stepNumber].answer || this.answers[stepNumber].strengths);
    }

    updateUI() {
        document.querySelectorAll('.question-step').forEach(step => {
            step.style.display = 'none';
        });

        const currentStepEl = document.getElementById(`step-${this.currentStep}`);
        if (currentStepEl) {
            currentStepEl.style.display = 'block';
        }

        this.updateProgressBar();
        this.updatePointsDisplay();
        this.loadAnswers();
        
        document.querySelector('.btn-prev').style.display = this.currentStep > 1 ? 'inline-flex' : 'none';
        
        const nextBtn = document.querySelector('.btn-next');
        if (this.currentStep === this.totalSteps) {
            nextBtn.textContent = 'Générer mon blason';
            nextBtn.classList.remove('btn-primary');
            nextBtn.classList.add('btn-success');
        } else {
            nextBtn.textContent = 'Suivant';
            nextBtn.classList.remove('btn-success');
            nextBtn.classList.add('btn-primary');
        }
    }

    loadAnswers() {
        const currentStepEl = document.getElementById(`step-${this.currentStep}`);
        const answer = this.answers[this.currentStep];
        
        if (!answer) return;

        if (this.currentStep === 7 && answer.strengths) {
            const strength1Input = currentStepEl.querySelector('input[name="strength1"]');
            const strength2Input = currentStepEl.querySelector('input[name="strength2"]');
            if (strength1Input) strength1Input.value = answer.strengths.strength1 || '';
            if (strength2Input) strength2Input.value = answer.strengths.strength2 || '';
        } else if (answer.answer) {
            const textarea = currentStepEl.querySelector('textarea');
            const input = currentStepEl.querySelector('input[type="text"]');
            
            if (textarea) textarea.value = answer.answer;
            if (input) input.value = answer.answer;
        }
    }

    updateProgressBar() {
        const progress = (this.currentStep / this.totalSteps) * 100;
        const progressFill = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
        if (progressText) {
            progressText.textContent = `${Math.round(progress)}% complété`;
        }
    }

    updatePointsDisplay() {
        // Points display supprimé de l'interface
    }

    generateBlason() {
        const blasonData = {
            aspirations: this.answers[6]?.answer || 'Réalisation personnelle',
            valeurs: 'Authenticité, Courage, Persévérance',
            talents: this.answers[7]?.strengths ? 
                Object.values(this.answers[7].strengths).filter(s => s).join(', ') : 
                'Leadership, Créativité',
            enjeux: this.answers[8]?.answer || 'Innovation',
            limites: this.answers[9]?.answer || 'Perfectionnisme',
            fondations: this.answers[10]?.answer || 'Authenticité et respect'
        };

        document.getElementById('blason-aspirations').textContent = blasonData.aspirations;
        document.getElementById('blason-valeurs').textContent = blasonData.valeurs;
        document.getElementById('blason-talents').textContent = blasonData.talents;
        document.getElementById('blason-enjeux').textContent = blasonData.enjeux;
        document.getElementById('blason-limites').textContent = blasonData.limites;
        document.getElementById('blason-fondations').textContent = blasonData.fondations;

        this.saveData();
    }

    showFinalStep() {
        document.getElementById('questionnaire').style.display = 'none';
        document.getElementById('blason-result').style.display = 'block';
        
        this.points += 50;
        this.updatePointsDisplay();
        this.saveData();
    }

    finish() {
        const data = {
            answers: this.answers,
            points: this.points,
            completedAt: new Date().toISOString()
        };
        
        localStorage.setItem('blason-completed', JSON.stringify(data));
        
        // Sauvegarder dans SCORM si disponible
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module2_completed', 'true');
            setSCORMData('blason_data', JSON.stringify(data));
            setSCORMComplete();
        }
        
        if (typeof parent !== 'undefined' && parent.postMessage) {
            parent.postMessage({
                type: 'module-completed',
                module: 'module-02',
                data: data
            }, '*');
        }
        
        // Afficher le message de succès standardisé
        this.showSuccessMessage();
    }

    showSuccessMessage() {
        // Masquer le blason
        document.getElementById('blason-result').style.display = 'none';
        
        // Afficher le message de succès
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.style.display = 'block';
            
            // Animation de confettis
            this.celebrateSuccess();
        }
        
        // Sauvegarder la complétion
        localStorage.setItem('module2_completed', 'true');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    restart() {
        // Pas de popup de confirmation - redémarrage direct
        localStorage.removeItem('blason-questionnaire');
        localStorage.removeItem('blason-completed');
        
        this.currentStep = 1;
        this.points = 0;
        this.answers = {};
        
        document.getElementById('questionnaire').style.display = 'block';
        document.getElementById('blason-result').style.display = 'none';
            
        document.querySelectorAll('textarea, input[type="text"]').forEach(input => {
            input.value = '';
        });
        
        this.updateUI();
        this.saveData();
    }

    showError(message) {
        const errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        errorEl.style.cssText = `
            background: var(--error);
            color: white;
            padding: 1rem;
            border-radius: var(--radius);
            margin: 1rem 0;
            animation: fadeInUp 0.3s ease-out;
        `;
        errorEl.textContent = message;
        
        const currentStep = document.getElementById(`step-${this.currentStep}`);
        currentStep.insertBefore(errorEl, currentStep.firstChild);
        
        setTimeout(() => {
            errorEl.remove();
        }, 3000);
    }

    celebrateSuccess() {
        // Animation de confettis similaire au module 1
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
            }, i * 100);
        }
    }
}

// Fonction globale pour la navigation
function goToNextModule() {
    window.location.href = '/module/03';
}

function restartModule() {
    // Effacer les données sauvegardées
    localStorage.removeItem('blason-questionnaire');
    localStorage.removeItem('blason-completed');
    localStorage.removeItem('module2_completed');
    
    // Recharger la page pour recommencer
    window.location.reload();
}

// Initialiser le module au chargement de la page
let blasonQuestionnaire;
document.addEventListener('DOMContentLoaded', () => {
    blasonQuestionnaire = new BlasonQuestionnaire();
});