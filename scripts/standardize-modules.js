#!/usr/bin/env node

/**
 * Script pour standardiser tous les modules avec :
 * - CSS partagé pour les boutons
 * - Messages de succès cohérents
 * - Transitions vers le module suivant
 */

const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, '../modules');

// Template du message de succès standardisé
const successMessageTemplate = `
    <!-- Message de succès final -->
    <div class="success-container" id="successMessage" style="display: none;">
        <div class="success-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="#10B981" fill-opacity="0.1"/>
                <path d="M20 32L28 40L44 24" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <h2>Félicitations !</h2>
        <p>Vous avez complété avec succès le module {{MODULE_NUMBER}}.</p>
        <p>{{MODULE_DESCRIPTION}}</p>
        <button class="btn btn-primary" onclick="goToNextModule()">
            Continuer vers le module {{NEXT_MODULE_NUMBER}}
            <svg class="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 15L12 10L7 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
`;

// Descriptions par module
const moduleDescriptions = {
    5: "Vous avez exploré vos préférences visuelles et vos associations personnelles.",
    6: "Votre ligne de vie personnelle et professionnelle a été tracée.",
    7: "Votre profil MBTI® a été établi avec les métiers correspondants.",
    8: "Votre figure du destin a été identifiée et analysée.",
    9: "Vos ailes du désir ont été explorées et définies.",
    10: "Votre cocktail de la réussite a été créé.",
    11: "Votre portrait chinois a été complété.",
    12: "Votre CV détaillé et vos expériences ont été analysés.",
    13: "Vos motivations au travail ont été hiérarchisées.",
    14: "Votre portefeuille de compétences a été établi.",
    15: "Vos priorités professionnelles ont été définies.",
    16: "Votre profil RIASEC et vos domaines d'intérêt ont été identifiés.",
    17: "Vos réflexions approfondies ont été recueillies.",
    18: "Vos sources de motivation principales ont été classifiées.",
    19: "Vos pistes professionnelles ont été explorées.",
    20: "Vos recherches d'orientation ont été documentées.",
    21: "Vos enquêtes métiers ont été structurées.",
    22: "Votre questionnaire 360° a été configuré.",
    23: "Votre projet professionnel a été analysé et viabilisé.",
    24: "Votre plan d'action détaillé a été établi.",
    25: "Votre synthèse complète de bilan de compétences a été générée."
};

function addCSSToModule(moduleNumber) {
    const modulePath = path.join(modulesDir, `module-${moduleNumber.toString().padStart(2, '0')}`, 'index.html');
    
    if (!fs.existsSync(modulePath)) {
        console.log(`⚠️  Module ${moduleNumber} non trouvé`);
        return;
    }
    
    let content = fs.readFileSync(modulePath, 'utf8');
    
    // Ajouter le CSS partagé s'il n'est pas déjà présent
    if (!content.includes('module-enhancements.css')) {
        content = content.replace(
            /<link rel="stylesheet" href="\/shared\/css\/modern-theme\.css">/,
            `<link rel="stylesheet" href="/shared/css/modern-theme.css">
    <link rel="stylesheet" href="/shared/css/module-enhancements.css">`
        );
        
        fs.writeFileSync(modulePath, content);
        console.log(`✅ CSS standardisé ajouté au module ${moduleNumber}`);
    }
}

function addSuccessMessageToModule(moduleNumber) {
    const modulePath = path.join(modulesDir, `module-${moduleNumber.toString().padStart(2, '0')}`, 'index.html');
    
    if (!fs.existsSync(modulePath)) {
        return;
    }
    
    let content = fs.readFileSync(modulePath, 'utf8');
    
    // Vérifier s'il y a déjà un message de succès
    if (content.includes('successMessage') || content.includes('success-container')) {
        console.log(`ℹ️  Module ${moduleNumber} a déjà un message de succès`);
        return;
    }
    
    // Créer le message personnalisé
    const nextModuleNumber = moduleNumber < 25 ? moduleNumber + 1 : 'suivant';
    const description = moduleDescriptions[moduleNumber] || 'Vous pouvez maintenant passer à l\'étape suivante.';
    
    let successMessage = successMessageTemplate
        .replace(/{{MODULE_NUMBER}}/g, moduleNumber)
        .replace(/{{MODULE_DESCRIPTION}}/g, description)
        .replace(/{{NEXT_MODULE_NUMBER}}/g, nextModuleNumber);
    
    // Ajouter avant les scripts
    content = content.replace(
        /(\s*<script src=".*?scorm-api\.js"><\/script>)/,
        successMessage + '$1'
    );
    
    fs.writeFileSync(modulePath, content);
    console.log(`✅ Message de succès ajouté au module ${moduleNumber}`);
}

function addJavaScriptFunctionsToModule(moduleNumber) {
    const jsPath = path.join(modulesDir, `module-${moduleNumber.toString().padStart(2, '0')}`, 'module.js');
    
    if (!fs.existsSync(jsPath)) {
        console.log(`⚠️  Fichier JS du module ${moduleNumber} non trouvé`);
        return;
    }
    
    let content = fs.readFileSync(jsPath, 'utf8');
    
    // Vérifier s'il y a déjà les fonctions
    if (content.includes('goToNextModule') && content.includes('showSuccessMessage')) {
        console.log(`ℹ️  Module ${moduleNumber} a déjà les fonctions nécessaires`);
        return;
    }
    
    const nextModuleNumber = moduleNumber < 25 ? (moduleNumber + 1).toString().padStart(2, '0') : '01';
    
    const jsAdditions = `

// Fonction globale pour la navigation vers le module suivant
function goToNextModule() {
    window.location.href = '/module/${nextModuleNumber}';
}

// Fonction pour afficher le message de succès standardisé
function showSuccessMessage() {
    // Masquer le contenu principal
    const mainContent = document.querySelector('.module-container, .slideshow-container, .container, main');
    if (mainContent) {
        mainContent.style.display = 'none';
    }
    
    // Afficher le message de succès
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'block';
        
        // Animation de confettis
        celebrateSuccess();
    }
    
    // Sauvegarder la complétion
    localStorage.setItem('module${moduleNumber}_completed', 'true');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animation de confettis standardisée
function celebrateSuccess() {
    const colors = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = \`
                position: fixed;
                width: 8px;
                height: 8px;
                background: \${colors[Math.floor(Math.random() * colors.length)]};
                left: \${Math.random() * 100}%;
                top: -10px;
                opacity: 1;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
            \`;
            document.body.appendChild(confetti);
            
            let posY = -10;
            let posX = parseFloat(confetti.style.left);
            let opacity = 1;
            
            const fall = setInterval(() => {
                posY += 2;
                posX += Math.sin(posY / 10) * 1;
                opacity -= 0.01;
                
                confetti.style.top = \`\${posY}px\`;
                confetti.style.left = \`\${posX}%\`;
                confetti.style.opacity = opacity;
                
                if (posY > window.innerHeight || opacity <= 0) {
                    clearInterval(fall);
                    confetti.remove();
                }
            }, 20);
        }, i * 50);
    }
}`;
    
    content += jsAdditions;
    
    fs.writeFileSync(jsPath, content);
    console.log(`✅ Fonctions JavaScript ajoutées au module ${moduleNumber}`);
}

// Exécuter pour tous les modules
console.log('🚀 Standardisation des modules en cours...\n');

for (let i = 5; i <= 25; i++) {
    console.log(`📦 Traitement du module ${i}:`);
    addCSSToModule(i);
    addSuccessMessageToModule(i);
    addJavaScriptFunctionsToModule(i);
    console.log('');
}

console.log('✨ Standardisation terminée !');
console.log('\n📋 Résumé :');
console.log('- CSS partagé ajouté à tous les modules');
console.log('- Messages de succès standardisés');
console.log('- Fonctions de navigation ajoutées');
console.log('- Animations de confettis intégrées');
