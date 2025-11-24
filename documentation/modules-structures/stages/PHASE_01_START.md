# Page de Début - Phase Préliminaire

## Informations de la Page

- **Type de page** : Page d'introduction de phase
- **Position dans le parcours** : Début de la Phase 1
- **Objectif** : Présenter la phase préliminaire et inviter l'utilisateur à commencer

---

## Structure de la Page

### En-tête Visuel
- **Fond** : Dégradé doux bleu vers blanc (couleur apaisante pour débuter)
- **Motif décoratif** : Cercles abstraits en arrière-plan (opacité 0.1)
- **Animation** : Fade-in progressif à l'ouverture (1s)

### Indicateur de Progression Globale
- **Type** : Barre de progression horizontale
- **Position** : En haut de la page
- **État** : 0% (début du parcours)
- **Texte** : "Phase 1 sur 4"
- **Couleur** : Dégradé primary

---

## Contenu Principal

### Badge de Phase
- **Texte** : "PHASE 1"
- **Style** : Badge arrondi, fond primary-bg, texte primary
- **Position** : Centré, au-dessus du titre

### Titre Principal
- **Texte** : "Phase Préliminaire"
- **Style** : 
  - Police : Plus Jakarta Sans, 800
  - Taille : 3rem (desktop) / 2rem (mobile)
  - Couleur : Dégradé primary vers primary-dark
  - Animation : Slide-up à l'apparition

### Sous-titre
- **Texte** : "Faisons connaissance et définissons ensemble votre parcours"
- **Style** :
  - Police : 500
  - Taille : 1.25rem
  - Couleur : gray-600
  - Espacement : margin-bottom 2rem

### Description Détaillée
- **Contenu** : 
  ```
  Cette première phase est essentielle pour établir une relation de confiance 
  et comprendre vos attentes. Nous allons :
  
  • Analyser votre situation actuelle et vos besoins
  • Définir vos objectifs pour ce bilan
  • Établir le cadre et les modalités de notre collaboration
  • Créer un environnement propice à votre réflexion
  ```
- **Style** :
  - Fond : Carte blanche avec ombre douce
  - Padding : 2rem
  - Border-radius : 16px
  - Liste avec puces personnalisées (icônes check verts)

### Informations Pratiques
- **Durée estimée** : "2 à 3 heures"
- **Nombre de modules** : "5 activités"
- **Format** : Icônes avec texte
- **Style** : Badges informatifs en ligne

### Illustration
- **Type** : SVG animé ou illustration
- **Contenu** : Deux personnages se serrant la main / Chemin qui commence
- **Position** : Centrée au-dessus du bouton
- **Animation** : Float légère (3s infinite)

---

## Zone d'Action

### Bouton Principal
- **Texte** : "Commencer la Phase Préliminaire"
- **Icône** : Flèche droite ou play
- **Style** :
  - Fond : Dégradé primary
  - Couleur texte : Blanc
  - Padding : 1rem 2.5rem
  - Border-radius : 8px
  - Ombre : shadow-lg
  - Hover : Transform translateY(-2px) + shadow-xl
- **Action** : Navigation vers le premier module de la phase

### Texte d'Encouragement
- **Texte** : "Prenez votre temps, ce bilan est fait pour vous"
- **Style** : Italique, gray-500, centré sous le bouton

---

## Éléments Techniques

### Animations
- **Page load** : Fade-in global (1s)
- **Titre** : Slide-up (0.6s, délai 0.2s)
- **Contenu** : Fade-in séquentiel (0.4s par élément)
- **Bouton** : Pulse subtil après chargement

### Responsive Design
- **Mobile** : 
  - Titre réduit à 2rem
  - Marges réduites
  - Bouton pleine largeur
- **Tablette** : 
  - Layout centré max-width 768px
- **Desktop** : 
  - Layout centré max-width 1200px

### État et Sauvegarde
- **LocalStorage** :
  - Clé : `phase_1_started`
  - Valeur : timestamp du début
- **Analytics** :
  - Event : "phase_preliminary_started"

---

## Structure HTML Suggérée

```html
<div class="phase-start-container">
    <!-- Barre de progression globale -->
    <div class="global-progress">
        <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
        </div>
        <span class="progress-text">Phase 1 sur 4</span>
    </div>

    <!-- Contenu principal -->
    <main class="phase-content">
        <div class="phase-badge">PHASE 1</div>
        
        <h1 class="phase-title">Phase Préliminaire</h1>
        
        <p class="phase-subtitle">
            Faisons connaissance et définissons ensemble votre parcours
        </p>
        
        <div class="phase-description card">
            <p>Cette première phase est essentielle pour établir une relation 
            de confiance et comprendre vos attentes. Nous allons :</p>
            <ul class="objectives-list">
                <li>Analyser votre situation actuelle et vos besoins</li>
                <li>Définir vos objectifs pour ce bilan</li>
                <li>Établir le cadre et les modalités de notre collaboration</li>
                <li>Créer un environnement propice à votre réflexion</li>
            </ul>
        </div>
        
        <div class="phase-info">
            <span class="info-badge">
                <i class="icon-clock"></i> 2 à 3 heures
            </span>
            <span class="info-badge">
                <i class="icon-modules"></i> 5 activités
            </span>
        </div>
        
        <div class="phase-illustration">
            <!-- SVG ou image -->
        </div>
        
        <button class="btn-start-phase">
            Commencer la Phase Préliminaire
            <i class="icon-arrow-right"></i>
        </button>
        
        <p class="encouragement-text">
            Prenez votre temps, ce bilan est fait pour vous
        </p>
    </main>
</div>
```

---

## Variantes de Contenu

### Si l'utilisateur revient
- **Titre alternatif** : "Reprendre la Phase Préliminaire"
- **Sous-titre** : "Continuez là où vous vous êtes arrêté"
- **Bouton** : "Continuer la Phase"
- **Info supplémentaire** : Progression actuelle dans la phase

### Messages Motivationnels (Aléatoires)
1. "Chaque grand voyage commence par un premier pas"
2. "Votre parcours vers une nouvelle perspective professionnelle commence ici"
3. "Prenez le temps de bien définir vos objectifs, c'est la clé de la réussite"

