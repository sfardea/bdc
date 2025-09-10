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
    }

    bindEvents() {
        // Sélecteurs de timeline
        const personalBtn = document.getElementById('personalBtn');
        const professionalBtn = document.getElementById('professionalBtn');

        personalBtn.addEventListener('click', () => this.switchTimeline('personal'));
        professionalBtn.addEventListener('click', () => this.switchTimeline('professional'));

        // Gestion de la popup
        const openPopupBtn = document.getElementById('openPopupBtn');
        const closePopupBtn = document.getElementById('closePopupBtn');
        const popupOverlay = document.getElementById('popupOverlay');

        openPopupBtn.addEventListener('click', () => this.openPopup());
        closePopupBtn.addEventListener('click', () => this.closePopup());
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                this.closePopup();
            }
        });

        // Slider d'impact
        const impactRange = document.getElementById('impactRange');
        const impactValue = document.getElementById('impactValue');

        impactRange.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            impactValue.textContent = value > 0 ? `+${value}` : value;
            
            // Mise à jour des classes CSS
            impactValue.className = 'impact-value';
            if (value > 0) impactValue.classList.add('positive');
            if (value < 0) impactValue.classList.add('negative');
        });

        // Bouton d'ajout de point
        const addPointBtn = document.getElementById('addPointBtn');
        addPointBtn.addEventListener('click', () => this.addPoint());

        // Bouton de validation
        const validateBtn = document.getElementById('validateBtn');
        validateBtn.addEventListener('click', () => this.validateAndSubmit());

        // Gestion des entrées clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.closest('.popup-content')) {
                e.preventDefault();
                this.addPoint();
            }
            if (e.key === 'Escape') {
                this.closePopup();
            }
        });
    }

    switchTimeline(timeline) {
        this.currentTimeline = timeline;
        
        // Mise à jour des boutons
        document.getElementById('personalBtn').classList.toggle('active', timeline === 'personal');
        document.getElementById('professionalBtn').classList.toggle('active', timeline === 'professional');
        
        // Mise à jour du titre
        const title = timeline === 'personal' ? '📅 Timeline - Vie Personnelle' : '📅 Timeline - Vie Professionnelle';
        document.getElementById('timelineTitle').textContent = title;
        
        // Redessiner la timeline
        this.drawTimeline();
    }

    addPoint() {
        const dateInput = document.getElementById('pointDate');
        const titleInput = document.getElementById('pointTitle');
        const descriptionInput = document.getElementById('pointDescription');
        const impactRange = document.getElementById('impactRange');

        // Validation
        if (!dateInput.value.trim()) {
            this.showNotification('Veuillez saisir une date.', 'error');
            dateInput.focus();
            return;
        }

        if (!titleInput.value.trim()) {
            this.showNotification('Veuillez saisir un titre pour l\'événement.', 'error');
            titleInput.focus();
            return;
        }

        const pointData = {
            id: Date.now(),
            date: dateInput.value,
            title: titleInput.value.trim(),
            description: descriptionInput.value.trim(),
            impact: parseInt(impactRange.value),
            timeline: this.currentTimeline,
            timestamp: new Date().toISOString()
        };

        // Ajouter le point à la timeline appropriée
        if (this.currentTimeline === 'personal') {
            this.personalPoints.push(pointData);
        } else {
            this.professionalPoints.push(pointData);
        }

        // Trier les points par date
        this.sortPointsByDate();

        // Réinitialiser le formulaire
        this.resetForm();

        // Redessiner la timeline
        this.drawTimeline();

        // Mettre à jour l'interface
        this.updateUI();

        // Sauvegarder
        this.saveData();

        this.showNotification(`Événement "${pointData.title}" ajouté avec succès !`, 'success');
        
        // Fermer la popup après ajout
        this.closePopup();
    }

    openPopup() {
        const popupOverlay = document.getElementById('popupOverlay');
        popupOverlay.classList.add('active');
        
        // Focus sur le premier champ
        setTimeout(() => {
            const firstInput = document.getElementById('pointDate');
            if (firstInput) firstInput.focus();
        }, 100);
    }

    closePopup() {
        const popupOverlay = document.getElementById('popupOverlay');
        popupOverlay.classList.remove('active');
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
        existingPoints.forEach(point => point.remove());

        const points = this.currentTimeline === 'personal' ? this.personalPoints : this.professionalPoints;
        
        if (points.length === 0) return;

        // Calculer les dimensions
        const canvasRect = canvas.getBoundingClientRect();
        const canvasWidth = canvas.offsetWidth;
        const canvasHeight = canvas.offsetHeight;
        
        // Marges
        const marginLeft = 80;
        const marginRight = 50;
        const marginTop = 40;
        const marginBottom = 40;
        
        const drawWidth = canvasWidth - marginLeft - marginRight;
        const drawHeight = canvasHeight - marginTop - marginBottom;

        // Trouver les dates min/max
        const dates = points.map(p => new Date(p.date));
        const minDate = new Date(Math.min(...dates));
        const maxDate = new Date(Math.max(...dates));
        const timeSpan = maxDate.getTime() - minDate.getTime();

        points.forEach((point, index) => {
            const pointElement = document.createElement('div');
            pointElement.className = 'timeline-point new';
            
            // Calcul de la position X (temps)
            const pointDate = new Date(point.date);
            const timeRatio = timeSpan > 0 ? (pointDate.getTime() - minDate.getTime()) / timeSpan : 0.5;
            const x = marginLeft + (timeRatio * drawWidth);

            // Calcul de la position Y (impact)
            const impactRatio = (point.impact + 5) / 10; // Normalise -5/+5 vers 0-1
            const y = marginTop + ((1 - impactRatio) * drawHeight);

            // Style selon l'impact
            if (point.impact > 0) {
                pointElement.classList.add('positive');
            } else if (point.impact < 0) {
                pointElement.classList.add('negative');
            } else {
                pointElement.classList.add('neutral');
            }

            // Positionnement
            pointElement.style.left = `${x - 8}px`;
            pointElement.style.top = `${y - 8}px`;

            // Événements
            pointElement.addEventListener('mouseenter', (e) => this.showTooltip(e, point));
            pointElement.addEventListener('mouseleave', () => this.hideTooltip());
            pointElement.addEventListener('click', () => this.editPoint(point));

            canvas.appendChild(pointElement);
        });
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
        if (confirm('Voulez-vous supprimer cet événement ?')) {
            this.removePoint(point.id);
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

    updateUI() {
        this.updateSummary();
        this.updateValidationButton();
    }

    updateSummary() {
        const summarySection = document.getElementById('pointsSummary');
        const personalContainer = document.getElementById('personalPoints');
        const professionalContainer = document.getElementById('professionalPoints');

        // Afficher le résumé si on a des points
        if (this.personalPoints.length > 0 || this.professionalPoints.length > 0) {
            summarySection.style.display = 'block';
        } else {
            summarySection.style.display = 'none';
            return;
        }

        // Mise à jour des points personnels
        personalContainer.innerHTML = this.personalPoints.length > 0 ? 
            this.personalPoints.map(point => this.createSummaryPoint(point)).join('') :
            '<p style="color: var(--gray-500); font-style: italic; font-size: 0.8rem;">Aucun événement</p>';

        // Mise à jour des points professionnels
        professionalContainer.innerHTML = this.professionalPoints.length > 0 ? 
            this.professionalPoints.map(point => this.createSummaryPoint(point)).join('') :
            '<p style="color: var(--gray-500); font-style: italic; font-size: 0.8rem;">Aucun événement</p>';
    }

    createSummaryPoint(point) {
        const formatDate = new Date(point.date).toLocaleDateString('fr-FR');
        const impactColor = point.impact > 0 ? 'var(--success)' : 
                           point.impact < 0 ? 'var(--error)' : 'var(--gray-400)';
        const impactText = point.impact > 0 ? `+${point.impact}` : point.impact;
        
        return `
            <div class="summary-point" style="padding: 0.5rem; margin: 0.25rem 0; font-size: 0.8rem;">
                <div class="summary-point-impact" style="background: ${impactColor}; width: 8px; height: 8px;"></div>
                <div class="summary-point-date" style="min-width: 60px; font-size: 0.75rem;">${formatDate}</div>
                <div class="summary-point-title" style="font-size: 0.8rem;">${point.title}</div>
                <div class="summary-point-score" style="color: ${impactColor}; font-size: 0.75rem;">${impactText}</div>
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
        const container = document.querySelector('.life-curves-container');
        
        const personalAvg = this.calculateAverageImpact(this.personalPoints);
        const professionalAvg = this.calculateAverageImpact(this.professionalPoints);
        
        const successHtml = `
            <div class="success-message" style="
                background: linear-gradient(135deg, var(--success), var(--secondary-dark));
                color: var(--white);
                padding: 2rem;
                border-radius: var(--radius-2xl);
                text-align: center;
                animation: successAnimation 0.8s ease-out;
                margin-top: 2rem;
            ">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📈</div>
                <h3 style="color: var(--white); font-size: 1.5rem; margin-bottom: 1rem;">
                    Courbes de vie complétées !
                </h3>
                <p style="opacity: 0.9; margin-bottom: 1.5rem;">
                    Vos deux timelines révèlent les moments clés qui ont façonné votre parcours.
                    Cette analyse vous aidera à identifier vos sources de motivation et de résilience.
                </p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0;">
                    <div style="background: rgba(255, 255, 255, 0.2); padding: 1rem; border-radius: var(--radius);">
                        <strong>👤 Vie Personnelle</strong><br>
                        ${this.personalPoints.length} événements<br>
                        Impact moyen: ${personalAvg > 0 ? '+' : ''}${personalAvg.toFixed(1)}
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.2); padding: 1rem; border-radius: var(--radius);">
                        <strong>💼 Vie Professionnelle</strong><br>
                        ${this.professionalPoints.length} événements<br>
                        Impact moyen: ${professionalAvg > 0 ? '+' : ''}${professionalAvg.toFixed(1)}
                    </div>
                </div>
                <p style="font-size: 0.9rem; opacity: 0.8;">
                    Ces courbes alimenteront votre réflexion sur vos valeurs et aspirations futures.
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

// Initialiser le module au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    new LifeCurvesModule();
});