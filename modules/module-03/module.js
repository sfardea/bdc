/**
 * Module 3 - Le Bilan de Compétences
 * Slideshow interactif présentant les étapes du bilan
 */

class BilanSlideshow {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 7;
        this.checkboxConfirmed = false;
        this.init();
    }

    init() {
        // S'assurer que la première slide est active au démarrage
        this.goToSlide(1);
        this.updateNavigation();
        this.bindEvents();
        this.updateProgressDots();
        
        // Initialiser SCORM si disponible
        if (typeof initSCORM !== 'undefined') {
            initSCORM();
        }
        
        // Charger l'état sauvegardé
        this.loadSavedState();
    }

    bindEvents() {
        // Navigation avec les boutons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const finishBtn = document.getElementById('finishBtn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.changeSlide(-1));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.changeSlide(1));
        }
        
        if (finishBtn) {
            finishBtn.addEventListener('click', () => this.finishActivity());
        }
        
        // Navigation avec les dots
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const targetSlide = index + 1;
                if (targetSlide < this.currentSlide || this.canNavigateForward(targetSlide)) {
                    this.goToSlide(targetSlide);
                }
            });
        });
        
        // Checkbox de confirmation
        const checkbox = document.getElementById('confirmCheckbox');
        if (checkbox) {
            checkbox.addEventListener('change', (e) => {
                this.checkboxConfirmed = e.target.checked;
                this.updateNavigation();
                if (e.target.checked) {
                    this.saveState();
                }
            });
        }
        
        // Navigation au clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && this.currentSlide > 1) {
                this.changeSlide(-1);
            } else if (e.key === 'ArrowRight' && this.canNavigateForward(this.currentSlide + 1)) {
                this.changeSlide(1);
            }
        });
    }

    changeSlide(direction) {
        const newSlide = this.currentSlide + direction;
        
        if (newSlide < 1 || newSlide > this.totalSlides) {
            return;
        }
        
        // Vérifier si on peut naviguer vers l'avant
        if (direction > 0 && !this.canNavigateForward(newSlide)) {
            this.showCheckboxReminder();
            return;
        }
        
        this.goToSlide(newSlide);
    }

    goToSlide(slideNumber) {
        // Masquer toutes les slides
        document.querySelectorAll('.slide').forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Afficher la slide demandée
        const targetSlide = document.getElementById(`slide${slideNumber}`);
        if (targetSlide) {
            targetSlide.classList.add('active');
            
            // Animation d'entrée
            targetSlide.style.animation = 'none';
            setTimeout(() => {
                targetSlide.style.animation = 'slideIn 0.6s ease-out';
            }, 10);
        }
        
        this.currentSlide = slideNumber;
        this.updateNavigation();
        this.updateProgressDots();
        this.saveState();
    }

    canNavigateForward(targetSlide) {
        // On ne peut aller à la slide 7 que si la checkbox est cochée
        if (targetSlide === 7 && !this.checkboxConfirmed) {
            return false;
        }
        return true;
    }

    showCheckboxReminder() {
        const checkbox = document.getElementById('confirmCheckbox');
        const checkboxContainer = checkbox?.closest('.checkbox-container');
        
        if (checkboxContainer) {
            checkboxContainer.style.animation = 'shake 0.5s';
            checkboxContainer.style.background = 'rgba(239, 68, 68, 0.1)';
            
            setTimeout(() => {
                checkboxContainer.style.animation = '';
                checkboxContainer.style.background = 'var(--primary-bg)';
            }, 500);
        }
        
        // Animation de secousse
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }
        `;
        document.head.appendChild(style);
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const finishBtn = document.getElementById('finishBtn');
        
        // Bouton Précédent
        if (prevBtn) {
            prevBtn.disabled = this.currentSlide === 1;
            
            // Sur la slide 7, masquer le bouton précédent
            if (this.currentSlide === 7) {
                prevBtn.classList.add('hidden');
            } else {
                prevBtn.classList.remove('hidden');
            }
        }
        
        // Boutons Suivant et Terminer
        if (this.currentSlide === 6) {
            // Sur la slide 6, masquer Suivant et afficher Terminer
            if (nextBtn) nextBtn.classList.add('hidden');
            if (finishBtn) {
                finishBtn.classList.remove('hidden');
                finishBtn.disabled = !this.checkboxConfirmed;
            }
        } else if (this.currentSlide === 7) {
            // Sur la slide 7, masquer tous les boutons
            if (nextBtn) nextBtn.classList.add('hidden');
            if (finishBtn) finishBtn.classList.add('hidden');
        } else {
            // Sur les autres slides, afficher Suivant et masquer Terminer
            if (nextBtn) {
                nextBtn.classList.remove('hidden');
                nextBtn.disabled = false;
            }
            if (finishBtn) finishBtn.classList.add('hidden');
        }
    }

    updateProgressDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            // Les dots sont indexés de 0 à 6, les slides de 1 à 7
            if (index + 1 === this.currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    finishActivity() {
        if (!this.checkboxConfirmed) {
            this.showCheckboxReminder();
            return;
        }
        
        // Aller à la slide de confirmation
        this.goToSlide(7);
        
        // Sauvegarder la complétion
        localStorage.setItem('module3_completed', 'true');
        localStorage.setItem('module3_completion_date', new Date().toISOString());
        
        // SCORM
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module3_completed', 'true');
            setSCORMData('module3_checkbox_confirmed', 'true');
            setSCORMComplete();
        }
        
        // Animation de célébration
        this.celebrateCompletion();
        
        // Redirection automatique après 5 secondes
        setTimeout(() => {
            if (typeof parent !== 'undefined' && parent.postMessage) {
                parent.postMessage({
                    type: 'module-completed',
                    module: 'module-03',
                    data: {
                        completed: true,
                        checkboxConfirmed: true,
                        completionDate: new Date().toISOString()
                    }
                }, '*');
            }
        }, 5000);
    }

    celebrateCompletion() {
        // Créer des confettis
        const colors = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
        
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
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                `;
                document.body.appendChild(confetti);
                
                let posY = -10;
                let posX = parseFloat(confetti.style.left);
                let rotation = 0;
                let opacity = 1;
                let velocityY = Math.random() * 3 + 2;
                let velocityX = (Math.random() - 0.5) * 2;
                
                const fall = setInterval(() => {
                    posY += velocityY;
                    posX += velocityX;
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
            }, i * 30);
        }
    }

    saveState() {
        const state = {
            currentSlide: this.currentSlide,
            checkboxConfirmed: this.checkboxConfirmed,
            lastVisited: new Date().toISOString()
        };
        
        localStorage.setItem('module3_state', JSON.stringify(state));
    }

    loadSavedState() {
        const savedState = localStorage.getItem('module3_state');
        
        if (savedState) {
            try {
                const state = JSON.parse(savedState);
                
                // Restaurer l'état de la checkbox
                if (state.checkboxConfirmed) {
                    const checkbox = document.getElementById('confirmCheckbox');
                    if (checkbox) {
                        checkbox.checked = true;
                        this.checkboxConfirmed = true;
                    }
                }
                
                // Restaurer la slide courante (sauf si on était sur la slide 7)
                if (state.currentSlide && state.currentSlide < 7) {
                    this.goToSlide(state.currentSlide);
                }
            } catch (e) {
                console.error('Erreur lors du chargement de l\'état sauvegardé:', e);
            }
        }
    }
}

// Fonction globale pour la navigation vers le module suivant
function goToNextModule() {
    window.location.href = '/module/04';
}

// Fonctions globales pour la navigation (utilisées par les onclick inline)
let slideshowInstance;

function changeSlide(direction) {
    if (slideshowInstance) {
        slideshowInstance.changeSlide(direction);
    }
}

function finishActivity() {
    if (slideshowInstance) {
        slideshowInstance.finishActivity();
    }
}

// Initialiser le slideshow au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    slideshowInstance = new BilanSlideshow();
});