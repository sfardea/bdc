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
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadSavedData();
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

        openPopupBtnSelector.addEventListener('click', () => this.openPopup());
        closePopupBtn.addEventListener('click', () => this.closePopup());
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                this.closePopup();
            }
        });

        // Gestion des événements multiples
        const addEventFieldBtn = document.getElementById('addEventFieldBtn');
        const submitAllEventsBtn = document.getElementById('submitAllEventsBtn');
        
        addEventFieldBtn.addEventListener('click', () => this.addEventField());
        submitAllEventsBtn.addEventListener('click', () => this.submitAllEvents());
        
        // Modal d'accueil
        const startActivityBtn = document.getElementById('startActivityBtn');
        if (startActivityBtn) {
            startActivityBtn.addEventListener('click', () => this.closeWelcomeModal());
        }



        // Bouton de validation
        const validateBtn = document.getElementById('validateBtn');
        validateBtn.addEventListener('click', () => this.validateAndSubmit());

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
        popupOverlay.classList.add('active');
        
        // Réinitialiser les événements
        this.eventCounter = 0;
        this.pendingEvents = [];
        
        // Créer le premier événement
        this.addEventField();
    }

    closePopup() {
        const popupOverlay = document.getElementById('popupOverlay');
        popupOverlay.classList.remove('active');
        
        // Nettoyer les événements en cours
        const container = document.getElementById('eventsContainer');
        container.innerHTML = '';
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
                        <input type="date" class="form-input event-date" required>
                    </div>
                    
                    <div class="form-group event-field-full">
                        <label class="form-label">Description (optionnel)</label>
                        <textarea class="form-textarea event-description" rows="2" placeholder="Décrivez brièvement cet événement..."></textarea>
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
        
        container.insertAdjacentHTML('beforeend', eventHtml);
        
        // Ajouter les écouteurs pour le nouvel événement
        this.bindEventFieldListeners(this.eventCounter);
        
        // Mettre à jour le compteur
        this.updateEventsCount();
    }

    bindEventFieldListeners(eventId) {
        const eventItem = document.querySelector(`[data-event-id="${eventId}"]`);
        const impactRange = eventItem.querySelector('.event-impact');
        const impactValue = eventItem.querySelector('.impact-value');
        
        // Slider d'impact
        impactRange.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            impactValue.textContent = value > 0 ? `+${value}` : value;
            
            impactValue.className = 'impact-value';
            if (value > 0) impactValue.classList.add('positive');
            if (value < 0) impactValue.classList.add('negative');
        });
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
                    margin-top: 1.5rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                " onclick="goToNextModule()" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    Continuer vers le module 7
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 15L12 10L7 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                
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

// Initialiser le module au chargement de la page
let lifeCurvesModule;
document.addEventListener('DOMContentLoaded', () => {
    lifeCurvesModule = new LifeCurvesModule();
});