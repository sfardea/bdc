/**
 * Module 6 - Mes courbes de vie
 * Outil graphique interactif avec deux lignes de temps (personnelle/professionnelle)
 * Points avec date, titre, impact émotionnel (-5 à +5)
 */

class LifeCurvesModule {
    constructor() {
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
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadSavedData();
        this.loadAnalysisData();
        this.createTooltip();
        
        // Initialiser SCORM si disponible
        if (typeof initSCORM !== 'undefined') {
            initSCORM();
        }
        
        // Vérifier si c'est la première visite
        this.checkFirstVisit();
    }

    bindEvents() {
        // Plus de sélecteurs - affichage de toutes les courbes

        // Gestion de la popup
        const openPopupBtnSelector = document.getElementById('openPopupBtnSelector');
        const closePopupBtn = document.getElementById('closePopupBtn');
        const popupOverlay = document.getElementById('popupOverlay');

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

    addEventField() {
        this.eventCounter++;
        const container = document.getElementById('eventsContainer');
        
        const eventHtml = `
            <div class="event-item" data-event-id="${this.eventCounter}">
                <div class="event-header">
                    <div class="event-number">${this.eventCounter}</div>
                    ${this.eventCounter > 1 ? `<button class="event-delete" onclick="lifeCurvesModule.removeEventField(${this.eventCounter})">✕</button>` : ''}
                </div>
                
                <div class="timeline-select">
                    <input type="radio" id="personal_${this.eventCounter}" name="timeline_${this.eventCounter}" value="personal" class="timeline-radio" checked>
                    <label for="personal_${this.eventCounter}" class="timeline-radio-label">Vie Personnelle</label>
                    
                    <input type="radio" id="professional_${this.eventCounter}" name="timeline_${this.eventCounter}" value="professional" class="timeline-radio">
                    <label for="professional_${this.eventCounter}" class="timeline-radio-label">Vie Professionnelle</label>
                </div>
                
                <div class="event-fields">
                    <div class="form-group">
                        <label class="form-label">Titre de l'événement</label>
                        <input type="text" class="form-input event-title" placeholder="Ex: Obtention de mon diplôme" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Date</label>
                        <input type="date" class="form-input event-date" required min="1900-01-01" max="${this.maxDate.toISOString().split('T')[0]}">
                    </div>
                    
                    <div class="form-group event-field-full">
                        <label class="form-label">Description (optionnel)</label>
                        <textarea class="form-textarea event-description" rows="3" placeholder="Décrivez brièvement cet événement..." style="height: 65px !important; min-height: 65px !important;"></textarea>
                    </div>
                    
                    <div class="form-group event-field-full">
                        <label class="form-label">Impact émotionnel (-5 à +5)</label>
                        <div class="impact-slider">
                            <span style="font-size: 0.8rem; color: var(--error); font-weight: 600;">-5</span>
                            <input type="range" class="impact-range event-impact" min="-5" max="5" value="0">
                            <span style="font-size: 0.8rem; color: var(--success); font-weight: 600;">+5</span>
                            <div class="impact-value">0</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Ajouter le nouvel événement EN BAS de la liste
        container.insertAdjacentHTML('beforeend', eventHtml);
        
        // Ajouter les écouteurs pour le nouvel événement
        this.bindEventFieldListeners(this.eventCounter);
        
        // Mettre à jour le compteur
        this.updateEventsCount();
        
        // Faire défiler pour que le DÉBUT du nouvel événement soit visible en haut
        if (this.eventCounter > 1) {
            const formContainer = document.querySelector('.events-form-container');
            const newEvent = document.querySelector(`[data-event-id="${this.eventCounter}"]`);
            
            if (formContainer && newEvent) {
                // Petit délai pour s'assurer que le DOM est mis à jour
                setTimeout(() => {
                    // Calculer la position pour que le nouvel événement soit parfaitement aligné en haut
                    // Prendre en compte la position relative dans le conteneur
                    const containerRect = formContainer.getBoundingClientRect();
                    const eventRect = newEvent.getBoundingClientRect();
                    const currentScroll = formContainer.scrollTop;
                    
                    // Position exacte pour aligner le haut de l'événement avec le haut du conteneur
                    const scrollPosition = currentScroll + (eventRect.top - containerRect.top);
                    
                    formContainer.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }

    bindEventFieldListeners(eventId) {
        const eventItem = document.querySelector(`[data-event-id="${eventId}"]`);
        const impactRange = eventItem.querySelector('.event-impact');
        const impactValue = eventItem.querySelector('.impact-value');
        const descriptionTextarea = eventItem.querySelector('.event-description');
        
        // Slider d'impact
        impactRange.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            impactValue.textContent = value > 0 ? `+${value}` : value;
            
            impactValue.className = 'impact-value';
            if (value > 0) impactValue.classList.add('positive');
            if (value < 0) impactValue.classList.add('negative');
        });
        
        // Auto-expansion du textarea
        if (descriptionTextarea) {
            // Fonction pour ajuster la hauteur
            const adjustHeight = () => {
                // Reset la hauteur pour obtenir la vraie scrollHeight
                descriptionTextarea.style.height = '65px';
                
                // Calculer la nouvelle hauteur basée sur le contenu
                const scrollHeight = descriptionTextarea.scrollHeight;
                const newHeight = Math.max(65, Math.min(scrollHeight, 150)); // Min 65px (3 lignes), Max 150px
                
                descriptionTextarea.style.height = newHeight + 'px';
            };
            
            // Écouter les événements de saisie
            descriptionTextarea.addEventListener('input', adjustHeight);
            descriptionTextarea.addEventListener('keydown', adjustHeight);
            descriptionTextarea.addEventListener('paste', () => {
                setTimeout(adjustHeight, 0); // Délai pour que le contenu soit collé
            });
            
            // Ajustement initial si du contenu existe déjà
            adjustHeight();
        }
    }

    removeEventField(eventId) {
        const eventItem = document.querySelector(`[data-event-id="${eventId}"]`);
        if (eventItem) {
            eventItem.remove();
            this.updateEventsCount();
        }
    }

    updateEventsCount() {
        const count = document.querySelectorAll('.event-item').length;
        const countText = document.getElementById('eventsCount');
        countText.textContent = `${count} événement${count > 1 ? 's' : ''} à ajouter`;
    }

    submitAllEvents() {
        const eventItems = document.querySelectorAll('.event-item');
        let addedCount = 0;
        
        eventItems.forEach(eventItem => {
            const title = eventItem.querySelector('.event-title').value.trim();
            const date = eventItem.querySelector('.event-date').value;
            const description = eventItem.querySelector('.event-description').value.trim();
            const impact = parseInt(eventItem.querySelector('.event-impact').value);
            const timeline = eventItem.querySelector('input[type="radio"]:checked').value;
            
            // Validation
            if (!title || !date) {
                this.showNotification('Veuillez remplir au moins le titre et la date pour tous les événements.', 'error');
            return;
        }

        const pointData = {
                id: Date.now() + Math.random(),
                date: date,
                title: title,
                description: description,
                impact: impact,
                timeline: timeline,
            timestamp: new Date().toISOString()
        };

        // Ajouter le point à la timeline appropriée
            if (timeline === 'personal') {
            this.personalPoints.push(pointData);
        } else {
            this.professionalPoints.push(pointData);
        }

            addedCount++;
        });
        
        if (addedCount > 0) {
        // Trier les points par date
        this.sortPointsByDate();

            // Mettre à jour l'interface
        this.drawTimeline();
        this.updateUI();
        this.saveData();

            this.showNotification(`${addedCount} événement${addedCount > 1 ? 's' : ''} ajouté${addedCount > 1 ? 's' : ''} avec succès !`, 'success');
            this.closePopup();
        }
    }


    sortPointsByDate() {
        this.personalPoints.sort((a, b) => new Date(a.date) - new Date(b.date));
        this.professionalPoints.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    resetForm() {
        document.getElementById('pointDate').value = '';
        document.getElementById('pointTitle').value = '';
        document.getElementById('pointDescription').value = '';
        document.getElementById('impactRange').value = '0';
        
        const impactValue = document.getElementById('impactValue');
        impactValue.textContent = '0';
        impactValue.className = 'impact-value';
    }

    drawTimeline() {
        const canvas = document.getElementById('timelineCanvas');
        const existingPoints = canvas.querySelectorAll('.timeline-point');
        const existingLines = canvas.querySelectorAll('.timeline-line');
        existingPoints.forEach(point => point.remove());
        existingLines.forEach(line => line.remove());

        // Toujours afficher les deux courbes
        this.drawCurve('personal');
        this.drawCurve('professional');
    }

    drawCurve(timelineType) {
        const canvas = document.getElementById('timelineCanvas');
        const points = timelineType === 'personal' ? this.personalPoints : this.professionalPoints;
        
        if (points.length === 0) return;

        // Calculer les dimensions
        const canvasWidth = canvas.offsetWidth;
        const canvasHeight = canvas.offsetHeight;
        
        // Marges
        const marginLeft = 80;
        const marginRight = 50;
        const marginTop = 40;
        const marginBottom = 40;
        
        const drawWidth = canvasWidth - marginLeft - marginRight;
        const drawHeight = canvasHeight - marginTop - marginBottom;

        // Trouver les dates min/max de TOUS les points (pour cohérence)
        const allPoints = [...this.personalPoints, ...this.professionalPoints];
        if (allPoints.length === 0) return;
        
        const dates = allPoints.map(p => new Date(p.date));
        const minDate = new Date(Math.min(...dates));
        const maxDate = new Date(Math.max(...dates));
        const timeSpan = maxDate.getTime() - minDate.getTime();

        // Calculer les positions de tous les points
        const pointPositions = points.map(point => {
            const pointDate = new Date(point.date);
            const timeRatio = timeSpan > 0 ? (pointDate.getTime() - minDate.getTime()) / timeSpan : 0.5;
            const x = marginLeft + (timeRatio * drawWidth);
            const impactRatio = (point.impact + 5) / 10;
            const y = marginTop + ((1 - impactRatio) * drawHeight);
            return { point, x, y };
        }).sort((a, b) => a.x - b.x); // Trier par position X (chronologique)

        // Dessiner les lignes de connexion
        if (pointPositions.length > 1) {
            this.drawConnectingLines(canvas, pointPositions, timelineType);
        }

        // Dessiner les points
        pointPositions.forEach(({ point, x, y }) => {
            const pointElement = document.createElement('div');
            pointElement.className = 'timeline-point new';
            
            // Style selon le type d'événement avec couleurs expressives
            const isPersonal = timelineType === 'personal';
            const baseColor = isPersonal ? '#3B82F6' : '#F59E0B'; // Couleurs de base
            const darkColor = isPersonal ? '#2563EB' : '#D97706'; // Couleurs foncées
            
            if (point.impact > 0) {
                pointElement.style.background = `linear-gradient(135deg, ${baseColor}, ${darkColor})`;
            } else if (point.impact < 0) {
                pointElement.style.background = 'linear-gradient(135deg, #DC2626, #B91C1C)';
            } else {
                pointElement.style.background = 'linear-gradient(135deg, #94A3B8, #64748B)';
            }

            // Positionnement
            pointElement.style.left = `${x - 8}px`;
            pointElement.style.top = `${y - 8}px`;
            pointElement.style.zIndex = '20'; // Au-dessus des lignes

            // Événements
            pointElement.addEventListener('mouseenter', (e) => this.showTooltip(e, point));
            pointElement.addEventListener('mouseleave', () => this.hideTooltip());
            pointElement.addEventListener('click', () => this.editPoint(point));
            
            // Ajouter l'ID comme attribut pour faciliter la recherche
            pointElement.setAttribute('data-point-id', point.id);

            canvas.appendChild(pointElement);
        });
    }

    drawConnectingLines(canvas, pointPositions, timelineType) {
        const isPersonal = timelineType === 'personal';
        const lineColor = isPersonal ? '#3B82F6' : '#F59E0B'; // Couleurs expressives
        
        for (let i = 0; i < pointPositions.length - 1; i++) {
            const current = pointPositions[i];
            const next = pointPositions[i + 1];
            
            // Créer un élément SVG pour la ligne
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.classList.add('timeline-line');
            
            // Calculer les dimensions et position du SVG
            const minX = Math.min(current.x, next.x);
            const maxX = Math.max(current.x, next.x);
            const minY = Math.min(current.y, next.y);
            const maxY = Math.max(current.y, next.y);
            
            const width = maxX - minX + 20; // Marge
            const height = maxY - minY + 20; // Marge
            
            svg.style.position = 'absolute';
            svg.style.left = `${minX - 10}px`;
            svg.style.top = `${minY - 10}px`;
            svg.style.width = `${width}px`;
            svg.style.height = `${height}px`;
            svg.style.pointerEvents = 'none';
            svg.style.zIndex = '5';
            
            // Créer la ligne
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', current.x - minX + 10);
            line.setAttribute('y1', current.y - minY + 10);
            line.setAttribute('x2', next.x - minX + 10);
            line.setAttribute('y2', next.y - minY + 10);
            line.setAttribute('stroke', lineColor);
            line.setAttribute('stroke-width', '3');
            line.setAttribute('stroke-opacity', '0.8');
            line.setAttribute('stroke-linecap', 'round');
            line.setAttribute('stroke-linejoin', 'round');
            
            svg.appendChild(line);
            canvas.appendChild(svg);
            
            // Animation pour les nouvelles lignes
            setTimeout(() => {
                svg.classList.add('new');
            }, 100 + i * 200); // Délai progressif pour chaque ligne
        }
    }

    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'point-tooltip';
        document.body.appendChild(this.tooltip);
    }

    showTooltip(event, point) {
        const formatDate = new Date(point.date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        const impactText = point.impact > 0 ? `+${point.impact}` : point.impact;
        
        this.tooltip.innerHTML = `
            <strong>${point.title}</strong><br>
            ${formatDate}<br>
            Impact: ${impactText}/5
        `;
        
        const rect = event.target.getBoundingClientRect();
        this.tooltip.style.left = `${rect.left + window.scrollX}px`;
        this.tooltip.style.top = `${rect.top + window.scrollY - this.tooltip.offsetHeight - 10}px`;
        this.tooltip.style.opacity = '1';
    }

    hideTooltip() {
        this.tooltip.style.opacity = '0';
    }

    editPoint(point) {
        // Créer un modal de modification/suppression
        this.showEditModal(point);
    }

    showEditModal(point) {
        const modalHtml = `
            <div class="edit-modal-overlay" id="editModalOverlay" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.6);
                backdrop-filter: blur(5px);
                z-index: 2000;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeIn 0.3s ease-out;
            ">
                <div class="edit-modal-content" style="
                    background: var(--white);
                    border-radius: var(--radius-2xl);
                    padding: 2rem;
                    max-width: 500px;
                    width: 90%;
                    box-shadow: var(--shadow-xl);
                    animation: slideInUp 0.3s ease-out;
                ">
                    <div class="edit-modal-header" style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 1.5rem;
                        padding-bottom: 1rem;
                        border-bottom: 2px solid var(--gray-200);
                    ">
                        <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--gray-900); margin: 0;">
                            Modifier l'événement
                        </h3>
                        <button onclick="lifeCurvesModule.closeEditModal()" style="
                            background: none;
                            border: none;
                            font-size: 1.5rem;
                            cursor: pointer;
                            color: var(--gray-500);
                            padding: 0.25rem;
                            border-radius: var(--radius);
                            transition: var(--transition);
                        ">✕</button>
                    </div>
                    
                    <div class="edit-form">
                        <div class="form-group" style="margin-bottom: 1rem;">
                            <label class="form-label">Titre de l'événement</label>
                            <input type="text" id="editTitle" class="form-input" value="${point.title}" required>
                        </div>
                        
                        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                            <div class="form-group">
                                <label class="form-label">Date</label>
                                <input type="date" id="editDate" class="form-input" value="${point.date}" required>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Type</label>
                                <select id="editTimeline" class="form-input">
                                    <option value="personal" ${point.timeline === 'personal' ? 'selected' : ''}>Vie Personnelle</option>
                                    <option value="professional" ${point.timeline === 'professional' ? 'selected' : ''}>Vie Professionnelle</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-group" style="margin-bottom: 1rem;">
                            <label class="form-label">Description</label>
                            <textarea id="editDescription" class="form-textarea" rows="3">${point.description || ''}</textarea>
                        </div>
                        
                        <div class="form-group" style="margin-bottom: 2rem;">
                            <label class="form-label">Impact émotionnel</label>
                            <div class="impact-slider">
                                <span style="font-size: 0.8rem; color: var(--error); font-weight: 600;">-5</span>
                                <input type="range" id="editImpact" class="impact-range" min="-5" max="5" value="${point.impact}">
                                <span style="font-size: 0.8rem; color: var(--success); font-weight: 600;">+5</span>
                                <div id="editImpactValue" class="impact-value">${point.impact > 0 ? '+' + point.impact : point.impact}</div>
                            </div>
                        </div>
                        
                        <div class="edit-actions" style="display: flex; gap: 1rem; justify-content: center;">
                            <button onclick="lifeCurvesModule.updatePoint('${point.id}')" class="step-nav-btn primary" style="
                                background: var(--primary);
                                color: var(--white);
                                padding: 0.75rem 1.5rem;
                                border: none;
                                border-radius: var(--radius);
                                font-weight: 600;
                                cursor: pointer;
                                transition: var(--transition);
                            ">
                                Modifier
                            </button>
                            <button onclick="lifeCurvesModule.deletePoint('${point.id}')" class="step-nav-btn" style="
                                background: var(--error);
                                color: var(--white);
                                padding: 0.75rem 1.5rem;
                                border: none;
                                border-radius: var(--radius);
                                font-weight: 600;
                                cursor: pointer;
                                transition: var(--transition);
                            ">
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideInUp {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            </style>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        // Ajouter l'écouteur pour le slider d'impact
        const editImpact = document.getElementById('editImpact');
        const editImpactValue = document.getElementById('editImpactValue');
        
        editImpact.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            editImpactValue.textContent = value > 0 ? `+${value}` : value;
            
            editImpactValue.className = 'impact-value';
            if (value > 0) editImpactValue.classList.add('positive');
            if (value < 0) editImpactValue.classList.add('negative');
        });
    }

    closeEditModal() {
        const modal = document.getElementById('editModalOverlay');
        if (modal) {
            modal.remove();
        }
    }

    updatePoint(pointId) {
        const title = document.getElementById('editTitle').value.trim();
        const date = document.getElementById('editDate').value;
        const description = document.getElementById('editDescription').value.trim();
        const impact = parseInt(document.getElementById('editImpact').value);
        const timeline = document.getElementById('editTimeline').value;
        
        if (!title || !date) {
            this.showNotification('Veuillez remplir le titre et la date.', 'error');
            return;
        }
        
        // Trouver et mettre à jour le point
        let pointFound = false;
        
        // Chercher dans les points personnels
        const personalIndex = this.personalPoints.findIndex(p => p.id == pointId);
        if (personalIndex !== -1) {
            // Supprimer de l'ancienne timeline si changement
            if (timeline !== 'personal') {
                const point = this.personalPoints.splice(personalIndex, 1)[0];
                point.title = title;
                point.date = date;
                point.description = description;
                point.impact = impact;
                point.timeline = timeline;
                this.professionalPoints.push(point);
            } else {
                // Mettre à jour sur place
                this.personalPoints[personalIndex] = {
                    ...this.personalPoints[personalIndex],
                    title, date, description, impact, timeline
                };
            }
            pointFound = true;
        }
        
        // Chercher dans les points professionnels
        const professionalIndex = this.professionalPoints.findIndex(p => p.id == pointId);
        if (professionalIndex !== -1) {
            // Supprimer de l'ancienne timeline si changement
            if (timeline !== 'professional') {
                const point = this.professionalPoints.splice(professionalIndex, 1)[0];
                point.title = title;
                point.date = date;
                point.description = description;
                point.impact = impact;
                point.timeline = timeline;
                this.personalPoints.push(point);
            } else {
                // Mettre à jour sur place
                this.professionalPoints[professionalIndex] = {
                    ...this.professionalPoints[professionalIndex],
                    title, date, description, impact, timeline
                };
            }
            pointFound = true;
        }
        
        if (pointFound) {
            // Trier les points par date
            this.sortPointsByDate();
            
            // Mettre à jour l'interface
            this.drawTimeline();
            this.updateUI();
            this.saveData();
            
            this.showNotification('Événement modifié avec succès !', 'success');
            this.closeEditModal();
        }
    }

    deletePoint(pointId) {
        if (confirm('Voulez-vous vraiment supprimer cet événement ?')) {
            this.removePoint(pointId);
            this.closeEditModal();
        }
    }

    removePoint(pointId) {
        this.personalPoints = this.personalPoints.filter(p => p.id !== pointId);
        this.professionalPoints = this.professionalPoints.filter(p => p.id !== pointId);
        
        this.drawTimeline();
        this.updateUI();
        this.saveData();
        
        this.showNotification('Événement supprimé.', 'info');
    }

    checkFirstVisit() {
        // Vérifier si l'utilisateur a déjà des événements ou a déjà visité
        const hasEvents = this.personalPoints.length > 0 || this.professionalPoints.length > 0;
        const hasVisited = localStorage.getItem('module6_visited') || 
                          (typeof getSCORMData !== 'undefined' && getSCORMData('module6_visited'));
        
        if (!hasEvents && !hasVisited) {
            // Afficher le modal d'accueil seulement si première visite ET pas d'événements
            setTimeout(() => {
                const welcomeModal = document.getElementById('welcomeModal');
                if (welcomeModal) {
                    welcomeModal.style.display = 'flex';
                }
            }, 500); // Léger délai pour l'effet
        }
    }

    closeWelcomeModal() {
        const welcomeModal = document.getElementById('welcomeModal');
        if (welcomeModal) {
            // Animation de fermeture
            welcomeModal.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                welcomeModal.style.display = 'none';
            }, 300);
        }
        
        // Marquer comme visité
        localStorage.setItem('module6_visited', 'true');
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module6_visited', 'true');
        }
    }

    updateUI() {
        this.updateSummary();
        this.updateValidationButton();
    }

    updateSummary() {
        const summarySection = document.getElementById('pointsSummary');
        const allEventsList = document.getElementById('allEventsList');

        // Combiner tous les événements et les trier par date
        const allEvents = [...this.personalPoints, ...this.professionalPoints]
            .sort((a, b) => new Date(b.date) - new Date(a.date)); // Tri par date décroissante

        // Limiter le nombre d'événements affichés pour éviter l'overflow
        const isDesktop = window.innerWidth >= 1024;
        const maxEvents = isDesktop ? 8 : 6; // Limite adaptée à l'écran
        const eventsToShow = allEvents.slice(0, maxEvents);
        const hasMoreEvents = allEvents.length > maxEvents;

        // Afficher le résumé si on a des points
        if (allEvents.length > 0) {
            summarySection.style.display = 'flex';
            let eventsHTML = eventsToShow.map(point => this.createSummaryPoint(point)).join('');
            
            // Ajouter un indicateur s'il y a plus d'événements
            if (hasMoreEvents) {
                const remainingCount = allEvents.length - maxEvents;
                eventsHTML += `
                    <div style="
                        padding: 0.5rem;
                        text-align: center;
                        color: var(--gray-500);
                        font-style: italic;
                        font-size: 0.8rem;
                        background: var(--gray-100);
                        border-radius: var(--radius);
                        margin-top: 0.5rem;
                    ">
                        +${remainingCount} événement${remainingCount > 1 ? 's' : ''} supplémentaire${remainingCount > 1 ? 's' : ''}
                    </div>
                `;
            }
            
            allEventsList.innerHTML = eventsHTML;
        } else {
            summarySection.style.display = 'flex';
            const emptyPadding = isDesktop ? '3rem 2rem' : '2rem 1rem';
            const emptyFontSize = isDesktop ? '1rem' : '0.9rem';
            allEventsList.innerHTML = `<p style="color: var(--gray-500); font-style: italic; font-size: ${emptyFontSize}; text-align: center; padding: ${emptyPadding}; margin: auto;">Aucun événement ajouté</p>`;
        }
    }

    createSummaryPoint(point) {
        const formatDate = new Date(point.date).toLocaleDateString('fr-FR');
        const impactColor = point.impact > 0 ? 'var(--success)' : 
                           point.impact < 0 ? 'var(--error)' : 'var(--gray-400)';
        const impactText = point.impact > 0 ? `+${point.impact}` : point.impact;
        
        // Déterminer les couleurs expressives selon le type d'événement
        const isPersonal = point.timeline === 'personal';
        const eventColor = isPersonal ? '#3B82F6' : '#F59E0B'; // Bleu vif / Orange vif
        const eventClass = isPersonal ? 'event-personal' : 'event-professional';
        
        // Adapter la taille selon l'écran (desktop vs mobile)
        const isDesktop = window.innerWidth >= 1024;
        const pointPadding = isDesktop ? '0.75rem' : '0.6rem';
        const pointMargin = isDesktop ? '0.5rem 0' : '0.4rem 0';
        const fontSize = isDesktop ? '0.9rem' : '0.85rem';
        const dateFontSize = isDesktop ? '0.8rem' : '0.75rem';
        const scoreSize = isDesktop ? '0.9rem' : '0.8rem';
        const impactSize = isDesktop ? '12px' : '10px';
        const minDateWidth = isDesktop ? '80px' : '70px';
        const minScoreWidth = isDesktop ? '40px' : '35px';
        
        return `
            <div class="summary-point ${eventClass}" style="
                padding: ${pointPadding};
                margin: ${pointMargin};
                font-size: ${fontSize};
                background: var(--gray-50);
                border-radius: var(--radius);
                border-left: 3px solid ${eventColor};
                display: flex;
                align-items: center;
                gap: 0.75rem;
                transition: var(--transition);
                cursor: pointer;
                box-shadow: var(--shadow-sm);
            " onmouseover="this.style.background='var(--gray-100)'; this.style.boxShadow='var(--shadow-md)'; this.style.transform='translateY(-1px)';" onmouseout="this.style.background='var(--gray-50)'; this.style.boxShadow='var(--shadow-sm)'; this.style.transform='translateY(0)';" onclick="lifeCurvesModule.editPoint({id: '${point.id}', title: '${point.title}', date: '${point.date}', description: '${point.description || ''}', impact: ${point.impact}, timeline: '${point.timeline}'})">
                <div class="summary-point-impact" style="background: ${eventColor}; width: ${impactSize}; height: ${impactSize}; border-radius: 50%; flex-shrink: 0; box-shadow: var(--shadow-sm);"></div>
                <div class="summary-point-date" style="min-width: ${minDateWidth}; font-size: ${dateFontSize}; color: var(--gray-600); font-weight: 600;">${formatDate}</div>
                <div class="summary-point-title" style="flex: 1; font-size: ${fontSize}; font-weight: 500; line-height: 1.3; color: var(--gray-800);">${point.title}</div>
                <div class="summary-point-score" style="color: ${eventColor}; font-size: ${scoreSize}; font-weight: 700; min-width: ${minScoreWidth}; text-align: center; background: rgba(255,255,255,0.9); padding: 0.2rem 0.4rem; border-radius: var(--radius); border: 1px solid ${eventColor}30;">${impactText}</div>
            </div>
        `;
    }

    updateValidationButton() {
        const validateBtn = document.getElementById('validateBtn');
        const personalCount = this.personalPoints.length;
        const professionalCount = this.professionalPoints.length;
        
        const hasMinimumPoints = personalCount >= 3 && professionalCount >= 3;
        
        validateBtn.disabled = !hasMinimumPoints;
        
        if (hasMinimumPoints) {
            validateBtn.textContent = 'Valider mes courbes de vie';
        } else {
            const personalMissing = Math.max(0, 3 - personalCount);
            const professionalMissing = Math.max(0, 3 - professionalCount);
            
            if (personalMissing > 0 && professionalMissing > 0) {
                validateBtn.textContent = `Il manque ${personalMissing} points personnels et ${professionalMissing} points professionnels`;
            } else if (personalMissing > 0) {
                validateBtn.textContent = `Il manque ${personalMissing} point${personalMissing > 1 ? 's' : ''} personnel${personalMissing > 1 ? 's' : ''}`;
            } else if (professionalMissing > 0) {
                validateBtn.textContent = `Il manque ${professionalMissing} point${professionalMissing > 1 ? 's' : ''} professionnel${professionalMissing > 1 ? 's' : ''}`;
            }
        }
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
        
        // SCORM - Marquer comme complété
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module6_personal_points', JSON.stringify(this.personalPoints));
            setSCORMData('module6_professional_points', JSON.stringify(this.professionalPoints));
            setSCORMData('module6_completed', 'true');
            setSCORMComplete();
        }

        this.showSuccessMessage();
    }

    showSuccessMessage() {
        // Remplacer tout le contenu par le message de succès
        const mainContainer = document.querySelector('.life-curves-container');
        
        const personalAvg = this.calculateAverageImpact(this.personalPoints);
        const professionalAvg = this.calculateAverageImpact(this.professionalPoints);
        
        const successHtml = `
            <div class="success-message" style="
                background: linear-gradient(135deg, var(--success), var(--secondary-dark));
                color: var(--white);
                padding: 3rem 2rem;
                border-radius: var(--radius-2xl);
                text-align: center;
                animation: successAnimation 0.8s ease-out;
                margin: 2rem auto;
                max-width: 800px;
                box-shadow: var(--shadow-xl);
            ">
                <div style="font-size: 4rem; margin-bottom: 1.5rem;">📈</div>
                <h2 style="color: var(--white); font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem;">
                    Courbes de vie complétées !
                </h2>
                <p style="opacity: 0.95; margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.6;">
                    Vos deux timelines révèlent les moments clés qui ont façonné votre parcours.
                    Cette analyse vous aidera à identifier vos sources de motivation et de résilience.
                </p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0; max-width: 600px; margin-left: auto; margin-right: auto;">
                    <div style="background: rgba(255, 255, 255, 0.2); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">👤</div>
                        <strong style="display: block; margin-bottom: 0.5rem;">Vie Personnelle</strong>
                        <div style="font-size: 1.5rem; font-weight: 700; margin: 0.5rem 0;">${this.personalPoints.length}</div>
                        <div style="font-size: 0.9rem; opacity: 0.9;">Impact moyen: ${personalAvg > 0 ? '+' : ''}${personalAvg.toFixed(1)}</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.2); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">💼</div>
                        <strong style="display: block; margin-bottom: 0.5rem;">Vie Professionnelle</strong>
                        <div style="font-size: 1.5rem; font-weight: 700; margin: 0.5rem 0;">${this.professionalPoints.length}</div>
                        <div style="font-size: 0.9rem; opacity: 0.9;">Impact moyen: ${professionalAvg > 0 ? '+' : ''}${professionalAvg.toFixed(1)}</div>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1.5rem;">
                    <button class="nav-button" style="
                        background: #E5E7EB; 
                        color: #374151; 
                        border: none; 
                        padding: 1rem 2rem; 
                        border-radius: var(--radius-lg); 
                        font-weight: 600; 
                        font-size: 1rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        display: inline-flex;
                        align-items: center;
                        gap: 0.5rem;
                    " onclick="restartModule()" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C7.79086 4 5.88656 5.33649 5 7.25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M5 3V7H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Recommencer l'activité
                    </button>
                <button class="nav-button" style="
                    background: var(--white); 
                    color: var(--success); 
                    border: none; 
                    padding: 1rem 2rem; 
                    border-radius: var(--radius-lg); 
                    font-weight: 600; 
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                " onclick="goToNextModule()" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    Continuer vers le module 7
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 15L12 10L7 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                </div>
                
                <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 1.5rem;">
                    Ces courbes alimenteront votre réflexion sur vos valeurs et aspirations futures.
                </p>
            </div>
            
            <style>
                @keyframes successAnimation {
                    0% { transform: scale(0.9) translateY(20px); opacity: 0; }
                    50% { transform: scale(1.02) translateY(-5px); }
                    100% { transform: scale(1) translateY(0); opacity: 1; }
                }
            </style>
        `;
        
        // Remplacer tout le contenu
        mainContainer.innerHTML = successHtml;

        // Redirection après 5 secondes
        setTimeout(() => {
            if (typeof parent !== 'undefined' && parent.postMessage) {
                parent.postMessage({
                    type: 'module-completed',
                    module: 'module-06',
                    data: {
                        personalPoints: this.personalPoints,
                        professionalPoints: this.professionalPoints,
                        personalAverage: personalAvg,
                        professionalAverage: professionalAvg,
                        completed: true
                    }
                }, '*');
            }
        }, 5000);
    }

    calculateAverageImpact(points) {
        if (points.length === 0) return 0;
        const sum = points.reduce((acc, point) => acc + point.impact, 0);
        return sum / points.length;
    }

    showNotification(message, type = 'info') {
        // Créer la notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        let bgColor;
        switch(type) {
            case 'error': bgColor = 'var(--error)'; break;
            case 'warning': bgColor = 'var(--warning)'; break;
            case 'success': bgColor = 'var(--success)'; break;
            default: bgColor = 'var(--info)';
        }
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${bgColor};
            color: var(--white);
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
            max-width: 350px;
        `;
        notification.textContent = message;

        // Ajouter au DOM
        document.body.appendChild(notification);

        // Retirer après 4 secondes
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    saveData() {
        const data = {
            personalPoints: this.personalPoints,
            professionalPoints: this.professionalPoints,
            timestamp: new Date().toISOString()
        };

        // LocalStorage pour développement
        localStorage.setItem('module6_data', JSON.stringify(data));

        // SCORM pour production
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module6_personal_points', JSON.stringify(this.personalPoints));
            setSCORMData('module6_professional_points', JSON.stringify(this.professionalPoints));
        }
    }

    loadSavedData() {
        // Essayer de charger depuis SCORM d'abord
        let savedData = null;
        
        if (typeof getSCORMData !== 'undefined') {
            const scormPersonal = getSCORMData('module6_personal_points');
            const scormProfessional = getSCORMData('module6_professional_points');
            
            if (scormPersonal && scormProfessional) {
                savedData = {
                    personalPoints: JSON.parse(scormPersonal),
                    professionalPoints: JSON.parse(scormProfessional)
                };
            }
        }

        // Fallback sur localStorage
        if (!savedData) {
            const localData = localStorage.getItem('module6_data');
            if (localData) {
                savedData = JSON.parse(localData);
            }
        }

        if (savedData) {
            // Restaurer les points
            this.personalPoints = savedData.personalPoints || [];
            this.professionalPoints = savedData.professionalPoints || [];

            // Mettre à jour l'interface
            this.drawTimeline();
            this.updateUI();
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
        this.displayQuestion();
        this.duplicateCanvasToPreview();
    }

    goToSummary() {
        this.saveCurrentAnswer();
        this.showStep(3);
        this.displaySummary();
        this.duplicateCanvasToSummary();
    }

    showStep(stepNumber) {
        // Masquer toutes les étapes
        document.querySelectorAll('.step-content').forEach(step => {
            step.style.display = 'none';
            step.classList.remove('active');
        });

        // Afficher l'étape demandée
        const stepElement = document.getElementById(`step${stepNumber}`);
        if (stepElement) {
            stepElement.style.display = stepNumber === 1 ? 'flex' : 'block';
            stepElement.classList.add('active');
            this.currentStep = stepNumber;
        }

        // Masquer le contenu principal si on est pas à l'étape 1
        const mainContainer = document.querySelector('.life-curves-container');
        if (mainContainer) {
            mainContainer.style.display = stepNumber === 1 ? 'flex' : 'none';
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

document.addEventListener('DOMContentLoaded', () => {
    lifeCurvesModule = new LifeCurvesModule();
});