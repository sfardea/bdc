/**
 * Module 7 - Les 16 grands types de personnalité (MBTI®)
 * Questionnaire + profil MBTI® + métiers associés
 */

class MBTIModule {
    constructor() {
        this.questions = [
            // Questions Extraversion vs Introversion
            { id: 1, dimension: 'EI', text: 'Dans une soirée, vous préférez...', 
              optionA: { label: 'Extraversion', text: 'Rencontrer de nouvelles personnes et socialiser activement' }, 
              optionB: { label: 'Introversion', text: 'Avoir des conversations profondes avec quelques personnes' }
            },
            { id: 2, dimension: 'EI', text: 'Pour recharger vos batteries, vous...', 
              optionA: { label: 'Extraversion', text: 'Sortez et passez du temps avec des amis' }, 
              optionB: { label: 'Introversion', text: 'Restez seul(e) dans un endroit calme' }
            },
            { id: 3, dimension: 'EI', text: 'Au travail, vous préférez...', 
              optionA: { label: 'Extraversion', text: 'Brainstormer en groupe et partager vos idées à voix haute' }, 
              optionB: { label: 'Introversion', text: 'Réfléchir seul(e) avant de présenter vos idées' }
            },
            { id: 4, dimension: 'EI', text: 'Quand vous apprenez quelque chose de nouveau...', 
              optionA: { label: 'Extraversion', text: 'Vous aimez en discuter avec d\'autres personnes' }, 
              optionB: { label: 'Introversion', text: 'Vous préférez l\'assimiler en privé d\'abord' }
            },
            { id: 5, dimension: 'EI', text: 'En réunion, vous...', 
              optionA: { label: 'Extraversion', text: 'Participez activement et exprimez vos pensées spontanément' }, 
              optionB: { label: 'Introversion', text: 'Écoutez attentivement et intervenez de façon réfléchie' }
            },
            
            // Questions Sensation vs iNtuition
            { id: 6, dimension: 'SN', text: 'Pour prendre une décision, vous vous fiez...', 
              optionA: { label: 'Sensation', text: 'Aux faits concrets et à votre expérience passée' }, 
              optionB: { label: 'iNtuition', text: 'À votre intuition et aux possibilités futures' }
            },
            { id: 7, dimension: 'SN', text: 'Vous préférez les tâches...', 
              optionA: { label: 'Sensation', text: 'Pratiques et concrètes avec des résultats tangibles' }, 
              optionB: { label: 'iNtuition', text: 'Créatives et conceptuelles qui explorent le possible' }
            },
            { id: 8, dimension: 'SN', text: 'Quand on vous explique quelque chose...', 
              optionA: { label: 'Sensation', text: 'Vous voulez des exemples précis et des détails' }, 
              optionB: { label: 'iNtuition', text: 'Vous cherchez le principe général et les implications' }
            },
            { id: 9, dimension: 'SN', text: 'Vous appréciez plus...', 
              optionA: { label: 'Sensation', text: 'Les méthodes éprouvées et les traditions' }, 
              optionB: { label: 'iNtuition', text: 'L\'innovation et l\'exploration de nouvelles voies' }
            },
            { id: 10, dimension: 'SN', text: 'Face à un problème complexe...', 
              optionA: { label: 'Sensation', text: 'Vous le décomposez en étapes concrètes' }, 
              optionB: { label: 'iNtuition', text: 'Vous cherchez des patterns et des connexions globales' }
            },
            
            // Questions Thinking vs Feeling
            { id: 11, dimension: 'TF', text: 'Pour évaluer une situation...', 
              optionA: { label: 'Thinking', text: 'Vous analysez logiquement les pour et les contre' }, 
              optionB: { label: 'Feeling', text: 'Vous considérez l\'impact sur les personnes impliquées' }
            },
            { id: 12, dimension: 'TF', text: 'Dans un conflit, vous...', 
              optionA: { label: 'Thinking', text: 'Vous concentrez sur les faits et la justice' }, 
              optionB: { label: 'Feeling', text: 'Cherchez à comprendre les émotions de chacun' }
            },
            { id: 13, dimension: 'TF', text: 'Vous valorisez plus...', 
              optionA: { label: 'Thinking', text: 'La compétence et l\'efficacité' }, 
              optionB: { label: 'Feeling', text: 'L\'harmonie et la coopération' }
            },
            { id: 14, dimension: 'TF', text: 'Quand vous donnez un feedback...', 
              optionA: { label: 'Thinking', text: 'Vous êtes direct(e) et vous focalisez sur les faits' }, 
              optionB: { label: 'Feeling', text: 'Vous prenez des précautions pour préserver la relation' }
            },
            { id: 15, dimension: 'TF', text: 'Vous êtes plus motivé(e) par...', 
              optionA: { label: 'Thinking', text: 'L\'accomplissement d\'objectifs et la réussite' }, 
              optionB: { label: 'Feeling', text: 'L\'aide aux autres et la contribution positive' }
            },
            
            // Questions Judging vs Perceiving
            { id: 16, dimension: 'JP', text: 'Vous préférez...', 
              optionA: { label: 'Judging', text: 'Planifier à l\'avance et suivre un programme' }, 
              optionB: { label: 'Perceiving', text: 'Garder vos options ouvertes et improviser' }
            },
            { id: 17, dimension: 'JP', text: 'Sur votre bureau...', 
              optionA: { label: 'Judging', text: 'Tout est organisé et à sa place' }, 
              optionB: { label: 'Perceiving', text: 'C\'est créativement désordonné mais vous vous y retrouvez' }
            },
            { id: 18, dimension: 'JP', text: 'Avant une deadline...', 
              optionA: { label: 'Judging', text: 'Vous terminez bien à l\'avance pour éviter le stress' }, 
              optionB: { label: 'Perceiving', text: 'Vous travaillez mieux sous pression au dernier moment' }
            },
            { id: 19, dimension: 'JP', text: 'Dans un projet...', 
              optionA: { label: 'Judging', text: 'Vous aimez avoir un plan clair et des étapes définies' }, 
              optionB: { label: 'Perceiving', text: 'Vous préférez explorer et ajuster en cours de route' }
            },
            { id: 20, dimension: 'JP', text: 'Pour vos vacances...', 
              optionA: { label: 'Judging', text: 'Vous planifiez l\'itinéraire et réservez à l\'avance' }, 
              optionB: { label: 'Perceiving', text: 'Vous partez à l\'aventure et décidez sur place' }
            }
        ];

        this.answers = {};
        this.currentQuestion = 0;
        this.results = {};
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadSavedData();
        this.displayCurrentQuestion();
        
        // Initialiser SCORM si disponible
        if (typeof initSCORM !== 'undefined') {
            initSCORM();
        }
    }

    bindEvents() {
        const validateBtn = document.getElementById('validateBtn');
        validateBtn.addEventListener('click', () => this.validateAndSubmit());
    }

    displayCurrentQuestion() {
        const questionnaireSection = document.getElementById('questionnaireSection');
        
        if (this.currentQuestion >= this.questions.length) {
            this.calculateResults();
            this.displayResults();
            return;
        }

        const question = this.questions[this.currentQuestion];
        
        questionnaireSection.innerHTML = `
            <div class="question-card">
                <div class="question-header">
                    <div class="question-number">${question.id}</div>
                    <div class="question-text">${question.text}</div>
                </div>
                
                <div class="answers-grid">
                    <div class="answer-option" data-value="A" data-question="${question.id}">
                        <div class="answer-label">${question.optionA.label}</div>
                        <div class="answer-text">${question.optionA.text}</div>
                    </div>
                    
                    <div class="answer-option" data-value="B" data-question="${question.id}">
                        <div class="answer-label">${question.optionB.label}</div>
                        <div class="answer-text">${question.optionB.text}</div>
                    </div>
                </div>
            </div>
        `;

        // Bind events pour cette question
        const answerOptions = questionnaireSection.querySelectorAll('.answer-option');
        answerOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Désélectionner les autres options
                answerOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Sélectionner cette option
                option.classList.add('selected');
                
                // Enregistrer la réponse
                const questionId = parseInt(option.dataset.question);
                const value = option.dataset.value;
                this.answers[questionId] = value;
                
                // Passer à la question suivante après un délai
                setTimeout(() => {
                    this.currentQuestion++;
                    this.updateProgress();
                    this.displayCurrentQuestion();
                    this.saveData();
                }, 800);
            });
        });

        this.updateProgress();
    }

    updateProgress() {
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        
        const progress = (this.currentQuestion / this.questions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${this.currentQuestion} / ${this.questions.length} questions`;
    }

    calculateResults() {
        const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        
        this.questions.forEach(question => {
            const answer = this.answers[question.id];
            if (answer === 'A') {
                if (question.dimension === 'EI') scores.E++;
                if (question.dimension === 'SN') scores.S++;
                if (question.dimension === 'TF') scores.T++;
                if (question.dimension === 'JP') scores.J++;
            } else if (answer === 'B') {
                if (question.dimension === 'EI') scores.I++;
                if (question.dimension === 'SN') scores.N++;
                if (question.dimension === 'TF') scores.F++;
                if (question.dimension === 'JP') scores.P++;
            }
        });

        // Déterminer le type
        const type = 
            (scores.E >= scores.I ? 'E' : 'I') +
            (scores.S >= scores.N ? 'S' : 'N') +
            (scores.T >= scores.F ? 'T' : 'F') +
            (scores.J >= scores.P ? 'J' : 'P');

        this.results = {
            type: type,
            scores: scores,
            percentages: {
                EI: Math.round((Math.max(scores.E, scores.I) / 5) * 100),
                SN: Math.round((Math.max(scores.S, scores.N) / 5) * 100),
                TF: Math.round((Math.max(scores.T, scores.F) / 5) * 100),
                JP: Math.round((Math.max(scores.J, scores.P) / 5) * 100)
            }
        };
    }

    displayResults() {
        document.getElementById('questionnaireSection').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
        document.getElementById('validateBtn').style.display = 'inline-block';

        const typeInfo = this.getTypeInfo(this.results.type);
        
        // Affichage du type principal
        document.getElementById('typeCode').textContent = this.results.type;
        document.getElementById('typeName').textContent = typeInfo.name;
        document.getElementById('typeDescription').textContent = typeInfo.description;

        // Affichage des dimensions
        this.displayDimensions();
        
        // Affichage des métiers
        this.displayCareers(typeInfo.careers);

        // Mise à jour de la barre de progression
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        progressBar.style.width = '100%';
        progressText.textContent = 'Questionnaire terminé !';
    }

    displayDimensions() {
        const dimensionsGrid = document.getElementById('dimensionsGrid');
        const scores = this.results.scores;
        
        const dimensions = [
            {
                title: 'Énergie',
                result: scores.E >= scores.I ? 'E' : 'I',
                fullName: scores.E >= scores.I ? 'Extraversion' : 'Introversion',
                percentage: this.results.percentages.EI
            },
            {
                title: 'Information',
                result: scores.S >= scores.N ? 'S' : 'N',
                fullName: scores.S >= scores.N ? 'Sensation' : 'iNtuition',
                percentage: this.results.percentages.SN
            },
            {
                title: 'Décision',
                result: scores.T >= scores.F ? 'T' : 'F',
                fullName: scores.T >= scores.F ? 'Thinking' : 'Feeling',
                percentage: this.results.percentages.TF
            },
            {
                title: 'Organisation',
                result: scores.J >= scores.P ? 'J' : 'P',
                fullName: scores.J >= scores.P ? 'Judging' : 'Perceiving',
                percentage: this.results.percentages.JP
            }
        ];

        dimensionsGrid.innerHTML = dimensions.map(dim => `
            <div class="dimension-card">
                <div class="dimension-title">${dim.title}</div>
                <div class="dimension-result">${dim.result}</div>
                <div style="font-size: 0.9rem; color: var(--gray-600); margin-bottom: 0.5rem;">${dim.fullName}</div>
                <div class="dimension-percentage">${dim.percentage}% de préférence</div>
            </div>
        `).join('');
    }

    displayCareers(careers) {
        const careersGrid = document.getElementById('careersGrid');
        careersGrid.innerHTML = careers.map(career => `
            <div class="career-item">
                ${career}
            </div>
        `).join('');
    }

    getTypeInfo(type) {
        const types = {
            'INTJ': {
                name: 'L\'Architecte',
                description: 'Stratèges imaginatifs et déterminés, avec un plan pour tout.',
                careers: ['Architecte', 'Ingénieur', 'Analyste système', 'Chercheur', 'Consultant', 'Chef de projet']
            },
            'INTP': {
                name: 'Le Penseur',
                description: 'Inventeurs innovants avec une soif intarissable de connaissances.',
                careers: ['Développeur', 'Scientifique', 'Philosophe', 'Écrivain', 'Analyste', 'Professeur']
            },
            'ENTJ': {
                name: 'Le Commandant',
                description: 'Leaders audacieux, imaginatifs et volontaires, trouvant toujours un chemin.',
                careers: ['Directeur', 'Entrepreneur', 'Manager', 'Avocat', 'Consultant', 'Politicien']
            },
            'ENTP': {
                name: 'Le Débatteur',
                description: 'Penseurs intelligents et curieux qui ne résistent jamais à un défi intellectuel.',
                careers: ['Consultant', 'Journaliste', 'Inventeur', 'Marketeur', 'Psychologue', 'Entrepreneur']
            },
            'INFJ': {
                name: 'L\'Avocat',
                description: 'Idéalistes créatifs et inspirés, toujours prêts à agir pour leurs idéaux.',
                careers: ['Psychologue', 'Conseiller', 'Écrivain', 'Artiste', 'Enseignant', 'Travailleur social']
            },
            'INFP': {
                name: 'Le Médiateur',
                description: 'Poètes altruistes et bienveillants, toujours désireux d\'aider une bonne cause.',
                careers: ['Thérapeute', 'Écrivain', 'Graphiste', 'Musicien', 'Psychologue', 'Traducteur']
            },
            'ENFJ': {
                name: 'Le Protagoniste',
                description: 'Leaders charismatiques et inspirants, capables de fasciner leurs auditeurs.',
                careers: ['Formateur', 'Coach', 'Professeur', 'Responsable RH', 'Conseiller', 'Animateur']
            },
            'ENFP': {
                name: 'L\'Inspirateur',
                description: 'Enthousiastes, créatifs et sociables, toujours capables de trouver une raison de sourire.',
                careers: ['Journaliste', 'Publicitaire', 'Psychologue', 'Artiste', 'Entrepreneur', 'Animateur']
            },
            'ISTJ': {
                name: 'Le Logisticien',
                description: 'Facteurs pragmatiques et factuels, dont la fiabilité ne peut être mise en doute.',
                careers: ['Comptable', 'Auditeur', 'Administrateur', 'Ingénieur', 'Pharmacien', 'Avocat']
            },
            'ISFJ': {
                name: 'Le Défenseur',
                description: 'Protecteurs très dévoués, toujours prêts à défendre leurs proches.',
                careers: ['Infirmier', 'Enseignant', 'Bibliothécaire', 'Assistant social', 'Conseiller', 'Secrétaire']
            },
            'ESTJ': {
                name: 'L\'Exécutif',
                description: 'Excellents administrateurs, incomparables pour gérer les choses et les gens.',
                careers: ['Manager', 'Directeur', 'Comptable', 'Ingénieur', 'Officier', 'Administrateur']
            },
            'ESFJ': {
                name: 'Le Consul',
                description: 'Personnes extraordinairement attentionnées, sociables et populaires, toujours prêtes à aider.',
                careers: ['Responsable RH', 'Enseignant', 'Vendeur', 'Organisateur d\'événements', 'Infirmier', 'Réceptionniste']
            },
            'ISTP': {
                name: 'Le Virtuose',
                description: 'Expérimentateurs audacieux et pratiques, maîtres de tous types d\'outils.',
                careers: ['Mécanicien', 'Ingénieur', 'Pilote', 'Architecte', 'Photographe', 'Chef cuisinier']
            },
            'ISFP': {
                name: 'L\'Aventurier',
                description: 'Artistes flexibles et charmants, toujours prêts à explorer de nouvelles possibilités.',
                careers: ['Artiste', 'Musicien', 'Designer', 'Photographe', 'Thérapeute', 'Vétérinaire']
            },
            'ESTP': {
                name: 'L\'Entrepreneur',
                description: 'Personnes intelligentes, énergiques et très perspicaces, qui aiment vraiment vivre à la limite.',
                careers: ['Vendeur', 'Entrepreneur', 'Négociateur', 'Acteur', 'Policier', 'Paramédic']
            },
            'ESFP': {
                name: 'L\'Amuseur',
                description: 'Amuseurs spontanés, énergiques et enthousiastes - jamais la vie n\'est ennuyeuse à leurs côtés.',
                careers: ['Acteur', 'Animateur', 'Guide touristique', 'Vendeur', 'Organisateur', 'Photographe']
            }
        };

        return types[type] || {
            name: 'Type Unique',
            description: 'Votre personnalité présente des caractéristiques uniques.',
            careers: ['Consultant', 'Analyste', 'Créatif', 'Manager', 'Spécialiste', 'Expert']
        };
    }

    validateAndSubmit() {
        // Sauvegarder les données finales
        this.saveData();
        
        // SCORM - Marquer comme complété
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module7_answers', JSON.stringify(this.answers));
            setSCORMData('module7_results', JSON.stringify(this.results));
            setSCORMData('module7_completed', 'true');
            setSCORMComplete();
        }

        this.showSuccessMessage();
    }

    showSuccessMessage() {
        const container = document.querySelector('.mbti-container');
        
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
                <div style="font-size: 3rem; margin-bottom: 1rem;">🧠</div>
                <h3 style="color: var(--white); font-size: 1.5rem; margin-bottom: 1rem;">
                    Profil MBTI® complété !
                </h3>
                <p style="opacity: 0.9; margin-bottom: 1.5rem;">
                    Votre type de personnalité ${this.results.type} vous aidera à mieux comprendre vos préférences
                    et à identifier les environnements professionnels qui vous conviennent le mieux.
                </p>
                <div style="background: rgba(255, 255, 255, 0.2); padding: 1rem; border-radius: var(--radius); margin: 1rem 0;">
                    <strong>Votre type :</strong> ${this.results.type}<br>
                    <strong>Profil :</strong> ${this.getTypeInfo(this.results.type).name}
                </div>
                <p style="font-size: 0.9rem; opacity: 0.8;">
                    Ces insights enrichiront votre compréhension de votre profil professionnel.
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

        // Redirection après 4 secondes
        setTimeout(() => {
            if (typeof parent !== 'undefined' && parent.postMessage) {
                parent.postMessage({
                    type: 'module-completed',
                    module: 'module-07',
                    data: {
                        personalityType: this.results.type,
                        typeInfo: this.getTypeInfo(this.results.type),
                        scores: this.results.scores,
                        answers: this.answers,
                        completed: true
                    }
                }, '*');
            }
        }, 4000);
    }

    saveData() {
        const data = {
            answers: this.answers,
            currentQuestion: this.currentQuestion,
            results: this.results,
            timestamp: new Date().toISOString()
        };

        // LocalStorage pour développement
        localStorage.setItem('module7_data', JSON.stringify(data));

        // SCORM pour production
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module7_answers', JSON.stringify(this.answers));
            setSCORMData('module7_results', JSON.stringify(this.results));
        }
    }

    loadSavedData() {
        // Essayer de charger depuis SCORM d'abord
        let savedData = null;
        
        if (typeof getSCORMData !== 'undefined') {
            const scormAnswers = getSCORMData('module7_answers');
            const scormResults = getSCORMData('module7_results');
            
            if (scormAnswers) {
                savedData = {
                    answers: JSON.parse(scormAnswers),
                    results: scormResults ? JSON.parse(scormResults) : null
                };
            }
        }

        // Fallback sur localStorage
        if (!savedData) {
            const localData = localStorage.getItem('module7_data');
            if (localData) {
                savedData = JSON.parse(localData);
            }
        }

        if (savedData) {
            // Restaurer les données
            this.answers = savedData.answers || {};
            this.results = savedData.results || {};
            
            // Si les résultats existent déjà, les afficher directement
            if (savedData.results && Object.keys(savedData.results).length > 0) {
                this.currentQuestion = this.questions.length; // Aller directement aux résultats
                this.displayResults();
            } else {
                this.currentQuestion = savedData.currentQuestion || 0;
            }
        }
    }
}

// Initialiser le module au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    new MBTIModule();
});