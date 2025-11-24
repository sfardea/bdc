# Page de Début - Phase d'Investigation : Axe Personnel

## Informations de la Page

- **Type de page** : Page d'introduction de phase
- **Position dans le parcours** : Début de la Phase 2
- **Objectif** : Présenter la phase d'investigation personnelle et motiver l'utilisateur

---

## Structure de la Page

### En-tête Visuel
- **Fond** : Dégradé violet vers rose (couleurs introspection/créativité)
- **Motif décoratif** : Formes organiques fluides en arrière-plan
- **Animation** : Morphing subtil des formes (infinite)

### Indicateur de Progression Globale
- **Type** : Barre de progression horizontale
- **Position** : En haut de la page
- **État** : 25% (Phase 1 complétée)
- **Texte** : "Phase 2 sur 4"
- **Couleur** : Dégradé primary
- **Indicateur phase précédente** : Coche verte sur Phase 1

---

## Contenu Principal

### Badge de Phase
- **Texte** : "PHASE 2"
- **Style** : Badge arrondi, fond purple-bg, texte purple
- **Position** : Centré, au-dessus du titre
- **Animation** : Fade-in avec scale

### Titre Principal
- **Texte** : "Phase d'Investigation : Axe Personnel"
- **Style** :
  - Police : Plus Jakarta Sans, 800
  - Taille : 3rem (desktop) / 2rem (mobile)
  - Couleur : Dégradé purple vers pink
  - Animation : Slide-up élégant

### Sous-titre
- **Texte** : "Explorez vos motivations profondes et découvrez vos talents cachés"
- **Style** :
  - Police : 500
  - Taille : 1.25rem
  - Couleur : gray-600
  - Max-width : 700px

### Description Détaillée
- **Contenu** :
  ```
  Cette phase d'exploration personnelle est au cœur de votre bilan. 
  C'est un moment privilégié pour :
  
  🎯 Identifier vos valeurs fondamentales et ce qui vous anime vraiment
  💎 Découvrir vos talents naturels et points forts uniques
  🌟 Explorer vos sources de motivation et d'épanouissement
  🧭 Clarifier vos aspirations personnelles et professionnelles
  🔍 Comprendre vos modes de fonctionnement préférés
  ```
- **Style** :
  - Fond : Carte blanche avec bordure gauche purple (4px)
  - Ombre douce colorée (purple-100)
  - Emojis comme bullets points
  - Espacement généreux entre les lignes

### Méthodologie
- **Titre section** : "Notre approche"
- **Contenu** :
  - "Tests psychométriques validés"
  - "Exercices de réflexion guidée"
  - "Questionnaires d'auto-évaluation"
  - "Analyse de vos expériences passées"
- **Style** : 
  - Grille 2x2 de cartes
  - Icônes illustratives
  - Hover effect sur chaque carte

### Informations Pratiques
- **Durée estimée** : "4 à 5 heures"
- **Nombre de modules** : "8 activités"
- **Progression** : "À votre rythme"
- **Style** : 
  - Badges avec icônes
  - Disposition horizontale
  - Fond purple-50

### Illustration Centrale
- **Type** : Illustration vectorielle
- **Contenu** : Personnage en méditation/réflexion avec éléments créatifs autour
- **Style** : Moderne, coloré, inspirant
- **Animation** : Float douce + éléments orbitants

### Citation Inspirante
- **Texte** : "Connais-toi toi-même" - Socrate
- **Style** :
  - Italique
  - Taille : 1.125rem
  - Couleur : purple-700
  - Bordure gauche décorative

---

## Zone d'Action

### Message de Transition
- **Texte** : "Prêt(e) à explorer votre potentiel ?"
- **Style** : Centré, gray-700, margin-bottom 1rem

### Bouton Principal
- **Texte** : "Commencer l'Exploration Personnelle"
- **Icône** : Compass ou Star
- **Style** :
  - Fond : Dégradé purple vers pink
  - Couleur texte : Blanc
  - Padding : 1rem 2.5rem
  - Taille : Large
  - Animation : Pulse subtil + glow au hover
- **Action** : Navigation vers le premier module de la phase

### Option Alternative
- **Lien** : "Voir le détail des activités"
- **Style** : Lien discret sous le bouton
- **Action** : Expand pour montrer la liste des modules

---

## Section Détail des Activités (Expandable)

### Liste des Modules
1. **Questionnaire de valeurs** - Identifiez vos valeurs fondamentales
2. **Test des motivations** - Découvrez ce qui vous anime
3. **Analyse des talents** - Révélez vos forces naturelles
4. **Profil de personnalité** - Comprenez votre fonctionnement
5. **Exploration des intérêts** - Cartographiez vos centres d'intérêt
6. **Bilan émotionnel** - Analysez vos sources de satisfaction
7. **Vision personnelle** - Projetez-vous dans l'avenir
8. **Synthèse personnelle** - Consolidez vos découvertes

- **Style** : 
  - Liste numérotée avec progression
  - Icônes de statut (à faire/en cours/complété)
  - Durée estimée par module

---

## Éléments Techniques

### Animations
- **Background** : Morphing shapes (CSS animations, 20s loop)
- **Contenu** : Stagger fade-in (0.1s entre éléments)
- **Bouton** : Glow effect au focus
- **Cartes** : Lift au hover (translateY -4px)

### Responsive Design
- **Mobile** :
  - Grille 1 colonne pour les cartes
  - Bouton pleine largeur
  - Illustration réduite ou masquée
- **Tablette** :
  - Grille 2 colonnes
  - Layout centré 768px
- **Desktop** :
  - Layout optimal 1200px
  - Tous les éléments visibles

### État et Tracking
- **LocalStorage** :
  - `phase_2_started`: timestamp
  - `phase_2_intro_viewed`: true
  - `previous_phase_completed`: true
- **Analytics** :
  - Event: "phase_investigation_personal_started"
  - Propriétés: durée sur la page, action effectuée

---

## Structure HTML Suggérée

```html
<div class="phase-start-container phase-2">
    <!-- Progression globale avec indicateur phase précédente -->
    <div class="global-progress">
        <div class="progress-phases">
            <span class="phase completed">✓ Phase 1</span>
            <span class="phase current">Phase 2</span>
            <span class="phase">Phase 3</span>
            <span class="phase">Phase 4</span>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: 25%"></div>
        </div>
    </div>

    <!-- Contenu principal -->
    <main class="phase-content">
        <div class="phase-badge purple">PHASE 2</div>
        
        <h1 class="phase-title gradient-purple">
            Phase d'Investigation : Axe Personnel
        </h1>
        
        <p class="phase-subtitle">
            Explorez vos motivations profondes et découvrez vos talents cachés
        </p>
        
        <div class="phase-description enhanced-card">
            <p>Cette phase d'exploration personnelle est au cœur de votre bilan.</p>
            <ul class="benefits-list">
                <li>🎯 Identifier vos valeurs fondamentales</li>
                <li>💎 Découvrir vos talents naturels</li>
                <!-- etc... -->
            </ul>
        </div>
        
        <div class="methodology-grid">
            <div class="method-card">
                <i class="icon-test"></i>
                <h4>Tests psychométriques</h4>
            </div>
            <!-- autres cartes... -->
        </div>
        
        <blockquote class="inspiration-quote">
            "Connais-toi toi-même" - Socrate
        </blockquote>
        
        <div class="phase-illustration">
            <!-- Illustration SVG animée -->
        </div>
        
        <p class="ready-message">Prêt(e) à explorer votre potentiel ?</p>
        
        <button class="btn-start-phase gradient-purple">
            <i class="icon-compass"></i>
            Commencer l'Exploration Personnelle
        </button>
        
        <a href="#" class="toggle-details">Voir le détail des activités</a>
    </main>
</div>
```

---

## Variantes et Personnalisation

### Messages Motivationnels (Aléatoires)
1. "C'est le moment de révéler votre véritable potentiel"
2. "Chaque découverte vous rapproche de votre épanouissement"
3. "Votre parcours unique commence par la connaissance de soi"

### Adaptation selon l'Heure
- **Matin** : "Commencez cette belle journée par une exploration enrichissante"
- **Après-midi** : "Prenez ce moment pour vous recentrer sur l'essentiel"
- **Soir** : "Un moment de calme idéal pour l'introspection"

### Si Phase 1 Récemment Complétée
- Message additionnel : "Félicitations pour avoir complété la phase préliminaire ! Vous êtes maintenant prêt(e) pour cette nouvelle étape."
- Badge "Nouvelle étape débloquée" avec animation

