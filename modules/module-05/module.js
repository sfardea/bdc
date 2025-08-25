/**
 * Module 5 - Photo langage
 * Méthode d'entretien utilisant des photographies comme médiateur
 * 4 étapes : Modal intro + 2 étapes de sélection/formulaire
 */

class PhotoLanguageModule {
    constructor() {
        this.currentStep = 0;
        this.selectedPhotos = {
            step1: null,
            step2: null
        };
        this.formData = {
            step1: {},
            step2: {}
        };
        
        // 15 photos variées avec des thèmes universels
        this.photos = [
            { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', alt: 'Montagne et liberté' },
            { id: 2, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop', alt: 'Équipe collaborative' },
            { id: 3, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', alt: 'Route vers l\'horizon' },
            { id: 4, src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop', alt: 'Lecture et réflexion' },
            { id: 5, src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop', alt: 'Espace de travail moderne' },
            { id: 6, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop', alt: 'Portrait confiant' },
            { id: 7, src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop', alt: 'Innovation technologique' },
            { id: 8, src: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?w=400&h=300&fit=crop', alt: 'Créativité artistique' },
            { id: 9, src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=300&fit=crop', alt: 'Présentation publique' },
            { id: 10, src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop', alt: 'Voyage et découverte' },
            { id: 11, src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop', alt: 'Réunion stratégique' },
            { id: 12, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop', alt: 'Vision d\'avenir' },
            { id: 13, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', alt: 'Croissance et développement' },
            { id: 14, src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop', alt: 'Équilibre vie/travail' },
            { id: 15, src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop', alt: 'Accomplissement personnel' }
        ];
        
        this.init();
    }

    init() {
        this.showIntroModal();
        this.bindEvents();
        this.loadSavedData();
        
        // Initialiser SCORM si disponible
        if (typeof initSCORM !== 'undefined') {
            initSCORM();
        }
    }

    bindEvents() {
        // Modal d'introduction
        const startBtn = document.getElementById('startActivityBtn');
        startBtn.addEventListener('click', () => this.startActivity());

        // Boutons de navigation
        document.getElementById('backBtn1').addEventListener('click', () => this.showPhotosGrid(1));
        document.getElementById('backBtn2').addEventListener('click', () => this.showPhotosGrid(2));
        document.getElementById('continueBtn1').addEventListener('click', () => this.continueToStep2());
        document.getElementById('finishBtn').addEventListener('click', () => this.finishActivity());

        // Validation des formulaires
        this.bindFormValidation(1);
        this.bindFormValidation(2);
    }

    showIntroModal() {
        const modal = document.getElementById('introModal');
        modal.style.display = 'flex';
    }

    hideIntroModal() {
        const modal = document.getElementById('introModal');
        modal.style.display = 'none';
    }

    startActivity() {
        this.hideIntroModal();
        this.currentStep = 1;
        this.showStep(1);
        this.updateProgress();
        document.getElementById('progressContainer').style.display = 'block';
    }

    showStep(stepNumber) {
        // Masquer toutes les étapes
        document.querySelectorAll('.step-section').forEach(section => {
            section.classList.remove('active');
        });

        // Afficher l'étape demandée
        document.getElementById(`step${stepNumber}`).classList.add('active');
        
        // Générer la grille de photos pour cette étape
        this.generatePhotosGrid(stepNumber);
        
        // Masquer la vue photo si elle était affichée
        document.getElementById(`photoView${stepNumber}`).classList.remove('active');
    }

    generatePhotosGrid(stepNumber) {
        const grid = document.getElementById(`photosGrid${stepNumber}`);
        grid.innerHTML = '';

        this.photos.forEach(photo => {
            const photoCard = document.createElement('div');
            photoCard.className = 'photo-card';
            photoCard.innerHTML = `
                <img class="photo-image" src="${photo.src}" alt="${photo.alt}" loading="lazy">
            `;

            photoCard.addEventListener('click', () => this.selectPhoto(stepNumber, photo));
            grid.appendChild(photoCard);
        });
    }

    selectPhoto(stepNumber, photo) {
        this.selectedPhotos[`step${stepNumber}`] = photo;
        
        // Masquer la grille et afficher la vue photo
        document.getElementById(`photosGrid${stepNumber}`).style.display = 'none';
        document.getElementById(`photoView${stepNumber}`).classList.add('active');
        
        // Afficher la photo sélectionnée
        document.getElementById(`selectedPhoto${stepNumber}`).src = photo.src;
        
        // Réinitialiser le formulaire
        this.resetForm(stepNumber);
        
        this.saveData();
    }

    showPhotosGrid(stepNumber) {
        // Masquer la vue photo et réafficher la grille
        document.getElementById(`photoView${stepNumber}`).classList.remove('active');
        document.getElementById(`photosGrid${stepNumber}`).style.display = 'grid';
    }

    bindFormValidation(stepNumber) {
        const form = document.getElementById(`photoView${stepNumber}`);
        const inputs = form.querySelectorAll('.form-input, .form-textarea');
        const submitBtn = stepNumber === 1 ? 
            document.getElementById('continueBtn1') : 
            document.getElementById('finishBtn');

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.validateForm(stepNumber);
                this.saveFormData(stepNumber);
            });
        });

        this.validateForm(stepNumber);
    }

    validateForm(stepNumber) {
        const form = document.getElementById(`photoView${stepNumber}`);
        const requiredInputs = form.querySelectorAll('.form-input[required], .form-textarea[required]');
        const submitBtn = stepNumber === 1 ? 
            document.getElementById('continueBtn1') : 
            document.getElementById('finishBtn');

        let allValid = true;
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                allValid = false;
            }
        });

        submitBtn.disabled = !allValid;
    }

    saveFormData(stepNumber) {
        const formData = {};
        const form = document.getElementById(`photoView${stepNumber}`);
        const inputs = form.querySelectorAll('.form-input, .form-textarea');

        inputs.forEach(input => {
            formData[input.id] = input.value;
        });

        this.formData[`step${stepNumber}`] = formData;
        this.saveData();
    }

    resetForm(stepNumber) {
        const form = document.getElementById(`photoView${stepNumber}`);
        const inputs = form.querySelectorAll('.form-input, .form-textarea');
        
        inputs.forEach(input => {
            input.value = '';
        });

        this.validateForm(stepNumber);
    }

    continueToStep2() {
        this.saveFormData(1);
        this.currentStep = 2;
        this.showStep(2);
        this.updateProgress();
    }

    updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        const progress = (this.currentStep / 2) * 100;
        progressFill.style.width = `${progress}%`;
        
        if (this.currentStep === 1) {
            progressText.textContent = 'Étape 1 sur 2 - Moi aujourd\'hui';
        } else if (this.currentStep === 2) {
            progressText.textContent = 'Étape 2 sur 2 - Ma projection future';
        } else {
            progressText.textContent = 'Activité terminée !';
        }
    }

    finishActivity() {
        this.saveFormData(2);
        
        // SCORM - Marquer comme complété
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module5_selected_photos', JSON.stringify(this.selectedPhotos));
            setSCORMData('module5_form_data', JSON.stringify(this.formData));
            setSCORMData('module5_completed', 'true');
            setSCORMComplete();
        }

        this.showSuccessMessage();
    }

    showSuccessMessage() {
        const container = document.querySelector('.photolangage-container');
        
        // Masquer tous les steps
        document.querySelectorAll('.step-section').forEach(section => {
            section.style.display = 'none';
        });

        // Mettre à jour la progression à 100%
        document.getElementById('progressFill').style.width = '100%';
        document.getElementById('progressText').textContent = 'Activité terminée !';
        
        const successHtml = `
            <div class="success-message" style="
                background: linear-gradient(135deg, var(--success), var(--secondary-dark));
                color: var(--white);
                padding: 3rem 2rem;
                border-radius: var(--radius-2xl);
                text-align: center;
                animation: successAnimation 0.8s ease-out;
                margin-top: 2rem;
                box-shadow: var(--shadow-xl);
            ">
                <div style="font-size: 4rem; margin-bottom: 1.5rem;">📸</div>
                <h3 style="color: var(--white); font-size: 2rem; margin-bottom: 1.5rem; font-weight: 700;">
                    Photo-langage complété !
                </h3>
                <p style="opacity: 0.95; margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.6;">
                    Félicitations ! Vous avez terminé l'activité de photo-langage. 
                    Vos choix d'images et vos réflexions révèlent des aspects importants 
                    de votre personnalité et de vos aspirations professionnelles.
                </p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0; max-width: 600px; margin-left: auto; margin-right: auto;">
                    <div style="background: rgba(255, 255, 255, 0.2); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
                        <h4 style="color: var(--white); margin-bottom: 0.5rem; font-weight: 600;">🌟 Moi aujourd'hui</h4>
                        <p style="opacity: 0.9; font-size: 0.9rem;">Photo sélectionnée et analysée</p>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.2); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
                        <h4 style="color: var(--white); margin-bottom: 0.5rem; font-weight: 600;">🚀 Ma projection future</h4>
                        <p style="opacity: 0.9; font-size: 0.9rem;">Vision d'avenir exprimée</p>
                    </div>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.15); padding: 1.5rem; border-radius: var(--radius-lg); margin: 2rem 0; border: 1px solid rgba(255, 255, 255, 0.2);">
                    <p style="font-size: 1rem; opacity: 0.9; margin: 0;">
                        <strong>📝 Prochaine étape :</strong> Ces insights alimenteront votre réflexion lors de l'entretien 
                        avec votre consultant pour approfondir votre connaissance de soi.
                    </p>
                </div>
                
                <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 2rem;">
                    Vos données ont été sauvegardées automatiquement
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

        // Redirection après 6 secondes
        setTimeout(() => {
            if (typeof parent !== 'undefined' && parent.postMessage) {
                parent.postMessage({
                    type: 'module-completed',
                    module: 'module-05',
                    data: {
                        selectedPhotos: this.selectedPhotos,
                        formData: this.formData,
                        completed: true,
                        completionDate: new Date().toISOString()
                    }
                }, '*');
            }
        }, 6000);
    }

    saveData() {
        const data = {
            currentStep: this.currentStep,
            selectedPhotos: this.selectedPhotos,
            formData: this.formData,
            timestamp: new Date().toISOString()
        };

        // LocalStorage pour développement
        localStorage.setItem('module5_data', JSON.stringify(data));

        // SCORM pour production
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module5_selected_photos', JSON.stringify(this.selectedPhotos));
            setSCORMData('module5_form_data', JSON.stringify(this.formData));
            setSCORMData('module5_current_step', this.currentStep.toString());
        }
    }

    loadSavedData() {
        // Essayer de charger depuis SCORM d'abord
        let savedData = null;
        
        if (typeof getSCORMData !== 'undefined') {
            const scormPhotos = getSCORMData('module5_selected_photos');
            const scormFormData = getSCORMData('module5_form_data');
            const scormStep = getSCORMData('module5_current_step');
            
            if (scormPhotos && scormFormData) {
                savedData = {
                    selectedPhotos: JSON.parse(scormPhotos),
                    formData: JSON.parse(scormFormData),
                    currentStep: parseInt(scormStep) || 0
                };
            }
        }

        // Fallback sur localStorage
        if (!savedData) {
            const localData = localStorage.getItem('module5_data');
            if (localData) {
                savedData = JSON.parse(localData);
            }
        }

        if (savedData) {
            this.selectedPhotos = savedData.selectedPhotos || { step1: null, step2: null };
            this.formData = savedData.formData || { step1: {}, step2: {} };
            this.currentStep = savedData.currentStep || 0;

            // Restaurer l'état si l'activité était en cours
            if (this.currentStep > 0) {
                this.hideIntroModal();
                document.getElementById('progressContainer').style.display = 'block';
                this.restoreFormData();
                this.updateProgress();
            }
        }
    }

    restoreFormData() {
        // Restaurer les données du formulaire si elles existent
        [1, 2].forEach(stepNumber => {
            const stepData = this.formData[`step${stepNumber}`];
            if (stepData && Object.keys(stepData).length > 0) {
                Object.keys(stepData).forEach(fieldId => {
                    const field = document.getElementById(fieldId);
                    if (field) {
                        field.value = stepData[fieldId];
                    }
                });
                this.validateForm(stepNumber);
            }
        });
    }
}

// Initialiser le module au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    new PhotoLanguageModule();
});