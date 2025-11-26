# Structure Détaillée - Module 6 : Mes Courbes de Vie

## Informations Générales du Module

- **Numéro du module** : Module 6
- **Titre du module** : Mes courbes de vie
- **Description** : Visualisation et analyse de votre parcours personnel et professionnel à travers des courbes temporelles
- **Type** : Outil interactif de création de timeline avec analyse
- **Nombre d'étapes** : 3 (Modal intro + Création des courbes + Analyse)

## 🔗 Visualiser Preview

[Lien 1](https://azerradilana.atlassian.net/browse/BC-4)

## Structure de Navigation

### Modal de Bienvenue (Première Visite)
- **Titre** : "Bienvenue dans l'activité Mes Courbes de Vie"
- **Contenu** :
  - Explication de l'exercice
  - Objectifs de l'activité
  - Instructions d'utilisation
- **Bouton** : "Commencer l'activité"
- **Condition** : S'affiche uniquement à la première visite

---

## ÉTAPE 1 : CRÉATION DES COURBES

### En-tête du Module
- **Titre** : "Mes courbes de vie"
- **Description** : "Tracez l'évolution de votre vie personnelle et professionnelle"
- **Badge** : Module 6

### Sélecteur de Timeline
- **Options** :
  1. **Personnel** (par défaut)
  2. **Professionnel**
- **Style** : Boutons toggle avec état actif
- **Position** : Centré en haut de la zone de travail

### Zone de Canvas Interactive

#### Caractéristiques du Canvas
- **Dimensions** : 100% largeur, hauteur flexible
- **Fond** : Gradient subtil (gris clair)
- **Bordure** : 1px solid gray-200
- **Border-radius** : Large

#### Axe Temporel
- **Position** : Horizontal, au centre (50% hauteur)
- **Style** : Ligne grise avec flèche à droite
- **Échelle** : De 1950 à aujourd'hui
- **Graduations** : Années marquantes

#### Axe d'Impact
- **Vertical** : Implicite
- **Échelle** : -5 (très négatif) à +5 (très positif)
- **Point neutre** : 0 (sur l'axe horizontal)
- **Labels** :
  - Top : "+5 Très positif" (vert)
  - Middle : "0 Neutre" (gris)
  - Bottom : "-5 Très négatif" (rouge)

### Popup d'Ajout d'Événements

#### Déclencheur
- **Bouton** : "Ajouter des événements"
- **Position** : En bas de la zone canvas
- **Style** : Bouton primary avec icône +

#### Structure de la Popup
- **Type** : Modal overlay
- **Titre** : "Ajouter des événements"
- **Possibilité** : Ajout multiple d'événements

#### Formulaire d'Événement
Pour chaque événement :

1. **Titre de l'événement**
   - Type : Input text
   - Placeholder : "Titre de l'événement"
   - Validation : Requis

2. **Date**
   - Type : Input date
   - Validation : Requis
   - Limites : 1950 à aujourd'hui

3. **Type de courbe**
   - Type : Select
   - Options :
     - Personnel
     - Professionnel

4. **Impact**
   - Type : Range slider
   - Min : -5
   - Max : +5
   - Default : 0
   - Affichage : Valeur numérique à côté

#### Actions de la Popup
- **Ajouter un autre événement** : Bouton pour ajouter un nouveau formulaire
- **Valider tous les événements** : Soumettre et placer sur le canvas
- **Annuler** : Fermer sans sauvegarder

### Visualisation des Points

#### Style des Points
- **Forme** : Cercle (16px)
- **Bordure** : 3px solid white
- **Couleurs** :
  - Positif : Gradient vert
  - Négatif : Gradient rouge
  - Neutre : Gradient gris
- **Hover** : Scale 1.2 + shadow
- **Cursor** : Pointer

#### Tooltip au Hover
- **Contenu** : Titre + Date + Impact
- **Style** : Fond noir, texte blanc
- **Position** : Au-dessus du point
- **Animation** : Fade in/out

#### Connexion des Points
- **Type** : Courbe de Bézier
- **Couleur** : Selon le type (personnel/professionnel)
- **Style** :
  - Personnel : Ligne bleue
  - Professionnel : Ligne verte
- **Épaisseur** : 2px

### Actions Disponibles
- **Modifier un point** : Double-clic pour éditer
- **Supprimer un point** : Clic droit → menu contextuel
- **Déplacer un point** : Drag and drop (optionnel)

### Bouton de Transition
- **Texte** : "Continuer vers l'analyse"
- **Position** : En bas à droite
- **Condition** : Au moins 3 points par courbe
- **Style** : Bouton success

---

## ÉTAPE 2 : ANALYSE DES COURBES

### En-tête
- **Titre** : "Analyse de vos courbes"
- **Sous-titre** : "Répondez aux questions suivantes pour approfondir votre réflexion"

### Visualisation Récapitulative
- **Affichage** : Les deux courbes superposées (lecture seule)
- **Taille** : Réduite (50% de la hauteur originale)
- **Position** : En haut de la page
- **Légende** :
  - Ligne bleue : Personnel
  - Ligne verte : Professionnel

### Questions d'Analyse

#### Structure des Questions
Série de questions ouvertes présentées séquentiellement :

1. **Analyse générale**
   - "Quels constats faites-vous de manière générale ?"
   - Textarea, min 100 caractères

2. **Superposition des courbes**
   - "Et en superposant les 2 lignes personnelles et professionnelles ?"
   - Textarea, min 100 caractères

3. **Moments marquants positifs**
   - "Quels sont vos moments les plus positifs ?"
   - Textarea

4. **Moments difficiles**
   - "Comment avez-vous surmonté les périodes difficiles ?"
   - Textarea

5. **Patterns identifiés**
   - "Identifiez-vous des patterns récurrents ?"
   - Textarea

6. **Apprentissages**
   - "Quels apprentissages tirez-vous de cette visualisation ?"
   - Textarea

### Navigation entre Questions
- **Type** : Une question par écran
- **Boutons** :
  - Précédent (sauf première question)
  - Suivant (devient "Terminer" à la dernière)
- **Progress** : Indicateur "Question X sur 6"

### Validation
- **Minimum requis** : Réponse à toutes les questions
- **Sauvegarde** : Automatique à chaque réponse

---

## PAGE DE SUCCÈS

### Éléments Visuels
- **Animation** : Courbes qui se dessinent
- **Icône** : Graph/Chart avec check

### Contenu
- **Titre** : "Excellent travail !"
- **Message** : "Vous avez créé et analysé vos courbes de vie avec succès"
- **Statistiques** :
  - Nombre d'événements personnels
  - Nombre d'événements professionnels
  - Période couverte

### Récapitulatif
- **Visualisation finale** : Mini version des deux courbes
- **Points clés** : 3 insights principaux extraits

### Boutons d'Action
1. **Télécharger mes courbes** (PDF/Image)
2. **Recommencer l'activité**
3. **Continuer vers le module 7**

---

## Fonctionnalités Techniques

### Sauvegarde des Données
```javascript
{
  personalPoints: [
    {
      id: 1,
      title: "Naissance premier enfant",
      date: "2010-05-15",
      impact: 5,
      type: "personal"
    }
  ],
  professionalPoints: [...],
  analysisAnswers: {
    question1: "Réponse...",
    question2: "Réponse..."
  },
  currentStep: 1,
  completionDate: "ISO string"
}
```

### Rendu du Canvas
- **Technologie** : HTML5 Canvas ou SVG
- **Responsive** : Adaptation à la taille d'écran
- **Zoom** : Possibilité de zoomer sur une période
- **Export** : Canvas vers image PNG/JPG

### Calcul des Courbes
- **Algorithme** : Interpolation cubic spline
- **Lissage** : Courbes de Bézier entre points
- **Animation** : Dessin progressif des courbes

### LocalStorage
- **Clés** :
  - `module6_personal_points`
  - `module6_professional_points`
  - `module6_analysis`
  - `module6_visited`
  - `module6_completed`

### Interactions
- **Drag & Drop** : Pour repositionner les points
- **Double-clic** : Pour éditer un point
- **Clic droit** : Menu contextuel
- **Hover** : Affichage tooltip
- **Pinch to zoom** : Sur mobile

---

## Structure HTML Principale

```html
<!-- Modal de bienvenue -->
<div class="welcome-modal" id="welcomeModal">
  <div class="modal-content">
    <h2>Bienvenue dans l'activité Mes Courbes de Vie</h2>
    <button id="startActivityBtn">Commencer l'activité</button>
  </div>
</div>

<!-- Contenu principal -->
<main class="card">
  <div class="life-curves-container">
    <!-- Étape 1: Création -->
    <div class="step-section" id="creationStep">
      <!-- Sélecteur de timeline -->
      <div class="timeline-selector">
        <button class="timeline-btn active" data-timeline="personal">Personnel</button>
        <button class="timeline-btn" data-timeline="professional">Professionnel</button>
      </div>
      
      <!-- Canvas -->
      <div class="timeline-canvas-wrapper">
        <div class="timeline-canvas" id="timelineCanvas">
          <div class="timeline-axis"></div>
          <div class="timeline-labels">
            <span class="timeline-label positive">+5</span>
            <span class="timeline-label neutral">0</span>
            <span class="timeline-label negative">-5</span>
          </div>
          <!-- Points ajoutés dynamiquement -->
        </div>
      </div>
      
      <button class="btn-primary" id="openPopupBtn">
        Ajouter des événements
      </button>
    </div>
    
    <!-- Étape 2: Analyse -->
    <div class="step-section" id="analysisStep">
      <!-- Questions d'analyse -->
    </div>
  </div>
</main>

<!-- Popup d'ajout d'événements -->
<div class="popup-overlay" id="popupOverlay">
  <div class="popup-content">
    <h3>Ajouter des événements</h3>
    <div id="eventsContainer">
      <!-- Formulaires d'événements -->
    </div>
    <button id="addEventFieldBtn">+ Ajouter un événement</button>
    <button id="submitAllEventsBtn">Valider tous les événements</button>
  </div>
</div>
```

---

## Structure JSON pour Base de Données

```json
{
  "module_id": 6,
  "module_title": "Mes Courbes de Vie",
  "module_type": "interactive_timeline",
  "steps": [
    {
      "step_id": 1,
      "type": "timeline_creation",
      "title": "Création des courbes",
      "timelines": [
        {
          "id": "personal",
          "label": "Personnel",
          "color": "#3B82F6"
        },
        {
          "id": "professional",
          "label": "Professionnel",
          "color": "#10B981"
        }
      ],
      "scale": {
        "time": {
          "min": "1950-01-01",
          "max": "current"
        },
        "impact": {
          "min": -5,
          "max": 5
        }
      }
    },
    {
      "step_id": 2,
      "type": "analysis",
      "title": "Analyse des courbes",
      "questions": [
        {
          "id": 1,
          "text": "Quels constats faites-vous de manière générale ?",
          "type": "textarea",
          "min_length": 100
        }
        // ... autres questions
      ]
    }
  ],
  "features": {
    "auto_save": true,
    "export_pdf": true,
    "export_image": true,
    "drag_drop": true,
    "zoom": true,
    "tooltips": true
  },
  "visualization": {
    "type": "bezier_curves",
    "animation": "progressive_draw",
    "interactive": true
  }
}
```

---

## Notes pour l'Intégration

1. **Performance** : Utiliser requestAnimationFrame pour animations fluides
2. **Accessibilité** : Alternative textuelle pour les courbes
3. **Mobile** : Interface tactile adaptée (pinch, swipe)
4. **Export** : Génération PDF avec graphiques haute résolution
5. **Analytics** : Analyse des patterns communs entre utilisateurs
6. **Psychologie** : Corrélations possibles entre événements
7. **Backup** : Sauvegarde régulière pour éviter perte de données
8. **Collaboration** : Possibilité future de partage avec consultant
