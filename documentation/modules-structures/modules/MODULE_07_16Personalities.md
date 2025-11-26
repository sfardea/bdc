# Module 7 : Les 16 Types de Personnalité (16Personalities)

## Informations Générales

- **Titre** : Les 16 Types de Personnalité
- **Type** : Test externe avec saisie de résultat
- **Durée estimée** : 10-15 minutes (sur site externe)
- **Objectif** : Identifier votre type de personnalité et comprendre vos préférences comportementales
- **Phase** : Investigation - Axe Personnel
- **Site externe** : https://www.16personalities.com/fr/test-de-personnalite
- **Public cible** : Tout public en recherche de connaissance de soi

## 🔗 Visualiser Preview

[Lien 1](https://www.16personalities.com/fr/types-de-personnalite)

## PAGE DE PRÉSENTATION

### Éléments Visuels
- **Badge du module** : "Module 7"
- **Titre** : "Les 16 Types de Personnalité"
- **Icône/Emoji** : 🧠 (cerveau) ou 🎭 (masques)
- **Animation d'entrée** : Fade-in avec slide-up

### Contenu
- **Description courte** : "Découvrez votre type de personnalité parmi les 16 profils"
- **Description détaillée** : "Le test 16Personalities est basé sur les théories de Carl Jung et du MBTI. Il identifie votre type de personnalité selon 4 dimensions : Extraversion/Introversion, Sensation/Intuition, Pensée/Sentiment, Jugement/Perception."
- **Durée estimée** : 10-15 minutes
- **Type d'activité** : Test psychométrique externe
- **Objectif principal** : "Identifier votre type de personnalité et comprendre vos préférences comportementales"

### Points Clés
- Découvrir votre type parmi 16 personnalités
- Comprendre vos forces et préférences
- Explorer les carrières adaptées à votre profil

### Message de Préparation
- **Conseil** : "Répondez spontanément, sans trop réfléchir. Il n'y a pas de bonnes ou mauvaises réponses."

### Bouton d'Action
- **Texte** : "Commencer l'activité"
- **Style** : btn-primary btn-lg
- **Action** : Navigation vers la page de lien externe

## Structure du Module

### Page 1 : Introduction et Lien Externe

#### En-tête
- **Titre Principal** : "Les 16 Types de Personnalité"
- **Sous-titre** : "Test basé sur les théories de Jung et du MBTI"

#### Section Explicative
```html
<div class="explanation-section">
  <h2>À propos du test 16Personalities</h2>
  <div class="personality-info">
    <p class="lead">Ce test identifie votre type de personnalité parmi 16 profils distincts, répartis en 4 groupes.</p>
    
    <h3>Les 4 Groupes de Personnalités :</h3>
    <div class="groups-grid">
      <div class="group analysts">
        <h4>🔬 Les Analystes</h4>
        <ul>
          <li>INTJ - Architecte</li>
          <li>INTP - Logicien</li>
          <li>ENTJ - Commandant</li>
          <li>ENTP - Innovateur</li>
        </ul>
      </div>
      <div class="group diplomats">
        <h4>🌟 Les Diplomates</h4>
        <ul>
          <li>INFJ - Avocat</li>
          <li>INFP - Médiateur</li>
          <li>ENFJ - Protagoniste</li>
          <li>ENFP - Inspirateur</li>
        </ul>
      </div>
      <div class="group sentinels">
        <h4>🛡️ Les Sentinelles</h4>
        <ul>
          <li>ISTJ - Logisticien</li>
          <li>ISFJ - Défenseur</li>
          <li>ESTJ - Directeur</li>
          <li>ESFJ - Consul</li>
        </ul>
      </div>
      <div class="group explorers">
        <h4>🎯 Les Explorateurs</h4>
        <ul>
          <li>ISTP - Virtuose</li>
          <li>ISFP - Aventurier</li>
          <li>ESTP - Entrepreneur</li>
          <li>ESFP - Amuseur</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

#### Instructions
```html
<div class="instructions-box">
  <h3>📝 Instructions</h3>
  <ol>
    <li>Cliquez sur le bouton ci-dessous pour accéder au test 16Personalities</li>
    <li>Complétez le test sur le site externe (environ 10-15 minutes)</li>
    <li>Notez votre résultat (code à 4 lettres + variante A ou T)</li>
    <li>Revenez sur cette page pour saisir votre résultat</li>
  </ol>
</div>
```

#### Bouton d'Accès au Test
```html
<div class="external-link-section">
  <button class="btn btn-primary btn-lg external-test-btn">
    <i class="icon-external-link"></i>
    Accéder au test 16Personalities
  </button>
  <p class="external-notice">
    <small>Vous allez être redirigé vers : www.16personalities.com</small>
  </p>
</div>
```
- **Action** : `window.open('https://www.16personalities.com/fr/test-de-personnalite', '_blank')`
- **Style** : Bouton avec icône de lien externe
- **Animation** : Pulse subtil pour attirer l'attention

### Page 2 : Saisie du Résultat

#### Formulaire de Résultat
```html
<div class="result-form">
  <h2>Saisissez votre résultat 16Personalities</h2>
  
  <div class="checkbox-confirmation">
    <label>
      <input type="checkbox" id="test-completed" required>
      <span>J'ai passé le test et j'ai obtenu mon type de personnalité</span>
    </label>
  </div>
  
  <div class="result-input-section" style="display:none;">
    <label for="personality-type">Mon type de personnalité :</label>
    <div class="type-input-group">
      <select id="personality-code" class="form-control" required>
        <option value="">Sélectionnez votre type</option>
        <optgroup label="Analystes">
          <option value="INTJ">INTJ - Architecte</option>
          <option value="INTP">INTP - Logicien</option>
          <option value="ENTJ">ENTJ - Commandant</option>
          <option value="ENTP">ENTP - Innovateur</option>
        </optgroup>
        <optgroup label="Diplomates">
          <option value="INFJ">INFJ - Avocat</option>
          <option value="INFP">INFP - Médiateur</option>
          <option value="ENFJ">ENFJ - Protagoniste</option>
          <option value="ENFP">ENFP - Inspirateur</option>
        </optgroup>
        <optgroup label="Sentinelles">
          <option value="ISTJ">ISTJ - Logisticien</option>
          <option value="ISFJ">ISFJ - Défenseur</option>
          <option value="ESTJ">ESTJ - Directeur</option>
          <option value="ESFJ">ESFJ - Consul</option>
        </optgroup>
        <optgroup label="Explorateurs">
          <option value="ISTP">ISTP - Virtuose</option>
          <option value="ISFP">ISFP - Aventurier</option>
          <option value="ESTP">ESTP - Entrepreneur</option>
          <option value="ESFP">ESFP - Amuseur</option>
        </optgroup>
      </select>
      
      <select id="personality-variant" class="form-control">
        <option value="">Variante</option>
        <option value="A">A - Assertif</option>
        <option value="T">T - Turbulent</option>
      </select>
    </div>
  </div>
  
  <div class="notes-section">
    <label for="personality-notes">Notes personnelles (optionnel) :</label>
    <textarea id="personality-notes" 
              rows="4" 
              placeholder="Notez ici vos observations sur votre profil, les carrières suggérées, etc."
              class="form-control"></textarea>
  </div>
</div>
```

#### Affichage du Profil (après saisie)
```html
<div class="profile-display" style="display:none;">
  <h3>Votre type de personnalité : <span class="type-display">[TYPE]</span></h3>
  
  <div class="profile-description">
    <!-- Description dynamique basée sur le type sélectionné -->
  </div>
  
  <div class="profile-traits">
    <h4>Traits principaux :</h4>
    <ul class="traits-list">
      <!-- Liste des traits du type -->
    </ul>
  </div>
  
  <div class="career-suggestions">
    <h4>Carrières suggérées :</h4>
    <ul class="careers-list">
      <!-- Liste des carrières adaptées -->
    </ul>
  </div>
</div>
```

#### Boutons de Validation
```html
<div class="action-buttons">
  <button class="btn btn-secondary" id="back-to-test">
    <i class="icon-arrow-left"></i>
    Retourner au test
  </button>
  <button class="btn btn-primary btn-lg" id="validate-result" disabled>
    Valider mon résultat
    <i class="icon-check"></i>
  </button>
</div>
```

## PAGE DE SUCCÈS

### Éléments Visuels
- **Animation** : Confettis ou particules
- **Icône** : ✓ dans cercle vert animé
- **Titre** : "Félicitations !"
- **Sous-titre** : "Module 7 - Les 16 Types de Personnalité terminé"

### Message de Validation
- **Message principal** : "Excellent travail ! 🎉"
- **Accomplissement** : "Vous avez identifié votre type de personnalité et vos préférences comportementales"

### Affichage du Résultat
```html
<div class="result-summary">
  <h3>Votre type de personnalité</h3>
  <div class="personality-result-display">
    <div class="type-large">[TYPE]-[VARIANT]</div>
    <div class="type-name">[NOM DU TYPE]</div>
    <div class="type-group">[GROUPE]</div>
  </div>
</div>
```

### Points Accomplis
- ✓ Test de personnalité complété
- ✓ Type de personnalité identifié
- ✓ Forces et préférences clarifiées

### Progression
- **Modules complétés** : 7/25
- **Pourcentage** : 28%
- **Barre de progression** : Visuelle avec animation

### Actions
- **Bouton "Voir mon profil détaillé"** (secondaire)
- **Bouton "Module suivant"** (primaire)
- **Lien "Télécharger mon profil"**

## Fonctionnalités Techniques

### 1. Gestion du Lien Externe
```javascript
function openExternalTest() {
  // Sauvegarder l'état
  localStorage.setItem('16personalities_test_opened', Date.now());
  
  // Tracker l'événement
  analytics.track('external_test_opened', {
    module: 7,
    test: '16Personalities',
    url: 'https://www.16personalities.com/fr/test-de-personnalite'
  });
  
  // Ouvrir dans un nouvel onglet
  window.open('https://www.16personalities.com/fr/test-de-personnalite', '_blank');
  
  // Activer le formulaire de saisie
  enableResultForm();
}
```

### 2. Base de Données des Types
```javascript
const personalityTypes = {
  'INTJ': {
    name: 'Architecte',
    group: 'Analystes',
    description: 'Esprits imaginatifs et stratèges, avec un plan pour tout',
    traits: ['Stratégique', 'Indépendant', 'Déterminé', 'Visionnaire'],
    careers: ['Scientifique', 'Ingénieur', 'Analyste', 'Architecte']
  },
  'INFP': {
    name: 'Médiateur',
    group: 'Diplomates',
    description: 'Personnes poétiques, bienveillantes et altruistes',
    traits: ['Idéaliste', 'Créatif', 'Empathique', 'Flexible'],
    careers: ['Écrivain', 'Psychologue', 'Artiste', 'Conseiller']
  },
  // ... tous les autres types
};
```

### 3. Sauvegarde des Données
```javascript
const personalityData = {
  module_id: 7,
  test_opened_at: 'timestamp',
  result: {
    type: 'INTJ',
    variant: 'A',
    name: 'Architecte',
    group: 'Analystes',
    notes: 'Notes personnelles...',
    completed_at: 'timestamp'
  }
};
```

## Responsive Design

### Mobile (< 768px)
- Groupes de personnalités en accordéon
- Select adapté pour mobile
- Boutons empilés

### Tablette (768px - 1024px)
- Grille 2×2 pour les groupes
- Layout optimal

### Desktop (> 1024px)
- Grille 4×1 ou 2×2 pour les groupes
- Tous les éléments visibles

## Accessibilité

- **Labels ARIA** : Sur tous les champs
- **Navigation clavier** : Tab order logique
- **Annonces** : "Lien externe" annoncé
- **Contraste** : Respect WCAG AA

## Intégration SCORM

```javascript
// Sauvegarde du résultat
SCORM.SetValue('cmi.interactions.n.id', 'module7_16personalities');
SCORM.SetValue('cmi.interactions.n.type', 'choice');
SCORM.SetValue('cmi.interactions.n.student_response', personalityType);
SCORM.SetValue('cmi.completion_status', 'completed');
SCORM.Commit();
```

## Structure JSON Proposée

```json
{
  "module_id": 7,
  "module_title": "Les 16 Types de Personnalité",
  "module_type": "external_test",
  "external_url": "https://www.16personalities.com/fr/test-de-personnalite",
  "duration_minutes": 15,
  "sections": [
    {
      "id": "introduction",
      "type": "info_page",
      "content": {
        "title": "Les 16 Types de Personnalité",
        "description": "Description du test",
        "groups": ["Analystes", "Diplomates", "Sentinelles", "Explorateurs"]
      }
    },
    {
      "id": "external_link",
      "type": "external_redirect",
      "url": "https://www.16personalities.com/fr/test-de-personnalite",
      "target": "_blank"
    },
    {
      "id": "result_input",
      "type": "form",
      "fields": [
        {
          "id": "test_completed",
          "type": "checkbox",
          "required": true
        },
        {
          "id": "personality_type",
          "type": "select",
          "options": ["INTJ", "INTP", "ENTJ", "ENTP", "..."],
          "required": true
        },
        {
          "id": "variant",
          "type": "select",
          "options": ["A", "T"],
          "optional": true
        },
        {
          "id": "notes",
          "type": "textarea",
          "optional": true
        }
      ]
    }
  ]
}
```

## Notes d'Implémentation

1. **Sécurité** : Avertir l'utilisateur qu'il va sur un site externe
2. **Persistance** : Sauvegarder l'état si l'utilisateur quitte et revient
3. **Validation** : Vérifier que le type sélectionné est valide
4. **Aide** : Fournir des descriptions pour chaque type
5. **Fallback** : Permettre la saisie manuelle si le site externe est inaccessible
