#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

// Modules déjà implémentés
const implementedModules = [1, 2];

// Template HTML pour les placeholders
const placeholderTemplate = (moduleNumber, moduleTitle) => `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module ${moduleNumber} : ${moduleTitle}</title>
    <link rel="stylesheet" href="../../shared/css/bilan-styles.css">
    <style>
        .placeholder-container {
            max-width: 600px;
            margin: 100px auto;
            padding: 40px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            text-align: center;
        }
        
        .placeholder-icon {
            font-size: 4em;
            margin-bottom: 20px;
        }
        
        .placeholder-title {
            font-size: 2em;
            color: #1155cc;
            margin-bottom: 20px;
        }
        
        .placeholder-message {
            font-size: 1.2em;
            color: #666;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        
        .btn-complete {
            padding: 15px 40px;
            background: #1155cc;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.1em;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .btn-complete:hover {
            background: #0d47a1;
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="placeholder-container">
        <div class="placeholder-icon">🚧</div>
        <h1 class="placeholder-title">Module ${moduleNumber} : ${moduleTitle}</h1>
        <p class="placeholder-message">
            Ce module est en cours de développement et sera bientôt disponible.
            <br><br>
            Dans ce module, vous pourrez explorer et travailler sur : <strong>${moduleTitle}</strong>
        </p>
        <button class="btn-complete" onclick="completeModule()">Marquer comme vu (Temporaire)</button>
    </div>

    <script>
        // SCORM basique pour les placeholders
        function initSCORM() {
            let API = null;
            let win = window;
            let attempts = 0;
            
            while ((win.API == null) && (win.parent != null) && (win.parent != win) && (attempts < 10)) {
                attempts++;
                win = win.parent;
            }
            
            API = win.API;
            
            if (API) {
                API.LMSInitialize("");
                API.LMSSetValue("cmi.core.lesson_status", "incomplete");
                API.LMSCommit("");
            }
            
            return API;
        }
        
        function completeModule() {
            const API = initSCORM();
            
            if (API) {
                API.LMSSetValue("cmi.core.lesson_status", "completed");
                API.LMSSetValue("cmi.core.score.raw", "100");
                API.LMSCommit("");
                
                setTimeout(() => {
                    API.LMSFinish("");
                }, 1000);
            }
            
            alert("Module marqué comme complété. Vous pouvez passer au module suivant.");
        }
        
        // Init au chargement
        window.onload = function() {
            initSCORM();
        };
        
        // Cleanup au déchargement
        window.onbeforeunload = function() {
            const API = initSCORM();
            if (API) {
                API.LMSFinish("");
            }
        };
    </script>
</body>
</html>`;

// Liste des modules avec leurs titres
const modules = [
    { number: 3, title: "Mes valeurs professionnelles" },
    { number: 4, title: "Mes motivations" },
    { number: 5, title: "Mon parcours professionnel" },
    { number: 6, title: "Mes compétences techniques" },
    { number: 7, title: "Mes compétences transversales" },
    { number: 8, title: "Mes soft skills" },
    { number: 9, title: "Mon environnement de travail idéal" },
    { number: 10, title: "Mes accomplissements" },
    { number: 11, title: "Mes centres d'intérêt" },
    { number: 12, title: "Mon analyse SWOT personnelle" },
    { number: 13, title: "Mes axes de développement" },
    { number: 14, title: "Mon projet professionnel" },
    { number: 15, title: "Mon plan d'action" },
    { number: 16, title: "Mon réseau professionnel" },
    { number: 17, title: "Ma stratégie de recherche" },
    { number: 18, title: "Mon CV optimisé" },
    { number: 19, title: "Ma lettre de motivation" },
    { number: 20, title: "Mon pitch personnel" },
    { number: 21, title: "Ma préparation aux entretiens" },
    { number: 22, title: "Mon personal branding" },
    { number: 23, title: "Ma négociation salariale" },
    { number: 24, title: "Mon équilibre vie pro/perso" },
    { number: 25, title: "Ma synthèse et bilan final" }
];

// Créer les placeholders
async function createPlaceholders() {
    console.log("🚀 Création des modules placeholder...\n");
    
    for (const module of modules) {
        if (!implementedModules.includes(module.number)) {
            const moduleDir = path.join(__dirname, '..', 'modules', `module-${String(module.number).padStart(2, '0')}`);
            const indexPath = path.join(moduleDir, 'index.html');
            
            // Créer le dossier si nécessaire
            await fs.ensureDir(moduleDir);
            
            // Créer le fichier HTML
            const htmlContent = placeholderTemplate(module.number, module.title);
            await fs.writeFile(indexPath, htmlContent);
            
            console.log(`✅ Module ${module.number} : ${module.title}`);
        }
    }
    
    console.log("\n✨ Tous les placeholders ont été créés !");
}

// Exécution
createPlaceholders().catch(console.error);