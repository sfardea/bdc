#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const archiver = require('archiver');

class SCORMBuilder {
    constructor() {
        this.projectDir = process.cwd();
        this.buildDir = path.join(this.projectDir, 'build');
        this.distDir = path.join(this.projectDir, 'dist');
    }

    async build() {
        console.log('🚀 Construction du package SCORM unifié...\n');

        try {
            // 1. Nettoyer et créer les dossiers de build
            await this.cleanBuildDir();
            
            // 2. Copier les fichiers du projet
            await this.copyProjectFiles();
            
            // Pas d'index principal nécessaire pour les modules séparés
            
            // 4. Valider la structure SCORM
            await this.validateSCORMStructure();
            
            // 5. Créer le package ZIP
            await this.createZipPackage();
            
            console.log('✅ Package SCORM créé avec succès !');
            console.log(`📦 Fichier: ${path.join(this.distDir, 'bilan-competences-complet.zip')}`);
            
        } catch (error) {
            console.error('❌ Erreur lors de la construction:', error.message);
            process.exit(1);
        }
    }

    async cleanBuildDir() {
        console.log('🧹 Nettoyage des dossiers de build...');
        await fs.remove(this.buildDir);
        await fs.remove(this.distDir);
        await fs.ensureDir(this.buildDir);
        await fs.ensureDir(this.distDir);
    }

    async copyProjectFiles() {
        console.log('📁 Copie des fichiers du projet...');
        
        // Copier le manifest principal
        await fs.copy(
            path.join(this.projectDir, 'imsmanifest.xml'),
            path.join(this.buildDir, 'imsmanifest.xml')
        );
        
        // Copier le dossier shared
        await fs.copy(
            path.join(this.projectDir, 'shared'),
            path.join(this.buildDir, 'shared')
        );
        
        // Copier le dossier modules (au lieu d'etapes)
        await fs.copy(
            path.join(this.projectDir, 'modules'),
            path.join(this.buildDir, 'modules')
        );
        
        console.log('  ✓ Fichiers copiés');
    }

    async generateMainIndex() {
        console.log('📄 Génération de l\'index principal...');
        
        const indexContent = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bilan de Compétences Digitalisé</title>
    <link rel="stylesheet" href="shared/css/bilan-styles.css">
    <style>
        .welcome-container {
            max-width: 800px;
            margin: 50px auto;
            padding: 40px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            text-align: center;
        }
        
        .logo {
            font-size: 3em;
            color: var(--primary-color);
            margin-bottom: 20px;
        }
        
        .welcome-title {
            font-size: 2.5em;
            color: var(--primary-color);
            margin-bottom: 20px;
        }
        
        .welcome-description {
            font-size: 1.2em;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 40px;
        }
        
        .start-btn {
            font-size: 1.3em;
            padding: 20px 50px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .start-btn:hover {
            background: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(17, 85, 204, 0.3);
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin: 40px 0;
            text-align: left;
        }
        
        .info-card {
            background: var(--bg-secondary);
            padding: 25px;
            border-radius: 10px;
        }
        
        .info-card h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="welcome-container">
        <div class="logo">🎯</div>
        <h1 class="welcome-title">Bilan de Compétences Digitalisé</h1>
        <p class="welcome-description">
            Découvrez vos talents, explorez vos possibilités et construisez votre projet professionnel 
            grâce à un parcours interactif de 25 étapes personnalisées.
        </p>
        
        <div class="info-grid">
            <div class="info-card">
                <h3>🚀 Durée estimée</h3>
                <p>Entre 8 et 12 heures réparties selon votre rythme</p>
            </div>
            <div class="info-card">
                <h3>📱 Compatible</h3>
                <p>Fonctionne sur ordinateur, tablette et smartphone</p>
            </div>
            <div class="info-card">
                <h3>💾 Sauvegarde automatique</h3>
                <p>Vos progrès sont automatiquement enregistrés</p>
            </div>
            <div class="info-card">
                <h3>🎨 Interactif</h3>
                <p>Activités créatives et outils de réflexion variés</p>
            </div>
        </div>
        
        <button class="start-btn" onclick="startBilan()">Commencer mon bilan</button>
    </div>

    <script src="shared/js/scorm-api.js"></script>
    <script src="shared/js/navigation.js"></script>
    <script src="shared/js/analytics.js"></script>
    <script>
        function startBilan() {
            // Enregistrer le démarrage
            BilanAnalytics.trackEvent('bilan_started', {
                startTime: new Date().toISOString(),
                userAgent: navigator.userAgent
            });
            
            // Rediriger vers la première étape
            BilanNavigation.goToEtape('etape-01');
        }
        
        // Initialisation
        document.addEventListener('DOMContentLoaded', function() {
            // Vérifier si l'utilisateur a déjà commencé
            const suspendData = BilanNavigation.getSuspendData();
            if (suspendData && suspendData.currentEtape) {
                const continueBtn = document.createElement('button');
                continueBtn.className = 'btn btn-secondary';
                continueBtn.textContent = 'Continuer mon bilan';
                continueBtn.style.marginLeft = '20px';
                continueBtn.onclick = () => BilanNavigation.goToEtape(suspendData.currentEtape);
                
                document.querySelector('.start-btn').parentNode.appendChild(continueBtn);
            }
        });
    </script>
</body>
</html>`;

        await fs.writeFile(path.join(this.buildDir, 'index.html'), indexContent);
        console.log('  ✓ Index principal généré');
    }

    async validateSCORMStructure() {
        console.log('🔍 Validation de la structure SCORM...');
        
        const requiredFiles = [
            'imsmanifest.xml',
            'shared/js/scorm-api.js',
            'shared/css/bilan-styles.css',
            'modules/module-01/index.html',
            'modules/module-01/module.js'
        ];
        
        for (const file of requiredFiles) {
            const filePath = path.join(this.buildDir, file);
            if (!await fs.pathExists(filePath)) {
                throw new Error(`Fichier manquant: ${file}`);
            }
        }
        
        // Valider le manifest XML
        const manifestContent = await fs.readFile(path.join(this.buildDir, 'imsmanifest.xml'), 'utf8');
        if (!manifestContent.includes('BILAN_COMPETENCES_COMPLET')) {
            throw new Error('Manifest XML invalide');
        }
        
        console.log('  ✓ Structure SCORM validée');
    }

    async createZipPackage() {
        console.log('📦 Création du package ZIP...');
        
        return new Promise((resolve, reject) => {
            const output = fs.createWriteStream(path.join(this.distDir, 'bilan-competences-complet.zip'));
            const archive = archiver('zip', { zlib: { level: 9 } });
            
            output.on('close', () => {
                console.log(`  ✓ Package créé (${archive.pointer()} bytes)`);
                resolve();
            });
            
            output.on('error', reject);
            archive.on('error', reject);
            
            archive.pipe(output);
            
            // Ajouter tous les fichiers du build au ZIP
            archive.directory(this.buildDir, false);
            
            archive.finalize();
        });
    }

    async generateReport() {
        const reportData = {
            buildTime: new Date().toISOString(),
            projectName: 'Bilan de Compétences Digitalisé',
            version: '1.0.0',
            scormVersion: '1.2',
            totalEtapes: 25,
            implementedEtapes: 2,
            files: await this.getFilesList(),
            size: await this.getPackageSize()
        };
        
        await fs.writeJSON(path.join(this.distDir, 'build-report.json'), reportData, { spaces: 2 });
        
        console.log('\n📊 Rapport de construction:');
        console.log(`  • Nom: ${reportData.projectName}`);
        console.log(`  • Version: ${reportData.version}`);
        console.log(`  • SCORM: ${reportData.scormVersion}`);
        console.log(`  • Étapes implémentées: ${reportData.implementedEtapes}/${reportData.totalEtapes}`);
        console.log(`  • Taille: ${(reportData.size / 1024 / 1024).toFixed(2)} MB`);
    }

    async getFilesList() {
        const files = [];
        const walkDir = async (dir, relative = '') => {
            const items = await fs.readdir(path.join(this.buildDir, relative));
            for (const item of items) {
                const itemPath = path.join(relative, item);
                const fullPath = path.join(this.buildDir, itemPath);
                const stat = await fs.stat(fullPath);
                
                if (stat.isDirectory()) {
                    await walkDir(dir, itemPath);
                } else {
                    files.push({
                        path: itemPath,
                        size: stat.size
                    });
                }
            }
        };
        
        await walkDir(this.buildDir);
        return files;
    }

    async getPackageSize() {
        const zipPath = path.join(this.distDir, 'bilan-competences-complet.zip');
        const stat = await fs.stat(zipPath);
        return stat.size;
    }
}

// Exécution du script
if (require.main === module) {
    const builder = new SCORMBuilder();
    builder.build()
        .then(() => builder.generateReport())
        .catch(error => {
            console.error('❌', error);
            process.exit(1);
        });
}

module.exports = SCORMBuilder;