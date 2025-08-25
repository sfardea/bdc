#!/usr/bin/env node

/**
 * Script pour organiser et exporter tous les artifacts du projet
 * Bilan de Compétences Digitalisé
 * 
 * Usage: node export-artifacts.js
 */

const fs = require('fs');
const path = require('path');

// Configuration des artifacts à exporter
const ARTIFACTS = {
  // Documentation et Prompts
  documentation: [
    {
      id: 'prompt-bilan-competences',
      filename: 'PROMPT_PRINCIPAL.md',
      description: 'Prompt exhaustif pour la création du parcours'
    },
    {
      id: 'prompt-template-generation-modules',
      filename: 'TEMPLATE_GENERATION_MODULES.md',
      description: 'Template pour générer automatiquement les modules'
    },
    {
      id: 'integration-guide-module-1',
      filename: 'GUIDE_INTEGRATION.md',
      description: 'Guide d\'intégration complet'
    },
    {
      id: 'project-structure-guide',
      filename: 'STRUCTURE_PROJET.md',
      description: 'Structure complète du projet'
    }
  ],

  // Module 1 - Présentons-nous
  'module-01': [
    {
      id: 'module-1-presentons-nous',
      filename: 'index.html',
      description: 'Module SCORM 1 - HTML complet'
    },
    {
      id: 'imsmanifest-module-1',
      filename: 'imsmanifest.xml',
      description: 'Manifeste SCORM Module 1'
    },
    {
      id: 'n8n-workflow-module-1',
      filename: 'workflow-analytics.json',
      description: 'Workflow n8n pour Module 1'
    }
  ],

  // Module 2 - Mon autoportrait
  'module-02': [
    {
      id: 'module-2-autoportrait',
      filename: 'index.html',
      description: 'Module SCORM 2 - HTML avec canvas interactif'
    },
    {
      id: 'imsmanifest-module-2',
      filename: 'imsmanifest.xml',
      description: 'Manifeste SCORM Module 2'
    },
    {
      id: 'n8n-workflow-module-2',
      filename: 'workflow-analytics.json',
      description: 'Workflow n8n pour Module 2 avec analyse IA'
    },
    {
      id: 'n8n-blason-analysis-config',
      filename: 'blason-analysis-config.js',
      description: 'Configuration pour l\'analyse du blason'
    }
  ]
};

// Structure des dossiers à créer
const PROJECT_STRUCTURE = {
  'bilan-competences-digital': {
    'documentation': {},
    'modules': {
      'module-01-presentons-nous': {},
      'module-02-autoportrait': {},
      'module-03-presentation-bilan': {},
      // ... autres modules
    },
    'n8n-workflows': {},
    'infrastructure': {
      'database': {},
      'grafana': {
        'dashboards': {},
        'datasources': {}
      },
      'docker': {}
    },
    'api': {},
    'templates': {},
    'scripts': {},
    'assets': {
      'images': {},
      'icons': {},
      'fonts': {}
    }
  }
};

/**
 * Créer récursivement la structure de dossiers
 */
function createDirectoryStructure(basePath, structure) {
  Object.entries(structure).forEach(([dir, subDirs]) => {
    const dirPath = path.join(basePath, dir);
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`✅ Créé: ${dirPath}`);
    }
    
    if (Object.keys(subDirs).length > 0) {
      createDirectoryStructure(dirPath, subDirs);
    }
  });
}

/**
 * Message pour copier manuellement les artifacts
 */
function generateExportInstructions() {
  console.log('\n📋 INSTRUCTIONS D\'EXPORT DES ARTIFACTS\n');
  console.log('=' * 50);
  
  Object.entries(ARTIFACTS).forEach(([category, artifacts]) => {
    console.log(`\n📁 ${category.toUpperCase()}`);
    console.log('-'.repeat(40));
    
    artifacts.forEach(artifact => {
      const targetPath = getTargetPath(category, artifact.filename);
      console.log(`\n📄 ${artifact.description}`);
      console.log(`   Artifact ID: ${artifact.id}`);
      console.log(`   Destination: ${targetPath}`);
      console.log(`   Action: Copier le contenu de l'artifact dans ce fichier`);
    });
  });
  
  console.log('\n' + '=' * 50);
}

/**
 * Obtenir le chemin de destination pour un artifact
 */
function getTargetPath(category, filename) {
  const paths = {
    'documentation': `documentation/${filename}`,
    'module-01': `modules/module-01-presentons-nous/${filename}`,
    'module-02': `modules/module-02-autoportrait/${filename}`,
  };
  
  return paths[category] || filename;
}

/**
 * Générer des fichiers README pour chaque dossier
 */
function generateReadmeFiles(basePath) {
  const readmeContent = {
    'modules': `# Modules SCORM

Ce dossier contient tous les modules SCORM du parcours de Bilan de Compétences.

## Structure d'un module

Chaque module contient :
- \`index.html\` : Le contenu interactif du module
- \`imsmanifest.xml\` : Le manifeste SCORM
- \`assets/\` : Ressources (images, styles, scripts)

## Modules disponibles

1. **Module 01 - Présentons-nous** : Formulaire de présentation
2. **Module 02 - Mon autoportrait** : Questionnaire et création de blason
3. **Module 03 - Présentation du bilan** : Introduction au processus
... (25 modules au total)
`,
    
    'n8n-workflows': `# Workflows n8n

Ce dossier contient tous les workflows n8n pour l'automatisation et l'analytics.

## Workflows principaux

- \`main-analytics-workflow.json\` : Workflow principal de collecte
- \`module-XX-workflow.json\` : Workflows spécifiques par module

## Configuration

1. Importer les workflows dans n8n
2. Configurer les credentials
3. Activer les webhooks
`,
    
    'infrastructure': `# Infrastructure

Configuration de l'infrastructure pour le projet.

## Composants

- **database/** : Schémas SQL et migrations
- **grafana/** : Dashboards et datasources
- **docker/** : Configuration Docker Compose

## Démarrage rapide

\`\`\`bash
docker-compose up -d
\`\`\`
`
  };
  
  Object.entries(readmeContent).forEach(([dir, content]) => {
    const readmePath = path.join(basePath, 'bilan-competences-digital', dir, 'README.md');
    fs.writeFileSync(readmePath, content);
    console.log(`📝 README créé: ${readmePath}`);
  });
}

/**
 * Générer le fichier package.json
 */
function generatePackageJson(basePath) {
  const packageJson = {
    name: 'bilan-competences-digital',
    version: '1.0.0',
    description: 'Parcours de Bilan de Compétences Digitalisé avec 25 modules SCORM',
    main: 'index.js',
    scripts: {
      'build:scorm': 'node scripts/build-scorm.js',
      'deploy:zoho': 'node scripts/deploy-to-zoho.js',
      'generate:module': 'node scripts/generate-module.js',
      'validate:scorm': 'node scripts/validate-scorm.js',
      'start:dev': 'docker-compose up -d && npm run watch',
      'test': 'jest',
      'lint': 'eslint .'
    },
    keywords: ['scorm', 'e-learning', 'bilan-competences', 'lms', 'zoho-learn'],
    author: 'Votre Nom',
    license: 'MIT',
    dependencies: {
      'axios': '^1.6.0',
      'express': '^4.18.0',
      'dotenv': '^16.3.0'
    },
    devDependencies: {
      'jest': '^29.7.0',
      'eslint': '^8.50.0',
      'nodemon': '^3.0.0'
    }
  };
  
  const packagePath = path.join(basePath, 'bilan-competences-digital', 'package.json');
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log(`📦 package.json créé: ${packagePath}`);
}

/**
 * Générer le fichier .gitignore
 */
function generateGitignore(basePath) {
  const gitignoreContent = `# Dependencies
node_modules/

# Environment variables
.env
.env.local
.env.*.local

# Logs
logs/
*.log
npm-debug.log*

# Build output
dist/
build/
*.zip

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Test coverage
coverage/
.nyc_output/

# Temporary files
tmp/
temp/

# Sensitive data
credentials/
*.key
*.pem
`;
  
  const gitignorePath = path.join(basePath, 'bilan-competences-digital', '.gitignore');
  fs.writeFileSync(gitignorePath, gitignoreContent);
  console.log(`🚫 .gitignore créé: ${gitignorePath}`);
}

/**
 * Générer un fichier exemple .env
 */
function generateEnvExample(basePath) {
  const envContent = `# n8n Configuration
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/bc-analytics

# API Keys
ANTHROPIC_API_KEY=your-anthropic-api-key
ZOHO_API_TOKEN=your-zoho-api-token

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=bilan_competences
DB_USER=admin
DB_PASSWORD=your-secure-password

# Grafana
GRAFANA_URL=http://localhost:3000
GRAFANA_API_KEY=your-grafana-api-key

# Application
NODE_ENV=development
PORT=3000
`;
  
  const envPath = path.join(basePath, 'bilan-competences-digital', '.env.example');
  fs.writeFileSync(envPath, envContent);
  console.log(`🔐 .env.example créé: ${envPath}`);
}

/**
 * Fonction principale
 */
function main() {
  console.log('🚀 Début de l\'export du projet Bilan de Compétences Digitalisé\n');
  
  const basePath = process.cwd();
  
  // 1. Créer la structure de dossiers
  console.log('📁 Création de la structure du projet...\n');
  createDirectoryStructure(basePath, PROJECT_STRUCTURE);
  
  // 2. Générer les fichiers de configuration
  console.log('\n📄 Génération des fichiers de configuration...\n');
  generateReadmeFiles(basePath);
  generatePackageJson(basePath);
  generateGitignore(basePath);
  generateEnvExample(basePath);
  
  // 3. Afficher les instructions d'export
  generateExportInstructions();
  
  console.log('\n✨ Structure du projet créée avec succès !');
  console.log('\n📌 Prochaines étapes :');
  console.log('1. Copier manuellement le contenu de chaque artifact dans les fichiers correspondants');
  console.log('2. Configurer les variables d\'environnement dans .env');
  console.log('3. Installer les dépendances : npm install');
  console.log('4. Lancer l\'infrastructure : docker-compose up -d');
  console.log('5. Tester les modules dans Zoho Learn\n');
}

// Exécuter le script
if (require.main === module) {
  main();
}