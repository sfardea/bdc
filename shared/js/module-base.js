// Base class for all modules with edit, versioning, and LLM capabilities
class BilanModuleBase {
    constructor(moduleId, version = '1.0.0') {
        this.moduleId = moduleId;
        this.version = version;
        this.formData = {};
        this.isCompleted = false;
        this.isEditMode = false;
        this.originalData = null;
        this.llmResponses = {};
        this.n8nAnalytics = null;
    }

    async init() {
        // Initialize n8n analytics
        if (window.N8NAnalytics) {
            this.n8nAnalytics = new window.N8NAnalytics(this.moduleId);
            await this.n8nAnalytics.trackStart();
        }

        // Load saved data and check completion status
        this.loadSavedData();
        this.checkCompletionStatus();
        
        // Setup UI based on status
        if (this.isCompleted) {
            this.setReadOnlyMode();
            this.showCompletionBadge();
            this.addEditButton();
        }
        
        // Initialize event listeners
        this.setupEventListeners();
        this.setupLLMIntegration();
        
        // Track module start
        this.trackModuleStart();
    }

    // ============= DATA MANAGEMENT WITH VERSIONING =============
    
    loadSavedData() {
        const savedData = BilanNavigation.getSuspendData();
        const moduleData = savedData?.[this.moduleId];
        
        if (moduleData) {
            // Check version and migrate if needed
            if (moduleData._version && moduleData._version !== this.version) {
                this.formData = this.migrateData(moduleData, moduleData._version, this.version);
                console.log(`Data migrated from v${moduleData._version} to v${this.version}`);
            } else {
                this.formData = { ...moduleData };
            }
            
            // Store original data for comparison
            this.originalData = JSON.parse(JSON.stringify(this.formData));
            
            // Populate form with saved data
            this.populateForm();
        }
    }

    migrateData(data, fromVersion, toVersion) {
        // Override this method in child classes for specific migrations
        const migrationKey = `${fromVersion}_to_${toVersion}`;
        const migrations = this.getDataMigrations();
        
        if (migrations[migrationKey]) {
            return migrations[migrationKey](data);
        }
        
        // Default: return data as-is
        return data;
    }

    getDataMigrations() {
        // Override in child classes to provide migration functions
        return {};
    }

    saveData() {
        // Add version and metadata
        const dataToSave = {
            ...this.formData,
            _version: this.version,
            _lastModified: new Date().toISOString(),
            _moduleId: this.moduleId,
            _completionStatus: this.isCompleted ? 'completed' : 'in_progress'
        };

        // Save to SCORM
        BilanNavigation.saveEtapeData(this.moduleId, dataToSave);

        // Send to n8n if configured
        if (window.sendToN8N) {
            window.sendToN8N(this.moduleId, 'data_saved', {
                data: this.anonymizeData(dataToSave),
                version: this.version,
                isEdit: this.isEditMode && this.isCompleted
            });
        }
    }

    anonymizeData(data) {
        const anonymized = { ...data };
        // Remove or hash sensitive fields
        const sensitiveFields = ['nom', 'prenom', 'email', 'telephone'];
        sensitiveFields.forEach(field => {
            if (anonymized[field]) {
                anonymized[field] = '[REDACTED]';
            }
        });
        return anonymized;
    }

    // ============= COMPLETION & EDIT MODE =============

    checkCompletionStatus() {
        this.isCompleted = BilanNavigation.isEtapeCompleted(this.moduleId);
    }

    setReadOnlyMode() {
        // Disable all form inputs
        document.querySelectorAll('input, select, textarea, button[type="submit"]').forEach(element => {
            element.disabled = true;
            element.classList.add('read-only');
        });

        // Add visual indicator
        document.body.classList.add('module-read-only');
    }

    enableEditMode() {
        this.isEditMode = true;
        
        // Enable form inputs
        document.querySelectorAll('input, select, textarea').forEach(element => {
            element.disabled = false;
            element.classList.remove('read-only');
        });

        // Update UI
        document.body.classList.remove('module-read-only');
        document.body.classList.add('module-edit-mode');

        // Show save changes button
        this.showSaveChangesButton();

        // Track edit mode activation
        this.trackInteraction('edit_mode_activated', {
            previousCompletion: this.formData._lastModified
        });
    }

    addEditButton() {
        const editButtonHtml = `
            <div class="edit-mode-container">
                <button id="editResponsesBtn" class="btn-edit-responses">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    Modifier mes réponses
                </button>
                <span class="completion-status">✅ Module complété le ${this.getCompletionDate()}</span>
            </div>
        `;

        // Insert at the top of the main content
        const mainContent = document.querySelector('.module-content') || document.querySelector('main');
        if (mainContent) {
            mainContent.insertAdjacentHTML('afterbegin', editButtonHtml);
            
            // Add click handler
            document.getElementById('editResponsesBtn').addEventListener('click', () => {
                this.enableEditMode();
            });
        }
    }

    showSaveChangesButton() {
        const saveButtonHtml = `
            <div class="save-changes-container">
                <button id="saveChangesBtn" class="btn-save-changes">
                    💾 Enregistrer les modifications
                </button>
                <button id="cancelChangesBtn" class="btn-cancel-changes">
                    ❌ Annuler
                </button>
                <div id="changesSummary" class="changes-summary"></div>
            </div>
        `;

        const actionsContainer = document.querySelector('.module-actions') || 
                                document.querySelector('.navigation-buttons');
        if (actionsContainer) {
            actionsContainer.insertAdjacentHTML('beforeend', saveButtonHtml);
            
            // Handlers
            document.getElementById('saveChangesBtn').addEventListener('click', () => {
                this.saveChanges();
            });
            
            document.getElementById('cancelChangesBtn').addEventListener('click', () => {
                this.cancelEdit();
            });

            // Show what changed
            this.trackChanges();
        }
    }

    trackChanges() {
        const changes = this.getChangedFields();
        const summaryEl = document.getElementById('changesSummary');
        
        if (summaryEl && changes.length > 0) {
            summaryEl.innerHTML = `
                <p>Champs modifiés: ${changes.join(', ')}</p>
            `;
        }
    }

    getChangedFields() {
        const changes = [];
        Object.keys(this.formData).forEach(key => {
            if (!key.startsWith('_') && this.originalData[key] !== this.formData[key]) {
                changes.push(key);
            }
        });
        return changes;
    }

    async saveChanges() {
        // Validate changes
        if (!this.validateForm()) {
            return;
        }

        // Save data with edit flag
        this.formData._isEdit = true;
        this.formData._editDate = new Date().toISOString();
        this.saveData();

        // Track the edit
        await this.trackInteraction('responses_edited', {
            changedFields: this.getChangedFields(),
            editDate: this.formData._editDate
        });

        // Get LLM feedback on changes if significant
        if (this.getChangedFields().length > 0) {
            await this.getLLMFeedbackOnChanges();
        }

        // Exit edit mode
        this.exitEditMode();
        
        // Show success message
        this.showNotification('Vos modifications ont été enregistrées avec succès!', 'success');
    }

    cancelEdit() {
        // Restore original data
        this.formData = JSON.parse(JSON.stringify(this.originalData));
        this.populateForm();
        
        // Exit edit mode
        this.exitEditMode();
    }

    exitEditMode() {
        this.isEditMode = false;
        this.setReadOnlyMode();
        document.body.classList.remove('module-edit-mode');
        
        // Remove save/cancel buttons
        document.querySelector('.save-changes-container')?.remove();
        
        // Show edit button again
        this.addEditButton();
    }

    showCompletionBadge() {
        const badgeHtml = `
            <div class="completion-badge">
                <div class="badge-icon">🏆</div>
                <div class="badge-text">
                    <h3>Module Complété!</h3>
                    <p>Complété le ${this.getCompletionDate()}</p>
                    <p>Score: ${this.getCompletionScore()}%</p>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('afterbegin', badgeHtml);
    }

    getCompletionDate() {
        const date = this.formData._lastModified || this.formData._completionDate;
        if (date) {
            return new Date(date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }
        return 'Date inconnue';
    }

    getCompletionScore() {
        return this.formData._completionScore || 100;
    }

    // ============= LLM INTEGRATION =============

    setupLLMIntegration() {
        // Add LLM feedback containers to the page
        this.addLLMContainers();
        
        // Setup triggers for LLM analysis
        this.setupLLMTriggers();
    }

    addLLMContainers() {
        // Add container for real-time LLM feedback
        const llmContainerHtml = `
            <div id="llm-feedback-container" class="llm-feedback-container hidden">
                <div class="llm-header">
                    <h4>💡 Assistant IA</h4>
                    <button class="llm-close" onclick="this.parentElement.parentElement.classList.add('hidden')">×</button>
                </div>
                <div class="llm-content">
                    <div class="llm-loading hidden">
                        <div class="spinner"></div>
                        <p>Analyse en cours...</p>
                    </div>
                    <div class="llm-response"></div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', llmContainerHtml);
    }

    setupLLMTriggers() {
        // Add "Get AI Feedback" buttons to key form sections
        document.querySelectorAll('.form-section').forEach(section => {
            const button = document.createElement('button');
            button.className = 'btn-ai-feedback';
            button.innerHTML = '🤖 Obtenir des conseils personnalisés';
            button.type = 'button';
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = section.id || section.className;
                this.requestLLMFeedback(sectionId);
            });
            section.appendChild(button);
        });
    }

    async requestLLMFeedback(context, specificQuestion = null) {
        const container = document.getElementById('llm-feedback-container');
        const loadingEl = container.querySelector('.llm-loading');
        const responseEl = container.querySelector('.llm-response');
        
        // Show container and loading
        container.classList.remove('hidden');
        loadingEl.classList.remove('hidden');
        responseEl.innerHTML = '';
        
        try {
            // Prepare data for LLM
            const requestData = {
                moduleId: this.moduleId,
                moduleVersion: this.version,
                context: context,
                formData: this.anonymizeData(this.formData),
                specificQuestion: specificQuestion,
                userProfile: this.getUserProfile(),
                timestamp: new Date().toISOString()
            };
            
            // Call n8n webhook for LLM processing
            const response = await fetch(this.getLLMWebhookUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const llmResponse = await response.json();
            
            // Hide loading, show response
            loadingEl.classList.add('hidden');
            this.displayLLMResponse(llmResponse, responseEl);
            
            // Store response for later reference
            this.llmResponses[context] = llmResponse;
            
            // Track interaction
            this.trackInteraction('llm_feedback_received', {
                context: context,
                responseId: llmResponse.id
            });
            
        } catch (error) {
            console.error('LLM request failed:', error);
            loadingEl.classList.add('hidden');
            responseEl.innerHTML = `
                <div class="llm-error">
                    <p>Désolé, je ne peux pas fournir de conseils en ce moment.</p>
                    <p class="error-details">Vous pouvez continuer sans l'assistance IA.</p>
                </div>
            `;
        }
    }

    displayLLMResponse(response, container) {
        const html = `
            <div class="llm-feedback">
                ${response.feedback ? `
                    <div class="feedback-main">
                        <h5>Analyse de vos réponses:</h5>
                        <p>${response.feedback}</p>
                    </div>
                ` : ''}
                
                ${response.suggestions && response.suggestions.length > 0 ? `
                    <div class="feedback-suggestions">
                        <h5>Suggestions personnalisées:</h5>
                        <ul>
                            ${response.suggestions.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${response.insights ? `
                    <div class="feedback-insights">
                        <h5>Points clés à retenir:</h5>
                        <p>${response.insights}</p>
                    </div>
                ` : ''}
                
                ${response.nextSteps ? `
                    <div class="feedback-next">
                        <h5>Prochaines étapes recommandées:</h5>
                        <p>${response.nextSteps}</p>
                    </div>
                ` : ''}
                
                ${response.resources && response.resources.length > 0 ? `
                    <div class="feedback-resources">
                        <h5>Ressources utiles:</h5>
                        <ul>
                            ${response.resources.map(r => `
                                <li><a href="${r.url}" target="_blank">${r.title}</a></li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
            
            <div class="llm-actions">
                <button onclick="this.closest('.llm-feedback-container').classList.add('hidden')" 
                        class="btn-close-feedback">Fermer</button>
                ${response.allowFollowUp ? `
                    <button onclick="moduleInstance.askFollowUpQuestion()" 
                            class="btn-follow-up">Poser une question</button>
                ` : ''}
            </div>
        `;
        
        container.innerHTML = html;
    }

    async askFollowUpQuestion() {
        const question = prompt('Quelle est votre question?');
        if (question) {
            await this.requestLLMFeedback('follow_up', question);
        }
    }

    async getLLMFeedbackOnChanges() {
        const changes = this.getChangedFields();
        if (changes.length === 0) return;
        
        const requestData = {
            moduleId: this.moduleId,
            changeType: 'edit',
            originalData: this.anonymizeData(this.originalData),
            newData: this.anonymizeData(this.formData),
            changedFields: changes
        };
        
        try {
            const response = await fetch(this.getLLMWebhookUrl(), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData)
            });
            
            if (response.ok) {
                const feedback = await response.json();
                if (feedback.significantChange) {
                    await this.requestLLMFeedback('changes_analysis');
                }
            }
        } catch (error) {
            console.error('Failed to get LLM feedback on changes:', error);
        }
    }

    getLLMWebhookUrl() {
        // Use configured URL or default
        return window.N8N_CONFIG?.webhookBaseUrl 
            ? `${window.N8N_CONFIG.webhookBaseUrl}/llm-analysis`
            : 'http://localhost:5678/webhook/llm-analysis';
    }

    getUserProfile() {
        // Get user profile from completed modules
        const suspendData = BilanNavigation.getSuspendData();
        return {
            hasCompletedModules: Object.keys(suspendData || {}).filter(k => !k.startsWith('_')),
            currentModule: this.moduleId,
            sessionDuration: BilanNavigation.getTimeSpent()
        };
    }

    // ============= HELPERS & UTILITIES =============

    populateForm() {
        Object.keys(this.formData).forEach(key => {
            if (key.startsWith('_')) return; // Skip metadata fields
            
            const element = document.getElementById(key);
            if (element) {
                if (element.type === 'radio' || element.type === 'checkbox') {
                    const input = document.querySelector(`input[name="${key}"][value="${this.formData[key]}"]`);
                    if (input) input.checked = true;
                } else {
                    element.value = this.formData[key];
                }
            }
        });
    }

    validateForm() {
        // Override in child classes
        return true;
    }

    setupEventListeners() {
        // Auto-save on input change
        document.querySelectorAll('input, select, textarea').forEach(element => {
            element.addEventListener('change', (e) => {
                this.handleFieldChange(e.target);
            });
            
            // For text inputs, also save on blur
            if (element.type === 'text' || element.type === 'textarea') {
                element.addEventListener('blur', (e) => {
                    this.handleFieldChange(e.target);
                });
            }
        });
    }

    handleFieldChange(element) {
        const key = element.name || element.id;
        const value = element.type === 'checkbox' ? element.checked : element.value;
        
        if (key) {
            this.formData[key] = value;
            this.saveData();
            
            // Track changes in edit mode
            if (this.isEditMode) {
                this.trackChanges();
            }
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '✅' : 'ℹ️'}</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // ============= TRACKING & ANALYTICS =============

    trackModuleStart() {
        if (window.BilanAnalytics) {
            BilanAnalytics.trackEtapeStart(this.moduleId);
        }
    }

    async trackInteraction(type, data = {}) {
        const interactionData = {
            ...data,
            moduleVersion: this.version,
            isEditMode: this.isEditMode,
            isCompleted: this.isCompleted
        };
        
        if (window.BilanAnalytics) {
            BilanAnalytics.trackInteraction(type, interactionData);
        }
        
        if (this.n8nAnalytics) {
            await this.n8nAnalytics.trackInteraction(type, interactionData);
        }
    }

    async completeModule() {
        if (!this.validateForm()) {
            return false;
        }
        
        // Mark as completed
        this.isCompleted = true;
        this.formData._completionDate = new Date().toISOString();
        this.formData._completionScore = this.calculateCompletionScore();
        
        // Save final data
        this.saveData();
        
        // Mark in navigation
        BilanNavigation.completeEtape(this.moduleId);
        
        // Track completion
        const completionData = {
            score: this.formData._completionScore,
            timeSpent: BilanNavigation.getTimeSpent(),
            version: this.version,
            data: this.anonymizeData(this.formData)
        };
        
        if (window.BilanAnalytics) {
            BilanAnalytics.trackEtapeCompletion(this.moduleId, completionData);
        }
        
        if (this.n8nAnalytics) {
            await this.n8nAnalytics.trackCompletion(completionData);
        }
        
        // Get final LLM feedback
        await this.requestLLMFeedback('module_completed');
        
        return true;
    }

    calculateCompletionScore() {
        // Override in child classes for specific scoring logic
        const requiredFields = Object.keys(this.formData).filter(k => !k.startsWith('_'));
        const filledFields = requiredFields.filter(k => this.formData[k] && this.formData[k] !== '');
        return Math.round((filledFields.length / requiredFields.length) * 100);
    }
}

// Export for global use
window.BilanModuleBase = BilanModuleBase;