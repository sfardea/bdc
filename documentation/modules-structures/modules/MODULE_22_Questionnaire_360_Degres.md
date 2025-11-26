# Module 22 : Questionnaire 360°

## Informations Générales

- **Titre** : Questionnaire 360°
- **Type** : Évaluation par les pairs / Feedback externe
- **Durée estimée** : 20-30 minutes (pour chaque évaluateur)
- **Objectif** : Obtenir un retour externe sur vos atouts et points de progrès
- **Phase** : Investigation - Axe Professionnel II
- **Public cible** : Personnes souhaitant confronter leur autoportrait à la perception des autres
- **Participants** : Collègues, amis, managers, famille (3-5 personnes recommandées)

## 🔗 Visualiser Preview

[Lien 1](https://g.co/gemini/share/acba5ea392cb)

## PAGE DE PRÉSENTATION

### Éléments Visuels
- **Badge du module** : "Module 22"
- **Titre** : "Questionnaire 360°"
- **Icône/Emoji** : 🔄 (360°) ou 👥 (feedback multiple)
- **Animation d'entrée** : Fade-in avec slide-up

### Contenu
- **Description courte** : "Découvrez comment les autres vous perçoivent professionnellement"
- **Description détaillée** : "Le questionnaire 360° permet d'obtenir un feedback constructif de votre entourage professionnel et personnel. Comparez votre autoportrait avec la perception externe pour identifier vos forces et axes de développement."
- **Durée estimée** : 20-30 minutes par évaluateur
- **Type d'activité** : Questionnaire d'évaluation externe
- **Objectif principal** : "Analyser les écarts entre votre perception et celle des autres"

### Points Clés
- Identifier vos atouts reconnus par les autres
- Découvrir vos angles morts
- Obtenir des conseils de progression concrets

### Message de Préparation
- **Conseil** : "Choisissez 3 à 5 personnes qui vous connaissent bien dans différents contextes (professionnel, personnel). Assurez-les que leurs réponses resteront constructives et bienveillantes."

### Bouton d'Action
- **Texte** : "Commencer le questionnaire"
- **Style** : btn-primary btn-lg
- **Action** : Navigation vers le formulaire

## Structure du Module

### Page d'Introduction pour l'Évaluateur

#### Message d'Accueil
```html
<div class="welcome-section text-center">
  <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Bonjour !</h2>
  
  <div class="intro-message">
    <p class="text-lg text-gray-700 leading-relaxed mb-4">
      Je suis en train de faire un bilan de compétences et dans ce cadre, j'aimerais te faire participer à ma réflexion parce qu'il est toujours intéressant de savoir ce que les autres pensent de nous et comment ils nous évaluent.
    </p>
    
    <p class="text-lg text-gray-700 leading-relaxed mb-4">
      Je te sollicite parce que je pense que tu me connais bien et que tu pourras me faire un retour dans la plus entière sincérité.
    </p>
    
    <p class="text-lg text-gray-700 leading-relaxed mb-4 font-bold">
      Rassure-toi, il ne s'agit pas de me juger mais de m'aider à progresser !
    </p>
    
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Dès que tu auras terminé, nous pourrons en parler ensemble pour que tu m'expliques tes réponses - ensuite je débrieferai avec ma consultante.
      Et je pourrai analyser les écarts entre mon autoportrait et ton « retour d'image ».
    </p>
    
    <p class="text-xl font-bold text-indigo-700">
      Merci à toi pour ta participation !
    </p>
  </div>
</div>
```

### Section 1 : Informations Générales

```html
<div class="section general-info">
  <h2>Informations Générales</h2>
  
  <div class="input-group">
    <label for="date">Date :</label>
    <input type="date" id="date" required>
  </div>
  
  <div class="input-group">
    <label for="nom_prenom">Nom Prénom :</label>
    <input type="text" id="nom_prenom" placeholder="Votre nom et prénom" required>
  </div>
  
  <div class="input-group">
    <label for="contexte_rencontre">Contexte de la rencontre / qui es-tu pour moi ? :</label>
    <select id="contexte_rencontre" required>
      <option value="">Sélectionnez...</option>
      <option value="collegue">Collègue de travail</option>
      <option value="manager">Manager / Supérieur</option>
      <option value="collaborateur">Collaborateur / Subordonné</option>
      <option value="client">Client</option>
      <option value="partenaire">Partenaire professionnel</option>
      <option value="ami">Ami(e)</option>
      <option value="famille">Membre de la famille</option>
      <option value="autre">Autre</option>
    </select>
    <input type="text" id="contexte_autre" placeholder="Précisez si autre..." style="display:none;">
  </div>
</div>
```

### Section 2 : Atouts - Liste Complète (72 items)

```html
<div class="section strengths-section">
  <h2>Atouts : vus par vous</h2>
  <p class="mb-4">Dans un premier temps, coche les atouts qui me caractérisent :</p>
  
  <div class="checkbox-grid">
    <!-- Organisation & Méthode -->
    <div class="checkbox-category">
      <h4>Organisation & Méthode</h4>
      <div class="checkbox-item"><input type="checkbox" id="atout_methodique"><label for="atout_methodique">Méthodique / Organisé</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_ordonne"><label for="atout_ordonne">Ordonné</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_precis"><label for="atout_precis">Précis</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_exact"><label for="atout_exact">Exact</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_consciencieux"><label for="atout_consciencieux">Consciencieux</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_assidu"><label for="atout_assidu">Assidu</label></div>
    </div>
    
    <!-- Relationnel & Communication -->
    <div class="checkbox-category">
      <h4>Relationnel & Communication</h4>
      <div class="checkbox-item"><input type="checkbox" id="atout_ouvert"><label for="atout_ouvert">Ouvert aux autres</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_ecoute"><label for="atout_ecoute">Écoute</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_sociable"><label for="atout_sociable">Sociable</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_cooperatif"><label for="atout_cooperatif">Coopératif</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_equipe"><label for="atout_equipe">Travaille bien en équipe</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_animateur"><label for="atout_animateur">Animateur</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_psychologue"><label for="atout_psychologue">Psychologue</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_exprimebien"><label for="atout_exprimebien">S'exprime bien</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_redige"><label for="atout_redige">Rédige bien</label></div>
    </div>
    
    <!-- Leadership & Initiative -->
    <div class="checkbox-category">
      <h4>Leadership & Initiative</h4>
      <div class="checkbox-item"><input type="checkbox" id="atout_initiative"><label for="atout_initiative">Prend l'initiative</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_ambitieux"><label for="atout_ambitieux">Ambitieux</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_responsable"><label for="atout_responsable">Responsable</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_autonome"><label for="atout_autonome">Autonome</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_courageux"><label for="atout_courageux">Courageux</label></div>
    </div>
    
    <!-- Qualités personnelles -->
    <div class="checkbox-category">
      <h4>Qualités personnelles</h4>
      <div class="checkbox-item"><input type="checkbox" id="atout_adaptable"><label for="atout_adaptable">Adaptable / Souple</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_patient"><label for="atout_patient">Patient</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_calme"><label for="atout_calme">Calme</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_positif"><label for="atout_positif">Positif</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_enthousiaste"><label for="atout_enthousiaste">Enthousiaste</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_gai"><label for="atout_gai">Gai</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_equilibre"><label for="atout_equilibre">Équilibré / Stable</label></div>
    </div>
    
    <!-- Compétences intellectuelles -->
    <div class="checkbox-category">
      <h4>Compétences intellectuelles</h4>
      <div class="checkbox-item"><input type="checkbox" id="atout_intelligent"><label for="atout_intelligent">Intelligent</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_creatif"><label for="atout_creatif">Créatif</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_imaginatif"><label for="atout_imaginatif">Imaginatif</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_innovateur"><label for="atout_innovateur">Innovateur</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_observateur"><label for="atout_observateur">Observateur</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_reflechi"><label for="atout_reflechi">Réfléchi</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_reflechirapide"><label for="atout_reflechirapide">Réfléchi rapidement</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_jugement"><label for="atout_jugement">Jugement</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_bonsens"><label for="atout_bonsens">Bon sens</label></div>
    </div>
    
    <!-- Efficacité professionnelle -->
    <div class="checkbox-category">
      <h4>Efficacité professionnelle</h4>
      <div class="checkbox-item"><input type="checkbox" id="atout_professionnel"><label for="atout_professionnel">Professionnel</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_efficacite"><label for="atout_efficacite">Emploi efficace du temps</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_rapide"><label for="atout_rapide">Rapide dans l'action</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_perseverant"><label for="atout_perseverant">Persévérant / Tenace</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_travailleur"><label for="atout_travailleur">Travailleur</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_energetique"><label for="atout_energetique">Énergique / Motivé</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_dynamique"><label for="atout_dynamique">Dynamique</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_vabou"><label for="atout_vabou">Va jusqu'au bout des choses</label></div>
      <div class="checkbox-item"><input type="checkbox" id="atout_donnesuite"><label for="atout_donnesuite">Donne suite</label></div>
    </div>
    
    <!-- Tous les autres atouts... -->
    <!-- [Liste complète des 72 atouts comme dans le HTML original] -->
    
    <div class="checkbox-item">
      <input type="checkbox" id="atout_autres">
      <label for="atout_autres">Autres :</label>
      <input type="text" class="other-input" placeholder="Précisez...">
    </div>
  </div>
  
  <h3 class="mt-8 mb-4">Parmi les qualificatifs que tu as choisi, reporte ci-dessous les cinq qui me caractérisent le mieux :</h3>
  <ul class="numbered-list-input">
    <li><span>1 =</span> <input type="text" placeholder="Atout principal" required></li>
    <li><span>2 =</span> <input type="text" placeholder="Deuxième atout" required></li>
    <li><span>3 =</span> <input type="text" placeholder="Troisième atout" required></li>
    <li><span>4 =</span> <input type="text" placeholder="Quatrième atout"></li>
    <li><span>5 =</span> <input type="text" placeholder="Cinquième atout"></li>
  </ul>
</div>
```

### Section 3 : Points de Progrès (40 items)

```html
<div class="section improvement-section">
  <h2>Points de progrès : vus par vous</h2>
  <p class="mb-4">Coche les points de progrès qui me caractérisent :</p>
  
  <div class="checkbox-grid">
    <!-- Communication & Relationnel -->
    <div class="checkbox-category">
      <h4>Communication & Relationnel</h4>
      <div class="checkbox-item"><input type="checkbox" id="progres_bavard"><label for="progres_bavard">Bavard</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_mauvaiseecoute"><label for="progres_mauvaiseecoute">Mauvaise écoute</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_exprime_mal"><label for="progres_exprime_mal">S'exprime mal</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_ferme"><label for="progres_ferme">Fermé</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_timide"><label for="progres_timide">Timide</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_reserve"><label for="progres_reserve">Réservé</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_efface"><label for="progres_efface">Effacé</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_solitaire"><label for="progres_solitaire">Solitaire</label></div>
    </div>
    
    <!-- Comportement & Attitude -->
    <div class="checkbox-category">
      <h4>Comportement & Attitude</h4>
      <div class="checkbox-item"><input type="checkbox" id="progres_agressif"><label for="progres_agressif">Agressif</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_autoritaire"><label for="progres_autoritaire">Autoritaire</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_arriviste"><label for="progres_arriviste">Arriviste</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_egoiste"><label for="progres_egoiste">Égoïste</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_exigent"><label for="progres_exigent">Exigent</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_difficile"><label for="progres_difficile">Difficile / Mauvais caractère</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_colereux"><label for="progres_colereux">Coléreux</label></div>
    </div>
    
    <!-- État émotionnel -->
    <div class="checkbox-category">
      <h4>État émotionnel</h4>
      <div class="checkbox-item"><input type="checkbox" id="progres_anxieux"><label for="progres_anxieux">Anxieux / Nerveux</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_instable"><label for="progres_instable">Instable</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_depressif"><label for="progres_depressif">Dépressif</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_pessimiste"><label for="progres_pessimiste">Pessimiste / Négatif</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_peureux"><label for="progres_peureux">Peureux</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_manqueconfiance"><label for="progres_manqueconfiance">Manque de confiance en soi</label></div>
    </div>
    
    <!-- Efficacité professionnelle -->
    <div class="checkbox-category">
      <h4>Efficacité professionnelle</h4>
      <div class="checkbox-item"><input type="checkbox" id="progres_lent"><label for="progres_lent">Lent</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_paresseux"><label for="progres_paresseux">Paresseux</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_desordonne"><label for="progres_desordonne">Désordonné</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_imprecis"><label for="progres_imprecis">Imprécis</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_irreflechi"><label for="progres_irreflechi">Irréfléchi</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_indecis"><label for="progres_indecis">Indécis</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_neprendpasinitiative"><label for="progres_neprendpasinitiative">Ne prend pas d'initiative</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_nedonnepassuite"><label for="progres_nedonnepassuite">Ne donne pas suite</label></div>
      <div class="checkbox-item"><input type="checkbox" id="progres_irresponsable"><label for="progres_irresponsable">Irresponsable</label></div>
    </div>
    
    <!-- Autres points de progrès -->
    <!-- [Liste complète des 40 points comme dans le HTML original] -->
    
    <div class="checkbox-item">
      <input type="checkbox" id="progres_autres">
      <label for="progres_autres">Autres :</label>
      <input type="text" class="other-input" placeholder="Précisez...">
    </div>
  </div>
  
  <h3 class="mt-8 mb-4">Reporte ci-dessous les trois points principaux sur lesquels je dois progresser :</h3>
  <ul class="numbered-list-input">
    <li><span>1 =</span> <input type="text" placeholder="Point de progrès principal" required></li>
    <li><span>2 =</span> <input type="text" placeholder="Deuxième point" required></li>
    <li><span>3 =</span> <input type="text" placeholder="Troisième point"></li>
  </ul>
  
  <h3 class="mt-8 mb-4">Pour chacun, explique en une phrase comment je pourrais parvenir à ces progrès :</h3>
  <div class="progress-explanations">
    <div class="explanation-item">
      <label>1.</label>
      <textarea placeholder="Comment progresser sur le premier point..." rows="3"></textarea>
    </div>
    <div class="explanation-item">
      <label>2.</label>
      <textarea placeholder="Comment progresser sur le deuxième point..." rows="3"></textarea>
    </div>
    <div class="explanation-item">
      <label>3.</label>
      <textarea placeholder="Comment progresser sur le troisième point..." rows="3"></textarea>
    </div>
  </div>
</div>
```

### Fonctionnalités Interactives

#### 1. Gestion des Évaluateurs Multiples
```javascript
class Feedback360Manager {
  constructor() {
    this.evaluators = [];
    this.maxEvaluators = 10;
  }
  
  sendInvitation(email, name, relationship) {
    const token = generateUniqueToken();
    const invitation = {
      id: generateId(),
      email: email,
      name: name,
      relationship: relationship,
      token: token,
      status: 'pending',
      sent_at: new Date(),
      completed_at: null
    };
    
    // Envoi email avec lien unique
    sendEmail(email, {
      subject: `${userName} souhaite votre feedback 360°`,
      link: `${baseUrl}/feedback360/${token}`,
      message: customMessage
    });
    
    this.evaluators.push(invitation);
    return invitation;
  }
  
  trackCompletion(token) {
    const evaluator = this.evaluators.find(e => e.token === token);
    if (evaluator) {
      evaluator.status = 'completed';
      evaluator.completed_at = new Date();
    }
  }
}
```

#### 2. Analyse Comparative
```javascript
function analyzeGaps(selfAssessment, externalFeedback) {
  const analysis = {
    strengths: {
      recognized: [], // Atouts reconnus par tous
      blind_spots: [], // Atouts non perçus par soi
      overestimated: [] // Atouts surestimés
    },
    improvements: {
      agreed: [], // Points de progrès partagés
      hidden: [], // Points non identifiés par soi
      disagreed: [] // Points non confirmés par les autres
    },
    consistency_score: 0
  };
  
  // Calcul du score de cohérence
  analysis.consistency_score = calculateConsistency(selfAssessment, externalFeedback);
  
  return analysis;
}
```

#### 3. Visualisation des Résultats
```javascript
function generateRadarChart(data) {
  const categories = [
    'Organisation',
    'Relationnel',
    'Leadership',
    'Créativité',
    'Efficacité',
    'Communication'
  ];
  
  return {
    type: 'radar',
    data: {
      labels: categories,
      datasets: [
        {
          label: 'Auto-évaluation',
          data: data.self,
          borderColor: 'blue'
        },
        {
          label: 'Moyenne externe',
          data: data.external,
          borderColor: 'green'
        }
      ]
    }
  };
}
```

## PAGE DE SUCCÈS

### Éléments Visuels
- **Animation** : Confettis ou particules
- **Icône** : ✓ dans cercle vert animé
- **Titre** : "Merci pour votre contribution !"
- **Sous-titre** : "Votre feedback a été enregistré"

### Message de Validation
- **Message principal** : "Votre évaluation a été transmise avec succès 🎉"
- **Message secondaire** : "Votre retour est précieux et aidera [Nom] dans son développement professionnel"

### Actions
- **Bouton "Télécharger une copie"** (optionnel)
- **Message** : "Un email de confirmation vous a été envoyé"

## Fonctionnalités Techniques

### 1. Système d'Invitations
- Génération de liens uniques par évaluateur
- Tracking du statut (envoyé, ouvert, complété)
- Relances automatiques après X jours
- Anonymisation optionnelle des réponses

### 2. Sauvegarde des Données
```javascript
const feedback360Data = {
  module_id: 22,
  self_assessment: {
    completed_at: "timestamp",
    strengths: ["Liste des atouts auto-identifiés"],
    improvements: ["Liste des points de progrès auto-identifiés"]
  },
  external_assessments: [
    {
      evaluator_id: "uuid",
      relationship: "manager",
      date: "timestamp",
      strengths: {
        checked: ["Liste complète cochée"],
        top5: ["Top 5 sélectionné"]
      },
      improvements: {
        checked: ["Liste complète cochée"],
        top3: ["Top 3 sélectionné"],
        suggestions: ["Suggestions d'amélioration"]
      }
    }
  ],
  analysis: {
    consistency_score: 0.75,
    blind_spots: [],
    confirmed_strengths: [],
    development_areas: []
  }
};
```

## Responsive Design

### Mobile (< 768px)
- Checkbox en colonnes simples
- Formulaire adapté verticalement
- Navigation simplifiée

### Tablette & Desktop
- Grille de checkbox multi-colonnes
- Affichage optimal des catégories
- Graphiques comparatifs visibles

## Structure JSON Proposée

```json
{
  "module_id": 22,
  "module_title": "Questionnaire 360°",
  "module_type": "multi_evaluator_feedback",
  "duration_minutes": 30,
  "strengths_list": {
    "total": 72,
    "categories": [
      "Organisation & Méthode",
      "Relationnel & Communication",
      "Leadership & Initiative",
      "Qualités personnelles",
      "Compétences intellectuelles",
      "Efficacité professionnelle"
    ]
  },
  "improvements_list": {
    "total": 40,
    "categories": [
      "Communication & Relationnel",
      "Comportement & Attitude",
      "État émotionnel",
      "Efficacité professionnelle"
    ]
  },
  "features": {
    "multi_evaluators": true,
    "anonymous_option": true,
    "comparative_analysis": true,
    "radar_chart": true,
    "pdf_export": true
  }
}
```

## Notes d'Implémentation

1. **Confidentialité** : Options d'anonymisation des réponses
2. **Bienveillance** : Formulations constructives et positives
3. **Analyse** : Algorithmes de détection des patterns
4. **Suivi** : Dashboard de suivi des réponses
5. **Export** : Rapport de synthèse PDF avec graphiques

