/**
 * Module 6 - Mes courbes de vie
 * Outil graphique interactif avec deux lignes de temps (personnelle/professionnelle)
 * Points avec date, titre, impact émotionnel (-5 à +5)
 */

class LifeCurvesModule {
    constructor() {
        console.log('LifeCurvesModule: Début du constructeur');
        this.personalPoints = [];
        this.professionalPoints = [];
        this.currentTimeline = 'personal';
        this.minDate = new Date('1950-01-01');
        this.maxDate = new Date();
        this.tooltip = null;
        
        // Gestion des événements multiples
        this.eventCounter = 0;
        this.pendingEvents = [];
        
        // Gestion des étapes
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
            },
            {
                id: 3,
                section: "Analyse générale",
                title: "Les transitions ont-elles été choisies ou subies ?",
                placeholder: "Réfléchissez au contrôle que vous aviez sur ces changements..."
            },
            {
                id: 4,
                section: "Analyse générale",
                title: "Y a-t-il une relation avec l'âge ?",
                placeholder: "Comment votre âge a-t-il influencé ces événements..."
            },
            {
                id: 5,
                section: "Analyse générale",
                title: "Quelles sont les limites qui ont freiné ou nui aux transitions ?",
                placeholder: "Identifiez les obstacles rencontrés..."
            },
            {
                id: 6,
                section: "Analyse générale",
                title: "Quelles sont les forces et les ressources qui ont aidé aux transitions ?",
                placeholder: "Décrivez ce qui vous a aidé à surmonter les défis..."
            },
            {
                id: 7,
                section: "Projection sur l'avenir",
                title: "De quoi je prends conscience ?",
                placeholder: "Quelles révélations émergent de cette analyse..."
            },
            {
                id: 8,
                section: "Projection sur l'avenir",
                title: "Qu'est-ce qui est important pour moi ?",
                subtitle: "(en termes d'environnement, de modes de fonctionnement, de valeurs)",
                placeholder: "Définissez vos priorités et valeurs essentielles..."
            },
            {
                id: 9,
                section: "Projection sur l'avenir",
                title: "De quoi j'ai besoin pour me sentir bien ?",
                placeholder: "Identifiez vos besoins fondamentaux..."
            },
            {
                id: 10,
                section: "Projection sur l'avenir",
                title: "Qu'est-ce qui est primordial ?",
                placeholder: "Qu'est-ce qui ne peut pas être négocié dans votre vie..."
            },
            {
                id: 11,
                section: "Projection sur l'avenir",
                title: "Suis-je fier de ce parcours ?",
                placeholder: "Évaluez votre satisfaction vis-à-vis de votre parcours..."
            },
            {
                id: 12,
                section: "Projection sur l'avenir",
                title: "Pourquoi ?",
                subtitle: "(suite de la question précédente)",
                placeholder: "Expliquez les raisons de votre réponse précédente..."
            }
        ];
        
        console.log('LifeCurvesModule: Appel de init()');
        this.init();
    }

    init() {
        console.log('LifeCurvesModule: Dans init()');
        try {
            this.bindEvents();
            this.loadSavedData();
            this.loadAnalysisData();
            this.createTooltip();
        } catch (error) {
            console.error('LifeCurvesModule: Erreur dans init()', error);
            throw error;
        }
        
        // Initialiser SCORM si disponible
        if (typeof initSCORM !== 'undefined') {
            initSCORM();
        }
        
        // Vérifier si c'est la première visite
        this.checkFirstVisit();
    }

    bindEvents() {
        console.log('LifeCurvesModule: Dans bindEvents()');
        // Plus de sélecteurs - affichage de toutes les courbes

        // Gestion de la popup
        const openPopupBtnSelector = document.getElementById('openPopupBtnSelector');
        const closePopupBtn = document.getElementById('closePopupBtn');
        const popupOverlay = document.getElementById('popupOverlay');
        
        console.log('LifeCurvesModule: Éléments trouvés:', {
            openPopupBtnSelector: !!openPopupBtnSelector,
            closePopupBtn: !!closePopupBtn,
            popupOverlay: !!popupOverlay
        });

        if (openPopupBtnSelector) {
            openPopupBtnSelector.addEventListener('click', () => this.openPopup());
        }
        if (closePopupBtn) {
            closePopupBtn.addEventListener('click', () => this.closePopup());
        }
        if (popupOverlay) {
            popupOverlay.addEventListener('click', (e) => {
                if (e.target === popupOverlay) {
                    this.closePopup();
                }
            });
        }

        // Gestion des événements multiples
        const addEventFieldBtn = document.getElementById('addEventFieldBtn');
        const submitAllEventsBtn = document.getElementById('submitAllEventsBtn');
        
        if (addEventFieldBtn) {
            addEventFieldBtn.addEventListener('click', () => this.addEventField());
        }
        if (submitAllEventsBtn) {
            submitAllEventsBtn.addEventListener('click', () => this.submitAllEvents());
        }
        
        // Modal d'accueil
        const startActivityBtn = document.getElementById('startActivityBtn');
        if (startActivityBtn) {
            startActivityBtn.addEventListener('click', () => this.closeWelcomeModal());
        }



        // Boutons de navigation entre étapes
        const continueToAnalysisBtn = document.getElementById('continueToAnalysisBtn');
        if (continueToAnalysisBtn) {
            continueToAnalysisBtn.addEventListener('click', () => this.goToAnalysis());
        }

        const backToCanvasBtn = document.getElementById('backToCanvasBtn');
        if (backToCanvasBtn) {
            backToCanvasBtn.addEventListener('click', () => this.goToCanvas());
        }

        const finishAnalysisBtn = document.getElementById('finishAnalysisBtn');
        if (finishAnalysisBtn) {
            finishAnalysisBtn.addEventListener('click', () => this.goToSummary());
        }

        const backToAnalysisBtn = document.getElementById('backToAnalysisBtn');
        if (backToAnalysisBtn) {
            backToAnalysisBtn.addEventListener('click', () => this.goToAnalysis());
        }

        const validateBtn = document.getElementById('validateBtn');
        if (validateBtn) {
            validateBtn.addEventListener('click', () => this.validateAndSubmit());
        }

        // Boutons de navigation des questions
        const prevQuestionBtn = document.getElementById('prevQuestionBtn');
        if (prevQuestionBtn) {
            prevQuestionBtn.addEventListener('click', () => this.previousQuestion());
        }

        const nextQuestionBtn = document.getElementById('nextQuestionBtn');
        if (nextQuestionBtn) {
            nextQuestionBtn.addEventListener('click', () => this.nextQuestion());
        }

        // Gestion des entrées clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && e.target.closest('.popup-content')) {
                this.closePopup();
            }
        });
    }

    // Méthode switchTimeline supprimée - affichage permanent des deux courbes

    // Méthode addPoint remplacée par submitEvent

    openPopup() {
        const popupOverlay = document.getElementById('popupOverlay');
        if (!popupOverlay) {
            console.error('Popup overlay not found');
            return;
        }
        popupOverlay.classList.add('active');
        
        // Réinitialiser les événements
        this.eventCounter = 0;
        this.pendingEvents = [];
        
        // Créer le premier événement
        this.addEventField(false);
    }

    closePopup() {
        const popupOverlay = document.getElementById('popupOverlay');
        if (!popupOverlay) return;
        
        popupOverlay.classList.remove('active');
        
        // Nettoyer les événements en cours
        const container = document.getElementById('eventsContainer');
        if (container) {
            container.innerHTML = '';
        }
        this.eventCounter = 0;
        this.pendingEvents = [];
    }

    addEventField(shouldScroll = true) {
        this.eventCounter++;
        const container = document.getElementById('eventsContainer');
        
        const eventHtml = `
            <div class="event-item" data-event-id="${this.eventCounter}" style="padding: 0 0 1.5rem 0; border-bottom: 1px solid var(--gray-200); margin-bottom: 1.5rem; width: 100%; box-sizing: border-box;">
                <h4 style="color: var(--gray-700); font-size: 1.1rem; margin-bottom: 1.5rem; padding-top: 0.5rem;">
                    Événement ${this.eventCounter}
                </h4>
                
                <!-- Ligne 1: Titre seul sur toute la largeur -->
                <div class="form-group" style="margin-bottom: 1.25rem;">
                    <label style="font-weight: 600; color: var(--gray-800); margin-bottom: 0.5rem; display: block;">Titre de l'événement</label>
                    <input type="text" 
                           class="form-input title-input" 
                           data-event="${this.eventCounter}"
                           placeholder="Ex: Naissance, Premier emploi, Mariage..."
                           style="width: 100%;"
                           required>
                </div>

                <!-- Ligne 2: Date et Timeline côte à côte -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem; padding: 0; width: 100%; box-sizing: border-box;">
                    <div style="margin: 0; padding: 0;">
                        <label style="font-weight: 600; color: var(--gray-800); margin-bottom: 0.5rem; display: block;">Date de l'événement</label>
                        <input type="date" 
                               class="form-input date-input" 
                               data-event="${this.eventCounter}"
                               min="1900-01-01"
                               max="${this.maxDate.toISOString().split('T')[0]}"
                               style="width: 100%; box-sizing: border-box;"
                               required>
                    </div>
                    
                    <div style="margin: 0; padding: 0;">
                        <label style="font-weight: 600; color: var(--gray-800); margin-bottom: 0.5rem; display: block;">Timeline</label>
                        <select class="form-select timeline-select" data-event="${this.eventCounter}" style="width: 100%; box-sizing: border-box;">
                            <option value="personal">Personnel</option>
                            <option value="professional">Professionnel</option>
                        </select>
                    </div>
                </div>

                <!-- Ligne 3: Impact émotionnel sur toute la largeur -->
                <div style="margin-bottom: 1.25rem; padding: 0; width: 100%; box-sizing: border-box;">
                    <label style="font-weight: 600; color: var(--gray-800); margin-bottom: 0.75rem; display: block;">Impact émotionnel</label>
                    <div style="background: var(--gray-50); padding: 1rem; border-radius: var(--radius); border: 1px solid var(--gray-200); width: 100%; box-sizing: border-box;">
                        <input type="range" 
                               class="impact-range" 
                               data-event="${this.eventCounter}"
                               min="-5" 
                               max="5" 
                               value="0" 
                               step="1"
                               style="width: 100%; margin-bottom: 0.5rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem;">
                            <span style="color: var(--error); font-weight: 600;">-5 (Négatif)</span>
                            <span class="impact-value" data-event="${this.eventCounter}" style="font-size: 1.25rem; font-weight: 700; padding: 0.25rem 0.75rem; background: var(--white); border-radius: var(--radius); border: 2px solid var(--primary);">0</span>
                            <span style="color: var(--success); font-weight: 600;">+5 (Positif)</span>
                        </div>
                    </div>
                </div>

                <!-- Ligne 4: Description - Forcée à la même largeur que Impact -->
                <div style="margin: 0 0 1rem 0; padding: 0; width: 100%; box-sizing: border-box;">
                    <label style="font-weight: 600; color: var(--gray-800); margin-bottom: 0.5rem; display: block;">Description (optionnel)</label>
                    <div style="position: relative; width: 100%; box-sizing: border-box;">
                        <textarea class="form-textarea description-input" 
                                  data-event="${this.eventCounter}"
                                  rows="4" 
                                  placeholder="Décrivez brièvement cet événement..."
                                  style="width: 100% !important; 
                                         box-sizing: border-box !important; 
                                         height: 85px !important; 
                                         max-height: 85px !important; 
                                         min-height: 85px !important; 
                                         resize: none !important;
                                         font-size: 0.95rem !important;
                                         line-height: 1.4 !important;
                                         overflow-y: auto !important;
                                         margin: 0 !important;
                                         padding: 0.75rem !important;
                                         border: 2px solid var(--gray-200) !important;
                                         border-radius: var(--radius) !important;
                                         display: block !important;
                                         background: var(--white) !important;
                                         position: relative !important;
                                         left: 0 !important;
                                         right: 0 !important;"></textarea>
                    </div>
                </div>

                ${this.eventCounter > 1 ? `
                <button class="remove-event-btn" onclick="lifeCurvesModule.removeEventField(${this.eventCounter})" style="margin-top: 1rem;">
                    Supprimer cet événement
                </button>
                ` : ''}
            </div>
        `;

        // Ajouter à la fin (en bas) du conteneur
        container.insertAdjacentHTML('beforeend', eventHtml);

        // Lier les événements pour ce nouveau champ
        this.bindEventFieldListeners(this.eventCounter);

        // Scroll pour montrer le nouveau champ si demandé et si ce n'est pas le premier
        if (shouldScroll && this.eventCounter > 1) {
            const formContainer = container.parentElement;
            const newEvent = container.lastElementChild;
            
            // Attendre que l'élément soit rendu
            setTimeout(() => {
                // Trouver le titre h4 de l'événement
                const eventTitle = newEvent.querySelector('h4');
                if (eventTitle) {
                    // Calculer la position pour aligner le titre en haut de la zone visible
                    // avec un petit padding de 10px au-dessus
                    const scrollPosition = eventTitle.offsetTop - 10;
                    formContainer.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }

    bindEventFieldListeners(eventId) {
        const rangeInput = document.querySelector(`.impact-range[data-event="${eventId}"]`);
        const valueDisplay = document.querySelector(`.impact-value[data-event="${eventId}"]`);
        const descriptionTextarea = document.querySelector(`.description-input[data-event="${eventId}"]`);

        if (rangeInput && valueDisplay) {
            rangeInput.addEventListener('input', (e) => {
                const value = parseInt(e.target.value);
                valueDisplay.textContent = value > 0 ? `+${value}` : value.toString();
                
                // Couleurs pour le texte et la bordure selon la valeur
                if (value > 0) {
                    valueDisplay.style.color = '#10b981';  // Vert
                    valueDisplay.style.borderColor = '#10b981';
                    valueDisplay.style.background = 'rgba(16, 185, 129, 0.1)';
                } else if (value < 0) {
                    valueDisplay.style.color = '#ef4444';  // Rouge
                    valueDisplay.style.borderColor = '#ef4444';
                    valueDisplay.style.background = 'rgba(239, 68, 68, 0.1)';
                } else {
                    valueDisplay.style.color = '#6b7280';  // Gris
                    valueDisplay.style.borderColor = '#6366f1';  // Primary
                    valueDisplay.style.background = 'var(--white)';
                }
            });
        }

        // Pas d'auto-expansion pour garder le textarea à 3 lignes fixes
        // Le CSS gère déjà la hauteur fixe avec scrollbar si nécessaire
    }

    removeEventField(eventId) {
        const eventElement = document.querySelector(`.event-item[data-event-id="${eventId}"]`);
        if (eventElement) {
            eventElement.remove();
        }
    }

    submitAllEvents() {
        const container = document.getElementById('eventsContainer');
        const eventItems = container.querySelectorAll('.event-item');
        
        let hasErrors = false;
        const newEvents = [];

        eventItems.forEach(item => {
            const eventId = item.dataset.eventId;
            const timeline = document.querySelector(`.timeline-select[data-event="${eventId}"]`).value;
            const date = document.querySelector(`.date-input[data-event="${eventId}"]`).value;
            const title = document.querySelector(`.title-input[data-event="${eventId}"]`).value;
            const impact = parseInt(document.querySelector(`.impact-range[data-event="${eventId}"]`).value);
            const description = document.querySelector(`.description-input[data-event="${eventId}"]`).value;

            if (!date || !title) {
                hasErrors = true;
                this.showNotification('Veuillez remplir tous les champs obligatoires', 'error');
                return;
            }

            newEvents.push({
                timeline,
                date,
                title,
                impact,
                description
            });
        });

        if (!hasErrors && newEvents.length > 0) {
            // Ajouter les événements aux timelines appropriées
            newEvents.forEach(event => {
                if (event.timeline === 'personal') {
                    this.personalPoints.push({
                        date: event.date,
                        title: event.title,
                        impact: event.impact,
                        description: event.description
                    });
                } else {
                    this.professionalPoints.push({
                        date: event.date,
                        title: event.title,
                        impact: event.impact,
                        description: event.description
                    });
                }
            });

            // Mettre à jour l'affichage
            this.updateDisplay();
            this.saveData();
            this.closePopup();
            this.showNotification(`${newEvents.length} événement(s) ajouté(s) avec succès`, 'success');
        }
    }

    // Méthode submitEvent supprimée - remplacée par submitAllEvents

    updateDisplay() {
        this.displayPoints();
        this.updateSummary();
        this.updateValidateButton();
    }

    displayPoints() {
        const canvas = document.getElementById('timelineCanvas');
        
        // Nettoyer les points existants
        const existingPoints = canvas.querySelectorAll('.timeline-point');
        existingPoints.forEach(point => point.remove());
        
        // Nettoyer les lignes existantes
        const existingLines = canvas.querySelectorAll('.timeline-line');
        existingLines.forEach(line => line.remove());
        
        // Afficher les points personnels
        this.displayPointsForTimeline(this.personalPoints, 'personal', canvas);
        
        // Afficher les points professionnels
        this.displayPointsForTimeline(this.professionalPoints, 'professional', canvas);
    }

    displayPointsForTimeline(points, type, canvas) {
        const color = type === 'personal' ? '#3b82f6' : '#10b981';
        const sortedPoints = [...points].sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // Créer les lignes de connexion si plus d'un point
        if (sortedPoints.length > 1) {
            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, "svg");
            svg.classList.add('timeline-line');
            svg.style.position = 'absolute';
            svg.style.width = '100%';
            svg.style.height = '100%';
            svg.style.pointerEvents = 'none';
            svg.style.zIndex = '5';
            
            for (let i = 0; i < sortedPoints.length - 1; i++) {
                const line = document.createElementNS(svgNS, "line");
                const x1 = this.dateToPosition(sortedPoints[i].date);
                const y1 = this.impactToPosition(sortedPoints[i].impact);
                const x2 = this.dateToPosition(sortedPoints[i + 1].date);
                const y2 = this.impactToPosition(sortedPoints[i + 1].impact);
                
                line.setAttribute('x1', `${x1}%`);
                line.setAttribute('y1', `${y1}%`);
                line.setAttribute('x2', `${x2}%`);
                line.setAttribute('y2', `${y2}%`);
                line.setAttribute('stroke', color);
                line.setAttribute('stroke-width', '2');
                line.setAttribute('stroke-opacity', '0.6');
                
                svg.appendChild(line);
            }
            
            canvas.appendChild(svg);
        }
        
        // Afficher les points
        sortedPoints.forEach((point, index) => {
            const pointElement = this.createPointElement(point, type);
            canvas.appendChild(pointElement);
        });
    }

    createPointElement(point, type) {
        const div = document.createElement('div');
        div.className = 'timeline-point new';
        div.dataset.timeline = type;
        
        const x = this.dateToPosition(point.date);
        const y = this.impactToPosition(point.impact);
        
        div.style.left = `${x}%`;
        div.style.top = `${y}%`;
        div.style.backgroundColor = type === 'personal' ? '#3b82f6' : '#10b981';
        
        // Ajouter l'événement de survol
        div.addEventListener('mouseenter', (e) => this.showTooltip(e, point));
        div.addEventListener('mouseleave', () => this.hideTooltip());
        
        // Ajouter l'événement de suppression au clic droit
        div.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            if (confirm(`Supprimer l'événement "${point.title}" ?`)) {
                this.removePoint(point, type);
            }
        });
        
        return div;
    }

    dateToPosition(date) {
        const minTime = this.minDate.getTime();
        const maxTime = this.maxDate.getTime();
        const dateTime = new Date(date).getTime();
        
        const ratio = (dateTime - minTime) / (maxTime - minTime);
        return 10 + (ratio * 80); // 10% à 90%
    }

    impactToPosition(impact) {
        // Impact va de -5 à +5, position va de 90% à 10%
        const normalized = (impact + 5) / 10;
        return 90 - (normalized * 80);
    }

    removePoint(pointToRemove, type) {
        if (type === 'personal') {
            this.personalPoints = this.personalPoints.filter(p => 
                p.date !== pointToRemove.date || p.title !== pointToRemove.title
            );
        } else {
            this.professionalPoints = this.professionalPoints.filter(p => 
                p.date !== pointToRemove.date || p.title !== pointToRemove.title
            );
        }
        
        this.updateDisplay();
        this.saveData();
        this.showNotification('Événement supprimé', 'info');
    }

    updateSummary() {
        const allEventsList = document.getElementById('allEventsList');
        
        if (!allEventsList) return;
        
        // Combiner et trier tous les événements
        const allEvents = [
            ...this.personalPoints.map(p => ({...p, type: 'personal'})),
            ...this.professionalPoints.map(p => ({...p, type: 'professional'}))
        ].sort((a, b) => new Date(a.date) - new Date(b.date));
        
        if (allEvents.length === 0) {
            allEventsList.innerHTML = '<p style="text-align: center; color: var(--gray-500);">Aucun événement ajouté</p>';
            return;
        }
        
        allEventsList.innerHTML = allEvents.map(event => {
            const date = new Date(event.date);
            const formattedDate = date.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long'
            });
            const color = event.type === 'personal' ? '#3b82f6' : '#10b981';
            const impactColor = event.impact > 0 ? '#10b981' : event.impact < 0 ? '#ef4444' : '#6b7280';
            
            return `
                <div style="padding: 0.75rem; border-left: 3px solid ${color}; background: var(--gray-50); margin-bottom: 0.5rem; border-radius: 0 var(--radius) var(--radius) 0;">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: var(--gray-900); font-size: 0.95rem;">${event.title}</div>
                            <div style="font-size: 0.85rem; color: var(--gray-600); margin-top: 0.25rem;">${formattedDate}</div>
                            ${event.description ? `<div style="font-size: 0.85rem; color: var(--gray-700); margin-top: 0.5rem; font-style: italic;">${event.description}</div>` : ''}
                        </div>
                        <div style="text-align: center; margin-left: 1rem;">
                            <div style="font-size: 0.75rem; color: var(--gray-600);">Impact</div>
                            <div style="font-size: 1.25rem; font-weight: 700; color: ${impactColor};">
                                ${event.impact > 0 ? '+' : ''}${event.impact}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateValidateButton() {
        const personalCount = this.personalPoints.length;
        const professionalCount = this.professionalPoints.length;
        const continueBtn = document.getElementById('continueToAnalysisBtn');
        
        if (continueBtn) {
            if (personalCount >= 3 && professionalCount >= 3) {
                continueBtn.disabled = false;
                const helpText = continueBtn.parentElement.querySelector('p');
                if (helpText) helpText.style.display = 'none';
            } else {
                continueBtn.disabled = true;
                const helpText = continueBtn.parentElement.querySelector('p');
                if (helpText) helpText.style.display = 'block';
            }
        }
    }

    createTooltip() {
        if (!this.tooltip) {
            this.tooltip = document.createElement('div');
            this.tooltip.className = 'timeline-tooltip';
            document.body.appendChild(this.tooltip);
        }
    }

    showTooltip(event, point) {
        const date = new Date(point.date);
        const formattedDate = date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long'
        });
        
        this.tooltip.innerHTML = `
            <strong>${point.title}</strong><br>
            <span style="font-size: 0.85em; color: var(--gray-600);">${formattedDate}</span><br>
            <span style="font-size: 0.85em;">Impact: ${point.impact > 0 ? '+' : ''}${point.impact}</span>
            ${point.description ? `<br><span style="font-size: 0.85em; font-style: italic;">${point.description}</span>` : ''}
            <br><span style="font-size: 0.75em; color: var(--gray-500); margin-top: 0.5rem; display: block;">Clic droit pour supprimer</span>
        `;
        
        this.tooltip.style.display = 'block';
        this.tooltip.style.left = `${event.pageX + 10}px`;
        this.tooltip.style.top = `${event.pageY - 10}px`;
    }

    hideTooltip() {
        if (this.tooltip) {
            this.tooltip.style.display = 'none';
        }
    }

    saveData() {
        const data = {
            personalPoints: this.personalPoints,
            professionalPoints: this.professionalPoints
        };
        
        localStorage.setItem('module6_data', JSON.stringify(data));
        
        // SCORM
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module6_data', JSON.stringify(data));
        }
    }

    loadSavedData() {
        const saved = localStorage.getItem('module6_data');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.personalPoints = data.personalPoints || [];
                this.professionalPoints = data.professionalPoints || [];
                this.updateDisplay();
            } catch (e) {
                console.error('Erreur lors du chargement des données:', e);
            }
        }
    }

    checkFirstVisit() {
        const visited = localStorage.getItem('module6_visited');
        const completed = localStorage.getItem('module6_completed');
        
        // Si le module est complété, ne pas afficher le modal
        if (completed === 'true') {
            return;
        }
        
        if (!visited) {
            // Utiliser la modal HTML existante
            const modal = document.getElementById('welcomeModal');
            if (modal) {
                modal.style.display = 'flex';
            }
            localStorage.setItem('module6_visited', 'true');
        }
    }

    // Méthode supprimée - on utilise la modal HTML existante
    /* showWelcomeModal_OLD() {
        const modalHtml = `
            <div class="welcome-modal-overlay" id="welcomeModalOverlay" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            ">
                <div class="welcome-modal" style="
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    max-width: 600px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    position: relative;
                ">
                    <div class="welcome-modal-header" style="text-align: center; margin-bottom: 1.5rem;">
                        <svg width="60" height="60" viewBox="0 0 100 100" style="margin-bottom: 1rem;">
                            <defs>
                                <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                            <!-- Tronc de l'arbre -->
                            <rect x="45" y="60" width="10" height="30" fill="url(#treeGradient)" />
                            <!-- Branches principales -->
                            <path d="M50 60 Q30 50 25 35" stroke="url(#treeGradient)" stroke-width="3" fill="none" />
                            <path d="M50 60 Q70 50 75 35" stroke="url(#treeGradient)" stroke-width="3" fill="none" />
                            <path d="M50 50 Q35 40 30 25" stroke="url(#treeGradient)" stroke-width="2" fill="none" />
                            <path d="M50 50 Q65 40 70 25" stroke="url(#treeGradient)" stroke-width="2" fill="none" />
                            <!-- Feuilles/Points de vie -->
                            <circle cx="25" cy="35" r="5" fill="#10b981" opacity="0.8" />
                            <circle cx="75" cy="35" r="5" fill="#3b82f6" opacity="0.8" />
                            <circle cx="30" cy="25" r="4" fill="#10b981" opacity="0.6" />
                            <circle cx="70" cy="25" r="4" fill="#3b82f6" opacity="0.6" />
                            <circle cx="50" cy="45" r="3" fill="#8b5cf6" opacity="0.7" />
                            <!-- Racines -->
                            <path d="M50 90 Q40 95 35 100" stroke="url(#treeGradient)" stroke-width="2" fill="none" opacity="0.5" />
                            <path d="M50 90 Q60 95 65 100" stroke="url(#treeGradient)" stroke-width="2" fill="none" opacity="0.5" />
                        </svg>
                        <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem 0; color: #1f2937;">
                            Vos courbes de vie
                        </h2>
                        <p style="color: #6b7280; margin: 0; font-size: 1rem; line-height: 1.5;">
                            Visualisez votre parcours en traçant les moments marquants de votre vie.
                        </p>
                    </div>
                    
                    <div class="welcome-modal-content" style="margin-bottom: 1.5rem;">
                        <div style="background: #f0f9ff; padding: 1.25rem; border-radius: 12px; margin-bottom: 1rem;">
                            <h3 style="font-size: 1.1rem; font-weight: 600; color: #0369a1; margin: 0 0 0.75rem 0;">
                                Comment ça marche ?
                            </h3>
                            <div style="space-y: 0.75rem;">
                                <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
                                    <span style="background: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.75rem; margin-right: 0.75rem; flex-shrink: 0;">1</span>
                                    <div style="flex: 1;">
                                        <strong style="color: #1f2937; font-size: 0.95rem;">Ajoutez vos événements</strong>
                                        <span style="color: #6b7280; font-size: 0.85rem; margin-left: 0.25rem;">pour placer des points sur vos lignes de vie</span>
                                    </div>
                                </div>
                                
                                <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
                                    <span style="background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.75rem; margin-right: 0.75rem; flex-shrink: 0;">2</span>
                                    <div style="flex: 1;">
                                        <strong style="color: #1f2937; font-size: 0.95rem;">Évaluez l'impact</strong>
                                        <span style="color: #6b7280; font-size: 0.85rem; margin-left: 0.25rem;">de -5 (négatif) à +5 (positif)</span>
                                    </div>
                                </div>
                                
                                <div style="display: flex; align-items: center;">
                                    <span style="background: #8b5cf6; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.75rem; margin-right: 0.75rem; flex-shrink: 0;">3</span>
                                    <div style="flex: 1;">
                                        <strong style="color: #1f2937; font-size: 0.95rem;">Visualisez votre parcours</strong>
                                        <span style="color: #6b7280; font-size: 0.85rem; margin-left: 0.25rem;">avec vos courbes automatiques</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: linear-gradient(135deg, #fef3c7, #d1fae5); padding: 0.75rem 1rem; border-radius: 8px; border-left: 3px solid #f59e0b;">
                            <p style="margin: 0; color: #713f12; font-size: 0.9rem; font-weight: 500;">
                                💡 Ajoutez au moins 3 événements sur chaque timeline pour continuer
                            </p>
                        </div>
                    </div>
                    
                    <div class="welcome-modal-footer" style="display: flex; justify-content: center;">
                        <button id="startActivityBtn" class="btn btn-primary" style="
                            background: #3b82f6;
                            color: white;
                            border: none;
                            padding: 0.75rem 2rem;
                            border-radius: 8px;
                            font-size: 1rem;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.2s;
                        " onmouseover="this.style.background='#2563eb'" onmouseout="this.style.background='#3b82f6'">
                            Commencer l'activité
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        // Ajouter l'événement pour fermer le modal
        const startBtn = document.getElementById('startActivityBtn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.closeWelcomeModal());
        }
    } */

    closeWelcomeModal() {
        const modal = document.getElementById('welcomeModal');
        if (modal) {
            modal.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                modal.style.display = 'none';
                modal.style.animation = '';
            }, 300);
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    showValidationScreen() {
        const validationHtml = `
            <div class="validation-screen" id="validationScreen">
                <div class="validation-content">
                    <div class="validation-icon">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h2>Félicitations !</h2>
                    <p>Vos courbes de vie ont été enregistrées avec succès.</p>
                    <div class="validation-summary">
                        <div class="summary-item">
                            <span class="summary-label">Événements personnels :</span>
                            <span class="summary-value">${this.personalPoints.length}</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Événements professionnels :</span>
                            <span class="summary-value">${this.professionalPoints.length}</span>
                        </div>
                    </div>
                    <div class="validation-actions">
                        <button class="btn btn-secondary" onclick="restartModule()">
                            Recommencer l'activité
                        </button>
                        <button class="btn btn-primary" onclick="goToNextModule()">
                            Continuer vers le module suivant
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', validationHtml);
    }

    showSuccessMessage() {
        this.showValidationScreen();
    }

    validateAndSubmit() {
        const personalCount = this.personalPoints.length;
        const professionalCount = this.professionalPoints.length;

        if (personalCount < 3 || professionalCount < 3) {
            this.showNotification('Veuillez ajouter au moins 3 événements sur chaque timeline.', 'error');
            return;
        }

        // Sauvegarder les données finales
        this.saveData();
        this.saveAnalysisData();
        
        // SCORM - Marquer comme complété
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module6_personal_points', JSON.stringify(this.personalPoints));
            setSCORMData('module6_professional_points', JSON.stringify(this.professionalPoints));
            setSCORMData('module6_analysis', JSON.stringify(this.analysisAnswers));
            setSCORMData('module6_completed', 'true');
            setSCORMComplete();
        }

        // Marquer comme complété localement
        localStorage.setItem('module6_completed', 'true');

        this.showSuccessMessage();
    }

    // Navigation entre les étapes
    goToCanvas() {
        this.showStep(1);
    }

    goToAnalysis() {
        console.log('Going to analysis step');
        
        // Vérifier qu'il y a assez de points
        const personalCount = this.personalPoints.length;
        const professionalCount = this.professionalPoints.length;

        if (personalCount < 3 || professionalCount < 3) {
            this.showNotification('Veuillez ajouter au moins 3 événements sur chaque timeline.', 'error');
            return;
        }

        // Sauvegarder la réponse actuelle si on est déjà dans l'analyse
        if (this.currentStep === 2) {
            this.saveCurrentAnswer();
        }
        
        this.showStep(2);
        this.currentQuestion = 1;
        
        // Petit délai pour s'assurer que l'étape est visible avant de charger le contenu
        setTimeout(() => {
            this.displayQuestion();
            this.duplicateCanvasToPreview();
        }, 100);
    }

    goToSummary() {
        this.saveCurrentAnswer();
        this.showStep(3);
        this.displaySummary();
        this.duplicateCanvasToSummary();
    }

    showStep(stepNumber) {
        console.log('Switching to step:', stepNumber);
        
        // Masquer toutes les étapes
        const allSteps = document.querySelectorAll('.step-content');
        allSteps.forEach(step => {
            step.style.display = 'none';
            step.classList.remove('active');
        });

        // Afficher l'étape demandée
        const targetStep = document.getElementById(`step${stepNumber}`);
        if (targetStep) {
            // Toujours utiliser flex pour la mise en page cohérente
            targetStep.style.display = 'flex';
            targetStep.style.flexDirection = 'column';
            targetStep.classList.add('active');
            console.log(`Step ${stepNumber} is now visible`);
            this.currentStep = stepNumber;
        } else {
            console.error(`Step ${stepNumber} not found`);
        }
    }

    // Gestion des questions
    displayQuestion() {
        const question = this.questions[this.currentQuestion - 1];
        const questionContent = document.getElementById('questionContent');
        
        if (!questionContent) return;

        // Afficher la nouvelle question avec animation
        questionContent.classList.remove('animate');
        setTimeout(() => {
            let html = `
                <div class="question-section">
                    <h3 class="question-title">${question.title}</h3>
                    ${question.subtitle ? `<p class="question-subtitle">${question.subtitle}</p>` : ''}
                </div>
                <textarea 
                    id="answerTextarea" 
                    class="question-textarea" 
                    placeholder="${question.placeholder}"
                >${this.analysisAnswers[question.id] || ''}</textarea>
            `;
            
            questionContent.innerHTML = html;
            questionContent.classList.add('animate');
            
            // Focus sur le textarea
            setTimeout(() => {
                const textarea = document.getElementById('answerTextarea');
                if (textarea) textarea.focus();
            }, 100);
        }, 50);

        // Mettre à jour la progression
        this.updateQuestionProgress();
        
        // Gérer l'affichage des boutons
        const prevBtn = document.getElementById('prevQuestionBtn');
        const nextBtn = document.getElementById('nextQuestionBtn');
        const finishBtn = document.getElementById('finishAnalysisBtn');
        
        if (prevBtn) {
            prevBtn.style.display = this.currentQuestion > 1 ? 'block' : 'none';
        }
        
        if (nextBtn && finishBtn) {
            if (this.currentQuestion === this.questions.length) {
                nextBtn.style.display = 'none';
                finishBtn.style.display = 'block';
            } else {
                nextBtn.style.display = 'block';
                finishBtn.style.display = 'none';
            }
        }
    }

    saveCurrentAnswer() {
        const textarea = document.getElementById('answerTextarea');
        if (textarea && this.currentQuestion > 0) {
            const question = this.questions[this.currentQuestion - 1];
            this.analysisAnswers[question.id] = textarea.value;
            this.saveAnalysisData();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 1) {
            this.saveCurrentAnswer();
            this.currentQuestion--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length) {
            this.saveCurrentAnswer();
            this.currentQuestion++;
            this.displayQuestion();
        }
    }

    updateQuestionProgress() {
        const currentNum = document.getElementById('currentQuestionNum');
        const progressFill = document.getElementById('progressFill');
        
        if (currentNum) {
            currentNum.textContent = this.currentQuestion;
        }
        
        if (progressFill) {
            const percentage = (this.currentQuestion / this.questions.length) * 100;
            progressFill.style.width = `${percentage}%`;
        }
    }

    // Dupliquer le canvas pour l'aperçu
    duplicateCanvasToPreview() {
        const previewCanvas = document.getElementById('previewCanvas');
        if (!previewCanvas) return;
        
        // Définir les dimensions
        previewCanvas.width = previewCanvas.offsetWidth;
        previewCanvas.height = previewCanvas.offsetHeight;
        
        // Redessiner les courbes
        this.drawCurvesOnCanvas(previewCanvas, true);
    }

    duplicateCanvasToSummary() {
        const summaryCanvas = document.getElementById('summaryCanvas');
        if (!summaryCanvas) return;
        
        // Définir les dimensions
        summaryCanvas.width = summaryCanvas.offsetWidth;
        summaryCanvas.height = 300;
        
        // Redessiner les courbes
        this.drawCurvesOnCanvas(summaryCanvas, false);
    }

    drawCurvesOnCanvas(canvas, interactive) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Effacer le canvas
        ctx.clearRect(0, 0, width, height);
        
        // Dessiner l'axe central
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, height / 2);
        ctx.lineTo(width - 50, height / 2);
        ctx.stroke();
        
        // Dessiner les labels
        ctx.fillStyle = '#6b7280';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText('+5', 40, 20);
        ctx.fillText('0', 40, height / 2 + 5);
        ctx.fillText('-5', 40, height - 10);
        
        // Dessiner les courbes
        this.drawCurve(ctx, this.personalPoints, '#3b82f6', width, height);
        this.drawCurve(ctx, this.professionalPoints, '#10b981', width, height);
        
        // Dessiner les points
        this.drawPoints(ctx, this.personalPoints, '#3b82f6', width, height, interactive, canvas);
        this.drawPoints(ctx, this.professionalPoints, '#10b981', width, height, interactive, canvas);
    }

    drawCurve(ctx, points, color, width, height) {
        if (points.length < 2) return;
        
        const sortedPoints = [...points].sort((a, b) => new Date(a.date) - new Date(b.date));
        
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        sortedPoints.forEach((point, index) => {
            const x = this.dateToX(point.date, width);
            const y = this.impactToY(point.impact, height);
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
    }

    drawPoints(ctx, points, color, width, height, interactive, canvas) {
        points.forEach(point => {
            const x = this.dateToX(point.date, width);
            const y = this.impactToY(point.impact, height);
            
            // Dessiner le point
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, 2 * Math.PI);
            ctx.fill();
            
            // Ajouter un contour blanc
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.stroke();
        });

        // Si interactif, ajouter l'événement de hover une seule fois
        if (interactive && canvas.id === 'previewCanvas' && !canvas.hasMouseListener) {
            canvas.hasMouseListener = true;
            canvas.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                
                let found = false;
                [...this.personalPoints, ...this.professionalPoints].forEach(point => {
                    const x = this.dateToX(point.date, width);
                    const y = this.impactToY(point.impact, height);
                    const distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
                    
                    if (distance < 10 && !found) {
                        this.showCanvasTooltip(e, point);
                        found = true;
                    }
                });
                
                if (!found) {
                    this.hideCanvasTooltip();
                }
            });

            canvas.addEventListener('mouseleave', () => {
                this.hideCanvasTooltip();
            });
        }
    }

    dateToX(date, width) {
        const minTime = this.minDate.getTime();
        const maxTime = this.maxDate.getTime();
        const dateTime = new Date(date).getTime();
        
        const ratio = (dateTime - minTime) / (maxTime - minTime);
        return 50 + ratio * (width - 100);
    }

    impactToY(impact, height) {
        // Impact va de -5 à +5
        const normalized = (5 - impact) / 10; // Inverser pour que +5 soit en haut
        return 20 + normalized * (height - 40);
    }

    showCanvasTooltip(event, point) {
        if (!this.canvasTooltip) {
            this.canvasTooltip = document.createElement('div');
            this.canvasTooltip.className = 'timeline-tooltip';
            this.canvasTooltip.style.position = 'fixed';
            this.canvasTooltip.style.zIndex = '10000';
            document.body.appendChild(this.canvasTooltip);
        }
        
        const date = new Date(point.date);
        const formattedDate = date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long'
        });
        
        this.canvasTooltip.innerHTML = `
            <strong>${point.title}</strong><br>
            <span style="font-size: 0.85em; color: var(--gray-600);">${formattedDate}</span><br>
            <span style="font-size: 0.85em;">Impact: ${point.impact > 0 ? '+' : ''}${point.impact}</span>
            ${point.description ? `<br><span style="font-size: 0.85em; font-style: italic;">${point.description}</span>` : ''}
        `;
        
        this.canvasTooltip.style.display = 'block';
        this.canvasTooltip.style.left = `${event.clientX + 10}px`;
        this.canvasTooltip.style.top = `${event.clientY - 10}px`;
    }

    hideCanvasTooltip() {
        if (this.canvasTooltip) {
            this.canvasTooltip.style.display = 'none';
        }
    }

    // Afficher le récapitulatif
    displaySummary() {
        const summaryContent = document.getElementById('summaryContent');
        if (!summaryContent) return;
        
        let html = '';
        
        // Grouper les questions par section
        const sections = {};
        this.questions.forEach(question => {
            if (!sections[question.section]) {
                sections[question.section] = [];
            }
            sections[question.section].push(question);
        });
        
        // Générer le HTML pour chaque section
        Object.keys(sections).forEach(sectionName => {
            html += `<div class="answer-section">`;
            html += `<h3>${sectionName}</h3>`;
            
            sections[sectionName].forEach(question => {
                const answer = this.analysisAnswers[question.id] || '';
                if (answer) {
                    html += `
                        <div style="margin-bottom: 1.5rem;">
                            <h4>${question.title}</h4>
                            ${question.subtitle ? `<p style="font-size: 0.9rem; color: var(--gray-600); font-style: italic; margin-bottom: 0.5rem;">${question.subtitle}</p>` : ''}
                            <div class="answer-text">${answer}</div>
                        </div>
                    `;
                }
            });
            
            html += `</div>`;
        });
        
        summaryContent.innerHTML = html;
    }

    // Sauvegarder les données d'analyse
    saveAnalysisData() {
        const analysisData = {
            answers: this.analysisAnswers,
            currentQuestion: this.currentQuestion
        };
        localStorage.setItem('module6_analysis', JSON.stringify(analysisData));
    }

    // Charger les données d'analyse
    loadAnalysisData() {
        const saved = localStorage.getItem('module6_analysis');
        if (saved) {
            const data = JSON.parse(saved);
            this.analysisAnswers = data.answers || {};
        }
    }
}

// Ajouter les styles d'animation
const style = document.createElement('style');
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

// Fonction globale pour le bouton de transition
function goToNextModule() {
    window.location.href = '/module/07';
}

// Fonction globale pour revenir à l'édition des courbes
function restartModule() {
    // Ne PAS effacer les données, juste le statut de complétion
    // pour permettre de modifier les courbes existantes
    localStorage.removeItem('module6_completed');  // Effacer seulement le statut de complétion
    
    // Mettre à jour le statut SCORM si nécessaire
    if (typeof setSCORMData !== 'undefined') {
        setSCORMData('module6_completed', 'false');
    }
    
    // Recharger la page pour revenir au tableau avec les points existants
    window.location.reload();
}

// Initialiser le module au chargement de la page
let lifeCurvesModule;
document.addEventListener('DOMContentLoaded', () => {
    console.log('Module 6: Initialisation...');
    try {
        lifeCurvesModule = new LifeCurvesModule();
        console.log('Module 6: Initialisation réussie');
    } catch (error) {
        console.error('Module 6: Erreur d\'initialisation', error);
    }
});
