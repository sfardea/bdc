
# Structure Détaillée - Module 4 : Les Objectifs du Bilan

## Informations Générales du Module

- **Numéro du module** : Module 4
- **Titre du module** : Les objectifs du bilan
- **Description** : Définissez vos objectifs pour ce bilan de compétences et précisez votre objectif principal
- **Type** : Sélection multi-choix + rédaction en 2 étapes
- **Nombre d'étapes** : 2 étapes (ou 3 si la seconde prend trop de place) + page de succès

## 🔗 Visualiser Preview

[Lien 1](https://gemini.google.com/app/eacbffb2d20e19641) | [Lien 2](https://g.co/gemini/share/366db0bf9084)

## Structure de Navigation

### En-tête du Module
- **Badge Module** : "Module 4" (fond primary-bg, texte primary)
- **Titre** : "Les objectifs du bilan" (avec icône cible 🎯)
- **Description** : "Définissez ce que vous souhaitez accomplir avec ce bilan de compétences"

### Barre de Progression
- **Type** : Barre de progression horizontale
- **Position** : En haut sous le header
- **Texte** : "Étape [X] sur 2"
- **Calcul** : (étape actuelle / 2) * 100%
- **Couleur** : Dégradé primary

---

## ÉTAPE 1 : SÉLECTION DES OBJECTIFS

### En-tête de l'Étape
- **Titre** : "Quels sont vos objectifs pour ce bilan ?"
- **Sous-titre** : "Sélectionnez un ou plusieurs objectifs qui correspondent à vos attentes (plusieurs choix possibles)"
- **Style** :
  - Titre centré, taille 2rem
  - Sous-titre en gray-600

### Grille d'Objectifs (Cards Sélectionnables)

#### Structure des Cards
- **Disposition** : Grille responsive (3 colonnes desktop, 2 tablette, 1 mobile)
- **Gap** : 1.5rem entre les cartes
- **Animation** : Fade-in séquentiel au chargement

#### Liste des 9 Objectifs Prédéfinis

1. **Faire le point**
   - **Icône** : 🧭
   - **Titre** : "Faire le point"
   - **Description** : "Analyser ma situation actuelle et mes compétences"
   - **Data-objective** : "faire-le-point"

2. **Changer de métier**
   - **Icône** : 🔄
   - **Titre** : "Changer de métier"
   - **Description** : "Explorer une reconversion professionnelle"
   - **Data-objective** : "changer-metier"

3. **Évoluer professionnellement**
   - **Icône** : 📈
   - **Titre** : "Évoluer professionnellement"
   - **Description** : "Progresser dans ma carrière actuelle"
   - **Data-objective** : "evoluer"

4. **Créer mon entreprise**
   - **Icône** : 🚀
   - **Titre** : "Créer mon entreprise"
   - **Description** : "Me lancer dans l'entrepreneuriat"
   - **Data-objective** : "creer-entreprise"

5. **Retrouver un emploi**
   - **Icône** : 💼
   - **Titre** : "Retrouver un emploi"
   - **Description** : "Optimiser ma recherche d'emploi"
   - **Data-objective** : "retrouver-emploi"

6. **Développer mes compétences**
   - **Icône** : 🎓
   - **Titre** : "Développer mes compétences"
   - **Description** : "Identifier les formations nécessaires"
   - **Data-objective** : "developper-competences"

7. **Valider un projet**
   - **Icône** : ✅
   - **Titre** : "Valider un projet"
   - **Description** : "Confirmer la viabilité de mon projet professionnel"
   - **Data-objective** : "valider-projet"

8. **Préparer ma retraite**
   - **Icône** : 🌅
   - **Titre** : "Préparer ma retraite"
   - **Description** : "Anticiper et organiser ma transition"
   - **Data-objective** : "preparer-retraite"

9. **Retrouver du sens**
   - **Icône** : 💡
   - **Titre** : "Retrouver du sens"
   - **Description** : "Redonner du sens à ma vie professionnelle"
   - **Data-objective** : "retrouver-sens"

#### Style des Cards
- **État normal** :
  - Fond : white
  - Bordure : 2px solid gray-200
  - Ombre : shadow-sm
  - Cursor : pointer
  - Transition : all 0.3s

- **État hover** :
  - Transform : translateY(-4px)
  - Ombre : shadow-lg
  - Bordure : primary-light

- **État sélectionné** :
  - Fond : primary-bg (léger)
  - Bordure : 3px solid primary
  - Icône check : ✓ en haut à droite
  - Animation : pulse subtil

### Indicateur de Sélection
- **Supprimé** : Plus de barre verte de comptage
- **Feedback** : Uniquement visuel sur les cartes (bordure + check)

### Bouton de Navigation
- **Texte** : "Continuer"
- **ID** : continueBtn
- **Position** : Centré en bas
- **État** : Désactivé si aucune sélection
- **Style** :
  - Fond : primary gradient
  - Padding : 1rem 3rem
  - Animation : Activation smooth quand sélection

---

## ÉTAPE 2 : OBJECTIF PRINCIPAL

### En-tête de l'Étape
- **Titre** : "Quel est votre objectif principal ?"
- **Sous-titre** : "Décrivez en quelques phrases ce que vous attendez concrètement de ce bilan"
- **Style** :
  - Même style que l'étape 1
  - Animation : Slide-in depuis la droite

### Zone de Rédaction

#### Champ Textarea
- **ID** : primaryObjective
- **Placeholder** : "Décrivez votre objectif principal pour ce bilan de compétences. Par exemple : Je souhaite faire le point sur mes compétences actuelles pour..."
- **Caractéristiques** :
  - Hauteur : 200px minimum
  - Redimensionnable : vertical only
  - Police : 1.125rem pour meilleure lisibilité
  - Line-height : 1.6
  - Padding : 1.5rem
  - Border-radius : 12px
  - Focus : Border primary + shadow

#### Compteur de Caractères
- **ID** : charCount
- **Format** : "[nombre]/500 caractères"
- **Position** : Sous le textarea, aligné à droite
- **Couleur** :
  - Gray-500 : < 50 caractères
  - Success (vert) : ≥ 50 caractères
- **Minimum requis** : 50 caractères

### Aide à la Rédaction
- **Titre** : "Quelques pistes pour vous aider :"
- **Liste de suggestions** :
  - "Qu'est-ce qui vous motive à faire ce bilan maintenant ?"
  - "Quelle situation souhaitez-vous changer ou améliorer ?"
  - "Où vous voyez-vous dans 2-3 ans ?"
  - "Quels sont vos principaux défis actuels ?"
- **Style** :
  - Fond : gray-50
  - Bordure gauche : 4px solid primary
  - Icône : 💭
  - Collapsible sur mobile

### Boutons de Navigation
- **Bouton Retour** :
  - ID : backBtn
  - Texte : "Retour"
  - Action : Retour à l'étape 1
  - Style : Bouton secondaire (gray)

- **Bouton Valider** :
  - ID : submitBtn
  - Texte : "Valider mes objectifs"
  - État : Désactivé si < 50 caractères
  - Style : Bouton success (vert)
  - Action : Validation et sauvegarde

---

## PAGE DE SUCCÈS

### Masquage du Contenu Principal
- La carte principale (main.card) est masquée
- Seul le message de succès est affiché

### Éléments Visuels
- **Icône de succès** : Cercle vert avec coche (SVG 64x64)
- **Animation** : CheckMark qui se dessine + bounce

### Contenu
- **Titre principal** : "Excellent !"
- **Sous-titre** : "Vos objectifs ont été enregistrés avec succès"
- **Message** : "Nous avons bien pris en compte vos attentes pour ce bilan. Ces objectifs guideront l'ensemble de votre parcours."

### Récapitulatif
- **Section** : "Vos objectifs sélectionnés"
- **Affichage** : Liste avec icônes des objectifs choisis
- **Objectif principal** : 
  - Encadré spécial avec guillemets
  - Fond primary-bg léger
  - Titre : "Votre objectif principal :"
  - Contenu : Le texte saisi par l'utilisateur

### Boutons d'Action
1. **Bouton Recommencer**
   - Style : Gris (gray-200)
   - Texte : "Modifier mes objectifs"
   - Action : Réinitialisation du module
   - Icône : Flèche circulaire

2. **Bouton Continuer**
   - Style : Bouton principal (primary gradient)
   - Texte : "Continuer vers le module 5"
   - Action : Navigation vers /module/05
   - Icône : Flèche droite

---

## Fonctionnalités Techniques

### Gestion des Sélections
- **Multi-sélection** : Possibilité de choisir plusieurs objectifs
- **Toggle** : Click pour sélectionner/désélectionner
- **Minimum** : Au moins 1 objectif requis
- **Maximum** : Pas de limite

### Validation
- **Étape 1** : Au moins un objectif sélectionné
- **Étape 2** : 
  - Objectif principal ≥ 50 caractères
  - Objectifs de l'étape 1 toujours requis
- **Messages d'erreur** : Notifications temporaires (4 secondes)

### Sauvegarde des Données
- **Database** :
  - Clé : `module4_data`
  - Structure : 
    ```json
    {
      "selectedObjectives": ["faire-le-point", "evoluer"],
      "primaryObjective": "Texte de l'objectif principal...",
      "timestamp": "2024-01-15T10:30:00Z"
    }
    ```

### Navigation entre Étapes
- **Animation** : Slide horizontal entre les étapes
- **Scroll** : Retour en haut à chaque changement
- **Progress** : Mise à jour de la barre (50% → 100%)

### Notifications
- **Type** : Toast notifications
- **Position** : Fixed, top-right
- **Durée** : 4 secondes
- **Animations** : slideInRight / slideOutRight
- **Types** : error, info, success

---

## Structure HTML Suggérée

```html
<div class="container">
    <!-- Header -->
    <header class="module-header">
        <span class="module-badge">Module 4</span>
        <h1>🎯 Les objectifs du bilan</h1>
        <p>Définissez ce que vous souhaitez accomplir</p>
    </header>

    <!-- Progress bar -->
    <div class="progress-container">
        <div class="progress-bar">
            <div id="progressBar" class="progress-fill"></div>
        </div>
        <span id="progressText">Étape 1 sur 2</span>
    </div>

    <!-- Main content -->
    <main class="card">
        <!-- Step 1: Objectives selection -->
        <section id="step1" class="step-section active">
            <h2>Quels sont vos objectifs pour ce bilan ?</h2>
            <p class="subtitle">Sélectionnez un ou plusieurs objectifs</p>
            
            <div class="objectives-grid">
                <div class="objective-card" data-objective="faire-le-point">
                    <span class="icon">🧭</span>
                    <h3>Faire le point</h3>
                    <p>Analyser ma situation actuelle</p>
                    <span class="check-icon">✓</span>
                </div>
                <!-- Autres cartes... -->
            </div>
            
            <button id="continueBtn" class="btn btn-primary" disabled>
                Continuer
            </button>
        </section>

        <!-- Step 2: Primary objective -->
        <section id="step2" class="step-section">
            <h2>Quel est votre objectif principal ?</h2>
            <p class="subtitle">Décrivez en quelques phrases</p>
            
            <textarea 
                id="primaryObjective"
                placeholder="Décrivez votre objectif principal..."
                maxlength="500"
            ></textarea>
            
            <div class="char-counter">
                <span id="charCount">0</span>/500 caractères
            </div>
            
            <div class="help-section">
                <h4>💭 Quelques pistes pour vous aider :</h4>
                <ul>
                    <li>Qu'est-ce qui vous motive...</li>
                </ul>
            </div>
            
            <div class="button-group">
                <button id="backBtn" class="btn btn-secondary">
                    Retour
                </button>
                <button id="submitBtn" class="btn btn-success" disabled>
                    Valider mes objectifs
                </button>
            </div>
        </section>
    </main>

    <!-- Success message -->
    <div id="successMessage" class="success-container" style="display: none;">
        <div class="success-icon">✓</div>
        <h2>Excellent !</h2>
        <p>Vos objectifs ont été enregistrés</p>
        
        <div class="objectives-summary">
            <!-- Récapitulatif dynamique -->
        </div>
        
        <div class="action-buttons">
            <button onclick="restartModule()">Modifier</button>
            <button onclick="goToNextModule()">Continuer</button>
        </div>
    </div>
</div>
```

---

## Structure JSON Proposée pour Base de Données

```json
{
  "module_id": 4,
  "module_title": "Les objectifs du bilan",
  "module_type": "multi_step_selection",
  "total_steps": 2,
  "steps": [
    {
      "step_id": 1,
      "step_type": "multi_select",
      "title": "Quels sont vos objectifs pour ce bilan ?",
      "subtitle": "Sélectionnez un ou plusieurs objectifs",
      "options": [
        {
          "id": "faire-le-point",
          "icon": "🧭",
          "title": "Faire le point",
          "description": "Analyser ma situation actuelle et mes compétences"
        },
        {
          "id": "changer-metier",
          "icon": "🔄",
          "title": "Changer de métier",
          "description": "Explorer une reconversion professionnelle"
        },
        {
          "id": "evoluer",
          "icon": "📈",
          "title": "Évoluer professionnellement",
          "description": "Progresser dans ma carrière actuelle"
        },
        {
          "id": "creer-entreprise",
          "icon": "🚀",
          "title": "Créer mon entreprise",
          "description": "Me lancer dans l'entrepreneuriat"
        },
        {
          "id": "retrouver-emploi",
          "icon": "💼",
          "title": "Retrouver un emploi",
          "description": "Optimiser ma recherche d'emploi"
        },
        {
          "id": "developper-competences",
          "icon": "🎓",
          "title": "Développer mes compétences",
          "description": "Identifier les formations nécessaires"
        },
        {
          "id": "valider-projet",
          "icon": "✅",
          "title": "Valider un projet",
          "description": "Confirmer la viabilité de mon projet professionnel"
        },
        {
          "id": "preparer-retraite",
          "icon": "🌅",
          "title": "Préparer ma retraite",
          "description": "Anticiper et organiser ma transition"
        },
        {
          "id": "retrouver-sens",
          "icon": "💡",
          "title": "Retrouver du sens",
          "description": "Redonner du sens à ma vie professionnelle"
        }
      ],
      "validation": {
        "min_selections": 1,
        "max_selections": null
      }
    },
    {
      "step_id": 2,
      "step_type": "text_input",
      "title": "Quel est votre objectif principal ?",
      "subtitle": "Décrivez en quelques phrases ce que vous attendez concrètement",
      "field": {
        "id": "primaryObjective",
        "type": "textarea",
        "placeholder": "Décrivez votre objectif principal...",
        "min_length": 50,
        "max_length": 500,
        "required": true
      },
      "help_content": {
        "title": "Quelques pistes pour vous aider :",
        "items": [
          "Qu'est-ce qui vous motive à faire ce bilan maintenant ?",
          "Quelle situation souhaitez-vous changer ou améliorer ?",
          "Où vous voyez-vous dans 2-3 ans ?",
          "Quels sont vos principaux défis actuels ?"
        ]
      }
    }
  ],
  "success_page": {
    "title": "Excellent !",
    "subtitle": "Vos objectifs ont été enregistrés avec succès",
    "message": "Nous avons bien pris en compte vos attentes pour ce bilan.",
    "show_summary": true,
    "actions": [
      {
        "type": "restart",
        "label": "Modifier mes objectifs"
      },
      {
        "type": "next_module",
        "label": "Continuer vers le module 5",
        "target": "/module/05"
      }
    ]
  },
  "features": {
    "auto_save": true,
    "notifications": true,
    "progress_tracking": true,
    "scorm_compatible": true
  }
}
```

