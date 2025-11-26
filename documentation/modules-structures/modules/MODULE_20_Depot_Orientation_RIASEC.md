# Module 20 : Dépôt Orientation - Outils d'Orientation Professionnelle

## Informations Générales

- **Titre** : Dépôt Orientation - Outils d'Orientation Professionnelle
- **Type** : Plateforme externe d'outils psychométriques
- **Durée estimée** : 30-60 minutes selon les outils choisis
- **Objectif** : Utiliser des outils d'orientation validés scientifiquement
- **Phase** : Investigation - Axe Professionnel II
- **Site externe** : http://deporientation.free.fr/
- **Public cible** : Professionnels et particuliers en orientation

## PAGE DE PRÉSENTATION

### Éléments Visuels
- **Badge du module** : "Module 20"
- **Titre** : "Dépôt Orientation - Outils Professionnels"
- **Icône/Emoji** : 🧭 (boussole) ou 📊 (analyse)
- **Animation d'entrée** : Fade-in avec slide-up

### Contenu
- **Description courte** : "Accédez à une batterie d'outils d'orientation professionnelle validés"
- **Description détaillée** : "Le Dépôt Orientation propose une collection d'outils psychométriques gratuits et validés scientifiquement pour l'orientation professionnelle. Explorez vos intérêts RIASEC, vos valeurs, votre efficacité personnelle et bien plus."
- **Durée estimée** : 30-60 minutes
- **Type d'activité** : Tests et questionnaires d'orientation
- **Objectif principal** : "Approfondir votre connaissance de soi avec des outils professionnels"

### Points Clés
- Outils RIASEC approfondis
- Questionnaires de personnalité validés
- Tests de valeurs et d'efficacité personnelle

### Message de Préparation
- **Conseil** : "Choisissez 1 ou 2 outils qui correspondent à vos besoins actuels. Vous pourrez revenir explorer les autres plus tard."

### Bouton d'Action
- **Texte** : "Commencer l'exploration"
- **Style** : btn-primary btn-lg
- **Action** : Navigation vers la page de présentation des outils

## Structure du Module

### Page 1 : Présentation des Outils Disponibles

#### En-tête
- **Titre Principal** : "Dépôt Orientation - Outils Professionnels"
- **Sous-titre** : "Sélectionnez les outils qui vous intéressent"

#### Section des Outils Principaux
```html
<div class="tools-section">
  <h2>Outils Disponibles sur la Plateforme</h2>
  
  <div class="tools-grid">
    <div class="tool-category">
      <h3>🎯 Outils RIASEC</h3>
      <div class="tool-list">
        <div class="tool-card">
          <h4>RIASEC Investigation</h4>
          <p>Recherche de métiers selon vos intérêts RIASEC</p>
          <span class="duration">15-20 min</span>
        </div>
        <div class="tool-card">
          <h4>Mid'Adozz</h4>
          <p>Questionnaire RIASEC pour adolescents</p>
          <span class="duration">20 min</span>
        </div>
        <div class="tool-card">
          <h4>RIASEC Flash</h4>
          <p>Questionnaire RIASEC rapide pour adultes</p>
          <span class="duration">10-15 min</span>
        </div>
      </div>
    </div>
    
    <div class="tool-category">
      <h3>🧠 Personnalité & Valeurs</h3>
      <div class="tool-list">
        <div class="tool-card">
          <h4>BFI-2-Fr</h4>
          <p>Test de personnalité Big Five (5 facteurs, 15 facettes)</p>
          <span class="duration">15-20 min</span>
        </div>
        <div class="tool-card">
          <h4>PVQ-RR</h4>
          <p>Questionnaire des valeurs de Schwartz (19 valeurs)</p>
          <span class="duration">15 min</span>
        </div>
        <div class="tool-card">
          <h4>ISI-5 Fr</h4>
          <p>Inventaire de style d'identité</p>
          <span class="duration">10 min</span>
        </div>
      </div>
    </div>
    
    <div class="tool-category">
      <h3>💪 Efficacité & Compétences</h3>
      <div class="tool-list">
        <div class="tool-card">
          <h4>CDSES-SF</h4>
          <p>Échelle de sentiment d'efficacité vocationnelle</p>
          <span class="duration">10 min</span>
        </div>
        <div class="tool-card">
          <h4>SGSES</h4>
          <p>Sentiment d'efficacité personnelle général</p>
          <span class="duration">10 min</span>
        </div>
        <div class="tool-card">
          <h4>AECTF</h4>
          <p>Auto-évaluation des compétences transversales</p>
          <span class="duration">20 min</span>
        </div>
      </div>
    </div>
    
    <div class="tool-category">
      <h3>🎭 Autres Outils</h3>
      <div class="tool-list">
        <div class="tool-card">
          <h4>WOQ</h4>
          <p>Questionnaire de sens du travail</p>
          <span class="duration">10 min</span>
        </div>
        <div class="tool-card">
          <h4>ZTPI Fr</h4>
          <p>Perspective temporelle de Zimbardo</p>
          <span class="duration">15 min</span>
        </div>
        <div class="tool-card">
          <h4>SERTHUAL</h4>
          <p>Échelle d'estime de soi</p>
          <span class="duration">5 min</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### Instructions
```html
<div class="instructions-box">
  <h3>📝 Comment procéder</h3>
  <ol>
    <li>Cliquez sur le bouton pour accéder au Dépôt Orientation</li>
    <li>Choisissez 1 ou 2 outils qui vous intéressent</li>
    <li>Complétez les questionnaires sélectionnés</li>
    <li>Notez vos résultats principaux</li>
    <li>Revenez ici pour saisir vos découvertes</li>
  </ol>
  
  <div class="recommendation">
    <i class="icon-info"></i>
    <p><strong>Recommandation :</strong> Commencez par le RIASEC Flash si vous n'avez pas encore fait de test RIASEC</p>
  </div>
</div>
```

#### Bouton d'Accès
```html
<div class="external-link-section">
  <button class="btn btn-primary btn-lg external-test-btn">
    <i class="icon-external-link"></i>
    Accéder au Dépôt Orientation
  </button>
  <p class="external-notice">
    <small>Vous allez être redirigé vers : deporientation.free.fr</small>
  </p>
</div>
```
- **Action** : `window.open('http://deporientation.free.fr/', '_blank')`

### Page 2 : Saisie des Résultats

#### Formulaire de Résultats
```html
<div class="results-form">
  <h2>Vos Résultats du Dépôt Orientation</h2>
  
  <div class="checkbox-confirmation">
    <label>
      <input type="checkbox" id="tests-completed" required>
      <span>J'ai complété au moins un outil sur le Dépôt Orientation</span>
    </label>
  </div>
  
  <div class="results-section" style="display:none;">
    <h3>Outils complétés</h3>
    
    <div class="tool-results">
      <div class="result-item">
        <h4>Outil 1</h4>
        <select class="tool-select">
          <option value="">Sélectionnez l'outil utilisé</option>
          <optgroup label="RIASEC">
            <option value="riasec-flash">RIASEC Flash</option>
            <option value="midadozz">Mid'Adozz</option>
            <option value="riasec-investigation">RIASEC Investigation</option>
          </optgroup>
          <optgroup label="Personnalité">
            <option value="bfi2">BFI-2-Fr (Big Five)</option>
            <option value="pvqrr">PVQ-RR (Valeurs)</option>
          </optgroup>
          <optgroup label="Efficacité">
            <option value="cdses">CDSES-SF</option>
            <option value="sgses">SGSES</option>
          </optgroup>
          <option value="autre">Autre outil</option>
        </select>
        
        <label>Résultat principal :</label>
        <input type="text" placeholder="Ex: RIA pour RIASEC, ou vos scores principaux">
        
        <label>Notes et observations :</label>
        <textarea rows="3" placeholder="Qu'avez-vous appris sur vous-même ?"></textarea>
      </div>
      
      <button class="btn btn-outline-secondary add-tool">
        + Ajouter un autre outil
      </button>
    </div>
    
    <div class="global-insights">
      <label>Synthèse globale de vos découvertes :</label>
      <textarea rows="4" 
                placeholder="Quels sont les points communs entre les différents résultats ? Qu'est-ce qui vous a surpris ?"></textarea>
    </div>
  </div>
</div>
```

## PAGE DE SUCCÈS

### Éléments Visuels
- **Animation** : Confettis ou particules
- **Icône** : ✓ dans cercle vert animé
- **Titre** : "Félicitations !"
- **Sous-titre** : "Module 20 - Dépôt Orientation terminé"

### Message de Validation
- **Message principal** : "Excellent travail d'exploration ! 🎉"
- **Accomplissement** : "Vous avez approfondi votre connaissance de soi avec des outils professionnels"

### Points Accomplis
- ✓ Outils psychométriques complétés
- ✓ Résultats analysés et notés
- ✓ Connaissance de soi approfondie

### Progression
- **Modules complétés** : 20/25
- **Pourcentage** : 80%
- **Barre de progression** : Visuelle avec animation

## Structure JSON Proposée

```json
{
  "module_id": 20,
  "module_title": "Dépôt Orientation - Outils Professionnels",
  "module_type": "external_tools_platform",
  "external_url": "http://deporientation.free.fr/",
  "duration_minutes": 60,
  "available_tools": [
    {
      "category": "RIASEC",
      "tools": ["RIASEC Flash", "Mid'Adozz", "RIASEC Investigation"]
    },
    {
      "category": "Personnalité",
      "tools": ["BFI-2-Fr", "PVQ-RR", "ISI-5"]
    },
    {
      "category": "Efficacité",
      "tools": ["CDSES-SF", "SGSES", "AECTF"]
    }
  ]
}
```

