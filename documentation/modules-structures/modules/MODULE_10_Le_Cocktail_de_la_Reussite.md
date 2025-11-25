# Module 10 : Le Cocktail de la Réussite

## Informations Générales

- **Titre** : Le Cocktail de la Réussite
- **Type** : Exercice d'analyse et de projection professionnelle
- **Durée estimée** : 20-25 minutes
- **Objectif** : Analyser sa journée type actuelle et imaginer sa journée idéale
- **Format** : Métaphore visuelle du cocktail
- **Public cible** : Professionnels en réflexion sur leur équilibre travail et missions

## Concept de l'Exercice

### Principe
L'exercice utilise la métaphore du cocktail pour représenter visuellement la composition d'une journée de travail. Chaque "ingrédient" représente une mission ou une tâche, avec des proportions qui reflètent le temps consacré à chacune.

### Objectifs
1. **Prise de conscience** : Visualiser la répartition actuelle du temps de travail
2. **Projection** : Imaginer une répartition idéale des missions
3. **Comparaison** : Identifier les écarts entre la situation actuelle et souhaitée
4. **Action** : Définir des pistes pour se rapprocher de l'idéal

## Structure de la Page

### 1. Header du Module

#### Éléments :
- **Badge Module** : "Module 10"
- **Titre Principal** : "Le Cocktail de la Réussite"
- **Sous-titre** : "Analysez et réinventez votre journée de travail"
- **Badge de Statut** : "Investigation Professionnelle"
- **Icône** : 🍹 (cocktail)

### 2. Section Introduction

#### Contenu :
```html
<div class="intro-section">
  <h2>🍹 Le Cocktail de la Réussite</h2>
  <p class="intro-text">
    Imaginez un cocktail représentant votre journée de travail actuelle. 
    Quels sont les "ingrédients" (vos missions) et leurs proportions ?
  </p>
  <div class="instructions">
    <p>Sur un document Word ou Google Doc, créez un cocktail avec la forme et les détails que vous souhaitez.</p>
    <p>À l'intérieur du verre, mettez-y les ingrédients d'une journée type ainsi que les proportions y correspondant.</p>
    <p>Les ingrédients sont les missions que vous effectuez tout au long de la journée.</p>
  </div>
</div>
```

### 3. Cocktail de ma journée type (Actuelle)

#### A. Zone de création visuelle
```html
<div class="cocktail-section current">
  <h3>Cocktail de ma journée type</h3>
  <p class="subtitle">Imaginez un cocktail représentant votre journée de travail actuelle.</p>
  
  <div class="cocktail-container">
    <div class="cocktail-glass" id="currentCocktail">
      <!-- SVG ou Canvas pour le verre -->
      <svg viewBox="0 0 200 300" class="glass-svg">
        <path d="..." class="glass-outline" />
        <!-- Zones pour les ingrédients -->
      </svg>
    </div>
    
    <div class="ingredients-panel">
      <h4>Mes ingrédients (missions)</h4>
      <div class="ingredient-list" id="currentIngredients">
        <!-- Liste dynamique des ingrédients -->
      </div>
      <button class="add-ingredient">+ Ajouter un ingrédient</button>
    </div>
  </div>
</div>
```

#### B. Formulaire d'ajout d'ingrédient
```html
<div class="ingredient-form">
  <input type="text" placeholder="Nom de la mission" />
  <input type="number" min="0" max="100" placeholder="%" />
  <input type="color" value="#3B82F6" />
  <button class="confirm">Ajouter</button>
</div>
```

#### C. Zone de description
```html
<div class="description-section">
  <label>Décrivez les ingrédients de votre "cocktail journée type" (missions et proportions) :</label>
  <textarea 
    placeholder="Ex: 40% gestion de projets, 30% réunions, 20% tâches administratives, 10% imprévus..."
    rows="4"
  ></textarea>
</div>
```

### 4. Cocktail de mes missions idéales

#### A. Zone de création visuelle (idéale)
```html
<div class="cocktail-section ideal">
  <h3>Cocktail de mes missions idéales</h3>
  <p class="subtitle">
    Créez un autre cocktail, cette fois-ci avec les tâches et missions que vous aimeriez réaliser. 
    Elles peuvent être professionnelles mais pas nécessairement liées à votre poste actuel.
  </p>
  
  <div class="cocktail-container">
    <div class="cocktail-glass" id="idealCocktail">
      <!-- SVG ou Canvas pour le verre (style différent) -->
      <svg viewBox="0 0 200 300" class="glass-svg ideal-glass">
        <path d="..." class="glass-outline" />
        <!-- Zones pour les ingrédients idéaux -->
      </svg>
    </div>
    
    <div class="ingredients-panel">
      <h4>Mes ingrédients idéaux</h4>
      <div class="ingredient-list" id="idealIngredients">
        <!-- Liste dynamique des ingrédients idéaux -->
      </div>
      <button class="add-ingredient">+ Ajouter un ingrédient idéal</button>
    </div>
  </div>
</div>
```

#### B. Zone de description (idéale)
```html
<div class="description-section">
  <label>Décrivez les ingrédients de votre "cocktail missions idéales" (tâches et proportions) :</label>
  <textarea 
    placeholder="Ex: 50% innovation et développement, 25% mentorat, 15% stratégie, 10% veille technologique..."
    rows="4"
  ></textarea>
</div>
```

### 5. Section Comparaison et Analyse

#### A. Visualisation comparative
```html
<div class="comparison-section">
  <h3>Comparaison des cocktails</h3>
  
  <div class="comparison-grid">
    <div class="current-summary">
      <h4>Actuellement</h4>
      <div class="mini-cocktail">
        <!-- Version miniature du cocktail actuel -->
      </div>
      <ul class="summary-list">
        <!-- Liste résumée des ingrédients actuels -->
      </ul>
    </div>
    
    <div class="comparison-arrow">
      <svg><!-- Flèche de transition --></svg>
    </div>
    
    <div class="ideal-summary">
      <h4>Idéalement</h4>
      <div class="mini-cocktail">
        <!-- Version miniature du cocktail idéal -->
      </div>
      <ul class="summary-list">
        <!-- Liste résumée des ingrédients idéaux -->
      </ul>
    </div>
  </div>
</div>
```

#### B. Analyse des écarts
```html
<div class="gap-analysis">
  <h3>Analyse des écarts</h3>
  
  <div class="gap-cards">
    <div class="gap-card">
      <h4>Missions à réduire</h4>
      <ul class="reduce-list">
        <!-- Missions trop présentes actuellement -->
      </ul>
    </div>
    
    <div class="gap-card">
      <h4>Missions à développer</h4>
      <ul class="develop-list">
        <!-- Missions à augmenter -->
      </ul>
    </div>
    
    <div class="gap-card">
      <h4>Nouvelles missions souhaitées</h4>
      <ul class="new-list">
        <!-- Missions absentes actuellement -->
      </ul>
    </div>
  </div>
</div>
```

### 6. Plan d'Action

```html
<div class="action-plan">
  <h3>Mon plan pour me rapprocher de mon cocktail idéal</h3>
  
  <div class="action-steps">
    <div class="step">
      <span class="step-number">1</span>
      <textarea placeholder="Première action concrète..."></textarea>
    </div>
    <div class="step">
      <span class="step-number">2</span>
      <textarea placeholder="Deuxième action..."></textarea>
    </div>
    <div class="step">
      <span class="step-number">3</span>
      <textarea placeholder="Troisième action..."></textarea>
    </div>
  </div>
  
  <button class="add-step">+ Ajouter une étape</button>
</div>
```

### 7. Note de Support

```html
<div class="support-note">
  <p class="note-text">
    JE ME TIENS À VOTRE ENTIÈRE ÉCOUTE POUR TOUTES QUESTIONS.
  </p>
  <div class="contact-info">
    <p>Pour aller plus loin dans votre réflexion et structurer votre plan d'action,
       n'hésitez pas à me contacter pour un accompagnement personnalisé.</p>
  </div>
</div>
```

## Caractéristiques Techniques

### Visualisation Interactive
- **Création visuelle** : Interface drag & drop pour les proportions
- **Couleurs personnalisables** : Chaque ingrédient a sa couleur
- **Animation fluide** : Transitions lors des modifications
- **Responsive** : Adaptation mobile/desktop

### Calculs Automatiques
- **Vérification des proportions** : Total doit faire 100%
- **Ajustement automatique** : Recalcul si dépassement
- **Indicateurs visuels** : Alertes si incohérence

### Fonctionnalités
- **Export visuel** : Téléchargement des cocktails en image
- **Export PDF** : Document complet avec analyse
- **Sauvegarde** : Conservation des données en local
- **Templates** : Exemples de cocktails pré-remplis

### Exemples d'Ingrédients

#### Cocktail Actuel (exemple)
```javascript
{
  ingredients: [
    { name: "Gestion de projets", percentage: 40, color: "#3B82F6" },
    { name: "Réunions", percentage: 30, color: "#EF4444" },
    { name: "Tâches administratives", percentage: 20, color: "#F59E0B" },
    { name: "Imprévus", percentage: 10, color: "#6B7280" }
  ]
}
```

#### Cocktail Idéal (exemple)
```javascript
{
  ingredients: [
    { name: "Innovation et développement", percentage: 50, color: "#10B981" },
    { name: "Mentorat", percentage: 25, color: "#8B5CF6" },
    { name: "Stratégie", percentage: 15, color: "#3B82F6" },
    { name: "Veille technologique", percentage: 10, color: "#06B6D4" }
  ]
}
```

## Structure CSS Suggérée

```css
/* Conteneur principal du cocktail */
.cocktail-container {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  border-radius: var(--radius-xl);
}

/* Verre de cocktail */
.cocktail-glass {
  width: 300px;
  height: 400px;
  position: relative;
}

.glass-svg {
  width: 100%;
  height: 100%;
}

.glass-outline {
  fill: none;
  stroke: #64748b;
  stroke-width: 3;
}

/* Ingrédients dans le verre */
.ingredient-layer {
  transition: all 0.3s ease;
  cursor: pointer;
}

.ingredient-layer:hover {
  opacity: 0.8;
  transform: scale(1.02);
}

/* Panel des ingrédients */
.ingredients-panel {
  flex: 1;
  background: var(--white);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
}

.ingredient-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  margin: 0.5rem 0;
  background: var(--gray-50);
  border-radius: var(--radius);
  transition: all 0.2s ease;
}

.ingredient-item:hover {
  background: var(--gray-100);
  transform: translateX(4px);
}

.ingredient-color {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--white);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.ingredient-name {
  flex: 1;
  font-weight: 500;
}

.ingredient-percentage {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

/* Section comparaison */
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  margin: 2rem 0;
}

.mini-cocktail {
  width: 150px;
  height: 200px;
  margin: 0 auto;
}

/* Cartes d'analyse */
.gap-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.gap-card {
  background: var(--white);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--primary);
}

/* Plan d'action */
.action-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--primary);
  color: var(--white);
  border-radius: 50%;
  font-weight: 700;
  flex-shrink: 0;
}
```

## Structure JSON Proposée

```json
{
  "module": {
    "id": "module-10",
    "title": "Le Cocktail de la Réussite",
    "type": "exercice-analyse-projection",
    "phase": "investigation-professionnelle",
    "duration": "20-25 minutes",
    "objectives": [
      "Visualiser la répartition actuelle du temps de travail",
      "Imaginer une répartition idéale des missions",
      "Identifier les écarts",
      "Définir un plan d'action"
    ],
    "cocktails": {
      "current": {
        "title": "Cocktail de ma journée type",
        "ingredients": [],
        "total_percentage": 100,
        "allow_custom_glass": true
      },
      "ideal": {
        "title": "Cocktail de mes missions idéales",
        "ingredients": [],
        "total_percentage": 100,
        "professional_only": false
      }
    },
    "features": {
      "visual_creation": true,
      "drag_drop": true,
      "auto_calculation": true,
      "color_customization": true,
      "export_image": true,
      "export_pdf": true,
      "templates": true
    },
    "validation": {
      "min_ingredients_current": 2,
      "min_ingredients_ideal": 2,
      "total_must_be_100": true,
      "action_plan_required": true
    }
  }
}
```

## Notes d'Intégration

- L'exercice utilise une métaphore visuelle forte pour faciliter la compréhension
- La comparaison visuelle aide à identifier rapidement les écarts
- Les proportions doivent toujours totaliser 100%
- L'exercice encourage la projection sans se limiter au poste actuel
- Le plan d'action permet de concrétiser la réflexion
- L'outil peut être utilisé en autonomie ou avec accompagnement
- Les cocktails peuvent être sauvegardés pour un suivi dans le temps
- L'interface doit être intuitive avec des interactions visuelles claires
