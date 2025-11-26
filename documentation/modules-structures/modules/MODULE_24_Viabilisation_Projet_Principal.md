# Module 24 : Viabilisation de mon Projet Principal

## Informations Générales

- **Titre** : Viabilisation de mon Projet Principal
- **Type** : Analyse SWOT personnalisée pour projet professionnel
- **Durée estimée** : 30-40 minutes
- **Objectif** : Évaluer la faisabilité et structurer votre projet professionnel principal
- **Phase** : Synthèse et Plan d'Action
- **Public cible** : Personnes ayant défini un projet professionnel à concrétiser
- **Format** : Analyse structurée en 5 dimensions

## PAGE DE PRÉSENTATION

### Éléments Visuels
- **Badge du module** : "Module 24"
- **Titre** : "Viabilisation de mon Projet Principal"
- **Icône/Emoji** : 🎯 (cible) ou 📈 (croissance)
- **Animation d'entrée** : Fade-in avec slide-up

### Contenu
- **Description courte** : "Analysez la viabilité de votre projet professionnel principal"
- **Description détaillée** : "Ce module vous guide dans l'analyse approfondie de votre projet professionnel. Vous allez identifier vos atouts, les compétences à développer, les freins potentiels et les opportunités pour maximiser vos chances de réussite."
- **Durée estimée** : 30-40 minutes
- **Type d'activité** : Analyse structurée SWOT adaptée
- **Objectif principal** : "Établir un plan d'action réaliste et identifier les leviers de réussite"

### Points Clés
- Clarifier vos objectifs et critères de réussite
- Identifier vos forces et ressources mobilisables
- Anticiper les obstacles et préparer des solutions

### Message de Préparation
- **Conseil** : "Soyez le plus précis et honnête possible dans votre analyse. C'est la clé pour un plan d'action efficace."

### Bouton d'Action
- **Texte** : "Commencer l'analyse"
- **Style** : btn-primary btn-lg
- **Action** : Navigation vers le formulaire d'analyse

## Structure du Module

### Page Principale : Analyse de Viabilité

#### En-tête
- **Titre Principal** : "Viabilisation de mon projet principal"
- **Sous-titre** : "Analysez tous les aspects de votre projet pour maximiser vos chances de réussite"

### Section 1 : Mon Projet Principal

```html
<div class="section project-definition">
  <h2>Mon projet principal</h2>
  
  <div class="input-group">
    <label for="projet_description">Description de mon projet :</label>
    <textarea id="projet_description" class="response-area" 
              placeholder="Ex: Évoluer vers un poste de responsable administratif dans mon entreprise actuelle"
              rows="3" required></textarea>
    <p class="hint">Soyez précis : quel poste, dans quel contexte, avec quelles responsabilités ?</p>
  </div>
  
  <div class="input-group">
    <label for="objectifs_atteints">Ce qui me permettra de dire que les objectifs sont atteints :</label>
    <textarea id="objectifs_atteints" class="response-area" 
              placeholder="Ex: Obtenir une proposition concrète de poste avec une augmentation de 15%"
              rows="3" required></textarea>
    <p class="hint">Définissez des critères mesurables et observables</p>
  </div>
  
  <div class="input-group">
    <label for="delai_realisation">Délai de réalisation souhaité :</label>
    <select id="delai_realisation" required>
      <option value="">Sélectionnez...</option>
      <option value="3mois">Dans les 3 mois</option>
      <option value="6mois">Dans les 6 mois</option>
      <option value="1an">Dans l'année</option>
      <option value="2ans">Dans les 2 ans</option>
      <option value="plus">Plus de 2 ans</option>
    </select>
  </div>
</div>
```

### Section 2 : Les Atouts / Éléments Favorables

```html
<div class="section strengths-section">
  <h2>Les atouts / éléments favorables</h2>
  <p class="section-intro">Mes ressources et mes compétences transférables qui me permettent de mener à bien ce projet :</p>
  
  <div class="strengths-categories">
    <!-- Compétences techniques -->
    <div class="category-block">
      <h3>Compétences techniques et savoir-faire</h3>
      <div class="checklist-items">
        <div class="item">
          <input type="checkbox" id="atout_connaissance_entreprise">
          <label for="atout_connaissance_entreprise">Connaissance approfondie de l'entreprise/secteur</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_expertise_metier">
          <label for="atout_expertise_metier">Expertise métier reconnue</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_competences_transversales">
          <label for="atout_competences_transversales">Compétences transversales (gestion, organisation, etc.)</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_outils_numeriques">
          <label for="atout_outils_numeriques">Maîtrise des outils numériques</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_langues">
          <label for="atout_langues">Compétences linguistiques</label>
        </div>
      </div>
      <textarea class="additional-input" 
                placeholder="Autres compétences techniques..."
                rows="2"></textarea>
    </div>
    
    <!-- Qualités personnelles -->
    <div class="category-block">
      <h3>Qualités personnelles et savoir-être</h3>
      <div class="checklist-items">
        <div class="item">
          <input type="checkbox" id="atout_motivation">
          <label for="atout_motivation">Forte motivation pour le changement</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_adaptabilite">
          <label for="atout_adaptabilite">Capacité d'adaptation</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_communication">
          <label for="atout_communication">Excellentes capacités de communication</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_rigueur">
          <label for="atout_rigueur">Rigueur et organisation</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_autonomie">
          <label for="atout_autonomie">Autonomie et prise d'initiative</label>
        </div>
      </div>
      <textarea class="additional-input" 
                placeholder="Autres qualités personnelles..."
                rows="2"></textarea>
    </div>
    
    <!-- Ressources externes -->
    <div class="category-block">
      <h3>Ressources et soutiens externes</h3>
      <div class="checklist-items">
        <div class="item">
          <input type="checkbox" id="atout_reseau">
          <label for="atout_reseau">Réseau professionnel solide</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_reputation">
          <label for="atout_reputation">Bonne réputation dans l'entreprise/secteur</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_soutien_hierarchie">
          <label for="atout_soutien_hierarchie">Soutien de la hiérarchie</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_financement">
          <label for="atout_financement">Possibilité de financement formation</label>
        </div>
        <div class="item">
          <input type="checkbox" id="atout_mentorat">
          <label for="atout_mentorat">Accès à du mentorat/coaching</label>
        </div>
      </div>
      <textarea class="additional-input" 
                placeholder="Autres ressources externes..."
                rows="2"></textarea>
    </div>
  </div>
  
  <div class="input-group mt-4">
    <label for="atouts_principaux">Mes 3 atouts principaux pour ce projet :</label>
    <ol class="numbered-list">
      <li><input type="text" placeholder="Atout majeur n°1" required></li>
      <li><input type="text" placeholder="Atout majeur n°2" required></li>
      <li><input type="text" placeholder="Atout majeur n°3"></li>
    </ol>
  </div>
</div>
```

### Section 3 : Les Compétences à Acquérir / Améliorer

```html
<div class="section skills-development">
  <h2>Les compétences à acquérir / améliorer</h2>
  <p class="section-intro">Identifiez précisément ce qui vous manque pour réussir :</p>
  
  <div class="skills-grid">
    <!-- Compétences techniques -->
    <div class="skill-category">
      <h3>Compétences techniques à développer</h3>
      <div class="skill-items">
        <div class="skill-item">
          <input type="checkbox" id="dev_outils_specifiques">
          <label for="dev_outils_specifiques">Maîtrise d'outils spécifiques</label>
          <input type="text" placeholder="Précisez lesquels..." class="detail-input">
        </div>
        <div class="skill-item">
          <input type="checkbox" id="dev_certifications">
          <label for="dev_certifications">Certifications nécessaires</label>
          <input type="text" placeholder="Lesquelles..." class="detail-input">
        </div>
        <div class="skill-item">
          <input type="checkbox" id="dev_competences_metier">
          <label for="dev_competences_metier">Compétences métier spécifiques</label>
          <input type="text" placeholder="Détaillez..." class="detail-input">
        </div>
      </div>
    </div>
    
    <!-- Soft skills -->
    <div class="skill-category">
      <h3>Compétences relationnelles à renforcer</h3>
      <div class="skill-items">
        <div class="skill-item">
          <input type="checkbox" id="dev_leadership">
          <label for="dev_leadership">Leadership et management</label>
        </div>
        <div class="skill-item">
          <input type="checkbox" id="dev_negociation">
          <label for="dev_negociation">Négociation</label>
        </div>
        <div class="skill-item">
          <input type="checkbox" id="dev_presentation">
          <label for="dev_presentation">Prise de parole en public</label>
        </div>
      </div>
    </div>
  </div>
  
  <div class="action-plan">
    <h3>Plan de développement des compétences</h3>
    <table class="development-table">
      <thead>
        <tr>
          <th>Compétence</th>
          <th>Action envisagée</th>
          <th>Délai</th>
          <th>Ressources</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" placeholder="Ex: Excel avancé"></td>
          <td><input type="text" placeholder="Ex: Formation en ligne"></td>
          <td><input type="text" placeholder="Ex: 2 mois"></td>
          <td><input type="text" placeholder="Ex: CPF"></td>
        </tr>
        <!-- Lignes additionnelles -->
      </tbody>
    </table>
    <button class="btn btn-outline-secondary add-row">+ Ajouter une ligne</button>
  </div>
</div>
```

### Section 4 : Faiblesses, Menaces, Freins Potentiels

```html
<div class="section threats-section">
  <h2>Faiblesses, menaces, freins potentiels</h2>
  <p class="section-intro">Contraintes / Ce à quoi je dois faire attention / Points de vigilance :</p>
  
  <div class="threats-categories">
    <!-- Freins personnels -->
    <div class="threat-category">
      <h3>Freins personnels</h3>
      <div class="threat-items">
        <div class="item">
          <input type="checkbox" id="frein_confiance">
          <label for="frein_confiance">Manque de confiance en soi</label>
        </div>
        <div class="item">
          <input type="checkbox" id="frein_temps">
          <label for="frein_temps">Contraintes de temps (famille, obligations)</label>
        </div>
        <div class="item">
          <input type="checkbox" id="frein_financier">
          <label for="frein_financier">Contraintes financières</label>
        </div>
        <div class="item">
          <input type="checkbox" id="frein_mobilite">
          <label for="frein_mobilite">Mobilité géographique limitée</label>
        </div>
        <div class="item">
          <input type="checkbox" id="frein_sante">
          <label for="frein_sante">Contraintes de santé</label>
        </div>
      </div>
      <textarea placeholder="Autres freins personnels..." rows="2"></textarea>
    </div>
    
    <!-- Freins organisationnels -->
    <div class="threat-category">
      <h3>Freins organisationnels/externes</h3>
      <div class="threat-items">
        <div class="item">
          <input type="checkbox" id="frein_communication">
          <label for="frein_communication">Manque de communication/transparence</label>
        </div>
        <div class="item">
          <input type="checkbox" id="frein_restructuration">
          <label for="frein_restructuration">Incertitudes liées aux restructurations</label>
        </div>
        <div class="item">
          <input type="checkbox" id="frein_concurrence">
          <label for="frein_concurrence">Forte concurrence sur le poste visé</label>
        </div>
        <div class="item">
          <input type="checkbox" id="frein_marche">
          <label for="frein_marche">Contexte économique défavorable</label>
        </div>
      </div>
      <textarea placeholder="Autres freins externes..." rows="2"></textarea>
    </div>
  </div>
  
  <div class="mitigation-strategies">
    <h3>Stratégies pour lever les freins</h3>
    <div class="strategy-items">
      <div class="strategy-item">
        <label>Frein principal :</label>
        <input type="text" placeholder="Ex: Manque de visibilité sur la réorganisation">
        <label>Solution envisagée :</label>
        <textarea placeholder="Ex: Prendre RDV avec RH pour clarifier, développer plusieurs scénarios..." rows="2"></textarea>
      </div>
      <button class="btn btn-outline-secondary add-strategy">+ Ajouter une stratégie</button>
    </div>
  </div>
</div>
```

### Section 5 : Les Opportunités du Marché

```html
<div class="section opportunities-section">
  <h2>Les opportunités du marché</h2>
  <p class="section-intro">Éléments favorables dans l'environnement actuel :</p>
  
  <div class="opportunities-grid">
    <!-- Opportunités internes -->
    <div class="opportunity-category">
      <h3>Opportunités dans mon organisation</h3>
      <div class="opportunity-items">
        <div class="item">
          <input type="checkbox" id="opp_reorganisation">
          <label for="opp_reorganisation">Réorganisation/fusion créant de nouveaux postes</label>
        </div>
        <div class="item">
          <input type="checkbox" id="opp_departs">
          <label for="opp_departs">Départs en retraite prévus</label>
        </div>
        <div class="item">
          <input type="checkbox" id="opp_croissance">
          <label for="opp_croissance">Croissance de l'entreprise</label>
        </div>
        <div class="item">
          <input type="checkbox" id="opp_nouveaux_projets">
          <label for="opp_nouveaux_projets">Nouveaux projets/services</label>
        </div>
        <div class="item">
          <input type="checkbox" id="opp_politique_interne">
          <label for="opp_politique_interne">Politique de mobilité interne favorable</label>
        </div>
      </div>
    </div>
    
    <!-- Opportunités externes -->
    <div class="opportunity-category">
      <h3>Opportunités sur le marché</h3>
      <div class="opportunity-items">
        <div class="item">
          <input type="checkbox" id="opp_secteur_porteur">
          <label for="opp_secteur_porteur">Secteur d'activité en croissance</label>
        </div>
        <div class="item">
          <input type="checkbox" id="opp_penurie">
          <label for="opp_penurie">Pénurie de compétences dans mon domaine</label>
        </div>
        <div class="item">
          <input type="checkbox" id="opp_nouvelles_reglementations">
          <label for="opp_nouvelles_reglementations">Nouvelles réglementations créant des besoins</label>
        </div>
        <div class="item">
          <input type="checkbox" id="opp_transformation_digitale">
          <label for="opp_transformation_digitale">Transformation digitale</label>
        </div>
      </div>
    </div>
  </div>
  
  <div class="input-group mt-4">
    <label for="opportunites_principales">Les 3 opportunités principales à saisir :</label>
    <ol class="numbered-list">
      <li><input type="text" placeholder="Opportunité n°1" required></li>
      <li><input type="text" placeholder="Opportunité n°2"></li>
      <li><input type="text" placeholder="Opportunité n°3"></li>
    </ol>
  </div>
</div>
```

### Section 6 : Synthèse et Plan d'Action

```html
<div class="section synthesis-section">
  <h2>Synthèse et Plan d'Action</h2>
  
  <div class="viability-score">
    <h3>Score de viabilité du projet</h3>
    <div class="score-display">
      <div class="score-meter">
        <div class="score-fill" style="width: 0%"></div>
      </div>
      <p class="score-text">Calculé automatiquement selon vos réponses</p>
    </div>
  </div>
  
  <div class="action-timeline">
    <h3>Chronologie des actions</h3>
    <div class="timeline">
      <div class="timeline-item immediate">
        <h4>Actions immédiates (0-1 mois)</h4>
        <textarea placeholder="Ex: Prendre RDV avec mon manager, m'inscrire à une formation Excel..."></textarea>
      </div>
      <div class="timeline-item short-term">
        <h4>Court terme (1-3 mois)</h4>
        <textarea placeholder="Ex: Compléter la formation, élargir mon réseau interne..."></textarea>
      </div>
      <div class="timeline-item medium-term">
        <h4>Moyen terme (3-6 mois)</h4>
        <textarea placeholder="Ex: Postuler aux postes ouverts, obtenir ma certification..."></textarea>
      </div>
      <div class="timeline-item long-term">
        <h4>Long terme (6+ mois)</h4>
        <textarea placeholder="Ex: Être en poste, consolider mes nouvelles compétences..."></textarea>
      </div>
    </div>
  </div>
  
  <div class="success-indicators">
    <h3>Indicateurs de réussite</h3>
    <p>Comment je saurai que j'avance dans la bonne direction :</p>
    <ul class="indicators-list">
      <li><input type="text" placeholder="Ex: J'ai obtenu un entretien"></li>
      <li><input type="text" placeholder="Ex: Mon manager me confie de nouvelles responsabilités"></li>
      <li><input type="text" placeholder="Ex: J'ai complété 50% de ma formation"></li>
    </ul>
    <button class="btn btn-outline-secondary add-indicator">+ Ajouter un indicateur</button>
  </div>
</div>
```

## PAGE DE SUCCÈS

### Éléments Visuels
- **Animation** : Confettis ou particules
- **Icône** : ✓ dans cercle vert animé
- **Titre** : "Félicitations !"
- **Sous-titre** : "Module 24 - Analyse de viabilité terminée"

### Message de Validation
- **Message principal** : "Votre projet est maintenant structuré et analysé ! 🎉"
- **Accomplissement** : "Vous avez identifié tous les éléments clés pour la réussite de votre projet professionnel"

### Résumé du Projet
```html
<div class="project-summary">
  <h3>Votre projet en bref</h3>
  <div class="summary-cards">
    <div class="card strengths">
      <h4>Forces principales</h4>
      <ul>[Liste des 3 atouts majeurs]</ul>
    </div>
    <div class="card development">
      <h4>À développer</h4>
      <ul>[Top 3 des compétences à acquérir]</ul>
    </div>
    <div class="card opportunities">
      <h4>Opportunités</h4>
      <ul>[3 opportunités principales]</ul>
    </div>
  </div>
</div>
```

### Points Accomplis
- ✓ Projet clairement défini
- ✓ Forces et faiblesses analysées
- ✓ Plan d'action établi
- ✓ Indicateurs de réussite définis

### Progression
- **Modules complétés** : 24/25
- **Pourcentage** : 96%
- **Barre de progression** : Visuelle avec animation

### Actions
- **Bouton "Télécharger mon analyse"** (PDF)
- **Bouton "Voir mon plan d'action"**
- **Bouton "Module suivant"** (primaire)

## Fonctionnalités Techniques

### 1. Calcul du Score de Viabilité
```javascript
function calculateViabilityScore(data) {
  const weights = {
    strengths: 0.3,
    skills_gap: 0.2,
    threats: 0.2,
    opportunities: 0.3
  };
  
  let score = 0;
  
  // Points positifs
  score += data.strengths.length * weights.strengths * 10;
  score += data.opportunities.length * weights.opportunities * 10;
  
  // Points négatifs (mais gérables)
  score -= data.skills_to_develop.length * weights.skills_gap * 5;
  score -= data.threats.length * weights.threats * 5;
  
  // Ajustement selon les stratégies de mitigation
  if (data.mitigation_strategies.length > 0) {
    score += 10;
  }
  
  return Math.max(0, Math.min(100, score));
}
```

### 2. Génération du Plan d'Action
```javascript
function generateActionPlan(analysis) {
  const plan = {
    immediate: [],
    shortTerm: [],
    mediumTerm: [],
    longTerm: []
  };
  
  // Logique de priorisation automatique
  analysis.skills_to_develop.forEach(skill => {
    if (skill.priority === 'critical') {
      plan.immediate.push(`Commencer formation ${skill.name}`);
    }
  });
  
  return plan;
}
```

### 3. Sauvegarde des Données
```javascript
const viabilityData = {
  module_id: 24,
  project: {
    description: "string",
    success_criteria: "string",
    timeline: "string"
  },
  strengths: {
    technical: [],
    personal: [],
    external: [],
    top3: []
  },
  development_needs: {
    technical: [],
    soft_skills: [],
    action_plan: []
  },
  threats: {
    personal: [],
    organizational: [],
    mitigation: []
  },
  opportunities: {
    internal: [],
    external: [],
    top3: []
  },
  action_plan: {
    immediate: [],
    short_term: [],
    medium_term: [],
    long_term: []
  },
  viability_score: 0,
  completed_at: "timestamp"
};
```

## Responsive Design

### Mobile (< 768px)
- Sections en accordéon
- Tableaux scrollables
- Formulaires adaptés

### Tablette & Desktop
- Layout en colonnes pour les catégories
- Tableaux complets visibles
- Timeline horizontale

## Accessibilité

- **Labels clairs** : Pour tous les champs
- **Navigation clavier** : Tab order logique
- **Contraste** : WCAG AA minimum
- **Annonces ARIA** : Pour les changements dynamiques

## Intégration SCORM

```javascript
// Sauvegarde de l'analyse
SCORM.SetValue('cmi.suspend_data', JSON.stringify(viabilityData));
SCORM.SetValue('cmi.interactions.n.id', 'module24_viability');
SCORM.SetValue('cmi.completion_status', 'completed');
SCORM.SetValue('cmi.success_status', 'passed');
SCORM.Commit();
```

## Structure JSON Proposée

```json
{
  "module_id": 24,
  "module_title": "Viabilisation de mon Projet Principal",
  "module_type": "project_analysis",
  "duration_minutes": 40,
  "sections": [
    {
      "id": "project_definition",
      "title": "Mon projet principal",
      "required": true
    },
    {
      "id": "strengths",
      "title": "Atouts et éléments favorables",
      "categories": ["technical", "personal", "external"]
    },
    {
      "id": "development",
      "title": "Compétences à développer",
      "with_action_plan": true
    },
    {
      "id": "threats",
      "title": "Freins et menaces",
      "with_mitigation": true
    },
    {
      "id": "opportunities",
      "title": "Opportunités",
      "categories": ["internal", "external"]
    },
    {
      "id": "synthesis",
      "title": "Plan d'action",
      "timeline": ["immediate", "short", "medium", "long"]
    }
  ],
  "features": {
    "viability_score": true,
    "action_plan_generator": true,
    "pdf_export": true,
    "progress_tracking": true
  }
}
```

## Notes d'Implémentation

1. **Réalisme** : Encourager l'honnêteté dans l'analyse
2. **Accompagnement** : Suggestions contextuelles pour aider
3. **Visualisation** : Graphiques pour le score de viabilité
4. **Export** : PDF structuré pour le suivi
5. **Itération** : Possibilité de réviser l'analyse régulièrement

