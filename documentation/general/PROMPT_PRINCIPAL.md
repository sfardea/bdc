# Prompt pour la Création d'un Parcours de Bilan de Compétences Digitalisé

## Contexte du Projet

Je souhaite créer un parcours complet de Bilan de Compétences entièrement digitalisé, composé de 25 activités réparties en 4 phases principales. Chaque activité doit être un module SCORM indépendant, intégrable dans Zoho Learn, avec utilisation optimale de l'IA et des outils no-code/low-code.

## Architecture Technique Requise

### 1. Standards et Compatibilité
- **Format de sortie** : Modules SCORM 1.2 ou 2004 (compatible Zoho Learn)
- **Structure** : 25 modules SCORM indépendants mais interconnectés
- **Tracking** : Capture complète des données (progression, scores, temps passé, réponses)
- **Responsive** : Compatible desktop, tablette et mobile
- **Accessibilité** : Conforme WCAG 2.1 niveau AA

### 2. Intégration LMS et IA
- **LMS** : Zoho Learn (via SCORM et API REST si disponible)
- **Communication LLM** : Architecture bidirectionnelle LMS ↔ LLM
- **Export de données** : Synchrone (temps réel) et asynchrone (batch)
- **Rapports** : Génération automatique via LLM basée sur les données collectées

### 3. Stack Technologique Définie
- **Authoring Tools** : Claude Opus 4 pour génération de contenu SCORM via HTML/JS/CSS
- **No-Code/Low-Code** : n8n pour orchestration et automatisations
- **IA** : API Anthropic (Claude) pour analyse et personnalisation
- **Stockage** : Cloud sécurisé (AWS S3 / Google Cloud Storage)
- **Analytics** : Solution multi-niveaux (voir section dédiée ci-dessous)

## Structure Détaillée des Modules

### PHASE PRÉLIMINAIRE (Modules 1-4)

#### Module 1 : Présentons-nous
- **Type d'interaction** : Formulaire interactif avec validation progressive
- **Éléments IA** : 
  - Analyse du profil pour suggestions personnalisées
  - Génération d'un avatar ou représentation visuelle
- **Data collectée** : Informations démographiques et contextuelles
- **Design** : Interface accueillante avec onboarding progressif

#### Module 2 : Mon autoportrait
- **Type d'interaction** : 
  - Questionnaire interactif sur préférences/peurs/qualités
  - Outil de création de blason avec éléments drag & drop
- **Éléments IA** : 
  - Analyse sémantique des réponses
  - Génération d'insights personnalisés
  - Création assistée du blason (suggestions visuelles)
- **Data collectée** : Profil psychologique initial

#### Module 3 : Présentation du bilan
- **Type d'interaction** : Vidéo interactive avec points de contrôle
- **Éléments IA** : Chatbot pour Q&A
- **Data collectée** : Compréhension du processus (quiz intégré)

#### Module 4 : Les objectifs du bilan
- **Type d'interaction** : Workshop virtuel guidé
- **Éléments IA** : 
  - Assistant pour formulation SMART des objectifs
  - Analyse et reformulation des objectifs
- **Data collectée** : Objectifs personnalisés catégorisés

### PHASE D'INVESTIGATION - AXE PERSONNEL (Modules 5-11)

#### Module 5 : Photo language
- **Type d'interaction** : 
  - Galerie interactive avec banque d'images
  - Enregistrement audio/vidéo pour explication
- **Éléments IA** : 
  - Analyse d'image et suggestions thématiques
  - Transcription et analyse du discours
- **Data collectée** : Associations image-émotion-motivation

#### Module 6 : Mes courbes de vie
- **Type d'interaction** : Timeline interactive avec drag & drop
- **Éléments IA** : 
  - Détection automatique de patterns
  - Génération de synthèse des moments clés
- **Data collectée** : Événements marquants catégorisés et datés

#### Module 7 : Test MBTI®
- **Type d'interaction** : Questionnaire adaptatif
- **Éléments IA** : 
  - Questions adaptatives selon réponses
  - Analyse approfondie du profil
- **Data collectée** : Type de personnalité et traits dominants
- **Intégration** : API 16personalities ou équivalent

#### Modules 8-11 : Activités optionnelles
- **Type d'interaction** : Modules gamifiés et créatifs
- **Éléments IA** : Personnalisation selon profil MBTI
- **Activation conditionnelle** : Selon besoins identifiés

### PHASE D'INVESTIGATION - AXE PROFESSIONNEL I (Modules 12-15)

#### Module 12 : Réalisations éducatives et professionnelles
- **Type d'interaction** : 
  - Import CV et parsing intelligent
  - Timeline enrichie et interactive
- **Éléments IA** : 
  - Extraction automatique des compétences
  - Analyse des gaps et opportunités
  - Suggestions d'amélioration CV
- **Data collectée** : Parcours détaillé avec compétences extraites

#### Module 13 : Mes motivations au travail
- **Type d'interaction** : Cards sorting interactif
- **Éléments IA** : Clustering des motivations
- **Data collectée** : Hiérarchie des motivations

#### Module 14 : Mon portefeuille de compétences
- **Type d'interaction** : 
  - Matrice interactive 3 dimensions
  - Sliders pour évaluation 0-5
- **Éléments IA** : 
  - Suggestions de compétences connexes
  - Analyse des gaps
- **Data collectée** : Matrice compétences x niveau x désir

#### Module 15 : Tableau de priorités professionnelles
- **Type d'interaction** : Tableau kanban interactif
- **Éléments IA** : Analyse de cohérence des priorités
- **Data collectée** : Critères classés par importance

### PHASE D'INVESTIGATION - AXE PROFESSIONNEL II (Modules 16-22)

#### Module 16 : Profil RIASEC
- **Type d'interaction** : Test interactif visuel
- **Intégration** : API RIASEC ou rebuild
- **Éléments IA** : Matching métiers personnalisé
- **Data collectée** : Profil RIASEC complet

#### Module 17 : Questions ouvertes
- **Type d'interaction** : Interface conversationnelle
- **Éléments IA** : 
  - Analyse NLP des réponses
  - Questions de relance adaptatives
- **Data collectée** : Insights qualitatifs profonds

#### Module 18 : Classification des motivations
- **Type d'interaction** : Drag & drop avec catégorisation
- **Éléments IA** : Validation de cohérence
- **Data collectée** : Motivations triées par priorité

#### Modules 19-20 : Investigation métiers
- **Type d'interaction** : 
  - Navigateur intégré avec tracking
  - Prise de notes intelligente
- **Intégration** : iFrame ou API France Travail
- **Éléments IA** : Suggestions de recherche personnalisées

#### Module 21 : Enquêtes métiers
- **Type d'interaction** : 
  - Templates d'enquête
  - Outil de prise de contact
- **Éléments IA** : 
  - Génération de questions personnalisées
  - Analyse des retours
- **Data collectée** : Insights terrain structurés

#### Module 22 : Questionnaire 360°
- **Type d'interaction** : 
  - Envoi automatisé aux contacts
  - Dashboard de suivi
- **Éléments IA** : Analyse croisée des feedbacks
- **Data collectée** : Perception externe multi-sources

### PHASE DE CONCLUSION (Modules 23-25)

#### Module 23 : Viabilisation du projet
- **Type d'interaction** : Canvas interactif de validation
- **Éléments IA** : 
  - Analyse SWOT automatisée
  - Score de viabilité
  - Recommandations personnalisées
- **Data collectée** : Projet validé multi-critères

#### Module 24 : Plan d'action
- **Type d'interaction** : 
  - Gantt interactif
  - Jalons et alertes
- **Éléments IA** : 
  - Génération automatique du planning
  - Suggestions d'optimisation
  - Rappels intelligents
- **Data collectée** : Plan structuré avec échéances

#### Module 25 : Synthèse
- **Type d'interaction** : Génération de rapport dynamique
- **Éléments IA** : 
  - Rédaction automatique personnalisée
  - Visualisations de données
  - Recommandations futures
- **Export** : PDF interactif, présentation, dashboard web

## Spécifications Techniques Détaillées

### 1. Structure SCORM
```javascript
// Structure type pour chaque module
{
  "manifest": {
    "identifier": "BC_Module_XX",
    "version": "1.0",
    "title": "Nom du Module",
    "description": "Description",
    "prerequisites": ["Module_XX-1"],
    "estimatedTime": "30-45min",
    "masteryScore": 80
  },
  "sco": {
    "launchPage": "index.html",
    "resources": ["media/", "scripts/", "styles/"],
    "tracking": {
      "completion": "progressive",
      "scoring": "weighted",
      "interactions": "detailed"
    }
  }
}
```

### 2. API de Communication LMS ↔ LLM
```javascript
// Endpoints principaux
POST /api/module/complete
POST /api/data/sync
POST /api/llm/analyze
GET /api/user/progress
GET /api/reports/generate
```

### 3. Modèle de Données
```javascript
// Structure de données utilisateur
{
  "userId": "unique_id",
  "profile": {
    "personal": {},
    "professional": {},
    "objectives": []
  },
  "progress": {
    "modules": {},
    "globalCompletion": 0,
    "timeSpent": {}
  },
  "assessments": {
    "mbti": {},
    "riasec": {},
    "competencies": {},
    "motivations": {}
  },
  "project": {
    "definition": {},
    "viability": {},
    "actionPlan": {}
  }
}
```

## Génération de Modules SCORM avec Claude Opus

### 1. Structure de Génération

Claude Opus générera pour chaque module :

```
module_XX/
├── imsmanifest.xml (manifeste SCORM)
├── index.html (point d'entrée)
├── js/
│   ├── scorm_api.js (communication SCORM)
│   ├── module_logic.js (logique métier)
│   └── analytics.js (tracking custom)
├── css/
│   └── module_style.css
├── assets/
│   ├── images/
│   └── data/
└── config.json (paramètres module)
```

### 2. Template de Génération Claude

```javascript
// Prompt type pour Claude Opus
const generateSCORMModule = {
  instruction: "Génère un module SCORM complet pour [NOM_MODULE]",
  specifications: {
    version: "SCORM 2004 4th Edition",
    responsive: true,
    accessibility: "WCAG 2.1 AA",
    tracking: ["completion", "score", "time", "interactions"],
    customData: ["responses", "behavior", "preferences"]
  },
  content: {
    structure: "[STRUCTURE_SPECIFIQUE_MODULE]",
    interactions: "[TYPES_INTERACTIONS]",
    evaluation: "[CRITERES_EVALUATION]"
  },
  output: {
    format: "HTML5 + JavaScript + CSS",
    packaging: "ZIP ready for LMS upload"
  }
};
```

### 3. Workflow n8n pour Orchestration

```yaml
Workflow Génération Module:
  1. Trigger: API call avec spécifications module
  
  2. Claude API - Structure:
     - Génère imsmanifest.xml
     - Crée structure HTML de base
     
  3. Claude API - Contenu:
     - Génère contenu interactif
     - Crée évaluations
     
  4. Claude API - Styling:
     - Génère CSS responsive
     - Applique charte graphique
     
  5. Assembly:
     - Combine tous les fichiers
     - Validate SCORM compliance
     
  6. Storage:
     - Upload vers S3
     - Génère URL téléchargement
     
  7. Zoho Integration:
     - Auto-upload vers Zoho Learn
     - Configure module settings
```

### 4. Exemple Concret : Module "Photo Language"

```javascript
// Prompt pour Claude Opus
"Génère le module SCORM 'Photo Language' avec:
- Galerie de 50 photos thématiques
- Interface drag & drop pour sélection
- Zone de commentaire audio/texte
- Analyse IA des choix en temps réel
- Export des associations image-émotion
- Design moderne avec animations fluides
- Tracking complet des interactions"

// Claude génèrera:
// 1. index.html avec structure complète
// 2. JavaScript pour interactions
// 3. CSS pour design responsive
// 4. Configuration SCORM
// 5. Intégration analytics
```

## Livrables Attendus

### Phase 1 : Architecture et Design
1. Architecture technique détaillée
2. Wireframes interactifs pour chaque module
3. Charte graphique et design system
4. Prototypes des interactions clés

### Phase 2 : Développement
1. 25 modules SCORM fonctionnels
2. API de communication LMS-LLM
3. Dashboard administrateur
4. Documentation technique

### Phase 3 : Intégration et Tests
1. Intégration Zoho Learn validée
2. Tests utilisateurs et optimisations
3. Formation des administrateurs
4. Kit de déploiement

### Phase 4 : Analytics et Reporting
1. Dashboard temps réel
2. Templates de rapports personnalisables
3. Export de données structurées
4. API pour intégrations tierces

## Métriques de Succès

1. **Engagement** : Taux de complétion > 85%
2. **Satisfaction** : NPS > 8/10
3. **Efficacité** : Temps moyen par module < 45min
4. **Qualité** : Pertinence des recommandations > 90%
5. **ROI** : Réduction temps conseiller de 60%

## Contraintes et Considérations

1. **RGPD** : Conformité totale, consentements explicites
2. **Sécurité** : Chiffrement des données sensibles
3. **Performance** : Chargement < 3 secondes
4. **Scalabilité** : Architecture supportant 10k+ utilisateurs
5. **Maintenance** : Updates facilités via CMS intégré

## Architecture Analytics Détaillée

### 1. Structure Analytics Multi-Niveaux

#### Niveau 1 : Analytics Embarqués (Module SCORM)
```javascript
// Tracking intégré dans chaque module
const moduleAnalytics = {
  // Métriques de base SCORM
  completion: {
    status: "incomplete|completed|passed|failed",
    score: 0-100,
    time: "hh:mm:ss"
  },
  
  // Métriques enrichies
  interactions: {
    clicks: [{element, timestamp, context}],
    inputs: [{field, value, duration}],
    navigation: [{from, to, time}]
  },
  
  // Métriques comportementales
  behavior: {
    hesitations: [{question, timeSpent}],
    corrections: [{field, oldValue, newValue}],
    abandonPoints: [{section, timestamp}]
  }
};
```

#### Niveau 2 : Dashboard Temps Réel (n8n + Grafana)
- **Architecture** :
  ```
  Module SCORM → API Endpoint → n8n Workflow → InfluxDB → Grafana
  ```
- **Visualisations en temps réel** :
  - Progression globale des utilisateurs
  - Taux de complétion par module
  - Points de friction (où les users bloquent)
  - Temps moyen par activité
  - Heatmap des interactions

#### Niveau 3 : Analytics Avancés (Claude API + Jupyter)
- **Analyses prédictives** :
  - Probabilité d'abandon
  - Recommandations personnalisées
  - Détection d'anomalies
- **Rapports automatisés** :
  - Synthèse hebdomadaire
  - Insights comportementaux
  - Corrélations profil/performance

### 2. Dashboard Administrateur

#### Vue Globale
```
┌─────────────────────────────────────────────────────┐
│  TABLEAU DE BORD - BILAN DE COMPÉTENCES           │
├─────────────────┬───────────────┬──────────────────┤
│ Utilisateurs    │ Progression   │ Engagement       │
│ Actifs: 1,247   │ Moyenne: 67%  │ Score: 8.4/10   │
│ Nouveaux: +47   │ Complété: 23% │ Temps: 2h34 moy │
└─────────────────┴───────────────┴──────────────────┘

[Graphique progression par module]
[Heatmap activité par jour/heure]
[Funnel de conversion par phase]
```

#### Analytics par Module
- **Métriques clés** :
  - Taux de démarrage
  - Taux de complétion
  - Score moyen
  - Temps médian
  - Points d'abandon
  
#### Analytics Utilisateur
- **Profil individuel** :
  - Parcours détaillé
  - Comparaison aux moyennes
  - Prédictions personnalisées
  - Recommandations

### 3. Pipeline de Données avec n8n

```yaml
Workflow Principal:
  1. Webhook Reception:
     - Endpoint: /api/analytics/track
     - Validation des données
     - Enrichissement contextuel
  
  2. Processing:
     - Normalisation format
     - Calcul métriques dérivées
     - Détection anomalies
  
  3. Storage:
     - InfluxDB (time-series)
     - PostgreSQL (relationnelles)
     - S3 (raw data backup)
  
  4. Triggers:
     - Alertes temps réel
     - Rapports schedulés
     - API Claude pour insights
```

### 4. Intégration Claude pour Analytics Intelligents

```javascript
// Exemple workflow n8n → Claude API
const analyzeUserProgress = {
  trigger: "Daily at 6:00",
  nodes: [
    {
      type: "PostgreSQL",
      query: "SELECT * FROM user_progress WHERE date = CURRENT_DATE"
    },
    {
      type: "Claude API",
      prompt: `Analyse ces données de progression et génère:
        1. Insights sur les patterns comportementaux
        2. Utilisateurs à risque d'abandon
        3. Recommandations personnalisées
        4. Optimisations suggérées pour les modules`,
      model: "claude-3-opus"
    },
    {
      type: "Format Report",
      template: "analytics_daily_report"
    },
    {
      type: "Email/Slack",
      recipients: ["admin@company.com"]
    }
  ]
};
```

### 5. Tableaux de Bord Spécifiques

#### Dashboard Formateur/Conseiller
- Vue d'ensemble des participants
- Alertes sur les difficultés
- Suggestions d'intervention
- Comparaisons inter-cohortes

#### Dashboard Participant
- Ma progression personnelle
- Comparaison anonyme aux pairs
- Temps estimé restant
- Achievements débloqués

#### Dashboard Direction
- ROI de la formation
- KPIs stratégiques
- Tendances long terme
- Benchmarks sectoriels

### 6. Export et Reporting

#### Formats d'Export
- **PDF** : Rapports formatés avec graphiques
- **Excel** : Données brutes pour analyse
- **API** : Endpoints pour intégrations
- **PowerBI** : Connecteur direct

#### Types de Rapports
1. **Rapport Individuel Participant**
   - Synthèse du parcours
   - Résultats des évaluations
   - Plan d'action personnalisé
   - Certificat de réalisation

2. **Rapport Cohorte**
   - Statistiques globales
   - Comparaisons modules
   - Recommandations pédagogiques

3. **Rapport ROI**
   - Coûts vs bénéfices
   - Temps conseiller économisé
   - Satisfaction participants
   - Impact business

### 7. Architecture Technique Analytics

```
┌─────────────┐     ┌──────────┐     ┌─────────────┐
│   Module    │────▶│   n8n    │────▶│  InfluxDB   │
│   SCORM     │     │ Workflow │     │ TimeSeries  │
└─────────────┘     └──────────┘     └─────────────┘
                           │                 │
                           ▼                 ▼
                    ┌──────────┐     ┌─────────────┐
                    │ Claude   │     │   Grafana   │
                    │   API    │     │ Dashboards  │
                    └──────────┘     └─────────────┘
                           │                 │
                           ▼                 ▼
                    ┌──────────────────────────┐
                    │    Unified Analytics     │
                    │      Dashboard           │
                    └──────────────────────────┘
```