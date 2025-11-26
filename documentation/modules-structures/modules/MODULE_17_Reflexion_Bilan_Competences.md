# Module 17 : Réflexion pour votre Bilan de Compétences

## Informations Générales

- **Titre** : Réflexion pour votre Bilan de Compétences
- **Type** : Questionnaire de réflexion approfondie
- **Durée estimée** : 30-40 minutes
- **Objectif** : Explorer vos talents et construire votre projet professionnel à travers une réflexion guidée
- **Phase** : Investigation - Axe Professionnel I
- **Public cible** : Personnes en bilan de compétences approfondi
- **Nombre de questions** : 6 questions ouvertes

## 🔗 Visualiser Preview

[Lien 1](https://g.co/gemini/share/7231c9ecf652)

## PAGE DE PRÉSENTATION

### Éléments Visuels
- **Badge du module** : "Module 17"
- **Titre** : "Réflexion pour votre Bilan de Compétences"
- **Icône/Emoji** : 💭 (réflexion) ou 🪞 (miroir/introspection)
- **Animation d'entrée** : Fade-in avec slide-up

### Contenu
- **Description courte** : "Prenez le temps de réfléchir en profondeur sur vos talents et aspirations"
- **Description détaillée** : "Ce module vous invite à une réflexion approfondie sur vos compétences, vos talents naturels et vos aspirations professionnelles. Vos réponses sont précieuses pour explorer vos talents et construire votre projet professionnel."
- **Durée estimée** : 30-40 minutes
- **Type d'activité** : Questions de réflexion ouvertes
- **Objectif principal** : "Identifier vos forces, talents et domaines d'apprentissage facile"

### Points Clés
- Identifier où vous perdez la notion du temps
- Reconnaître vos talents naturels
- Explorer vos domaines d'apprentissage facile

### Message de Préparation
- **Conseil** : "Installez-vous dans un endroit calme. Prenez le temps de répondre sincèrement et en détail à chaque question."

### Bouton d'Action
- **Texte** : "Commencer la réflexion"
- **Style** : btn-primary btn-lg
- **Action** : Navigation vers le questionnaire

## Structure du Module

### Page Principale : Questionnaire de Réflexion

#### En-tête
- **Titre Principal** : "Réflexion pour votre Bilan de Compétences"
- **Sous-titre** : "Prenez le temps de répondre à ces questions. Vos réponses sont précieuses pour explorer vos talents et construire votre projet professionnel."
- **Style** : Texte centré, fond neutre apaisant

### Questions de Réflexion

#### Question 1 : Perte de la notion du temps
```html
<div class="question-block">
  <div class="question-number">1.</div>
  <div class="question-content">
    <label for="question1">
      Dans quelles activités / tâches je me sens à ma place ou j'ai l'impression de perdre la notion du temps ?
    </label>
    <textarea 
      id="question1" 
      name="question1"
      rows="6"
      placeholder="Écrivez votre réponse ici..."
      class="form-control reflection-textarea"
      required>
    </textarea>
    <div class="char-counter">
      <span class="current">0</span> / <span class="min">50</span> caractères minimum
    </div>
  </div>
</div>
```

#### Question 2 : Talents naturels
```html
<div class="question-block">
  <div class="question-number">2.</div>
  <div class="question-content">
    <label for="question2">
      Qu'est-ce que je fais bien et facilement, de façon naturelle, de manière instinctive et spontanée, sans effort ? 
      (que ça soit dans ma vie pro ou perso)
    </label>
    <textarea 
      id="question2" 
      name="question2"
      rows="6"
      placeholder="Écrivez votre réponse ici..."
      class="form-control reflection-textarea"
      required>
    </textarea>
  </div>
</div>
```

#### Question 3 : Félicitations et compliments
```html
<div class="question-block">
  <div class="question-number">3.</div>
  <div class="question-content">
    <label for="question3">
      Quels sont les moments dans mon parcours où j'ai reçu des félicitations / compliments et pourquoi? 
      (même dans l'enfance, la vie pro ou perso)
    </label>
    <textarea 
      id="question3" 
      name="question3"
      rows="6"
      placeholder="Écrivez votre réponse ici..."
      class="form-control reflection-textarea"
      required>
    </textarea>
  </div>
</div>
```

#### Question 4 : Reconnaissance des autres
```html
<div class="question-block">
  <div class="question-number">4.</div>
  <div class="question-content">
    <label for="question4">
      Qu'est-ce que les autres reconnaissent comme forces ou talents en moi? 
      Quels sont les retours qu'ils me font régulièrement?
    </label>
    <textarea 
      id="question4" 
      name="question4"
      rows="6"
      placeholder="Écrivez votre réponse ici..."
      class="form-control reflection-textarea"
      required>
    </textarea>
  </div>
</div>
```

#### Question 5 : Apprentissage facile
```html
<div class="question-block">
  <div class="question-number">5.</div>
  <div class="question-content">
    <label for="question5">
      Quelles sont les notions, domaines, sujets ou thèmes dans lesquels j'apprends facilement?
    </label>
    <textarea 
      id="question5" 
      name="question5"
      rows="6"
      placeholder="Écrivez votre réponse ici..."
      class="form-control reflection-textarea"
      required>
    </textarea>
  </div>
</div>
```

#### Question 6 : Demandes d'aide
```html
<div class="question-block">
  <div class="question-number">6.</div>
  <div class="question-content">
    <label for="question6">
      Pour quelles choses les autres viennent-ils souvent me demander de l'aide ou des conseils ?
    </label>
    <textarea 
      id="question6" 
      name="question6"
      rows="6"
      placeholder="Écrivez votre réponse ici..."
      class="form-control reflection-textarea"
      required>
    </textarea>
  </div>
</div>
```

### Fonctionnalités Interactives

#### 1. Auto-save
- Sauvegarde automatique toutes les 30 secondes
- Indicateur visuel de sauvegarde
- Récupération des réponses en cas de fermeture accidentelle

#### 2. Compteur de caractères
- Minimum recommandé : 50 caractères par réponse
- Indicateur visuel (vert quand atteint)
- Pas de maximum imposé

#### 3. Navigation entre questions
```html
<div class="question-navigation">
  <button class="btn btn-outline-secondary prev-question" disabled>
    <i class="icon-arrow-left"></i> Question précédente
  </button>
  <span class="question-indicator">Question 1 sur 6</span>
  <button class="btn btn-outline-primary next-question">
    Question suivante <i class="icon-arrow-right"></i>
  </button>
</div>
```

#### 4. Barre de progression
```html
<div class="progress-container">
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 0%">
      <span class="progress-text">0% complété</span>
    </div>
  </div>
  <div class="questions-completed">
    <span class="completed">0</span> / 6 questions répondues
  </div>
</div>
```

### Section de Validation

#### Résumé avant validation
```html
<div class="summary-section" style="display:none;">
  <h3>Résumé de vos réflexions</h3>
  <div class="summary-grid">
    <div class="summary-item">
      <h4>1. Activités où je perds la notion du temps</h4>
      <p class="summary-text">[Aperçu de la réponse...]</p>
    </div>
    <div class="summary-item">
      <h4>2. Ce que je fais naturellement bien</h4>
      <p class="summary-text">[Aperçu de la réponse...]</p>
    </div>
    <!-- ... autres résumés -->
  </div>
  
  <div class="edit-option">
    <button class="btn btn-outline-secondary">
      <i class="icon-edit"></i> Modifier mes réponses
    </button>
  </div>
</div>
```

#### Boutons de validation
```html
<div class="action-buttons">
  <button class="btn btn-secondary save-draft">
    <i class="icon-save"></i> Sauvegarder le brouillon
  </button>
  <button class="btn btn-primary btn-lg validate-responses" disabled>
    Valider mes réflexions
    <i class="icon-check"></i>
  </button>
</div>
```

## PAGE DE SUCCÈS

### Éléments Visuels
- **Animation** : Particules douces ou effet de lumière
- **Icône** : ✓ dans cercle vert avec effet glow
- **Titre** : "Félicitations !"
- **Sous-titre** : "Module 17 - Réflexion pour votre Bilan terminé"

### Message de Validation
- **Message principal** : "Bravo pour cette introspection profonde ! 🌟"
- **Accomplissement** : "Vous avez pris le temps de réfléchir en profondeur sur vos talents, vos forces et ce qui vous anime vraiment."

### Points Accomplis
- ✓ 6 questions de réflexion complétées
- ✓ Talents naturels identifiés
- ✓ Forces reconnues explorées
- ✓ Domaines de facilité clarifiés

### Insights Générés (Optionnel)
```html
<div class="insights-section">
  <h3>Thèmes récurrents identifiés :</h3>
  <div class="themes-tags">
    <span class="theme-tag">Créativité</span>
    <span class="theme-tag">Relations humaines</span>
    <span class="theme-tag">Organisation</span>
    <!-- Tags générés par analyse textuelle -->
  </div>
</div>
```

### Progression
- **Modules complétés** : 17/25
- **Pourcentage** : 68%
- **Barre de progression** : Visuelle avec animation

### Actions
- **Bouton "Revoir mes réflexions"** (secondaire)
- **Bouton "Télécharger mes réponses"** (secondaire)
- **Bouton "Module suivant"** (primaire)

## Fonctionnalités Techniques

### 1. Gestion des Données
```javascript
const reflectionData = {
  module_id: 17,
  responses: [
    {
      question_id: 1,
      question: "Dans quelles activités...",
      response: "Texte de la réponse...",
      word_count: 125,
      themes: ["créativité", "concentration"]
    },
    // ... autres réponses
  ],
  completed_at: "timestamp",
  total_word_count: 750,
  identified_themes: ["créativité", "leadership", "apprentissage"],
  completion_time_minutes: 35
};
```

### 2. Analyse Textuelle (Optionnel)
```javascript
function analyzeThemes(text) {
  const themes = {
    creativite: ["créer", "imaginer", "innover", "concevoir"],
    leadership: ["diriger", "guider", "manager", "organiser"],
    relationnel: ["aider", "écouter", "conseiller", "accompagner"],
    technique: ["analyser", "résoudre", "calculer", "programmer"],
    // ... autres thèmes
  };
  
  // Identifier les thèmes récurrents
  return identifiedThemes;
}
```

### 3. Validation Progressive
```javascript
function validateQuestion(questionId) {
  const textarea = document.getElementById(`question${questionId}`);
  const minLength = 50;
  
  if (textarea.value.length >= minLength) {
    // Marquer comme valide
    markAsComplete(questionId);
    updateProgress();
  }
  
  // Activer le bouton de validation si toutes complétées
  checkAllQuestionsCompleted();
}
```

### 4. Export des Réponses
```javascript
function exportResponses(format) {
  if (format === 'pdf') {
    generatePDF({
      title: 'Mes Réflexions - Bilan de Compétences',
      date: new Date(),
      responses: reflectionData.responses,
      themes: reflectionData.identified_themes
    });
  } else if (format === 'docx') {
    generateDOCX(reflectionData);
  }
}
```

## Responsive Design

### Mobile (< 768px)
- Questions en pleine largeur
- Navigation simplifiée entre questions
- Boutons empilés verticalement
- Textarea adaptatif

### Tablette (768px - 1024px)
- Layout optimal avec marges
- Navigation latérale possible

### Desktop (> 1024px)
- Container centré max-width: 800px
- Affichage optimal pour la lecture
- Navigation fluide

## Accessibilité

- **Labels explicites** : Chaque question a un label clair
- **Navigation clavier** : Tab entre les questions
- **Annonces ARIA** : Progression annoncée
- **Contraste** : Texte noir sur fond clair

## Intégration SCORM

```javascript
// Sauvegarde des réponses
SCORM.SetValue('cmi.suspend_data', JSON.stringify(reflectionData));
SCORM.SetValue('cmi.interactions.n.id', 'module17_reflection');
SCORM.SetValue('cmi.interactions.n.type', 'long-fill-in');
SCORM.SetValue('cmi.completion_status', 'completed');
SCORM.Commit();
```

## Styles CSS Spécifiques

```css
.question-block {
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.question-block:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.question-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #6366f1;
  margin-bottom: 1rem;
}

.reflection-textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.6;
  resize: vertical;
  min-height: 150px;
}

.reflection-textarea:focus {
  border-color: #6366f1;
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.char-counter {
  margin-top: 0.5rem;
  text-align: right;
  color: #6b7280;
  font-size: 0.875rem;
}

.char-counter.valid {
  color: #10b981;
}
```

## Structure JSON Proposée

```json
{
  "module_id": 17,
  "module_title": "Réflexion pour votre Bilan de Compétences",
  "module_type": "reflection_questionnaire",
  "duration_minutes": 40,
  "questions": [
    {
      "id": 1,
      "text": "Dans quelles activités / tâches je me sens à ma place ou j'ai l'impression de perdre la notion du temps ?",
      "type": "long_text",
      "min_length": 50,
      "required": true,
      "themes": ["flow", "passion", "engagement"]
    },
    {
      "id": 2,
      "text": "Qu'est-ce que je fais bien et facilement, de façon naturelle, de manière instinctive et spontanée, sans effort ?",
      "type": "long_text",
      "min_length": 50,
      "required": true,
      "themes": ["talents", "facilité", "naturel"]
    },
    {
      "id": 3,
      "text": "Quels sont les moments dans mon parcours où j'ai reçu des félicitations / compliments et pourquoi?",
      "type": "long_text",
      "min_length": 50,
      "required": true,
      "themes": ["reconnaissance", "succès", "accomplissement"]
    },
    {
      "id": 4,
      "text": "Qu'est-ce que les autres reconnaissent comme forces ou talents en moi?",
      "type": "long_text",
      "min_length": 50,
      "required": true,
      "themes": ["forces", "feedback", "perception"]
    },
    {
      "id": 5,
      "text": "Quelles sont les notions, domaines, sujets ou thèmes dans lesquels j'apprends facilement?",
      "type": "long_text",
      "min_length": 50,
      "required": true,
      "themes": ["apprentissage", "curiosité", "domaines"]
    },
    {
      "id": 6,
      "text": "Pour quelles choses les autres viennent-ils souvent me demander de l'aide ou des conseils ?",
      "type": "long_text",
      "min_length": 50,
      "required": true,
      "themes": ["expertise", "aide", "conseil"]
    }
  ],
  "features": {
    "auto_save": true,
    "character_counter": true,
    "theme_analysis": true,
    "export_options": ["pdf", "docx"],
    "progress_tracking": true
  }
}
```

## Notes d'Implémentation

1. **UX Writing** : Utiliser un ton bienveillant et encourageant
2. **Temps de réflexion** : Ne pas presser l'utilisateur
3. **Confidentialité** : Assurer que les réponses sont privées
4. **Aide contextuelle** : Proposer des exemples si blocage
5. **Flexibilité** : Permettre de revenir et modifier les réponses

