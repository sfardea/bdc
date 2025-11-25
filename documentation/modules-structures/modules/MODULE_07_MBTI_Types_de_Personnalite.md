# Module 7 : Les 16 grands types de personnalité (MBTI®)

## Informations Générales

- **Titre** : Les 16 grands types de personnalité (MBTI®)
- **Type** : Questionnaire psychologique
- **Durée estimée** : 15-20 minutes
- **Nombre de questions** : 20 questions
- **Navigation** : Progression automatique après sélection
- **Sauvegarde** : Auto-save après chaque réponse

## Structure de la Page

### 1. Header du Module

#### Éléments :
- **Badge Module** : "Module 7"
- **Titre Principal** : "Types de personnalité (MBTI®)"
- **Sous-titre** : "Découvrez votre profil psychologique"
- **Badge de Statut** : "Investigation Personnelle"
- **Barre décorative** : Gradient (primary → secondary → accent)

### 2. Section Introduction

#### Contenu :
```html
<div class="text-center">
  <h2>🧠 Découvrez votre type de personnalité</h2>
  <p>Le MBTI® (Myers-Briggs Type Indicator) identifie 16 types de personnalité basés sur 4 dimensions. 
     Répondez sincèrement aux questions suivantes pour découvrir votre profil psychologique.</p>
</div>
```

### 3. Barre de Progression

#### Éléments :
- **Texte de progression** : "Progression du questionnaire"
- **Barre visuelle** : Gradient (primary → secondary)
- **Compteur** : "0 / 20 questions"

### 4. Section Questionnaire (20 Questions)

#### Structure des 4 Dimensions :

##### A. Dimension Extraversion vs Introversion (Questions 1-5)

**Question 1** : "Dans une soirée, vous préférez..."
- **Option A (Extraversion)** : "Rencontrer de nouvelles personnes et socialiser activement"
- **Option B (Introversion)** : "Avoir des conversations profondes avec quelques personnes"

**Question 2** : "Pour recharger vos batteries, vous..."
- **Option A (Extraversion)** : "Sortez et passez du temps avec des amis"
- **Option B (Introversion)** : "Restez seul(e) dans un endroit calme"

**Question 3** : "Au travail, vous préférez..."
- **Option A (Extraversion)** : "Brainstormer en groupe et partager vos idées à voix haute"
- **Option B (Introversion)** : "Réfléchir seul(e) avant de présenter vos idées"

**Question 4** : "Quand vous apprenez quelque chose de nouveau..."
- **Option A (Extraversion)** : "Vous aimez en discuter avec d'autres personnes"
- **Option B (Introversion)** : "Vous préférez l'assimiler en privé d'abord"

**Question 5** : "En réunion, vous..."
- **Option A (Extraversion)** : "Participez activement et exprimez vos pensées spontanément"
- **Option B (Introversion)** : "Écoutez attentivement et intervenez de façon réfléchie"

##### B. Dimension Sensation vs iNtuition (Questions 6-10)

**Question 6** : "Pour prendre une décision, vous vous fiez..."
- **Option A (Sensation)** : "Aux faits concrets et à votre expérience passée"
- **Option B (iNtuition)** : "À votre intuition et aux possibilités futures"

**Question 7** : "Vous préférez les tâches..."
- **Option A (Sensation)** : "Pratiques et concrètes avec des résultats tangibles"
- **Option B (iNtuition)** : "Créatives et conceptuelles qui explorent le possible"

**Question 8** : "Quand on vous explique quelque chose..."
- **Option A (Sensation)** : "Vous voulez des exemples précis et des détails"
- **Option B (iNtuition)** : "Vous cherchez le principe général et les implications"

**Question 9** : "Vous appréciez plus..."
- **Option A (Sensation)** : "Les méthodes éprouvées et les traditions"
- **Option B (iNtuition)** : "L'innovation et l'exploration de nouvelles voies"

**Question 10** : "Face à un problème complexe..."
- **Option A (Sensation)** : "Vous le décomposez en étapes concrètes"
- **Option B (iNtuition)** : "Vous cherchez des patterns et des connexions globales"

##### C. Dimension Thinking vs Feeling (Questions 11-15)

**Question 11** : "Pour évaluer une situation..."
- **Option A (Thinking)** : "Vous analysez logiquement les pour et les contre"
- **Option B (Feeling)** : "Vous considérez l'impact sur les personnes impliquées"

**Question 12** : "Dans un conflit, vous..."
- **Option A (Thinking)** : "Vous concentrez sur les faits et la justice"
- **Option B (Feeling)** : "Cherchez à comprendre les émotions de chacun"

**Question 13** : "Vous valorisez plus..."
- **Option A (Thinking)** : "La compétence et l'efficacité"
- **Option B (Feeling)** : "L'harmonie et la coopération"

**Question 14** : "Quand vous donnez un feedback..."
- **Option A (Thinking)** : "Vous êtes direct(e) et vous focalisez sur les faits"
- **Option B (Feeling)** : "Vous prenez des précautions pour préserver la relation"

**Question 15** : "Vous êtes plus motivé(e) par..."
- **Option A (Thinking)** : "L'accomplissement d'objectifs et la réussite"
- **Option B (Feeling)** : "L'aide aux autres et la contribution positive"

##### D. Dimension Judging vs Perceiving (Questions 16-20)

**Question 16** : "Vous préférez..."
- **Option A (Judging)** : "Planifier à l'avance et suivre un programme"
- **Option B (Perceiving)** : "Garder vos options ouvertes et improviser"

**Question 17** : "Sur votre bureau..."
- **Option A (Judging)** : "Tout est organisé et à sa place"
- **Option B (Perceiving)** : "C'est créativement désordonné mais vous vous y retrouvez"

**Question 18** : "Avant une deadline..."
- **Option A (Judging)** : "Vous terminez bien à l'avance pour éviter le stress"
- **Option B (Perceiving)** : "Vous travaillez mieux sous pression au dernier moment"

**Question 19** : "Dans un projet..."
- **Option A (Judging)** : "Vous aimez avoir un plan clair et des étapes définies"
- **Option B (Perceiving)** : "Vous préférez explorer et ajuster en cours de route"

**Question 20** : "Pour vos vacances..."
- **Option A (Judging)** : "Vous planifiez l'itinéraire et réservez à l'avance"
- **Option B (Perceiving)** : "Vous partez à l'aventure et décidez sur place"

### 5. Section Résultats

#### A. Type de Personnalité Principal
```html
<div class="personality-type">
  <div class="type-code">INTJ</div> <!-- Exemple -->
  <div class="type-name">L'Architecte</div>
  <div class="type-description">
    Penseur stratégique imaginatif avec un plan pour tout. 
    Indépendant, déterminé et très exigeant envers soi-même et les autres.
  </div>
</div>
```

#### B. Grille des 4 Dimensions
```html
<div class="dimensions-grid">
  <div class="dimension-card">
    <div class="dimension-title">Énergie</div>
    <div class="dimension-result">I</div>
    <div>Introversion</div>
    <div class="dimension-percentage">75% de préférence</div>
  </div>
  <!-- Répété pour les 4 dimensions -->
</div>
```

#### C. Section Métiers Recommandés
```html
<div class="careers-section">
  <h3>Métiers correspondant à votre profil</h3>
  <div class="careers-grid">
    <!-- Liste dynamique de métiers -->
  </div>
</div>
```

### 6. Bouton de Validation

- **Texte** : "Valider mon profil MBTI®"
- **État** : Activé uniquement après avoir répondu aux 20 questions
- **Action** : Sauvegarde et passage au module suivant

## Caractéristiques Techniques

### Interactions
- **Sélection de réponse** : Clic sur une carte option
- **Transition automatique** : 800ms après sélection
- **Animation de carte** : Effet hover avec élévation
- **Sélection visuelle** : Border primary + background coloré

### Animations
- **Question cards** : Fade-in à l'apparition
- **Progress bar** : Transition smooth de la largeur
- **Answer selection** : Scale et shadow au hover
- **Results reveal** : Animation d'apparition progressive

### Sauvegarde des Données
- **LocalStorage** : Sauvegarde après chaque réponse
- **SCORM** : Tracking de progression si disponible
- **Structure** : 
  ```javascript
  {
    answers: { 1: 'A', 2: 'B', ... },
    results: {
      type: 'INTJ',
      scores: { E: 2, I: 3, S: 1, N: 4, ... },
      percentages: { EI: 60, SN: 80, ... }
    }
  }
  ```

## Types de Personnalité (16 profils)

### Les Analystes
- **INTJ** : L'Architecte - Penseur stratégique imaginatif
- **INTP** : Le Logicien - Inventeur innovant et curieux
- **ENTJ** : Le Commandant - Leader audacieux et déterminé
- **ENTP** : Le Débatteur - Penseur intelligent et curieux

### Les Diplomates
- **INFJ** : L'Avocat - Idéaliste mystique inspirant
- **INFP** : Le Médiateur - Poète altruiste et gentil
- **ENFJ** : Le Protagoniste - Leader charismatique inspirant
- **ENFP** : L'Inspirateur - Esprit libre enthousiaste et créatif

### Les Sentinelles
- **ISTJ** : Le Logisticien - Pratique et fiable
- **ISFJ** : Le Défenseur - Protecteur dévoué et chaleureux
- **ESTJ** : Le Directeur - Administrateur excellent
- **ESFJ** : Le Consul - Personne attentionnée et populaire

### Les Explorateurs
- **ISTP** : Le Virtuose - Expérimentateur audacieux et pratique
- **ISFP** : L'Aventurier - Artiste flexible et charmant
- **ESTP** : L'Entrepreneur - Personne intelligente et énergique
- **ESFP** : L'Amuseur - Spontané et enthousiaste

## Structure JSON Proposée

```json
{
  "module": {
    "id": "module-07",
    "title": "Les 16 grands types de personnalité (MBTI®)",
    "type": "questionnaire",
    "phase": "investigation-personnelle",
    "duration": "15-20 minutes",
    "questions": [
      {
        "id": 1,
        "dimension": "EI",
        "text": "Dans une soirée, vous préférez...",
        "options": {
          "A": {
            "label": "Extraversion",
            "text": "Rencontrer de nouvelles personnes et socialiser activement"
          },
          "B": {
            "label": "Introversion",
            "text": "Avoir des conversations profondes avec quelques personnes"
          }
        }
      }
    ],
    "personality_types": {
      "INTJ": {
        "name": "L'Architecte",
        "description": "Penseur stratégique imaginatif avec un plan pour tout",
        "careers": ["Analyste stratégique", "Architecte système", "Chercheur"]
      }
    },
    "validation": {
      "required_answers": 20,
      "auto_progress": true,
      "delay_ms": 800
    }
  }
}
```

## Notes d'Intégration

- Le module utilise un questionnaire psychologique standardisé (MBTI®)
- Les résultats sont calculés selon l'algorithme officiel des 4 dimensions
- Chaque dimension a 5 questions pour équilibrer les résultats
- Les métiers suggérés correspondent aux profils types de chaque personnalité
- L'interface est optimisée pour une complétion rapide (auto-progression)
- Le design utilise des cartes cliquables pour faciliter la sélection mobile
