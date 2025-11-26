# Module 9 : Les Ailes du Désir

## Informations Générales

- **Titre** : Les Ailes du Désir
- **Sous-titre** : Prenez conscience de vos envies et de vos motivations
- **Type** : Exercice d'orientation professionnelle - Collection "Chemin Faisant"
- **Durée estimée** : 15-20 minutes dans l'interface + temps de réflexion
- **Objectif** : Identifier et hiérarchiser les expériences de vie souhaitées
- **Domaines** : Professionnel et personnel
- **Public cible** : Personnes en questionnement sur leur orientation professionnelle

## 🔗 Visualiser Preview

[Lien 1](https://www.marija.fr/wp-content/uploads/2023/01/Exercice-Les-Ailes-du-D)

## Concept de l'Exercice

### Résumé
> "Les Ailes du Désir" est un exercice de la collection "Chemin Faisant" imaginé pour les besoins d'orientation professionnelle. Il s'agit d'un outil de la méthode d'orientation ADVP qui rend le bénéficiaire responsable de ses choix professionnels, tout en restant attentif ou attentive aux opportunités. Cet exercice concerne le domaine professionnel et le domaine personnel, ce qui permet d'ouvrir la réflexion sur ses envies et ses motivations. C'est est particulièrement appréciable chez les personnes qui se sentent bloquées dans leur situation professionnelle et qui ne sont pas sûres dans quelle direction elles souhaiteraient avancer.

### Utilisation de l'exercice
> Pour l'efficacité optimale de cet exercice prévoyez 15 à 20 minutes dans un endroit calme et sans distractions, où vous pouvez vous concentrer. Imprimez l'exercice et préparez votre stylo. Vous allez pleinement en bénéficier si vous prenez le temps de réfléchir aux questions ci-dessous et de formuler vos réponses par écrit. Ne vous limitez pas uniquement aux idées que vous trouvez réalisables et notez tout ce qui vous vient à l'esprit, peu importe le degré d'utopie.

### Pour aller plus loin
> Cet exercice peut également être restitué au début d'un accompagnement professionnel. Si les questions de cet exercice vous ont inspiré et vous souhaitez vous engager dans la démarche d'un accompagnement pour structurer votre réflexion et aller plus loin dans la réalisation de vos objectifs professionnels, je vous invite à prendre un rendez-vous préalable avec moi via le formulaire de contact sur mon site www.marja.fr.

## Structure de la Page

### 1. Header du Module

#### Éléments :
- **Badge Module** : "Module 9"
- **Titre Principal** : "Les Ailes du Désir"
- **Sous-titre** : "Prenez conscience de vos envies et de vos motivations"
- **Badge de Statut** : "Investigation Personnelle"
- **Image d'en-tête** : Cygne aux ailes déployées (symbolique de liberté et d'envol)

### 2. Section Introduction

#### Contenu :
```html
<div class="intro-section">
  <h2>🦢 Les Ailes du Désir - Exercice d'orientation</h2>
  <p class="collection-badge">Collection "Chemin Faisant"</p>
  <p>Cet exercice vous permet d'explorer vos envies profondes et vos motivations, 
     tant professionnelles que personnelles, pour mieux orienter votre évolution.</p>
</div>
```

### 3. Instructions de l'Exercice

#### Tableau Principal : Les 10 Expériences

```html
<div class="exercise-instructions">
  <h3>Instructions et tableau</h3>
  <ol>
    <li>Listez 10 expériences personnelles ou professionnelles que vous aimeriez vivre 
        <strong>quelque soit leur degré d'utopie</strong></li>
    <li>Expliquez en colonne P pourquoi vous souhaitez vivre chaque expérience retenue</li>
    <li>Dans la colonne D hiérarchisez-les en fonction de leur <strong>Désirabilité</strong>, 
        en les notant de 1 à 10 (La note 10 correspond au désir le plus fort)</li>
    <li>Dans la colonne F hiérarchisez-les en fonction de leur <strong>Faisabilité</strong>, 
        en les notant de 1 à 10 (La note 10 correspond à la plus grande faisabilité)</li>
    <li>Faites la somme des notes en colonne S (Somme) pour obtenir un classement</li>
    <li>Regroupez-les par thèmes (au moins 3 thèmes)</li>
    <li>Choisissez une expérience parmi celles retenues</li>
    <li>Évaluez le temps nécessaire à sa réalisation</li>
    <li>Listez les étapes nécessaires à la réalisation</li>
    <li>Par quoi je commence ?</li>
  </ol>
</div>
```

### 4. Tableau Interactif

#### Structure du tableau :
```html
<table class="experiences-table">
  <thead>
    <tr>
      <th>10 Expériences par ordre d'arrivée</th>
      <th>D<br/>(Désirabilité)</th>
      <th>F<br/>(Faisabilité)</th>
      <th>S<br/>(Somme)</th>
      <th>Pourquoi</th>
    </tr>
  </thead>
  <tbody>
    <!-- 10 lignes pour les expériences -->
    <tr v-for="i in 10">
      <td><textarea placeholder="Expérience {{i}}..."></textarea></td>
      <td><input type="number" min="1" max="10" /></td>
      <td><input type="number" min="1" max="10" /></td>
      <td><span class="auto-sum">{{sum}}</span></td>
      <td><textarea placeholder="Pourquoi cette expérience..."></textarea></td>
    </tr>
  </tbody>
</table>
```

### 5. Section Analyse et Regroupement

#### A. Regroupement par thèmes
```html
<div class="themes-section">
  <h3>Regroupement par thèmes</h3>
  <div class="themes-grid">
    <div class="theme-card">
      <input type="text" placeholder="Thème 1" />
      <div class="experiences-list">
        <!-- Liste des expériences associées -->
      </div>
    </div>
    <div class="theme-card">
      <input type="text" placeholder="Thème 2" />
      <div class="experiences-list">
        <!-- Liste des expériences associées -->
      </div>
    </div>
    <div class="theme-card">
      <input type="text" placeholder="Thème 3" />
      <div class="experiences-list">
        <!-- Liste des expériences associées -->
      </div>
    </div>
  </div>
</div>
```

#### B. Sélection et planification
```html
<div class="planning-section">
  <h3>Mon expérience prioritaire</h3>
  
  <div class="selected-experience">
    <label>Expérience choisie :</label>
    <select>
      <!-- Options dynamiques basées sur le tableau -->
    </select>
  </div>
  
  <div class="time-estimation">
    <label>Temps nécessaire estimé :</label>
    <input type="text" placeholder="Ex: 6 mois, 1 an..." />
  </div>
  
  <div class="steps-planning">
    <h4>Étapes de réalisation</h4>
    <ol class="steps-list">
      <li><input type="text" placeholder="Étape 1..." /></li>
      <li><input type="text" placeholder="Étape 2..." /></li>
      <li><input type="text" placeholder="Étape 3..." /></li>
      <!-- Bouton pour ajouter plus d'étapes -->
    </ol>
    <button class="add-step">+ Ajouter une étape</button>
  </div>
  
  <div class="first-action">
    <h4>Par quoi je commence ?</h4>
    <textarea placeholder="Ma première action concrète sera..."></textarea>
  </div>
</div>
```

### 6. Section Conseil

#### Mon conseil :
```html
<div class="advice-section">
  <h3>💡 Mon conseil</h3>
  <blockquote>
    "Les Ailes du Désir" est l'exercice auquel je retourne tous les 6 mois. 
    Cela me permet de suivre l'évolution de mes envies, car je veux être sûre 
    que les actions que je mets en place correspondent aux choses qui me motivent 
    et me font vibrer. En faisant cela je peux mieux orienter mon évolution 
    professionnelle et personnelle et mieux me préparer pour ce que je rêve de réaliser!
  </blockquote>
</div>
```

### 7. Boutons d'Action

- **Sauvegarder le travail** : Enregistre les données en local
- **Exporter en PDF** : Génère un PDF de l'exercice complété
- **Valider et continuer** : Passe au module suivant

## Caractéristiques Techniques

### Interactions
- **Auto-calcul** : La colonne S calcule automatiquement D + F
- **Tri dynamique** : Possibilité de trier par score total
- **Drag & Drop** : Pour associer les expériences aux thèmes
- **Validation progressive** : Débloque les sections suivantes
- **Sauvegarde automatique** : Toutes les 30 secondes

### Animations
- **Fade-in progressif** : Pour chaque section
- **Highlight au focus** : Sur les champs actifs
- **Animation de tri** : Lors du classement automatique
- **Indicateur de progression** : Barre de complétion

### Validation
- Minimum 5 expériences pour continuer
- Au moins 3 thèmes identifiés
- Une expérience sélectionnée
- Au moins 3 étapes planifiées
- Première action définie

### Sauvegarde des Données
```javascript
{
  experiences: [
    {
      id: 1,
      description: "Voyager en Asie pendant 3 mois",
      desirability: 9,
      feasibility: 6,
      sum: 15,
      reason: "Découvrir de nouvelles cultures et me ressourcer"
    }
  ],
  themes: [
    {
      name: "Voyages et découvertes",
      experienceIds: [1, 3, 7]
    }
  ],
  selectedExperience: 1,
  timeEstimation: "1 an de préparation",
  steps: [
    "Économiser 5000€",
    "Planifier l'itinéraire",
    "Obtenir les visas"
  ],
  firstAction: "Ouvrir un compte épargne dédié"
}
```

## Structure CSS Suggérée

```css
/* Tableau des expériences */
.experiences-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.experiences-table th {
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  padding: 1rem;
  font-weight: 600;
  color: var(--primary);
  text-align: center;
}

.experiences-table td {
  padding: 0.75rem;
  border-bottom: 1px solid var(--gray-100);
}

.experiences-table textarea {
  width: 100%;
  min-height: 60px;
  resize: vertical;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  padding: 0.5rem;
}

.experiences-table input[type="number"] {
  width: 60px;
  text-align: center;
  padding: 0.5rem;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
}

.auto-sum {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--success-bg);
  color: var(--success);
  border-radius: var(--radius);
  font-weight: 600;
}

/* Cartes de thèmes */
.themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.theme-card {
  background: var(--white);
  border: 2px dashed var(--gray-300);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  min-height: 200px;
  transition: all 0.3s ease;
}

.theme-card.has-items {
  border-style: solid;
  border-color: var(--primary);
  background: var(--primary-bg);
}

/* Section planification */
.planning-section {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-radius: var(--radius-xl);
  padding: 2rem;
  margin: 2rem 0;
}

.steps-list input {
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  background: var(--white);
}
```

## Structure JSON Proposée

```json
{
  "module": {
    "id": "module-09",
    "title": "Les Ailes du Désir",
    "subtitle": "Prenez conscience de vos envies et de vos motivations",
    "type": "exercice-orientation",
    "collection": "Chemin Faisant",
    "method": "ADVP",
    "phase": "investigation-personnelle",
    "duration": "15-20 minutes",
    "domains": ["professionnel", "personnel"],
    "sections": {
      "experiences": {
        "required": 5,
        "maximum": 10,
        "fields": ["description", "desirability", "feasibility", "reason"]
      },
      "themes": {
        "minimum": 3,
        "allow_custom": true
      },
      "planning": {
        "steps_minimum": 3,
        "time_estimation": true,
        "first_action": true
      }
    },
    "features": {
      "auto_calculation": true,
      "sorting": true,
      "drag_drop": true,
      "pdf_export": true,
      "auto_save": true
    },
    "validation": {
      "progressive": true,
      "required_sections": ["experiences", "themes", "planning"]
    }
  }
}
```

## Notes d'Intégration

- L'exercice est issu de la méthode ADVP (Activation du Développement Vocationnel et Personnel)
- Particulièrement utile pour les personnes en reconversion ou questionnement professionnel
- L'image du cygne symbolise la liberté et l'envol vers de nouvelles perspectives
- Recommandé de refaire l'exercice tous les 6 mois pour suivre l'évolution
- Ne pas se limiter aux idées "réalisables" - l'utopie est encouragée
- L'exercice combine réflexion personnelle et planification concrète
- Peut servir de base pour un accompagnement professionnel approfondi
