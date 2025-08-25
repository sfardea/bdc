#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const modules = [
    {
        id: '04',
        title: 'Mes motivations',
        description: 'Identifiez ce qui vous motive vraiment dans votre travail.',
        content: {
            phases: [
                { id: 'intrinsic', title: 'Motivations intrinsèques', description: 'Ce qui vous anime de l\'intérieur' },
                { id: 'extrinsic', title: 'Motivations extrinsèques', description: 'Les facteurs externes qui vous motivent' },
                { id: 'balance', title: 'Équilibre et priorités', description: 'Hiérarchisez vos motivations' }
            ],
            motivations: [
                'Accomplissement personnel', 'Reconnaissance', 'Apprentissage continu', 'Impact social',
                'Autonomie', 'Créativité', 'Stabilité financière', 'Évolution de carrière',
                'Défis intellectuels', 'Relations humaines', 'Innovation', 'Sens du travail'
            ]
        }
    },
    {
        id: '05',
        title: 'Mon parcours professionnel',
        description: 'Retracez votre parcours et identifiez les fils conducteurs.',
        content: {
            phases: [
                { id: 'timeline', title: 'Chronologie', description: 'Vos expériences professionnelles' },
                { id: 'skills', title: 'Compétences acquises', description: 'Ce que vous avez appris' },
                { id: 'patterns', title: 'Fils conducteurs', description: 'Les thèmes récurrents' }
            ]
        }
    },
    {
        id: '06',
        title: 'Mes compétences techniques',
        description: 'Évaluez vos compétences techniques et votre niveau d\'expertise.',
        content: {
            phases: [
                { id: 'inventory', title: 'Inventaire', description: 'Listez vos compétences techniques' },
                { id: 'evaluation', title: 'Auto-évaluation', description: 'Évaluez votre niveau' },
                { id: 'development', title: 'Développement', description: 'Identifiez les axes d\'amélioration' }
            ]
        }
    },
    {
        id: '07',
        title: 'Mes compétences transversales',
        description: 'Identifiez vos compétences transférables dans différents contextes.',
        content: {
            phases: [
                { id: 'identification', title: 'Identification', description: 'Vos compétences transversales' },
                { id: 'examples', title: 'Exemples concrets', description: 'Comment vous les utilisez' },
                { id: 'transfer', title: 'Transférabilité', description: 'Dans quels contextes les mobiliser' }
            ]
        }
    },
    {
        id: '08',
        title: 'Mes soft skills',
        description: 'Évaluez vos compétences comportementales et relationnelles.',
        content: {
            categories: [
                'Communication', 'Leadership', 'Travail en équipe', 'Résolution de problèmes',
                'Adaptabilité', 'Gestion du temps', 'Intelligence émotionnelle', 'Créativité'
            ]
        }
    },
    {
        id: '09',
        title: 'Mon environnement de travail idéal',
        description: 'Définissez l\'environnement dans lequel vous êtes le plus épanoui.',
        content: {
            aspects: [
                'Culture d\'entreprise', 'Taille de l\'organisation', 'Style de management',
                'Modalités de travail', 'Ambiance', 'Valeurs', 'Secteur d\'activité'
            ]
        }
    },
    {
        id: '10',
        title: 'Mes accomplissements',
        description: 'Identifiez vos réussites et ce dont vous êtes fier.',
        content: {
            method: 'STAR',
            elements: ['Situation', 'Tâche', 'Action', 'Résultat']
        }
    },
    {
        id: '11',
        title: 'Mes centres d\'intérêt',
        description: 'Explorez vos passions et comment les intégrer professionnellement.',
        content: {
            categories: ['Personnels', 'Professionnels', 'Sociaux', 'Culturels']
        }
    },
    {
        id: '12',
        title: 'Mon analyse SWOT personnelle',
        description: 'Analysez vos forces, faiblesses, opportunités et menaces.',
        content: {
            quadrants: [
                { id: 'strengths', title: 'Forces', icon: '💪' },
                { id: 'weaknesses', title: 'Faiblesses', icon: '⚠️' },
                { id: 'opportunities', title: 'Opportunités', icon: '🚀' },
                { id: 'threats', title: 'Menaces', icon: '🛡️' }
            ]
        }
    },
    {
        id: '13',
        title: 'Mes axes de développement',
        description: 'Identifiez les compétences à développer pour atteindre vos objectifs.',
        content: {
            types: ['Compétences techniques', 'Soft skills', 'Connaissances sectorielles', 'Certifications']
        }
    },
    {
        id: '14',
        title: 'Mon projet professionnel',
        description: 'Définissez votre projet professionnel à court et moyen terme.',
        content: {
            horizons: ['6 mois', '1 an', '3 ans', '5 ans']
        }
    },
    {
        id: '15',
        title: 'Mon plan d\'action',
        description: 'Élaborez un plan d\'action concret pour réaliser votre projet.',
        content: {
            method: 'SMART',
            criteria: ['Spécifique', 'Mesurable', 'Atteignable', 'Réaliste', 'Temporel']
        }
    },
    {
        id: '16',
        title: 'Mon réseau professionnel',
        description: 'Cartographiez et développez votre réseau professionnel.',
        content: {
            types: ['Réseau proche', 'Réseau élargi', 'Réseau à développer']
        }
    },
    {
        id: '17',
        title: 'Ma stratégie de recherche',
        description: 'Définissez votre stratégie de recherche d\'emploi ou d\'évolution.',
        content: {
            canaux: ['Candidatures spontanées', 'Réseaux sociaux', 'Job boards', 'Networking', 'Cabinets']
        }
    },
    {
        id: '18',
        title: 'Mon CV optimisé',
        description: 'Créez un CV percutant adapté à votre projet.',
        content: {
            sections: ['En-tête', 'Accroche', 'Expériences', 'Compétences', 'Formation', 'Centres d\'intérêt']
        }
    },
    {
        id: '19',
        title: 'Ma lettre de motivation',
        description: 'Rédigez une lettre de motivation convaincante.',
        content: {
            structure: ['Accroche', 'Parcours', 'Motivation', 'Projection', 'Conclusion']
        }
    },
    {
        id: '20',
        title: 'Mon pitch personnel',
        description: 'Préparez votre présentation en 30 secondes, 2 minutes et 5 minutes.',
        content: {
            versions: ['Elevator pitch (30s)', 'Pitch réseau (2min)', 'Pitch entretien (5min)']
        }
    },
    {
        id: '21',
        title: 'Ma préparation aux entretiens',
        description: 'Préparez-vous aux questions d\'entretien et simulations.',
        content: {
            types: ['Questions classiques', 'Questions comportementales', 'Cas pratiques', 'Questions pièges']
        }
    },
    {
        id: '22',
        title: 'Mon personal branding',
        description: 'Développez votre marque personnelle en ligne et hors ligne.',
        content: {
            elements: ['LinkedIn', 'Portfolio', 'Réputation', 'Expertise']
        }
    },
    {
        id: '23',
        title: 'Ma négociation salariale',
        description: 'Préparez votre négociation salariale et vos arguments.',
        content: {
            aspects: ['Benchmark salarial', 'Arguments', 'Avantages', 'Stratégie']
        }
    },
    {
        id: '24',
        title: 'Mon équilibre vie pro/perso',
        description: 'Définissez vos priorités pour un équilibre épanouissant.',
        content: {
            domaines: ['Temps de travail', 'Télétravail', 'Loisirs', 'Famille', 'Santé']
        }
    },
    {
        id: '25',
        title: 'Ma synthèse et bilan final',
        description: 'Consolidez tous vos apprentissages et définissez vos prochaines étapes.',
        content: {
            sections: ['Récapitulatif', 'Points clés', 'Plan d\'action', 'Engagements']
        }
    }
];

// Générer chaque module
modules.forEach(module => {
    const etapeDir = path.join(__dirname, '..', 'etapes', `etape-${module.id}`);
    
    // Vérifier si les fichiers existent déjà
    const indexPath = path.join(etapeDir, 'index.html');
    const modulePath = path.join(etapeDir, 'module.js');
    
    if (!fs.existsSync(indexPath)) {
        console.log(`Création de l'étape ${module.id}: ${module.title}`);
        
        // Créer index.html
        const htmlContent = generateHTML(module);
        fs.writeFileSync(indexPath, htmlContent);
        
        // Créer module.js
        const jsContent = generateJS(module);
        fs.writeFileSync(modulePath, jsContent);
        
        console.log(`✓ Étape ${module.id} créée`);
    } else {
        console.log(`⏭ Étape ${module.id} existe déjà`);
    }
});

function generateHTML(module) {
    const etapeNum = parseInt(module.id);
    const prevCompleted = Array.from({length: etapeNum - 1}, (_, i) => i + 1);
    
    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Étape ${etapeNum} : ${module.title} - Bilan de Compétences</title>
    <link rel="stylesheet" href="../../shared/css/bilan-styles.css">
    <style>
        .content-section {
            background: white;
            border-radius: var(--border-radius);
            padding: 30px;
            margin: 20px 0;
        }
        
        .input-group {
            margin: 20px 0;
        }
        
        .input-group label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
            color: var(--text-dark);
        }
        
        .rating-container {
            display: flex;
            gap: 10px;
            align-items: center;
            margin: 15px 0;
        }
        
        .rating-star {
            cursor: pointer;
            font-size: 24px;
            color: #ddd;
            transition: color 0.3s;
        }
        
        .rating-star.active {
            color: #ffc107;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .skill-item {
            background: #f8f9fa;
            border: 2px solid #e0e0e0;
            border-radius: var(--border-radius-small);
            padding: 15px;
            transition: all 0.3s ease;
        }
        
        .skill-item:hover {
            border-color: var(--primary-color);
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Navigation du parcours -->
        <div class="parcours-header">
            <div class="parcours-progress">
                ${prevCompleted.slice(0, 3).map(n => `<div class="etape-indicator completed">✓</div>
                <div class="etape-connector${n < etapeNum - 1 ? ' completed' : ''}"></div>`).join('')}
                ${etapeNum <= 3 ? '' : '<div class="etape-indicator">...</div><div class="etape-connector"></div>'}
                <div class="etape-indicator active">${etapeNum}</div>
                <div class="etape-connector"></div>
                <div class="etape-indicator">${etapeNum < 25 ? etapeNum + 1 : '✓'}</div>
            </div>
            <h1 class="parcours-title">Bilan de Compétences Digitalisé</h1>
            <p class="parcours-subtitle">Étape ${etapeNum} sur 25 : ${module.title}</p>
        </div>

        <div class="module-header">
            <h2 class="module-title">${module.title}</h2>
            <p>${module.description}</p>
            <div class="progress-bar">
                <div class="progress-fill" id="progressBar"></div>
            </div>
            <p id="progressText">0% complété</p>
        </div>

        <!-- Contenu principal -->
        <div class="form-section" id="mainContent">
            <h3>Explorons ensemble : ${module.title}</h3>
            
            <div class="content-section">
                ${generateModuleContent(module)}
            </div>
            
            <div class="form-group">
                <label class="form-label">Vos réflexions et observations *</label>
                <textarea class="form-input" id="reflection" rows="6" 
                          placeholder="Partagez vos réflexions sur cet exercice..."
                          required></textarea>
                <span class="error-message" id="reflectionError"></span>
            </div>
            
            <div class="btn-container">
                <span></span>
                <button class="btn btn-primary" onclick="completeEtape()">Terminer cette étape</button>
            </div>
        </div>

        <div class="success-message" id="successMessage">
            <h3>Excellent travail ! 🎉</h3>
            <p>Vous avez complété avec succès l'étape "${module.title}".</p>
            <div class="btn-container">
                <button class="btn btn-primary" onclick="navigateToNextEtape()">
                    ${etapeNum < 25 ? 'Étape suivante' : 'Voir la synthèse'}
                </button>
            </div>
        </div>
    </div>

    <!-- Scripts partagés -->
    <script src="../../shared/js/scorm-api.js"></script>
    <script src="../../shared/js/navigation.js"></script>
    <script src="../../shared/js/analytics.js"></script>
    <script src="module.js"></script>
</body>
</html>`;
}

function generateModuleContent(module) {
    // Générer du contenu spécifique selon le type de module
    if (module.content.phases) {
        return module.content.phases.map(phase => `
            <div class="input-group">
                <h4>${phase.title}</h4>
                <p>${phase.description}</p>
                <textarea class="form-input phase-input" data-phase="${phase.id}" rows="4"
                          placeholder="Vos réflexions sur ${phase.title.toLowerCase()}..."></textarea>
            </div>
        `).join('');
    } else if (module.content.categories) {
        return `
            <div class="skills-grid">
                ${module.content.categories.map(cat => `
                    <div class="skill-item">
                        <h4>${cat}</h4>
                        <div class="rating-container" data-skill="${cat.toLowerCase().replace(/\s+/g, '-')}">
                            ${[1,2,3,4,5].map(n => `<span class="rating-star" data-rating="${n}">★</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (module.content.motivations) {
        return `
            <div class="skills-grid">
                ${module.content.motivations.map(mot => `
                    <label class="skill-item">
                        <input type="checkbox" class="motivation-check" value="${mot}">
                        <span style="margin-left: 10px;">${mot}</span>
                    </label>
                `).join('')}
            </div>
        `;
    } else {
        // Contenu générique
        return `
            <div class="input-group">
                <textarea class="form-input" id="mainInput" rows="6"
                          placeholder="Décrivez votre approche et vos réflexions..."></textarea>
            </div>
        `;
    }
}

function generateJS(module) {
    const etapeNum = parseInt(module.id);
    const className = `Etape${etapeNum}Module`;
    
    return `// Module spécifique pour l'étape ${etapeNum} : ${module.title}
class ${className} {
    constructor() {
        this.formData = {
            reflection: '',
            responses: {},
            ratings: {},
            selections: []
        };
        
        this.init();
    }

    init() {
        this.loadSavedData();
        this.setupEventListeners();
        this.updateProgress();
        
        // Track étape start
        BilanAnalytics.trackEtapeStart('etape${etapeNum}');
    }

    setupEventListeners() {
        // Reflection textarea
        const reflection = document.getElementById('reflection');
        if (reflection) {
            reflection.addEventListener('input', () => {
                this.formData.reflection = reflection.value;
                this.saveData();
                this.updateProgress();
            });
        }
        
        // Phase inputs
        document.querySelectorAll('.phase-input').forEach(input => {
            input.addEventListener('input', () => {
                this.formData.responses[input.dataset.phase] = input.value;
                this.saveData();
                this.updateProgress();
            });
        });
        
        // Rating stars
        document.querySelectorAll('.rating-container').forEach(container => {
            const skill = container.dataset.skill;
            const stars = container.querySelectorAll('.rating-star');
            
            stars.forEach(star => {
                star.addEventListener('click', () => {
                    const rating = parseInt(star.dataset.rating);
                    this.formData.ratings[skill] = rating;
                    
                    // Update UI
                    stars.forEach((s, index) => {
                        s.classList.toggle('active', index < rating);
                    });
                    
                    this.saveData();
                    this.updateProgress();
                    BilanAnalytics.trackInteraction('rating_set', { skill, rating });
                });
            });
        });
        
        // Checkboxes
        document.querySelectorAll('.motivation-check').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    if (!this.formData.selections.includes(checkbox.value)) {
                        this.formData.selections.push(checkbox.value);
                    }
                } else {
                    const index = this.formData.selections.indexOf(checkbox.value);
                    if (index > -1) {
                        this.formData.selections.splice(index, 1);
                    }
                }
                this.saveData();
                this.updateProgress();
            });
        });
        
        // Main input if exists
        const mainInput = document.getElementById('mainInput');
        if (mainInput) {
            mainInput.addEventListener('input', () => {
                this.formData.mainContent = mainInput.value;
                this.saveData();
                this.updateProgress();
            });
        }
    }

    validateForm() {
        const reflection = document.getElementById('reflection');
        if (!reflection || reflection.value.trim().length < 50) {
            const error = document.getElementById('reflectionError');
            if (error) error.textContent = 'Veuillez partager vos réflexions (minimum 50 caractères)';
            return false;
        }
        
        document.getElementById('reflectionError').textContent = '';
        return true;
    }

    completeEtape() {
        if (!this.validateForm()) {
            return;
        }
        
        this.saveData();
        
        // Marquer l'étape comme terminée
        BilanNavigation.completeEtape('etape${etapeNum}');
        
        // Show success message
        document.getElementById('mainContent').classList.add('hidden');
        document.getElementById('successMessage').style.display = 'block';
        
        // Track completion
        BilanAnalytics.trackEtapeCompletion('etape${etapeNum}', {
            data: this.formData,
            timeSpent: BilanNavigation.getTimeSpent()
        });
    }

    navigateToNextEtape() {
        ${etapeNum < 25 ? 
            `BilanNavigation.goToEtape('etape-${String(etapeNum + 1).padStart(2, '0')}');` :
            `BilanNavigation.goToEtape('synthese');`
        }
    }

    loadSavedData() {
        const savedData = BilanNavigation.getSuspendData();
        if (savedData && savedData.etape${etapeNum}) {
            this.formData = { ...this.formData, ...savedData.etape${etapeNum} };
            this.populateForm();
        }
    }

    populateForm() {
        // Restore reflection
        if (this.formData.reflection) {
            const reflection = document.getElementById('reflection');
            if (reflection) reflection.value = this.formData.reflection;
        }
        
        // Restore phase inputs
        Object.keys(this.formData.responses || {}).forEach(phase => {
            const input = document.querySelector(\`[data-phase="\${phase}"]\`);
            if (input) input.value = this.formData.responses[phase];
        });
        
        // Restore ratings
        Object.keys(this.formData.ratings || {}).forEach(skill => {
            const container = document.querySelector(\`[data-skill="\${skill}"]\`);
            if (container) {
                const rating = this.formData.ratings[skill];
                const stars = container.querySelectorAll('.rating-star');
                stars.forEach((star, index) => {
                    star.classList.toggle('active', index < rating);
                });
            }
        });
        
        // Restore checkboxes
        (this.formData.selections || []).forEach(value => {
            const checkbox = document.querySelector(\`input[value="\${value}"]\`);
            if (checkbox) checkbox.checked = true;
        });
        
        // Restore main input
        if (this.formData.mainContent) {
            const mainInput = document.getElementById('mainInput');
            if (mainInput) mainInput.value = this.formData.mainContent;
        }
    }

    saveData() {
        BilanNavigation.saveEtapeData('etape${etapeNum}', this.formData);
    }

    updateProgress() {
        let progress = 0;
        let totalElements = 1; // At least reflection
        let completedElements = 0;
        
        // Check reflection
        if (this.formData.reflection && this.formData.reflection.length >= 50) {
            completedElements++;
        }
        
        // Check phase responses
        const phaseInputs = document.querySelectorAll('.phase-input');
        if (phaseInputs.length > 0) {
            totalElements += phaseInputs.length;
            Object.values(this.formData.responses || {}).forEach(response => {
                if (response && response.length > 20) completedElements++;
            });
        }
        
        // Check ratings
        const ratingContainers = document.querySelectorAll('.rating-container');
        if (ratingContainers.length > 0) {
            totalElements += ratingContainers.length;
            completedElements += Object.keys(this.formData.ratings || {}).length;
        }
        
        // Check selections
        const checkboxes = document.querySelectorAll('.motivation-check');
        if (checkboxes.length > 0) {
            totalElements += 1; // At least some selections
            if ((this.formData.selections || []).length >= 3) completedElements++;
        }
        
        // Check main input
        const mainInput = document.getElementById('mainInput');
        if (mainInput) {
            totalElements++;
            if (this.formData.mainContent && this.formData.mainContent.length > 50) {
                completedElements++;
            }
        }
        
        progress = Math.round((completedElements / totalElements) * 100);
        
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        
        if (progressBar) progressBar.style.width = progress + '%';
        if (progressText) progressText.textContent = progress + '% complété';
        
        BilanSCORM.setScore(progress);
    }
}

// Fonctions globales pour la compatibilité
function completeEtape() {
    etape${etapeNum}Module.completeEtape();
}

function navigateToNextEtape() {
    etape${etapeNum}Module.navigateToNextEtape();
}

// Initialize module when DOM is loaded
let etape${etapeNum}Module;
document.addEventListener('DOMContentLoaded', function() {
    etape${etapeNum}Module = new ${className}();
});`;
}

console.log('\n✅ Script de génération terminé!');
console.log(`Modules créés: ${modules.filter((_, i) => !fs.existsSync(path.join(__dirname, '..', 'etapes', `etape-${modules[i].id}`, 'index.html'))).length}`);
console.log(`Modules ignorés (existants): ${modules.filter((_, i) => fs.existsSync(path.join(__dirname, '..', 'etapes', `etape-${modules[i].id}`, 'index.html'))).length}`);