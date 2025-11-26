# Module 21 : Enquêtes Métiers et Marché du Travail

## Informations Générales

- **Titre** : Enquêtes Métiers et Marché du Travail
- **Type** : Guide d'entretien pour enquête terrain
- **Durée estimée** : 30-40 minutes (préparation) + temps d'entretien
- **Objectif** : Réaliser des enquêtes métiers pour valider ou affiner votre projet professionnel
- **Phase** : Investigation - Axe Professionnel II
- **Public cible** : Personnes en phase de validation de projet professionnel
- **Format** : Document de soutien pour entretiens professionnels

## PAGE DE PRÉSENTATION

### Éléments Visuels
- **Badge du module** : "Module 21"
- **Titre** : "Enquêtes Métiers et Marché du Travail"
- **Icône/Emoji** : 🎤 (interview) ou 💬 (dialogue)
- **Animation d'entrée** : Fade-in avec slide-up

### Contenu
- **Description courte** : "Préparez et menez des entretiens professionnels pour explorer vos pistes métiers"
- **Description détaillée** : "Ce module vous guide dans la réalisation d'enquêtes métiers auprès de professionnels. C'est un outil de soutien flexible : toutes les questions ne sont pas à poser systématiquement, l'important est de créer un échange authentique."
- **Durée estimée** : 30-40 minutes de préparation
- **Type d'activité** : Guide d'entretien structuré
- **Objectif principal** : "Confronter vos représentations à la réalité du terrain"

### Points Clés
- Préparer des entretiens professionnels structurés
- Recueillir des informations terrain précieuses
- Valider ou ajuster votre projet professionnel

### Message de Préparation
- **Conseil** : "Ce document est un guide. Adaptez les questions selon votre interlocuteur et laissez place à l'échange naturel."

### Bouton d'Action
- **Texte** : "Commencer la préparation"
- **Style** : btn-primary btn-lg
- **Action** : Navigation vers le formulaire d'enquête

## Structure du Module

### Page Principale : Guide d'Enquête Métier

#### En-tête
- **Titre Principal** : "Enquêtes Métiers et Marché du Travail"
- **Note importante** : 
```html
<div class="important-note">
  <p>Ceci est un document de soutien. Toutes les questions/thématiques ne sont pas systématiquement à poser en entretien. Il faut avant tout que cela reste un échange.</p>
</div>
```

### Section 1 : Identité de la Personne Interviewée

```html
<div class="section identity-section">
  <h2>Identité de la personne interviewée</h2>
  
  <div class="input-group">
    <label for="identite_personne">Identité de la personne interviewée :</label>
    <input type="text" id="identite_personne" placeholder="Nom, Prénom">
  </div>
  
  <div class="input-group">
    <label for="fonction_precise">Fonction précise :</label>
    <input type="text" id="fonction_precise" placeholder="Ex: Chef de projet, Ingénieur, etc.">
  </div>
  
  <div class="input-group">
    <label for="entreprise_actuelle">Entreprise actuelle :</label>
    <input type="text" id="entreprise_actuelle" placeholder="Nom de l'entreprise">
  </div>
  
  <div class="input-group">
    <label for="activite_entreprise">Activité principale de l'entreprise :</label>
    <input type="text" id="activite_entreprise" placeholder="Secteur d'activité, services/produits">
  </div>
  
  <div class="input-group">
    <label for="nombre_salaries">Nombre de salariés :</label>
    <input type="text" id="nombre_salaries" placeholder="Ex: 50, 200, 1000+">
  </div>
</div>
```

### Section 2 : Analyse de l'Activité

```html
<div class="section activity-analysis">
  <h2>Analyse de l'activité</h2>
  
  <div class="input-group">
    <label for="parcours_mene">Quel est le parcours que vous avez mené jusqu'à maintenant ?</label>
    <textarea id="parcours_mene" class="response-area" 
              placeholder="Ex: Études, expériences professionnelles, évolutions..."></textarea>
  </div>
  
  <div class="input-group">
    <label for="activites_principales">Quelles sont vos principales activités ?</label>
    <textarea id="activites_principales" class="response-area" 
              placeholder="Ex: Gestion de projet, développement, conseil, etc."></textarea>
  </div>
  
  <div class="input-group">
    <label for="activites_ponctuelles">Y a-t-il d'autres activités ponctuelles à mentionner ?</label>
    <textarea id="activites_ponctuelles" class="response-area" 
              placeholder="Ex: Participation à des groupes de travail, événements, formations..."></textarea>
  </div>
  
  <div class="input-group">
    <label for="qualites_appuyees">Sur quelles qualités vous appuyez-vous pour mener à bien ces activités ?</label>
    <textarea id="qualites_appuyees" class="response-area" 
              placeholder="Ex: Rigueur, créativité, sens de l'écoute, leadership..."></textarea>
  </div>
  
  <div class="input-group">
    <label for="competences_developpees">Quelles sont les principales compétences que ce métier vous a permis de développer ?</label>
    <textarea id="competences_developpees" class="response-area" 
              placeholder="Ex: Compétences techniques, relationnelles, managériales..."></textarea>
  </div>
  
  <div class="input-group">
    <label for="avantages_inconvenients">Pouvez-vous me citer 3 avantages et 3 inconvénients liés à l'exercice de votre activité professionnelle ?</label>
    <textarea id="avantages_inconvenients" class="response-area" 
              placeholder="Avantages: 1. ..., 2. ..., 3. ... 
Inconvénients: 1. ..., 2. ..., 3. ..."></textarea>
  </div>
  
  <div class="input-group">
    <label for="plus_important">Qu'est-ce qui est le plus important pour vous ?</label>
    <textarea id="plus_important" class="response-area" 
              placeholder="Ex: L'autonomie, l'impact, le salaire, l'équilibre vie pro/perso..."></textarea>
  </div>
  
  <div class="input-group">
    <label>Diriez-vous que vous avez de :</label>
    <ul class="checkbox-list">
      <li>
        <input type="checkbox" id="autonomie">
        <label for="autonomie">L'autonomie, de la marge de manœuvre</label>
      </li>
      <li>
        <input type="checkbox" id="decision">
        <label for="decision">Des capacités fortes de prises de décision : lesquelles</label>
        <textarea class="response-area conditional" placeholder="Si oui, précisez lesquelles..."></textarea>
      </li>
      <li>
        <input type="checkbox" id="evolution">
        <label for="evolution">Des possibilités d'évolution</label>
      </li>
      <li>
        <input type="checkbox" id="accompagnement">
        <label for="accompagnement">De l'accompagnement managérial</label>
      </li>
    </ul>
  </div>
  
  <div class="input-group">
    <label for="interlocuteurs_pro">Quels sont vos principaux interlocuteurs professionnels ? (Avec qui êtes-vous en contact régulier ?)</label>
    <textarea id="interlocuteurs_pro" class="response-area" 
              placeholder="Ex: Clients, collègues, managers, fournisseurs..."></textarea>
  </div>
  
  <div class="input-group">
    <label for="fourchette_remuneration">Quelle est la fourchette de rémunération ?</label>
    <input type="text" id="fourchette_remuneration" placeholder="Ex: 35K€ - 45K€ brut/an">
  </div>
</div>
```

### Section 3 : Questions de Fin

```html
<div class="section closing-questions">
  <h2>Questions de fin</h2>
  
  <div class="input-group">
    <label for="reflexion_actuelle">Exposez votre réflexion, là où vous en êtes aujourd'hui.</label>
    <textarea id="reflexion_actuelle" class="response-area" 
              placeholder="Ex: Mes doutes, mes envies, mes premières pistes..."></textarea>
    <p class="hint">Cette question permet de partager votre projet avec l'interviewé</p>
  </div>
  
  <div class="input-group">
    <label for="conseils_projet">Quels conseils me donneriez-vous pour aboutir dans mon projet ?</label>
    <textarea id="conseils_projet" class="response-area" 
              placeholder="Ex: Formations, contacts, lectures, démarches..."></textarea>
  </div>
  
  <div class="input-group">
    <label for="recommander_personne">Pouvez-vous me recommander une personne que vous appréciez et que je puisse aller voir pour continuer mon enquête ?</label>
    <textarea id="recommander_personne" class="response-area" 
              placeholder="Nom, Fonction, Entreprise, Contact (si autorisé)"></textarea>
    <p class="hint">Cette question permet de créer un réseau et d'obtenir d'autres contacts</p>
  </div>
</div>
```

### Section 4 : Synthèse Personnelle

```html
<div class="section personal-synthesis">
  <h2>Synthèse</h2>
  <p class="section-intro">À remplir après l'entretien, pour vous-même</p>
  
  <div class="input-group">
    <label for="ce_que_je_retiens">Qu'est-ce que je retiens de cet échange ?</label>
    <textarea id="ce_que_je_retiens" class="response-area" 
              placeholder="Ex: Informations clés, surprises, confirmations..."></textarea>
  </div>
  
  <div class="input-group">
    <label for="ce_que_cela_apporte">Qu'est-ce que cela m'apporte dans ma réflexion ?</label>
    <textarea id="ce_que_cela_apporte" class="response-area" 
              placeholder="Ex: Nouvelles pistes, clarification, élimination de certaines options..."></textarea>
  </div>
  
  <div class="input-group">
    <label for="ce_que_ca_dit_de_moi">Qu'est-ce que ça dit de moi ? (valeurs, modes de fonctionnement, motivations)</label>
    <textarea id="ce_que_ca_dit_de_moi" class="response-area" 
              placeholder="Ex: Mes priorités, mes préférences, mes points forts émergents..."></textarea>
  </div>
</div>
```

### Fonctionnalités Interactives

#### 1. Mode Préparation vs Mode Entretien
```javascript
const modes = {
  preparation: {
    title: "Mode Préparation",
    description: "Préparez vos questions et personnalisez le guide",
    editable: true
  },
  interview: {
    title: "Mode Entretien",
    description: "Version épurée pour la prise de notes durant l'entretien",
    editable: false
  }
};
```

#### 2. Sauvegarde et Export
- Auto-save toutes les 30 secondes
- Export PDF du guide personnalisé
- Export PDF de l'entretien complété
- Possibilité de créer plusieurs enquêtes

#### 3. Boutons d'Action
```html
<div class="action-buttons">
  <button class="btn btn-outline-secondary save-draft">
    <i class="icon-save"></i> Sauvegarder le brouillon
  </button>
  <button class="btn btn-outline-primary export-guide">
    <i class="icon-download"></i> Exporter le guide
  </button>
  <button class="btn btn-primary btn-lg validate-enquete">
    Valider cette enquête
    <i class="icon-check"></i>
  </button>
</div>
```

## PAGE DE SUCCÈS

### Éléments Visuels
- **Animation** : Confettis ou particules
- **Icône** : ✓ dans cercle vert animé
- **Titre** : "Félicitations !"
- **Sous-titre** : "Module 21 - Enquête Métier préparée"

### Message de Validation
- **Message principal** : "Excellent travail de préparation ! 🎉"
- **Accomplissement** : "Vous êtes prêt(e) à mener votre enquête métier de manière professionnelle"

### Points Accomplis
- ✓ Guide d'entretien personnalisé
- ✓ Questions adaptées à votre projet
- ✓ Document prêt pour l'enquête terrain

### Actions Supplémentaires
```html
<div class="next-steps">
  <h3>Prochaines étapes :</h3>
  <ul>
    <li>Identifiez 2-3 professionnels à interviewer</li>
    <li>Prenez contact (LinkedIn, email, téléphone)</li>
    <li>Proposez un entretien de 30-45 minutes</li>
    <li>Menez l'entretien avec votre guide</li>
    <li>Complétez la synthèse après chaque entretien</li>
  </ul>
</div>
```

### Progression
- **Modules complétés** : 21/25
- **Pourcentage** : 84%
- **Barre de progression** : Visuelle avec animation

## Fonctionnalités Techniques

### 1. Gestion des Enquêtes
```javascript
const enqueteData = {
  module_id: 21,
  enquetes: [
    {
      id: 1,
      date_preparation: "timestamp",
      date_entretien: "timestamp",
      personne: {
        nom: "string",
        fonction: "string",
        entreprise: "string"
      },
      reponses: {
        // Toutes les réponses
      },
      synthese: {
        retenu: "string",
        apport: "string",
        revelation_personnelle: "string"
      }
    }
  ],
  nombre_enquetes_realisees: 0,
  nombre_enquetes_planifiees: 0
};
```

### 2. Personnalisation du Guide
```javascript
function customizeGuide(projectType) {
  // Adapter les questions selon le type de projet
  const questionSets = {
    reconversion: [...],
    evolution: [...],
    creation: [...]
  };
  
  return questionSets[projectType];
}
```

## Responsive Design

### Mobile (< 768px)
- Formulaire adapté en colonnes simples
- Textareas redimensionnables
- Mode lecture optimisé pour entretien

### Tablette & Desktop
- Layout optimal pour prise de notes
- Possibilité d'affichage côte à côte

## Accessibilité

- **Labels explicites** : Pour tous les champs
- **Navigation clavier** : Tab order logique
- **Mode sombre** : Pour confort de lecture
- **Taille de police** : Ajustable

## Intégration SCORM

```javascript
// Sauvegarde de l'enquête
SCORM.SetValue('cmi.suspend_data', JSON.stringify(enqueteData));
SCORM.SetValue('cmi.interactions.n.id', 'module21_enquete');
SCORM.SetValue('cmi.completion_status', 'completed');
SCORM.Commit();
```

## Structure JSON Proposée

```json
{
  "module_id": 21,
  "module_title": "Enquêtes Métiers et Marché du Travail",
  "module_type": "interview_guide",
  "duration_minutes": 40,
  "sections": [
    {
      "id": "identity",
      "title": "Identité de la personne",
      "fields": ["nom", "fonction", "entreprise", "secteur", "taille"]
    },
    {
      "id": "activity_analysis",
      "title": "Analyse de l'activité",
      "questions": [
        {
          "id": "parcours",
          "text": "Quel est le parcours...",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "id": "closing",
      "title": "Questions de fin",
      "questions": []
    },
    {
      "id": "synthesis",
      "title": "Synthèse personnelle",
      "questions": []
    }
  ],
  "features": {
    "multiple_interviews": true,
    "export_pdf": true,
    "customizable": true,
    "auto_save": true
  }
}
```

## Notes d'Implémentation

1. **Flexibilité** : Le guide doit rester adaptable
2. **Professionnalisme** : Mise en page soignée pour les exports
3. **Praticité** : Interface simple pendant l'entretien
4. **Suivi** : Possibilité de comparer plusieurs enquêtes
5. **Réseau** : Gestion des contacts obtenus

