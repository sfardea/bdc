/**
 * Module 6 - Mes courbes de vie
 * Version corrigée avec débogage
 */

console.log('Module 6: Chargement...');

class LifeCurvesModule {
    constructor() {
        console.log('Module 6: Constructeur appelé');
        
        // Initialisation des propriétés
        this.personalPoints = [];
        this.professionalPoints = [];
        this.currentTimeline = 'personal';
        this.minDate = new Date('1950-01-01');
        this.maxDate = new Date();
        this.tooltip = null;
        this.eventCounter = 0;
        this.pendingEvents = [];
        this.currentStep = 1;
        this.currentQuestion = 1;
        this.analysisAnswers = {};
        
        // Questions pour l'analyse
        this.questions = [
            {
                id: 1,
                section: "Analyse générale",
                title: "Quels constats faites-vous de manière générale ?",
                placeholder: "Décrivez vos observations générales sur votre parcours..."
            },
            {
                id: 2,
                section: "Analyse générale", 
                title: "Et en superposant les 2 lignes personnelles et professionnelles ?",
                placeholder: "Qu'observez-vous en comparant les deux courbes..."
            }
            // Autres questions...
        ];
        
        // NE PAS appeler init() dans le constructeur
        // On attend que le DOM soit prêt
        console.log('Module 6: Constructeur terminé');
    }
    
    init() {
        console.log('Module 6: Initialisation...');
        
        try {
            // Vérifier que les éléments essentiels existent
            const canvas = document.getElementById('timelineCanvas');
            if (!canvas) {
                console.error('Module 6: Canvas introuvable!');
                return;
            }
            
            this.bindEvents();
            this.loadSavedData();
            this.loadAnalysisData();
            this.createTooltip();
            
            // Initialiser SCORM si disponible
            if (typeof initSCORM !== 'undefined') {
                initSCORM();
            }
            
            // Vérifier la première visite
            this.checkFirstVisit();
            
            console.log('Module 6: Initialisation réussie');
        } catch (error) {
            console.error('Module 6: Erreur lors de l\'initialisation:', error);
        }
    }
    
    bindEvents() {
        console.log('Module 6: Liaison des événements...');
        
        // Bouton pour ouvrir la popup
        const openPopupBtn = document.getElementById('openPopupBtnSelector');
        if (openPopupBtn) {
            openPopupBtn.addEventListener('click', () => this.openPopup());
            console.log('Module 6: Bouton popup lié');
        }
        
        // Bouton fermer popup
        const closePopupBtn = document.getElementById('closePopupBtn');
        if (closePopupBtn) {
            closePopupBtn.addEventListener('click', () => this.closePopup());
        }
        
        // Overlay popup
        const popupOverlay = document.getElementById('popupOverlay');
        if (popupOverlay) {
            popupOverlay.addEventListener('click', (e) => {
                if (e.target === popupOverlay) {
                    this.closePopup();
                }
            });
        }
        
        // Autres boutons...
        const addEventFieldBtn = document.getElementById('addEventFieldBtn');
        if (addEventFieldBtn) {
            addEventFieldBtn.addEventListener('click', () => this.addEventField());
        }
        
        const submitAllEventsBtn = document.getElementById('submitAllEventsBtn');
        if (submitAllEventsBtn) {
            submitAllEventsBtn.addEventListener('click', () => this.submitAllEvents());
        }
        
        const startActivityBtn = document.getElementById('startActivityBtn');
        if (startActivityBtn) {
            startActivityBtn.addEventListener('click', () => this.closeWelcomeModal());
        }
        
        const continueToAnalysisBtn = document.getElementById('continueToAnalysisBtn');
        if (continueToAnalysisBtn) {
            continueToAnalysisBtn.addEventListener('click', () => this.goToAnalysis());
        }
        
        console.log('Module 6: Événements liés');
    }
    
    openPopup() {
        console.log('Module 6: Ouverture popup');
        const popupOverlay = document.getElementById('popupOverlay');
        if (popupOverlay) {
            popupOverlay.classList.add('active');
            this.eventCounter = 0;
            this.pendingEvents = [];
            this.addEventField(false);
        }
    }
    
    closePopup() {
        console.log('Module 6: Fermeture popup');
        const popupOverlay = document.getElementById('popupOverlay');
        if (popupOverlay) {
            popupOverlay.classList.remove('active');
            const container = document.getElementById('eventsContainer');
            if (container) {
                container.innerHTML = '';
            }
            this.eventCounter = 0;
            this.pendingEvents = [];
        }
    }
    
    addEventField(shouldScroll = true) {
        this.eventCounter++;
        const container = document.getElementById('eventsContainer');
        if (!container) return;
        
        const eventHtml = `
            <div class="event-item" data-event-id="${this.eventCounter}">
                <h4>Événement ${this.eventCounter}</h4>
                <input type="text" class="form-input title-input" data-event="${this.eventCounter}" placeholder="Titre de l'événement" required>
                <input type="date" class="form-input date-input" data-event="${this.eventCounter}" required>
                <select class="form-select timeline-select" data-event="${this.eventCounter}">
                    <option value="personal">Personnel</option>
                    <option value="professional">Professionnel</option>
                </select>
                <input type="range" class="impact-range" data-event="${this.eventCounter}" min="-5" max="5" value="0" step="1">
                <span class="impact-value" data-event="${this.eventCounter}">0</span>
            </div>
        `;
        
        container.insertAdjacentHTML('beforeend', eventHtml);
    }
    
    submitAllEvents() {
        console.log('Module 6: Soumission des événements');
        // Logique simplifiée pour le test
        this.closePopup();
    }
    
    checkFirstVisit() {
        const visited = localStorage.getItem('module6_visited');
        if (!visited) {
            const modal = document.getElementById('welcomeModal');
            if (modal) {
                modal.style.display = 'flex';
            }
            localStorage.setItem('module6_visited', 'true');
        }
    }
    
    closeWelcomeModal() {
        const modal = document.getElementById('welcomeModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
    
    goToAnalysis() {
        console.log('Module 6: Passage à l\'analyse');
        // Logique pour passer à l'étape d'analyse
    }
    
    loadSavedData() {
        // Charger les données sauvegardées
        const saved = localStorage.getItem('module6_data');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.personalPoints = data.personalPoints || [];
                this.professionalPoints = data.professionalPoints || [];
            } catch (e) {
                console.error('Erreur lors du chargement des données:', e);
            }
        }
    }
    
    loadAnalysisData() {
        // Charger les données d'analyse
    }
    
    createTooltip() {
        if (!this.tooltip) {
            this.tooltip = document.createElement('div');
            this.tooltip.className = 'timeline-tooltip';
            document.body.appendChild(this.tooltip);
        }
    }
}

// Variable globale pour l'instance
let lifeCurvesModule;

// Attendre que le DOM soit prêt
document.addEventListener('DOMContentLoaded', () => {
    console.log('Module 6: DOM prêt');
    
    try {
        // Créer l'instance
        lifeCurvesModule = new LifeCurvesModule();
        
        // Initialiser après création
        lifeCurvesModule.init();
        
        // Rendre accessible globalement pour debug
        window.lifeCurvesModule = lifeCurvesModule;
        
        console.log('Module 6: Module prêt');
    } catch (error) {
        console.error('Module 6: Erreur fatale:', error);
    }
});

console.log('Module 6: Script chargé');