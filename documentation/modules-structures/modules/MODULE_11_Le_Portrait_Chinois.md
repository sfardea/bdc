# Module 11 : Le Portrait Chinois

## Informations Générales

- **Titre** : Le Portrait Chinois
- **Type** : Exercice d'introspection et de connaissance de soi
- **Durée estimée** : 20 à 30 minutes
- **Objectif** : Se donner des informations sur soi en imaginant être autre chose
- **Inspiration** : "Questionnaire de Proust" - jeu d'esprit créé par Marcel Proust
- **Public cible** : Tout public - excellent brise-glace et exercice de personnalité
- **Niveau** : Adaptable selon les objectifs pédagogiques

## 🔗 Visualiser Preview

[Lien 1](https://drive.google.com/file/d/19-LmdLYkrg1bKCSKo5_8oE3I3CPZykug/view) | [Lien 2](https://images.app.goo.gl/XgpMcnCZUyNXUqgD6) | [Lien 3](https://images.app.goo.gl/kXXN7Hg71uYf5QbF8)

## Concept de l'Exercice

### Principe
> Le portrait chinois est un jeu d'esprit créé par l'écrivain français Marcel Proust. Le but est de **donner des informations sur soi en imaginant être autre chose**. Toutes les catégories sont possibles !

### Utilité pédagogique
> Cette activité est idéale pour travailler l'hypothèse imaginaire "si j'étais + nom, je serais..." et pour parler de sa personnalité ! C'est également un excellent brise-glace.

### Deux versions disponibles
1. **Version 1** : Questionnaire pré-rempli avec catégories fréquentes + justification
2. **Version 2** : Version orale interactive "Et toi ? Et vous ?" pour production orale et échange

## Structure de la Page

### 1. Header du Module

#### Éléments :
- **Badge Module** : "Module 11"
- **Titre Principal** : "Le Portrait Chinois"
- **Sous-titre** : "Découvrez votre personnalité à travers l'imaginaire"
- **Badge de Statut** : "Investigation Personnelle"
- **Logo créatif** : Tiphanie Montus - MondoLinguo.com

### 2. Section Introduction

#### Contenu :
```html
<div class="intro-section">
  <h2>🎭 Le Portrait Chinois</h2>
  <p class="intro-quote">"Si j'étais... je serais..."</p>
  <div class="intro-description">
    <p>Un jeu d'esprit créé par Marcel Proust pour se révéler à travers l'imaginaire.</p>
    <p>Donnez des informations sur vous en imaginant être autre chose.</p>
    <p>Toutes les catégories sont possibles !</p>
  </div>
  <div class="duration-info">
    <span class="icon-clock">⏱️</span>
    <span>Durée : 20 à 30 minutes</span>
  </div>
</div>
```

### 3. Instructions de l'Exercice

#### Version 1 - Portrait avec justification :
```html
<div class="instructions-v1">
  <h3>Instructions - Version complète</h3>
  <ol>
    <li>Complétez votre portrait chinois selon votre personnalité.</li>
    <li>Expliquez pourquoi !</li>
    <li>Posez des questions à votre partenaire.</li>
  </ol>
</div>
```

#### Version 2 - Portrait interactif :
```html
<div class="instructions-v2">
  <h3>Instructions - Version interactive</h3>
  <ol>
    <li>Complétez votre portrait chinois selon votre personnalité.</li>
    <li>Posez des questions à votre partenaire.</li>
    <li>Écrivez les réponses de votre partenaire.</li>
  </ol>
</div>
```

### 4. Tableau Principal - Version 1 (avec justification)

#### Structure du tableau :
```html
<table class="portrait-table version-1">
  <thead>
    <tr>
      <th class="category-column">Si j'étais</th>
      <th class="answer-column">je serais...</th>
      <th class="reason-column">Pourquoi ?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="category">un animal</td>
      <td><input type="text" placeholder="Ex: un aigle" /></td>
      <td><textarea placeholder="Parce que j'aime la liberté et voir les choses de haut..."></textarea></td>
    </tr>
    <tr>
      <td class="category">un objet</td>
      <td><input type="text" placeholder="Ex: un livre" /></td>
      <td><textarea placeholder="Parce que j'aime partager des histoires..."></textarea></td>
    </tr>
    <tr>
      <td class="category">une saison</td>
      <td><input type="text" placeholder="Ex: le printemps" /></td>
      <td><textarea placeholder="Parce que j'aime le renouveau..."></textarea></td>
    </tr>
    <tr>
      <td class="category">une ville</td>
      <td><input type="text" placeholder="Ex: Paris" /></td>
      <td><textarea placeholder="Parce que j'aime la culture..."></textarea></td>
    </tr>
    <tr>
      <td class="category">une couleur</td>
      <td><input type="text" placeholder="Ex: le bleu" /></td>
      <td><textarea placeholder="Parce que c'est apaisant..."></textarea></td>
    </tr>
    <tr>
      <td class="category">une boisson</td>
      <td><input type="text" placeholder="Ex: un café" /></td>
      <td><textarea placeholder="Parce que j'aime l'énergie..."></textarea></td>
    </tr>
    <tr>
      <td class="category">un instrument</td>
      <td><input type="text" placeholder="Ex: un piano" /></td>
      <td><textarea placeholder="Parce que j'aime l'harmonie..."></textarea></td>
    </tr>
    <tr>
      <td class="category">un livre</td>
      <td><input type="text" placeholder="Ex: Le Petit Prince" /></td>
      <td><textarea placeholder="Parce que j'aime la poésie..."></textarea></td>
    </tr>
    <tr>
      <td class="category">un sport</td>
      <td><input type="text" placeholder="Ex: la natation" /></td>
      <td><textarea placeholder="Parce que j'aime la fluidité..."></textarea></td>
    </tr>
    <tr>
      <td class="category">une langue</td>
      <td><input type="text" placeholder="Ex: l'italien" /></td>
      <td><textarea placeholder="Parce que c'est musical..."></textarea></td>
    </tr>
    <tr>
      <td class="category">un style de musique</td>
      <td><input type="text" placeholder="Ex: le jazz" /></td>
      <td><textarea placeholder="Parce que j'aime l'improvisation..."></textarea></td>
    </tr>
    <tr>
      <td class="category">un vêtement</td>
      <td><input type="text" placeholder="Ex: un jean" /></td>
      <td><textarea placeholder="Parce que c'est confortable..."></textarea></td>
    </tr>
    <tr>
      <td class="category">un film</td>
      <td><input type="text" placeholder="Ex: Amélie Poulain" /></td>
      <td><textarea placeholder="Parce que j'aime la fantaisie..."></textarea></td>
    </tr>
    <!-- Lignes vierges pour catégories personnalisées -->
    <tr class="custom-row">
      <td><input type="text" placeholder="Votre catégorie..." /></td>
      <td><input type="text" placeholder="Votre réponse..." /></td>
      <td><textarea placeholder="Votre justification..."></textarea></td>
    </tr>
  </tbody>
</table>
```

### 5. Tableau Principal - Version 2 (interactive)

#### Structure du tableau :
```html
<table class="portrait-table version-2">
  <thead>
    <tr>
      <th class="category-column">Si j'étais</th>
      <th class="answer-column">je serais...</th>
      <th class="partner-column">Et toi ? Et vous ?</th>
    </tr>
  </thead>
  <tbody>
    <!-- Mêmes catégories que Version 1 mais avec colonne partenaire -->
    <tr>
      <td class="category">un animal</td>
      <td><input type="text" placeholder="Ma réponse..." /></td>
      <td><input type="text" placeholder="Réponse du partenaire..." /></td>
    </tr>
    <!-- ... autres catégories ... -->
  </tbody>
</table>
```

### 6. Section Catégories Personnalisables

```html
<div class="custom-categories">
  <h3>Créez vos propres catégories</h3>
  <p>Vous pouvez ajouter vos propres catégories selon vos objectifs ou les idées de chacun !</p>
  
  <div class="category-suggestions">
    <h4>Suggestions de catégories supplémentaires :</h4>
    <div class="suggestion-grid">
      <span class="suggestion">un plat</span>
      <span class="suggestion">un pays</span>
      <span class="suggestion">une émotion</span>
      <span class="suggestion">un métier</span>
      <span class="suggestion">un super-pouvoir</span>
      <span class="suggestion">une époque</span>
      <span class="suggestion">un élément (eau, feu...)</span>
      <span class="suggestion">une planète</span>
      <span class="suggestion">un moyen de transport</span>
      <span class="suggestion">une œuvre d'art</span>
    </div>
  </div>
  
  <button class="add-category">+ Ajouter une catégorie personnalisée</button>
</div>
```

### 7. Section Analyse et Partage

```html
<div class="analysis-section">
  <h3>Analyse de votre portrait</h3>
  
  <div class="themes-analysis">
    <h4>Thèmes récurrents dans vos choix :</h4>
    <div class="themes-display">
      <!-- Analyse automatique des mots-clés -->
    </div>
  </div>
  
  <div class="personality-traits">
    <h4>Traits de personnalité révélés :</h4>
    <ul class="traits-list">
      <!-- Liste générée automatiquement -->
    </ul>
  </div>
  
  <div class="sharing-section">
    <h4>Partager et comparer</h4>
    <button class="share-portrait">Partager mon portrait</button>
    <button class="compare-portraits">Comparer avec un partenaire</button>
  </div>
</div>
```

### 8. Version Vierge Imprimable

```html
<div class="printable-section">
  <h3>Version à imprimer</h3>
  <p>Deux versions sont disponibles pour impression et utilisation en classe :</p>
  
  <div class="print-options">
    <div class="print-option">
      <h4>Version 1 - Avec justification</h4>
      <p>Catégories pré-remplies avec colonne "Pourquoi ?"</p>
      <button class="print-btn" onclick="printVersion(1)">
        <span class="icon">🖨️</span> Imprimer Version 1
      </button>
    </div>
    
    <div class="print-option">
      <h4>Version 2 - Interactive</h4>
      <p>Pour production orale avec colonne "Et toi ?"</p>
      <button class="print-btn" onclick="printVersion(2)">
        <span class="icon">🖨️</span> Imprimer Version 2
      </button>
    </div>
    
    <div class="print-option">
      <h4>Version vierge</h4>
      <p>Tableau vide pour créer vos propres catégories</p>
      <button class="print-btn" onclick="printVersion(3)">
        <span class="icon">🖨️</span> Imprimer Version vierge
      </button>
    </div>
  </div>
</div>
```

## Caractéristiques Techniques

### Interactions
- **Auto-sauvegarde** : Sauvegarde automatique toutes les modifications
- **Suggestions intelligentes** : Propositions basées sur les entrées
- **Analyse sémantique** : Extraction des traits de personnalité
- **Mode collaboratif** : Partage et comparaison avec partenaires

### Fonctionnalités
- **3 versions** : Complète, Interactive, Vierge
- **Catégories personnalisables** : Ajout illimité de nouvelles catégories
- **Export PDF** : Versions imprimables formatées
- **Partage** : Génération de lien de partage
- **Comparaison** : Visualisation côte à côte de deux portraits

### Animations
- **Révélation progressive** : Les catégories apparaissent une par une
- **Effets de hover** : Mise en évidence des champs actifs
- **Transitions douces** : Entre les différentes sections
- **Animation de validation** : Feedback visuel lors de la complétion

## Structure CSS Suggérée

```css
/* Tableau principal */
.portrait-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: var(--white);
  border: 2px solid #333;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.portrait-table thead {
  background: #e8e8f0;
}

.portrait-table th {
  padding: 1rem;
  font-weight: 700;
  font-style: italic;
  font-size: 1.2rem;
  border-bottom: 2px solid #333;
}

.portrait-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
}

.category-column {
  width: 25%;
  background: #f5f5f8;
  font-weight: 600;
}

.answer-column {
  width: 35%;
}

.reason-column,
.partner-column {
  width: 40%;
}

/* Champs de saisie */
.portrait-table input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
}

.portrait-table textarea {
  width: 100%;
  min-height: 50px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font-size: 0.9rem;
}

/* Suggestions de catégories */
.suggestion-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.suggestion {
  padding: 0.5rem 1rem;
  background: #f0f0f5;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #d0d0d8;
}

.suggestion:hover {
  background: #e0e0e8;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Boutons d'impression */
.print-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.print-option {
  padding: 1.5rem;
  background: #fafafa;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  text-align: center;
}

.print-btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #4a5568;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.print-btn:hover {
  background: #2d3748;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Version imprimable */
@media print {
  .portrait-table {
    page-break-inside: avoid;
  }
  
  .no-print {
    display: none;
  }
  
  .portrait-table td {
    height: 40px;
  }
}
```

## Structure JSON Proposée

```json
{
  "module": {
    "id": "module-11",
    "title": "Le Portrait Chinois",
    "type": "exercice-introspection",
    "inspiration": "Questionnaire de Proust",
    "creator": "Marcel Proust",
    "phase": "investigation-personnelle",
    "duration": "20-30 minutes",
    "objectives": [
      "Connaissance de soi",
      "Expression de la personnalité",
      "Travail sur l'hypothèse imaginaire",
      "Brise-glace"
    ],
    "versions": {
      "version1": {
        "name": "Avec justification",
        "columns": ["Si j'étais", "je serais", "Pourquoi ?"],
        "focus": "Introspection approfondie"
      },
      "version2": {
        "name": "Interactive",
        "columns": ["Si j'étais", "je serais", "Et toi ?"],
        "focus": "Production orale et échange"
      },
      "version3": {
        "name": "Vierge",
        "columns": ["Si j'étais", "je serais", "Pourquoi ?"],
        "focus": "Personnalisation complète"
      }
    },
    "default_categories": [
      "un animal",
      "un objet",
      "une saison",
      "une ville",
      "une couleur",
      "une boisson",
      "un instrument",
      "un livre",
      "un sport",
      "une langue",
      "un style de musique",
      "un vêtement",
      "un film"
    ],
    "suggested_categories": [
      "un plat",
      "un pays",
      "une émotion",
      "un métier",
      "un super-pouvoir",
      "une époque",
      "un élément",
      "une planète",
      "un moyen de transport",
      "une œuvre d'art"
    ],
    "features": {
      "customizable_categories": true,
      "auto_save": true,
      "semantic_analysis": true,
      "sharing": true,
      "comparison": true,
      "printable": true,
      "export_pdf": true
    }
  }
}
```

## Notes d'Intégration

- L'exercice est basé sur le célèbre "Questionnaire de Proust"
- Excellent outil pour briser la glace en début de formation
- Permet de travailler la structure grammaticale "Si + imparfait, conditionnel"
- Adaptable à tous les niveaux (débutant à avancé)
- Les catégories peuvent être adaptées selon le contexte professionnel
- L'analyse sémantique peut révéler des traits de personnalité dominants
- Peut servir de base pour un travail sur les valeurs professionnelles
- Format imprimable pour utilisation hors ligne
- Copyright : Tiphanie Montus - 2016 - MondoLinguo.com
