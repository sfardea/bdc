// Système d'analytics pour le Bilan de Compétences
class BilanAnalytics {
    constructor() {
        this.sessionId = this.generateSessionId();
        this.interactions = [];
        this.webhookUrl = this.getWebhookUrl();
        this.init();
    }

    init() {
        console.log('Analytics initialisé - Session:', this.sessionId);
        this.trackSessionStart();
        this.setupBeforeUnloadHandler();
    }

    generateSessionId() {
        return 'bc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    getWebhookUrl() {
        // En production, cette URL devrait être configurée via des variables d'environnement
        // ou récupérée depuis les données SCORM
        return process?.env?.N8N_WEBHOOK_URL || 
               window.BILAN_CONFIG?.webhookUrl || 
               'https://your-n8n-instance.com/webhook/bilan-analytics';
    }

    getUserContext() {
        const suspendData = BilanNavigation?.getSuspendData() || {};
        const etape1Data = suspendData.etapesData?.etape1 || {};
        
        return {
            sessionId: this.sessionId,
            userId: this.generateUserId(etape1Data),
            userProfile: {
                prenom: etape1Data.prenom || 'Anonyme',
                age: etape1Data.age || null,
                region: etape1Data.region || null,
                niveauEtudes: etape1Data.niveauEtudes || null,
                situationPro: etape1Data.situationPro || null
            },
            currentEtape: window.currentEtape || BilanNavigation?.getInstance()?.currentEtape,
            completedEtapes: Array.from(BilanNavigation?.getInstance()?.completedEtapes || []),
            startTime: new Date().toISOString(),
            userAgent: navigator.userAgent,
            screenSize: `${screen.width}x${screen.height}`,
            language: navigator.language
        };
    }

    generateUserId(userData) {
        // Générer un ID utilisateur anonymisé basé sur les données fournies
        const data = `${userData.prenom || ''}${userData.nom || ''}${userData.age || ''}`;
        return 'user_' + this.hashString(data + this.sessionId);
    }

    hashString(str) {
        let hash = 0;
        if (str.length === 0) return hash;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash).toString(36);
    }

    trackEvent(eventType, eventData = {}) {
        const event = {
            timestamp: new Date().toISOString(),
            type: eventType,
            data: eventData,
            context: this.getUserContext(),
            scormData: this.getScormContext()
        };

        this.interactions.push(event);

        // Envoyer immédiatement pour les événements critiques
        if (['session_start', 'etape_completed', 'session_end'].includes(eventType)) {
            this.sendEvent(event);
        }

        // Batch send pour les autres événements
        if (this.interactions.length >= 5) {
            this.sendBatchEvents();
        }

        // Enregistrer aussi dans SCORM
        this.recordScormInteraction(eventType, eventData);

        console.log('Event tracked:', eventType, eventData);
    }

    getScormContext() {
        if (!window.bilanSCORM) return {};
        
        return {
            lessonStatus: BilanSCORM.getValue('cmi.core.lesson_status'),
            score: BilanSCORM.getValue('cmi.core.score.raw'),
            sessionTime: BilanSCORM.getValue('cmi.core.session_time'),
            totalTime: BilanSCORM.getValue('cmi.core.total_time'),
            interactionCount: BilanSCORM.getValue('cmi.interactions._count')
        };
    }

    recordScormInteraction(eventType, eventData) {
        try {
            const interactionId = `${eventType}_${Date.now()}`;
            const response = JSON.stringify(eventData);
            BilanSCORM.recordInteraction(interactionId, 'other', response, 'correct');
        } catch (e) {
            console.warn('Impossible d\'enregistrer l\'interaction SCORM:', e);
        }
    }

    sendEvent(event) {
        this.sendToWebhook([event]);
    }

    sendBatchEvents() {
        if (this.interactions.length === 0) return;
        
        const eventsToSend = [...this.interactions];
        this.interactions = [];
        
        this.sendToWebhook(eventsToSend);
    }

    sendToWebhook(events) {
        if (!this.webhookUrl || this.webhookUrl.includes('your-n8n-instance')) {
            console.log('Webhook non configuré - Events:', events);
            return;
        }

        const payload = {
            source: 'bilan-competences',
            version: '1.0',
            events: events,
            metadata: {
                sentAt: new Date().toISOString(),
                eventsCount: events.length
            }
        };

        fetch(this.webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            console.log(`${events.length} événements envoyés avec succès`);
        })
        .catch(error => {
            console.error('Erreur envoi analytics:', error);
            // Remettre les événements dans la queue pour retry
            this.interactions.unshift(...events);
        });
    }

    // Méthodes spécifiques aux événements du bilan
    trackSessionStart() {
        this.trackEvent('session_start', {
            referrer: document.referrer,
            landingPage: window.location.href
        });
    }

    trackEtapeStart(etapeId) {
        this.trackEvent('etape_start', {
            etapeId: etapeId,
            startTime: new Date().toISOString()
        });
    }

    trackEtapeCompletion(etapeId, completionData = {}) {
        this.trackEvent('etape_completed', {
            etapeId: etapeId,
            completionTime: new Date().toISOString(),
            timeSpent: BilanNavigation?.getTimeSpent(),
            ...completionData
        });
    }

    trackInteraction(interactionType, details = {}) {
        this.trackEvent('interaction', {
            interactionType: interactionType,
            ...details,
            timestamp: new Date().toISOString()
        });
    }

    trackFormSubmission(formType, formData) {
        // Anonymiser les données sensibles
        const anonymizedData = this.anonymizeFormData(formData);
        
        this.trackEvent('form_submission', {
            formType: formType,
            formData: anonymizedData
        });
    }

    trackError(errorType, errorMessage, errorContext = {}) {
        this.trackEvent('error', {
            errorType: errorType,
            errorMessage: errorMessage,
            errorContext: errorContext,
            url: window.location.href,
            userAgent: navigator.userAgent
        });
    }

    trackNavigation(fromEtape, toEtape) {
        this.trackEvent('navigation', {
            fromEtape: fromEtape,
            toEtape: toEtape,
            navigationTime: new Date().toISOString()
        });
    }

    anonymizeFormData(formData) {
        const anonymized = { ...formData };
        
        // Remplacer les données personnelles par des indicateurs
        if (anonymized.nom) {
            anonymized.nom = '[NOM_RENSEIGNE]';
        }
        if (anonymized.prenom) {
            anonymized.prenom = '[PRENOM_RENSEIGNE]';
        }
        
        return anonymized;
    }

    setupBeforeUnloadHandler() {
        window.addEventListener('beforeunload', () => {
            this.trackSessionEnd();
        });

        // Envoyer les événements en attente toutes les 30 secondes
        setInterval(() => {
            if (this.interactions.length > 0) {
                this.sendBatchEvents();
            }
        }, 30000);
    }

    trackSessionEnd() {
        this.trackEvent('session_end', {
            sessionDuration: BilanNavigation?.getTimeSpent(),
            endTime: new Date().toISOString(),
            finalEtape: window.currentEtape,
            totalInteractions: this.interactions.length
        });

        // Force send remaining events
        this.sendBatchEvents();
    }

    // Méthodes statiques pour accès global
    static getInstance() {
        if (!window.bilanAnalytics) {
            window.bilanAnalytics = new BilanAnalytics();
        }
        return window.bilanAnalytics;
    }

    static trackEvent(eventType, eventData) {
        return BilanAnalytics.getInstance().trackEvent(eventType, eventData);
    }

    static trackEtapeStart(etapeId) {
        return BilanAnalytics.getInstance().trackEtapeStart(etapeId);
    }

    static trackEtapeCompletion(etapeId, completionData) {
        return BilanAnalytics.getInstance().trackEtapeCompletion(etapeId, completionData);
    }

    static trackInteraction(interactionType, details) {
        return BilanAnalytics.getInstance().trackInteraction(interactionType, details);
    }

    static trackFormSubmission(formType, formData) {
        return BilanAnalytics.getInstance().trackFormSubmission(formType, formData);
    }

    static trackError(errorType, errorMessage, errorContext) {
        return BilanAnalytics.getInstance().trackError(errorType, errorMessage, errorContext);
    }

    static trackNavigation(fromEtape, toEtape) {
        return BilanAnalytics.getInstance().trackNavigation(fromEtape, toEtape);
    }
}

// Auto-initialize on load
document.addEventListener('DOMContentLoaded', function() {
    BilanAnalytics.getInstance();
});

// Global error tracking
window.addEventListener('error', function(e) {
    BilanAnalytics.trackError('javascript_error', e.message, {
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        stack: e.error?.stack
    });
});