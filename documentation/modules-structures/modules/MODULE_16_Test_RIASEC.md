# Module 16 : Test RIASEC - Vos Aptitudes et Compétences

## Informations Générales

- **Titre** : Test RIASEC - Vos Aptitudes et Compétences Personnelles
- **Type** : Test externe avec saisie de résultat
- **Durée estimée** : 20-30 minutes (sur site externe)
- **Objectif** : Identifier votre profil professionnel selon la typologie RIASEC
- **Phase** : Investigation - Axe Professionnel I
- **Site externe** : https://riasec.virginiebouvarel.fr/
- **Public cible** : Personnes en orientation ou reconversion professionnelle

## 🔗 Visualiser Preview

[Lien 1](https://riasec.virginiebouvarel.fr/results.php)

## PAGE DE PRÉSENTATION

### Éléments Visuels
- **Badge du module** : "Module 16"
- **Titre** : "Test RIASEC - Vos Aptitudes et Compétences"
- **Icône/Emoji** : 🎯 (aptitudes) ou 🧭 (orientation)
- **Animation d'entrée** : Fade-in avec slide-up

### Contenu
- **Description courte** : "Découvrez votre profil professionnel RIASEC"
- **Description détaillée** : "Le test RIASEC vous permet d'identifier vos aptitudes et compétences personnelles selon 6 dimensions professionnelles : Réaliste, Investigateur, Artistique, Social, Entreprenant et Conventionnel."
- **Durée estimée** : 20-30 minutes
- **Type d'activité** : Test psychométrique externe
- **Objectif principal** : "Identifier votre profil RIASEC et les métiers correspondants"

### Points Clés
- Découvrir vos 6 dimensions professionnelles
- Identifier vos aptitudes dominantes
- Explorer les métiers correspondant à votre profil

### Message de Préparation
- **Conseil** : "Répondez spontanément aux questions du test. Il n'y a pas de bonnes ou mauvaises réponses."

### Bouton d'Action
- **Texte** : "Commencer l'activité"
- **Style** : btn-primary btn-lg
- **Action** : Navigation vers la page de lien externe

## Structure du Module

### Page 1 : Introduction et Lien Externe

#### En-tête
- **Titre Principal** : "Test RIASEC"
- **Sous-titre** : "Vos aptitudes et compétences personnelles"

#### Section Explicative
```html
<div class="explanation-section">
  <h2>À propos du test RIASEC</h2>
  <div class="riasec-info">
    <p class="lead">Le RIASEC est un modèle de classification des intérêts professionnels développé par John Holland.</p>
    
    <h3>Les 6 dimensions du RIASEC :</h3>
    <div class="dimensions-grid">
      <div class="dimension">
        <span class="letter">R</span>
        <strong>Réaliste</strong>
        <p>Activités pratiques, manipulation d'outils, travail manuel</p>
      </div>
      <div class="dimension">
        <span class="letter">I</span>
        <strong>Investigateur</strong>
        <p>Recherche, analyse, résolution de problèmes complexes</p>
      </div>
      <div class="dimension">
        <span class="letter">A</span>
        <strong>Artistique</strong>
        <p>Créativité, expression, imagination, innovation</p>
      </div>
      <div class="dimension">
        <span class="letter">S</span>
        <strong>Social</strong>
        <p>Aide aux autres, enseignement, communication</p>
      </div>
      <div class="dimension">
        <span class="letter">E</span>
        <strong>Entreprenant</strong>
        <p>Leadership, persuasion, prise de décision</p>
      </div>
      <div class="dimension">
        <span class="letter">C</span>
        <strong>Conventionnel</strong>
        <p>Organisation, précision, respect des procédures</p>
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
    <li>Cliquez sur le bouton ci-dessous pour accéder au test RIASEC</li>
    <li>Complétez le test sur le site externe (environ 20-30 minutes)</li>
    <li>Notez votre résultat (votre code RIASEC à 3 lettres)</li>
    <li>Revenez sur cette page pour saisir votre résultat</li>
  </ol>
</div>
```

#### Bouton d'Accès au Test
```html
<div class="external-link-section">
  <button class="btn btn-primary btn-lg external-test-btn">
    <i class="icon-external-link"></i>
    Accéder au test RIASEC
  </button>
  <p class="external-notice">
    <small>Vous allez être redirigé vers : riasec.virginiebouvarel.fr</small>
  </p>
</div>
```
- **Action** : `window.open('https://riasec.virginiebouvarel.fr/', '_blank')`
- **Style** : Bouton avec icône de lien externe
- **Animation** : Pulse subtil pour attirer l'attention

### Page 2 : Saisie du Résultat

#### Formulaire de Résultat
```html
<div class="result-form">
  <h2>Saisissez votre résultat RIASEC</h2>
  
  <div class="checkbox-confirmation">
    <label>
      <input type="checkbox" id="test-completed" required>
      <span>J'ai passé le test RIASEC et j'ai obtenu mon résultat</span>
    </label>
  </div>
  
  <div class="result-input-section" style="display:none;">
    <label for="riasec-code">Mon code RIASEC (3 lettres) :</label>
    <input type="text" 
           id="riasec-code" 
           maxlength="3" 
           pattern="[RIASECriasec]{3}"
           placeholder="Ex: RIA"
           class="form-control riasec-input">
    
    <div class="code-helper">
      <p>Votre code est composé de 3 lettres parmi : R, I, A, S, E, C</p>
      <p>Par ordre d'importance décroissante</p>
    </div>
  </div>
  
  <div class="detailed-scores">
    <h3>Scores détaillés (optionnel)</h3>
    <div class="scores-grid">
      <div class="score-item">
        <label>R - Réaliste</label>
        <input type="number" min="0" max="100" placeholder="Score">
      </div>
      <div class="score-item">
        <label>I - Investigateur</label>
        <input type="number" min="0" max="100" placeholder="Score">
      </div>
      <div class="score-item">
        <label>A - Artistique</label>
        <input type="number" min="0" max="100" placeholder="Score">
      </div>
      <div class="score-item">
        <label>S - Social</label>
        <input type="number" min="0" max="100" placeholder="Score">
      </div>
      <div class="score-item">
        <label>E - Entreprenant</label>
        <input type="number" min="0" max="100" placeholder="Score">
      </div>
      <div class="score-item">
        <label>C - Conventionnel</label>
        <input type="number" min="0" max="100" placeholder="Score">
      </div>
    </div>
  </div>
  
  <div class="notes-section">
    <label for="riasec-notes">Notes personnelles (optionnel) :</label>
    <textarea id="riasec-notes" 
              rows="4" 
              placeholder="Notez ici vos observations, les métiers suggérés qui vous intéressent, etc."
              class="form-control"></textarea>
  </div>
</div>
```

#### Affichage du Profil (après saisie)
```html
<div class="profile-display" style="display:none;">
  <h3>Votre profil RIASEC : <span class="riasec-code-display">[CODE]</span></h3>
  
  <div class="profile-interpretation">
    <!-- Interprétation dynamique basée sur le code -->
  </div>
  
  <div class="hexagon-chart">
    <!-- Graphique hexagonal RIASEC si scores détaillés fournis -->
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
- **Sous-titre** : "Module 16 - Test RIASEC terminé"

### Message de Validation
- **Message principal** : "Excellent travail ! 🎉"
- **Accomplissement** : "Vous avez identifié votre profil RIASEC et vos aptitudes professionnelles"

### Affichage du Résultat
```html
<div class="result-summary">
  <h3>Votre profil RIASEC</h3>
  <div class="riasec-result-display">
    <div class="code-large">[CODE]</div>
    <div class="code-meaning">
      <!-- Affichage des 3 dimensions principales -->
    </div>
  </div>
</div>
```

### Points Accomplis
- ✓ Test RIASEC complété
- ✓ Profil professionnel identifié
- ✓ Aptitudes et compétences clarifiées

### Progression
- **Modules complétés** : 16/25
- **Pourcentage** : 64%
- **Barre de progression** : Visuelle avec animation

### Actions
- **Bouton "Voir mon profil détaillé"** (secondaire)
- **Bouton "Module suivant"** (primaire)
- **Lien "Télécharger mon profil RIASEC"**

## Fonctionnalités Techniques

### 1. Validation du Code RIASEC
```javascript
function validateRIASECCode(code) {
  const validLetters = ['R', 'I', 'A', 'S', 'E', 'C'];
  const upperCode = code.toUpperCase();
  
  // Vérifier que c'est 3 lettres
  if (upperCode.length !== 3) return false;
  
  // Vérifier que toutes les lettres sont valides
  for (let letter of upperCode) {
    if (!validLetters.includes(letter)) return false;
  }
  
  // Vérifier qu'il n'y a pas de doublons
  const uniqueLetters = new Set(upperCode);
  if (uniqueLetters.size !== 3) return false;
  
  return true;
}
```

### 2. Interprétation du Profil
```javascript
const riasecProfiles = {
  'R': {
    name: 'Réaliste',
    description: 'Préfère les activités pratiques et concrètes',
    traits: ['Pratique', 'Technique', 'Manuel'],
    careers: ['Ingénieur', 'Technicien', 'Artisan']
  },
  'I': {
    name: 'Investigateur',
    description: 'Aime analyser et résoudre des problèmes',
    traits: ['Analytique', 'Curieux', 'Méthodique'],
    careers: ['Chercheur', 'Analyste', 'Scientifique']
  },
  // ... autres profils
};
```

### 3. Gestion du Lien Externe
```javascript
// Tracking de l'ouverture du lien
function openExternalTest() {
  // Sauvegarder l'état
  localStorage.setItem('riasec_test_opened', Date.now());
  
  // Tracker l'événement
  analytics.track('external_test_opened', {
    module: 16,
    test: 'RIASEC',
    url: 'https://riasec.virginiebouvarel.fr/'
  });
  
  // Ouvrir dans un nouvel onglet
  window.open('https://riasec.virginiebouvarel.fr/', '_blank');
  
  // Activer le formulaire de saisie
  enableResultForm();
}
```

### 4. Sauvegarde des Données
```javascript
const riasecData = {
  module_id: 16,
  test_opened_at: 'timestamp',
  result: {
    code: 'RIA',
    scores: {
      R: 85,
      I: 78,
      A: 72,
      S: 45,
      E: 38,
      C: 32
    },
    notes: 'Notes personnelles...',
    completed_at: 'timestamp'
  }
};
```

## Responsive Design

### Mobile (< 768px)
- Dimensions RIASEC en accordéon
- Formulaire adapté verticalement
- Boutons empilés

### Tablette (768px - 1024px)
- Grille 2×3 pour les dimensions
- Layout optimal

### Desktop (> 1024px)
- Grille 3×2 ou 2×3 pour les dimensions
- Graphique hexagonal visible

## Accessibilité

- **Labels ARIA** : Sur tous les champs
- **Navigation clavier** : Tab order logique
- **Annonces** : "Lien externe" annoncé
- **Contraste** : Respect WCAG AA

## Intégration SCORM

```javascript
// Sauvegarde du résultat
SCORM.SetValue('cmi.interactions.n.id', 'module16_riasec');
SCORM.SetValue('cmi.interactions.n.type', 'fill-in');
SCORM.SetValue('cmi.interactions.n.student_response', riasecCode);
SCORM.SetValue('cmi.completion_status', 'completed');
SCORM.Commit();
```

## Structure JSON Proposée

```json
{
  "module_id": 16,
  "module_title": "Test RIASEC",
  "module_type": "external_test",
  "external_url": "https://riasec.virginiebouvarel.fr/",
  "duration_minutes": 30,
  "sections": [
    {
      "id": "introduction",
      "type": "info_page",
      "content": {
        "title": "Test RIASEC",
        "description": "Description du test",
        "dimensions": ["R", "I", "A", "S", "E", "C"]
      }
    },
    {
      "id": "external_link",
      "type": "external_redirect",
      "url": "https://riasec.virginiebouvarel.fr/",
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
          "id": "riasec_code",
          "type": "text",
          "pattern": "[RIASECriasec]{3}",
          "required": true
        },
        {
          "id": "detailed_scores",
          "type": "number_grid",
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
3. **Validation** : Vérifier le format du code RIASEC
4. **Aide** : Fournir des exemples et explications claires
5. **Fallback** : Permettre la saisie manuelle si le site externe est inaccessible
