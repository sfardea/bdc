/**
 * Module d'intégration avec Zoho CRM via Make (Integromat)
 * Envoie les données des formulaires vers le webhook Make
 */

class ZohoIntegration {
    constructor() {
        // Webhook Make (Integromat) pour l'intégration Zoho
        this.webhookUrl = 'https://hook.eu1.make.com/ocfnntdv0w9iy4lymf27bykuxr98ermp';
        
        // Configuration des modules
        this.moduleConfig = {
            'module1': 'Présentation personnelle',
            'module2': 'Blason - Autoportrait',
            'module3': 'Présentation en images',
            'module4': 'Objectifs du bilan',
            'module5': 'Photo-langage',
            'module6': 'Parcours professionnel',
            'module7': 'Analyse des expériences',
            'module8': 'Compétences acquises',
            'module9': 'Valeurs professionnelles',
            'module10': 'Centres d\'intérêt',
            'module11': 'Environnement idéal',
            'module12': 'Points forts',
            'module13': 'Axes d\'amélioration',
            'module14': 'Motivations',
            'module15': 'Projet professionnel',
            'module16': 'Plan d\'action',
            'module17': 'Formation envisagée',
            'module18': 'Réseau professionnel',
            'module19': 'CV optimisé',
            'module20': 'Lettre de motivation',
            'module21': 'Préparation entretien',
            'module22': 'Simulation entretien',
            'module23': 'Bilan des acquis',
            'module24': 'Synthèse finale',
            'module25': 'Plan de développement'
        };
    }

    /**
     * Envoie les données d'un module vers Zoho CRM via Make
     * @param {string} moduleId - Identifiant du module (ex: 'module1')
     * @param {object} data - Données du formulaire à envoyer
     * @param {string} userEmail - Email de l'utilisateur (optionnel)
     * @returns {Promise} - Promesse de l'envoi
     */
    async sendModuleData(moduleId, data, userEmail = null) {
        try {
            // Récupération des informations utilisateur stockées
            const userData = this.getUserData();
            
            // Construction du payload pour Make
            const payload = {
                // Métadonnées
                timestamp: new Date().toISOString(),
                module_id: moduleId,
                module_name: this.moduleConfig[moduleId] || moduleId,
                
                // Données utilisateur
                user: {
                    email: userEmail || userData.email || '',
                    nom: userData.nom || '',
                    prenom: userData.prenom || '',
                    telephone: userData.telephone || '',
                    session_id: userData.session_id || this.generateSessionId()
                },
                
                // Données du module
                module_data: data,
                
                // Informations de contexte
                context: {
                    user_agent: navigator.userAgent,
                    referrer: document.referrer,
                    page_url: window.location.href,
                    browser_language: navigator.language
                }
            };

            // Log pour debug (à retirer en production)
            console.log('📤 Envoi vers Zoho CRM:', payload);

            // Envoi vers le webhook Make
            const response = await fetch(this.webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            // Log de succès
            console.log('✅ Données envoyées avec succès à Zoho CRM');
            
            // Sauvegarde locale de la confirmation d'envoi
            this.saveSubmissionStatus(moduleId, true);
            
            return {
                success: true,
                message: 'Données envoyées avec succès',
                timestamp: new Date().toISOString()
            };

        } catch (error) {
            console.error('❌ Erreur lors de l\'envoi vers Zoho:', error);
            
            // Sauvegarde locale pour retry ultérieur
            this.saveForRetry(moduleId, data);
            
            return {
                success: false,
                message: 'Erreur lors de l\'envoi des données',
                error: error.message
            };
        }
    }

    /**
     * Envoie les données complètes du bilan (tous les modules)
     * @param {string} userEmail - Email de l'utilisateur
     * @returns {Promise} - Promesse de l'envoi
     */
    async sendCompleteBilan(userEmail) {
        try {
            const allData = {};
            
            // Collecte des données de tous les modules
            for (let i = 1; i <= 25; i++) {
                const moduleKey = `module${i}`;
                const moduleData = localStorage.getItem(`${moduleKey}_data`);
                
                if (moduleData) {
                    allData[moduleKey] = JSON.parse(moduleData);
                }
            }

            // Construction du payload complet
            const payload = {
                timestamp: new Date().toISOString(),
                type: 'bilan_complet',
                user: {
                    email: userEmail,
                    ...this.getUserData()
                },
                modules_completed: Object.keys(allData),
                bilan_data: allData,
                completion_date: new Date().toISOString()
            };

            // Envoi vers Make
            const response = await fetch(this.webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            console.log('✅ Bilan complet envoyé à Zoho CRM');
            return { success: true };

        } catch (error) {
            console.error('❌ Erreur envoi bilan complet:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Récupère les données utilisateur stockées localement
     */
    getUserData() {
        const userData = localStorage.getItem('user_data');
        if (userData) {
            return JSON.parse(userData);
        }
        
        // Tentative de récupération depuis le module 1
        const module1Data = localStorage.getItem('module1_data');
        if (module1Data) {
            const data = JSON.parse(module1Data);
            return {
                nom: data.nom || '',
                prenom: data.prenom || '',
                email: data.email || '',
                telephone: data.telephone || '',
                session_id: this.getOrCreateSessionId()
            };
        }
        
        return {
            session_id: this.getOrCreateSessionId()
        };
    }

    /**
     * Génère un ID de session unique
     */
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    /**
     * Récupère ou crée un ID de session
     */
    getOrCreateSessionId() {
        let sessionId = localStorage.getItem('session_id');
        if (!sessionId) {
            sessionId = this.generateSessionId();
            localStorage.setItem('session_id', sessionId);
        }
        return sessionId;
    }

    /**
     * Sauvegarde le statut d'envoi d'un module
     */
    saveSubmissionStatus(moduleId, status) {
        const submissions = JSON.parse(localStorage.getItem('zoho_submissions') || '{}');
        submissions[moduleId] = {
            status: status,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('zoho_submissions', JSON.stringify(submissions));
    }

    /**
     * Sauvegarde les données pour un retry ultérieur en cas d'échec
     */
    saveForRetry(moduleId, data) {
        const retryQueue = JSON.parse(localStorage.getItem('zoho_retry_queue') || '[]');
        retryQueue.push({
            moduleId: moduleId,
            data: data,
            timestamp: new Date().toISOString(),
            attempts: 1
        });
        localStorage.setItem('zoho_retry_queue', JSON.stringify(retryQueue));
    }

    /**
     * Retente l'envoi des données en échec
     */
    async retryFailedSubmissions() {
        const retryQueue = JSON.parse(localStorage.getItem('zoho_retry_queue') || '[]');
        
        if (retryQueue.length === 0) {
            return;
        }

        console.log(`🔄 Tentative de renvoi de ${retryQueue.length} élément(s)...`);
        
        const newQueue = [];
        
        for (const item of retryQueue) {
            const result = await this.sendModuleData(item.moduleId, item.data);
            
            if (!result.success && item.attempts < 3) {
                // Garde dans la queue pour un nouvel essai
                item.attempts++;
                newQueue.push(item);
            }
        }
        
        localStorage.setItem('zoho_retry_queue', JSON.stringify(newQueue));
    }
}

// Création de l'instance globale
window.zohoIntegration = new ZohoIntegration();

// Retry automatique toutes les 5 minutes pour les envois en échec
setInterval(() => {
    window.zohoIntegration.retryFailedSubmissions();
}, 5 * 60 * 1000);

// Export pour utilisation dans les modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ZohoIntegration;
}

