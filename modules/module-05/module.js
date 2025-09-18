/**
 * Module 5 - Photo langage
 * Méthode d'entretien utilisant des photographies comme médiateur
 * 4 étapes : Modal intro + 2 étapes de sélection/formulaire
 */

class PhotoLanguageModule {
    constructor() {
        this.currentScreen = 0; // 0=intro, 1=grille1, 2=form1, 3=grille2, 4=form2
        this.selectedPhotos = {
            step1: null,
            step2: null
        };
        this.formData = {
            step1: {},
            step2: {}
        };
        this.visitedScreens = new Set(); // Tracker les écrans visités
        
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
        document.getElementById('backBtn1').addEventListener('click', () => this.goBackFromScreen2());
        document.getElementById('backBtn2').addEventListener('click', () => this.goBackFromScreen4());
        document.getElementById('backToStep1Btn').addEventListener('click', () => this.goBackToStep1());
        document.getElementById('nextToForm1Btn').addEventListener('click', () => this.goToScreen2());
        document.getElementById('nextToForm2Btn').addEventListener('click', () => this.goToScreen4());
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
        this.currentScreen = 1; // Écran 1 : Grille photos étape 1
        this.showScreen1();
        this.updateProgress();
        document.getElementById('progressContainer').style.display = 'block';
    }

    showScreen1() {
        // Écran 1 : Grille de photos étape 1
        document.querySelectorAll('.step-section').forEach(s => s.classList.remove('active'));
        document.getElementById('step1').classList.add('active');
        this.generatePhotosGrid(1);
        document.getElementById('photosGrid1').style.display = 'grid';
        document.getElementById('photoView1').classList.remove('active');
    }

    showScreen2() {
        // Écran 2 : Formulaire étape 1
        document.querySelectorAll('.step-section').forEach(s => s.classList.remove('active'));
        document.getElementById('step1').classList.add('active');
        document.getElementById('photosGrid1').style.display = 'none';
        document.getElementById('photoView1').classList.add('active');
    }

    showScreen3() {
        // Écran 3 : Grille de photos étape 2
        document.querySelectorAll('.step-section').forEach(s => s.classList.remove('active'));
        document.getElementById('step2').classList.add('active');
        this.generatePhotosGrid(2);
        document.getElementById('photosGrid2').style.display = 'grid';
        document.getElementById('photoView2').classList.remove('active');
        // Afficher le bouton de retour à l'étape 1
        document.getElementById('gridNavigation2').style.display = 'block';
    }

    showScreen4() {
        // Écran 4 : Formulaire étape 2
        document.getElementById('photosGrid2').style.display = 'none';
        document.getElementById('photoView2').classList.add('active');
        // Masquer le bouton de navigation de la grille
        document.getElementById('gridNavigation2').style.display = 'none';
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
        
        // Sauvegarde automatique immédiate de la sélection
        this.saveData();
        this.showAutoSaveIndicator();
        
        // Passer à l'écran formulaire correspondant
        if (stepNumber === 1) {
            this.currentScreen = 2; // Écran 2 : Formulaire étape 1
            this.showScreen2();
        } else {
            this.currentScreen = 4; // Écran 4 : Formulaire étape 2
            this.showScreen4();
        }
        
        // Afficher la photo sélectionnée
        document.getElementById(`selectedPhoto${stepNumber}`).src = photo.src;
        
        // Ne pas réinitialiser le formulaire - garder les données existantes
        // this.resetForm(stepNumber); // SUPPRIMÉ pour conserver les données
    }

    showPhotosGrid(stepNumber) {
        // Retour à la grille de photos
        if (stepNumber === 1) {
            this.currentScreen = 1; // Écran 1 : Grille étape 1
            this.showScreen1();
        } else {
            this.currentScreen = 3; // Écran 3 : Grille étape 2
            this.showScreen3();
        }
    }

    bindFormValidation(stepNumber) {
        const form = document.getElementById(`photoView${stepNumber}`);
        const inputs = form.querySelectorAll('.form-input, .form-textarea');
        const submitBtn = stepNumber === 1 ? 
            document.getElementById('continueBtn1') : 
            document.getElementById('finishBtn');

        inputs.forEach(input => {
            // Sauvegarde automatique à chaque frappe
            input.addEventListener('input', () => {
                this.autoSaveField(input, stepNumber);
                this.validateForm(stepNumber);
            });
            
            // Sauvegarde aussi au blur (perte de focus)
            input.addEventListener('blur', () => {
                this.autoSaveField(input, stepNumber);
            });
        });

        this.validateForm(stepNumber);
    }

    autoSaveField(input, stepNumber) {
        // Sauvegarder immédiatement le champ modifié
        if (!this.formData[`step${stepNumber}`]) {
            this.formData[`step${stepNumber}`] = {};
        }
        
        this.formData[`step${stepNumber}`][input.id] = input.value;
        
        // Sauvegarder en localStorage et SCORM immédiatement
        this.saveData();
        
        // Feedback visuel discret
        this.showAutoSaveIndicator();
    }

    showAutoSaveIndicator() {
        // Indicateur discret de sauvegarde automatique
        let indicator = document.getElementById('autoSaveIndicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'autoSaveIndicator';
            indicator.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                background: var(--success);
                color: var(--white);
                padding: 0.3rem 0.8rem;
                border-radius: var(--radius);
                font-size: 0.8rem;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            indicator.textContent = '💾 Sauvegardé';
            document.body.appendChild(indicator);
        }
        
        indicator.style.opacity = '1';
        
        // Masquer après 1 seconde
        setTimeout(() => {
            indicator.style.opacity = '0';
        }, 1000);
    }

    updateNavigationButtons() {
        // Afficher les boutons "Suivant" si les écrans ont été visités
        
        // Bouton "Suivant" sur grille étape 1 (si form1 visité)
        if (this.visitedScreens.has(2) && this.selectedPhotos.step1) {
            document.getElementById('gridNavigation1').style.display = 'block';
        } else {
            document.getElementById('gridNavigation1').style.display = 'none';
        }
        
        // Bouton "Suivant" sur grille étape 2 (si form2 visité)
        const nextBtn2 = document.getElementById('nextToForm2Btn');
        if (this.visitedScreens.has(4) && this.selectedPhotos.step2) {
            nextBtn2.style.display = 'inline-block';
        } else {
            nextBtn2.style.display = 'none';
        }
    }

    goToScreen2() {
        // Aller directement au formulaire étape 1
        this.showScreen2();
    }

    goToScreen4() {
        // Aller directement au formulaire étape 2
        this.showScreen4();
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
        this.currentScreen = 3; // Écran 3 : Grille photos étape 2
        this.showScreen3();
        this.updateProgress();
        this.saveData();
    }

    goBackFromScreen2() {
        // Écran 2 → Écran 1 : Du formulaire étape 1 vers grille étape 1
        this.currentScreen = 1;
        this.showScreen1();
        this.updateProgress();
        this.saveData();
    }

    goBackFromScreen4() {
        // Écran 4 → Écran 3 : Du formulaire étape 2 vers grille étape 2
        this.currentScreen = 3;
        this.showScreen3();
        this.updateProgress();
        this.saveData();
    }

    goBackToStep1() {
        // Navigation depuis l'écran 3 (grille étape 2) vers écran 2 (formulaire étape 1)
        this.currentScreen = 2; // Écran 2 : Formulaire étape 1
        this.showScreen2();
        this.updateProgress();
        this.saveData();
    }

    updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        // Calculer la progression selon l'écran actuel (4 écrans total)
        const progress = (this.currentScreen / 4) * 100;
        progressFill.style.width = `${progress}%`;
        
        switch(this.currentScreen) {
            case 1:
                progressText.textContent = 'Étape 1 sur 2 - Sélection photo "Moi aujourd\'hui"';
                break;
            case 2:
                progressText.textContent = 'Étape 1 sur 2 - Analyse "Moi aujourd\'hui"';
                break;
            case 3:
                progressText.textContent = 'Étape 2 sur 2 - Sélection photo "Ma projection future"';
                break;
            case 4:
                progressText.textContent = 'Étape 2 sur 2 - Analyse "Ma projection future"';
                break;
            default:
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
            currentScreen: this.currentScreen,
            selectedPhotos: this.selectedPhotos,
            formData: this.formData,
            visitedScreens: Array.from(this.visitedScreens),
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
            this.currentScreen = savedData.currentScreen || 0;
            this.visitedScreens = new Set(savedData.visitedScreens || []);

            // Restaurer l'état si l'activité était en cours
            if (this.currentScreen > 0) {
                this.hideIntroModal();
                document.getElementById('progressContainer').style.display = 'block';
                
                // Restaurer l'écran exact où l'utilisateur était
                switch(this.currentScreen) {
                    case 1: this.showScreen1(); break;
                    case 2: this.showScreen2(); break;
                    case 3: this.showScreen3(); break;
                    case 4: this.showScreen4(); break;
                }
                
                // Restaurer les données du formulaire
                this.restoreFormData();
                this.updateProgress();
            }
        }
    }

    showStep(stepNumber) {
        // Masquer toutes les étapes
        document.querySelectorAll('.step-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Afficher l'étape demandée
        const stepElement = document.getElementById(`step${stepNumber}`);
        if (stepElement) {
            stepElement.classList.add('active');
        }
        
        // Générer la grille de photos pour cette étape
        this.generatePhotosGrid(stepNumber);
        
        // Restaurer la photo sélectionnée si elle existe
        const selectedPhoto = this.selectedPhotos[`step${stepNumber}`];
        if (selectedPhoto) {
            this.selectPhoto(stepNumber, selectedPhoto);
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