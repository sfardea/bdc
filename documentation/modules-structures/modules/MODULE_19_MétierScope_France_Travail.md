# Module 19 : MétierScope - Exploration des Métiers

## Informations Générales

- **Titre** : MétierScope - Explorez les Possibles
- **Type** : Exploration externe avec saisie de découvertes
- **Durée estimée** : 30-45 minutes (sur site externe)
- **Objectif** : Explorer les métiers et identifier des pistes de reconversion professionnelle
- **Phase** : Investigation - Axe Professionnel II
- **Site externe** : https://candidat.francetravail.fr/metierscope/
- **Source** : France Travail (anciennement Pôle Emploi)
- **Public cible** : Personnes en recherche d'orientation ou reconversion professionnelle

## PAGE DE PRÉSENTATION

### Éléments Visuels
- **Badge du module** : "Module 19"
- **Titre** : "MétierScope - Exploration des Métiers"
- **Icône/Emoji** : 🔍 (recherche) ou 🗺️ (exploration)
- **Animation d'entrée** : Fade-in avec slide-up

### Contenu
- **Description courte** : "Explorez les métiers et découvrez vos possibilités de reconversion"
- **Description détaillée** : "MétierScope est l'outil de France Travail qui vous permet d'explorer les métiers selon différents critères : secteurs d'activité, centres d'intérêt, compétences transférables. Découvrez les métiers d'avenir et identifiez ceux qui correspondent à vos aspirations."
- **Durée estimée** : 30-45 minutes
- **Type d'activité** : Exploration guidée de métiers
- **Objectif principal** : "Identifier des pistes de métiers adaptés à votre profil"

### Points Clés
- Explorer les métiers par secteur ou centre d'intérêt
- Découvrir les métiers d'avenir
- Identifier les passerelles depuis vos compétences actuelles

### Message de Préparation
- **Conseil** : "Gardez l'esprit ouvert et explorez des métiers auxquels vous n'auriez pas pensé spontanément"

### Bouton d'Action
- **Texte** : "Commencer l'exploration"
- **Style** : btn-primary btn-lg
- **Action** : Navigation vers la page de lien externe

## Structure du Module

### Page 1 : Introduction et Lien Externe

#### En-tête
- **Titre Principal** : "MétierScope - France Travail"
- **Sous-titre** : "Explorez les possibles pour votre reconversion"

#### Section Explicative
```html
<div class="explanation-section">
  <h2>À propos de MétierScope</h2>
  <div class="metierscope-info">
    <p class="lead">MétierScope vous permet d'explorer les métiers selon plusieurs approches complémentaires.</p>
    
    <h3>4 façons de découvrir les métiers :</h3>
    <div class="discovery-methods">
      <div class="method-card">
        <i class="icon-list"></i>
        <h4>Liste des métiers</h4>
        <p>Recherchez les métiers classés par ordre alphabétique</p>
      </div>
      <div class="method-card">
        <i class="icon-industry"></i>
        <h4>Secteurs d'activité</h4>
        <p>Retrouvez tous les métiers regroupés par secteurs</p>
      </div>
      <div class="method-card">
        <i class="icon-heart"></i>
        <h4>Centres d'intérêt</h4>
        <p>Explorez les métiers selon vos goûts</p>
      </div>
      <div class="method-card">
        <i class="icon-trending-up"></i>
        <h4>Métiers d'avenir</h4>
        <p>Découvrez les métiers et compétences du XXIe siècle</p>
      </div>
    </div>
  </div>
</div>
```

#### Fonctionnalités Spéciales
```html
<div class="special-features">
  <h3>🔄 Changer de métier à partir de vos compétences</h3>
  <p>Pas besoin de repartir de zéro ! MétierScope analyse vos compétences actuelles pour identifier des métiers accessibles.</p>
  
  <div class="feature-highlight">
    <i class="icon-magic"></i>
    <p>Répondez à quelques questions sur vos expériences, loisirs et contraintes pour découvrir des métiers qui vous correspondent.</p>
  </div>
</div>
```

#### Instructions
```html
<div class="instructions-box">
  <h3>📝 Instructions</h3>
  <ol>
    <li>Cliquez sur le bouton ci-dessous pour accéder à MétierScope</li>
    <li>Explorez les métiers selon vos préférences (30-45 minutes recommandées)</li>
    <li>Notez 3 à 5 métiers qui vous intéressent</li>
    <li>Revenez sur cette page pour saisir vos découvertes</li>
  </ol>
</div>
```

#### Bouton d'Accès au Site
```html
<div class="external-link-section">
  <button class="btn btn-primary btn-lg external-test-btn">
    <i class="icon-external-link"></i>
    Accéder à MétierScope
  </button>
  <p class="external-notice">
    <small>Vous allez être redirigé vers : candidat.francetravail.fr/metierscope</small>
  </p>
</div>
```
- **Action** : `window.open('https://candidat.francetravail.fr/metierscope/', '_blank')`

### Page 2 : Saisie des Découvertes

#### Formulaire de Résultats
```html
<div class="discoveries-form">
  <h2>Vos Découvertes sur MétierScope</h2>
  
  <div class="checkbox-confirmation">
    <label>
      <input type="checkbox" id="exploration-completed" required>
      <span>J'ai exploré MétierScope et identifié des métiers intéressants</span>
    </label>
  </div>
  
  <div class="discoveries-section" style="display:none;">
    <h3>Métiers qui m'intéressent</h3>
    <p class="hint">Listez 3 à 5 métiers découverts qui vous attirent</p>
    
    <div class="metier-inputs">
      <div class="metier-item">
        <label>Métier 1 :</label>
        <input type="text" placeholder="Ex: Développeur web" required>
        <textarea placeholder="Pourquoi ce métier vous intéresse-t-il ?" rows="2"></textarea>
      </div>
      <div class="metier-item">
        <label>Métier 2 :</label>
        <input type="text" placeholder="Ex: Chef de projet digital">
        <textarea placeholder="Pourquoi ce métier vous intéresse-t-il ?" rows="2"></textarea>
      </div>
      <div class="metier-item">
        <label>Métier 3 :</label>
        <input type="text" placeholder="Ex: UX Designer">
        <textarea placeholder="Pourquoi ce métier vous intéresse-t-il ?" rows="2"></textarea>
      </div>
      <button class="btn btn-outline-secondary add-metier">
        + Ajouter un métier
      </button>
    </div>
    
    <div class="exploration-method">
      <h4>Méthode d'exploration utilisée :</h4>
      <div class="method-checkboxes">
        <label><input type="checkbox"> Par secteur d'activité</label>
        <label><input type="checkbox"> Par centres d'intérêt</label>
        <label><input type="checkbox"> Par compétences transférables</label>
        <label><input type="checkbox"> Métiers d'avenir</label>
      </div>
    </div>
    
    <div class="insights-section">
      <label>Principales découvertes et surprises :</label>
      <textarea rows="4" 
                placeholder="Qu'avez-vous appris ? Qu'est-ce qui vous a surpris ? Quelles nouvelles pistes s'ouvrent à vous ?"></textarea>
    </div>
  </div>
</div>
```

## PAGE DE SUCCÈS

### Éléments Visuels
- **Animation** : Confettis ou particules
- **Icône** : ✓ dans cercle vert animé
- **Titre** : "Félicitations !"
- **Sous-titre** : "Module 19 - MétierScope terminé"

### Message de Validation
- **Message principal** : "Excellent travail d'exploration ! 🎉"
- **Accomplissement** : "Vous avez exploré de nouvelles pistes professionnelles et identifié des métiers potentiels"

### Points Accomplis
- ✓ Exploration MétierScope complétée
- ✓ Métiers d'intérêt identifiés
- ✓ Nouvelles pistes professionnelles découvertes

### Progression
- **Modules complétés** : 19/25
- **Pourcentage** : 76%
- **Barre de progression** : Visuelle avec animation

## Structure JSON Proposée

```json
{
  "module_id": 19,
  "module_title": "MétierScope - Exploration des Métiers",
  "module_type": "external_exploration",
  "external_url": "https://candidat.francetravail.fr/metierscope/",
  "duration_minutes": 45,
  "sections": [
    {
      "id": "introduction",
      "type": "info_page",
      "content": {
        "title": "MétierScope",
        "description": "Outil d'exploration des métiers de France Travail",
        "methods": ["secteurs", "centres_interet", "competences", "metiers_avenir"]
      }
    },
    {
      "id": "external_link",
      "type": "external_redirect",
      "url": "https://candidat.francetravail.fr/metierscope/",
      "target": "_blank"
    },
    {
      "id": "discoveries_input",
      "type": "form",
      "fields": [
        {
          "id": "metiers_list",
          "type": "dynamic_list",
          "min": 3,
          "max": 10
        },
        {
          "id": "exploration_method",
          "type": "checkbox_group"
        },
        {
          "id": "insights",
          "type": "textarea"
        }
      ]
    }
  ]
}
```

