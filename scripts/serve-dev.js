#!/usr/bin/env node

const express = require('express');
const path = require('path');
const fs = require('fs');

class DevServer {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.projectDir = process.cwd();
        this.setupServer();
    }

    setupServer() {
        // Servir les fichiers statiques
        this.app.use('/shared', express.static(path.join(this.projectDir, 'shared')));
        this.app.use('/modules', express.static(path.join(this.projectDir, 'modules')));
        this.app.use('/etapes', express.static(path.join(this.projectDir, 'etapes')));
        
        // Page d'accueil avec navigation
        this.app.get('/', (req, res) => {
            res.send(this.generateHomePage());
        });
        
        // Route pour tester un module spécifique
        this.app.get('/module/:moduleId', (req, res) => {
            const moduleId = req.params.moduleId;
            
            // Try modules first (preferred structure), then etapes (backup)
            let modulePath = path.join(this.projectDir, 'modules', `module-${moduleId.padStart(2, '0')}`, 'index.html');
            
            if (!fs.existsSync(modulePath)) {
                // Fallback to etapes structure
                modulePath = path.join(this.projectDir, 'etapes', `etape-${moduleId.padStart(2, '0')}`, 'index.html');
            }
            
            if (fs.existsSync(modulePath)) {
                res.sendFile(modulePath);
            } else {
                res.status(404).send(`
                    <h1>Module ${moduleId} non trouvé</h1>
                    <p>Vérifié dans:</p>
                    <ul>
                        <li>etapes/etape-${moduleId.padStart(2, '0')}/index.html</li>
                        <li>modules/module-${moduleId.padStart(2, '0')}/index.html</li>
                    </ul>
                    <p><a href="/">← Retour à l'accueil</a></p>
                `);
            }
        });
        
        // API pour récupérer les données de développement (simule SCORM)
        this.app.use(express.json());
        
        this.app.post('/api/save-data', (req, res) => {
            console.log('💾 Données sauvegardées:', req.body);
            res.json({ status: 'success', message: 'Données sauvegardées en développement' });
        });
        
        this.app.get('/api/load-data/:moduleId', (req, res) => {
            // En développement, retourner des données vides
            res.json({ moduleData: null });
        });
    }

    generateHomePage() {
        const modules = this.getAvailableModules();
        
        return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bilan de Compétences Digitalisé</title>
    <link rel="stylesheet" href="/shared/css/modern-theme.css">
    <style>
        /* Page-specific styles */
        .hero-header {
            background: var(--white);
            border-radius: var(--radius-2xl);
            padding: 3rem;
            margin-bottom: 2rem;
            text-align: center;
            box-shadow: var(--shadow-xl);
            position: relative;
            overflow: hidden;
        }

        .hero-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
        }

        .hero-title {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 1rem;
        }

        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--gray-600);
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .dev-badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: var(--primary-bg);
            color: var(--primary);
            border-radius: var(--radius);
            font-size: 0.875rem;
            font-weight: 600;
        }

        .stats-section {
            background: var(--white);
            border-radius: var(--radius-2xl);
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: var(--shadow-lg);
        }

        .stats-section h2 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .stat-card {
            background: var(--gray-50);
            border-radius: var(--radius-lg);
            padding: 1.5rem;
            text-align: center;
            border: 2px solid var(--gray-200);
            transition: var(--transition);
        }

        .stat-card:hover {
            border-color: var(--primary-light);
            transform: translateY(-2px);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--primary);
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .stat-label {
            font-size: 0.875rem;
            color: var(--gray-600);
            margin-top: 0.5rem;
            font-weight: 500;
        }

        .modules-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 1.5rem;
        }

        .module-card {
            background: var(--white);
            border-radius: var(--radius-xl);
            overflow: hidden;
            box-shadow: var(--shadow-lg);
            transition: var(--transition);
            border: 2px solid transparent;
        }

        .module-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-xl);
        }

        .module-card.implemented {
            border-color: var(--success);
        }

        .module-card.implemented:hover {
            border-color: var(--secondary-dark);
        }

        .module-card.placeholder {
            opacity: 0.8;
            border-color: var(--accent);
        }

        .module-header {
            padding: 1.5rem;
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: var(--white);
            position: relative;
        }

        .module-number {
            font-size: 1.5rem;
            font-weight: 800;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .module-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-top: 0.5rem;
            line-height: 1.4;
        }

        .module-body {
            padding: 1.5rem;
        }

        .module-status {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: var(--radius);
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 1rem;
        }

        .status-implemented {
            background: rgba(16, 185, 129, 0.1);
            color: var(--success);
        }

        .status-placeholder {
            background: rgba(245, 158, 11, 0.1);
            color: var(--accent);
        }

        .module-description {
            color: var(--gray-600);
            font-size: 0.875rem;
            margin-bottom: 1rem;
        }

        .module-actions {
            margin-top: 1rem;
        }

        .btn-test {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: var(--white);
            padding: 0.5rem 1rem;
            border: none;
            border-radius: var(--radius);
            cursor: pointer;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            font-weight: 600;
            transition: var(--transition-fast);
        }

        .btn-test:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
        }

        .btn-test.placeholder {
            background: linear-gradient(135deg, var(--accent), #D97706);
        }

        @media (max-width: 768px) {
            .hero-title {
                font-size: 2rem;
            }
            
            .modules-grid {
                grid-template-columns: 1fr;
            }
            
            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="container animate-fade-in">
        <header class="hero-header">
            <h1 class="hero-title title-gradient">
                Bilan de Compétences Digitalisé
            </h1>
            <p class="hero-subtitle">
                Découvrez et développez vos compétences professionnelles à travers un parcours personnalisé et interactif
            </p>
            <div class="dev-badge">
                🚀 Environnement de développement - Port ${this.port}
            </div>
        </header>
        
        <section class="stats-section">
            <h2>📊 État du Projet</h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">${modules.implemented}</div>
                    <div class="stat-label">Modules Implémentés</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${modules.placeholder}</div>
                    <div class="stat-label">En Développement</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${modules.total}</div>
                    <div class="stat-label">Total Modules</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${Math.round((modules.implemented / modules.total) * 100)}%</div>
                    <div class="stat-label">Progression</div>
                </div>
            </div>
        </section>

        <main class="modules-grid">
            ${this.generateModuleCards()}
        </main>
    </div>
    
    <script>
        console.log('🚀 Bilan de Compétences Digitalisé');
        console.log('💡 Modifiez les modules et rechargez pour voir les changements');
        
        // Animation des cartes au scroll
        const observeCards = () => {
            const cards = document.querySelectorAll('.module-card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                        }, index * 100);
                    }
                });
            }, { threshold: 0.1 });
            
            cards.forEach(card => observer.observe(card));
        };
        
        document.addEventListener('DOMContentLoaded', observeCards);
    </script>
</body>
</html>`;
    }

    getAvailableModules() {
        // Compter selon les vrais modules implémentés
        const modules = [
            // PHASE PRÉLIMINAIRE (4 modules)
            { id: '01', implemented: true },   // Présentons-nous
            { id: '02', implemented: true },   // Mon autoportrait  
            { id: '03', implemented: true },   // Présentation du bilan
            { id: '04', implemented: true },   // Les objectifs du bilan
            
            // PHASE INVESTIGATION PERSONNELLE (7 modules)
            { id: '05', implemented: true },   // Photo langage
            { id: '06', implemented: true },   // Mes courbes de vie
            { id: '07', implemented: true },   // MBTI
            { id: '08', implemented: true },  // 32 figures du destin
            { id: '09', implemented: true },  // Ailes du Désir
            { id: '10', implemented: true },  // Cocktail de la réussite
            { id: '11', implemented: true },  // Portrait chinois
            
            // PHASE INVESTIGATION PROFESSIONNELLE (11 modules)  
            { id: '12', implemented: true },  // Mes Réalisations
            { id: '13', implemented: true },  // Motivations au travail
            { id: '14', implemented: true },  // Portefeuille de compétences
            { id: '15', implemented: true },  // Priorités professionnelles
            { id: '16', implemented: true },  // Profil RIASEC
            { id: '17', implemented: true },  // 6 questions
            { id: '18', implemented: true },  // Classification motivations
            { id: '19', implemented: true },  // J'investigue les pistes
            { id: '20', implemented: true },  // Déporientation
            { id: '21', implemented: true },  // Enquêtes métiers
            { id: '22', implemented: true },  // Questionnaire 360
            
            // PHASE CONCLUSION (3 modules)
            { id: '23', implemented: true },  // Viabilisation projet
            { id: '24', implemented: true },  // Plan d'action
            { id: '25', implemented: true }   // Synthèse
        ];
        
        const implemented = modules.filter(m => m.implemented).length;
        const placeholder = modules.filter(m => !m.implemented).length; 
        const total = modules.length;
        
        return { implemented, placeholder, total };
    }

    generateModuleCards() {
        const modules = [
            // PHASE PRÉLIMINAIRE (Modules 1-4)
            { id: '01', title: 'Présentons-nous', description: 'Profil consultant et formulaire utilisateur simple', implemented: true, phase: 'Phase Préliminaire' },
            { id: '02', title: 'Mon autoportrait', description: 'Module texte libre guidé par questions ouvertes', implemented: true, phase: 'Phase Préliminaire' },
            { id: '03', title: 'Présentation du bilan', description: 'Slideshow expliquant la méthodologie + charte déontologique', implemented: true, phase: 'Phase Préliminaire' },
            { id: '04', title: 'Les objectifs du bilan', description: 'Objectifs prédéfinis à cocher + objectif principal personnalisé', implemented: true, phase: 'Phase Préliminaire' },
            
            // PHASE INVESTIGATION PERSONNELLE (Modules 5-11)
            { id: '05', title: 'Photo langage', description: 'Sélection de 3 images parmi 20 + explications', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '06', title: 'Mes courbes de vie', description: 'Outil graphique interactif - lignes de temps personnelle/professionnelle', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '07', title: 'Les 16 grands types de personnalité (MBTI®)', description: 'Questionnaire + profil MBTI® + métiers associés', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '08', title: 'Les 32 figures du destin', description: 'Atelier créatif avec introduction et interaction', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '09', title: 'Les Ailes du Désir', description: 'Atelier créatif similaire aux figures du destin', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '10', title: 'Le cocktail de la réussite', description: 'Listing ingédients + description du cocktail final', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '11', title: 'Le portrait chinois', description: 'Questions "Si j\'\u00e9tais un(e)..." + justifications', implemented: true, phase: 'Phase d\'Investigation' },
            
            // PHASE INVESTIGATION PROFESSIONNELLE (Modules 12-22)
            { id: '12', title: 'Mes Réalisations (Revue CV Détaillé)', description: 'Formulaire dynamique expériences/formations avec missions et compétences', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '13', title: 'Mes motivations au travail', description: 'Drag-and-drop de 20 facteurs en 3 colonnes de priorité', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '14', title: 'Mon portefeuille de compétences', description: 'Auto-évaluation Savoirs/Savoir-faire/Savoir-être + lien expériences', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '15', title: 'Mon tableau de priorités professionnelles', description: 'Allocation de 100 points entre critères + hiérarchisation', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '16', title: 'Profil RIASEC', description: 'Test de Holland + code RIASEC + domaines professionnels', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '17', title: 'Réponses en champ libre 6 questions', description: '6 questions précises sur journée idéale, problèmes à résoudre...', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '18', title: 'Classification sources de motivation', description: 'Sélection 5 plus importants du module 13 + justifications', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '19', title: 'J\'investigue les pistes', description: 'Brainstorming + création cartes de piste avec notes', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '20', title: 'http://deporientation.free.fr/', description: 'Lien externe + champ notes intégré pour recherches', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '21', title: 'Enquêtes métiers et marché du travail', description: 'Guide PDF + formulaire structuré par enquête menée', implemented: true, phase: 'Phase d\'Investigation' },
            { id: '22', title: 'Questionnaire 360', description: 'Envoi e-mails questionnaire anonyme + rapport synthèse automatique', implemented: true, phase: 'Phase d\'Investigation' },
            
            // PHASE CONCLUSION (Modules 23-25)
            { id: '23', title: 'Viabilisation projet professionnel', description: 'Sélection piste principale + SWOT avec pré-remplissage intelligent', implemented: true, phase: 'Phase de Conclusion' },
            { id: '24', title: 'Plan d\'action', description: 'Créateur plan d\'action avec étapes, indicateurs, dates, ressources', implemented: true, phase: 'Phase de Conclusion' },
            { id: '25', title: 'Synthèse', description: 'Génération PDF automatique + compilation données parcours', implemented: true, phase: 'Phase de Conclusion' }
        ];

        return modules.map(module => `
            <div class="module-card ${module.implemented ? 'implemented' : 'placeholder'}">
                <div class="module-header">
                    <div class="module-number">Module ${module.id}</div>
                    <div class="module-title">${module.title}</div>
                </div>
                <div class="module-body">
                    <div class="module-status ${module.implemented ? 'status-implemented' : 'status-placeholder'}">
                        ${module.implemented ? '✅ Implémenté' : '🚧 En développement'}
                    </div>
                    <div class="phase-tag" style="display: inline-block; padding: 0.25rem 0.5rem; background: rgba(99, 102, 241, 0.1); color: var(--primary); border-radius: var(--radius); font-size: 0.75rem; font-weight: 600; margin-bottom: 0.75rem;">
                        ${module.phase}
                    </div>
                    <div class="module-actions">
                        <a href="/module/${module.id}" class="btn-test ${module.implemented ? '' : 'placeholder'}" target="_blank">
                            ${module.implemented ? '🚀 Tester le module' : '👀 Voir l\'aperçu'}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('🚀 Serveur de développement démarré !');
            console.log(`📍 URL: http://localhost:${this.port}`);
            console.log('');
            console.log('📋 Commandes disponibles :');
            console.log(`   • http://localhost:${this.port}          - Page d'accueil avec tous les modules`);
            console.log(`   • http://localhost:${this.port}/module/01 - Tester le module 1`);
            console.log(`   • http://localhost:${this.port}/module/02 - Tester le module 2`);
            console.log('');
            console.log('💡 Modifiez les fichiers et rechargez votre navigateur pour voir les changements');
            console.log('🛑 Appuyez sur Ctrl+C pour arrêter le serveur');
        });
    }
}

// Start server if called directly
if (require.main === module) {
    const server = new DevServer();
    server.start();
}

module.exports = DevServer;