
# Structure Détaillée - Module 6 : Mes Courbes de Vie

## Informations Générales du Module

- **Numéro du module** : Module 6
- **Titre du module** : Mes courbes de vie
- **Description** : Visualisation et analyse de votre parcours personnel et professionnel à travers des courbes temporelles
- **Type** : Outil interactif de création de timeline avec analyse
- **Nombre d'étapes** : 3 (Modal intro + Création des courbes + Analyse)

## 🔗 Visualiser Preview HTML (de la courbe)

```html
<!DOCTYPE  html> <html  lang="fr"> <head> <meta  charset="UTF-8"> <meta  name="viewport"  content="width=device-width, initial-scale=1.0"> <title>Graphique de lignes interconnectées</title> <style> body  { margin:  0; padding:  20px; font-family: Arial, sans-serif; background:  linear-gradient(to bottom,  #2c3e50,  #34495e); display: flex; justify-content: center; align-items: center; min-height:  100vh; } .chart-container  { background:  white; padding:  40px; border-radius:  10px; box-shadow:  0  4px  20px  rgba(0,0,0,0.3); width:  95%; max-width:  1400px; } svg  { width:  100%; height: auto; } .grid-line  { stroke:  #ddd; stroke-width:  1; } .axis-line  { stroke:  #333; stroke-width:  2; } .line-teal  { fill: none; stroke:  #2fa19f; stroke-width:  3; } .line-orange  { fill: none; stroke:  #f39c12; stroke-width:  3; } .point-teal  { fill:  #2fa19f; } .point-orange  { fill:  #f39c12; } .label  { font-size:  14px; font-weight: bold; fill:  #333; } .axis-label  { font-size:  16px; fill:  #666; } </style> </head> <body> <div  class="chart-container"> <svg  viewBox="0 0 1400 700"  xmlns="http://www.w3.org/2000/svg"> <!-- Grille --> <line  x1="80"  y1="550"  x2="1350"  y2="550"  class="grid-line"/> <line  x1="80"  y1="450"  x2="1350"  y2="450"  class="grid-line"/> <line  x1="80"  y1="350"  x2="1350"  y2="350"  class="grid-line"/> <line  x1="80"  y1="250"  x2="1350"  y2="250"  class="grid-line"/> <line  x1="80"  y1="150"  x2="1350"  y2="150"  class="grid-line"/> <line  x1="80"  y1="50"  x2="1350"  y2="50"  class="grid-line"/> <!-- Axes --> <line  x1="80"  y1="50"  x2="80"  y2="650"  class="axis-line"/> <line  x1="80"  y1="350"  x2="1350"  y2="350"  class="axis-line"/> <!-- Labels Y --> <text  x="50"  y="55"  class="axis-label">10</text> <text  x="50"  y="155"  class="axis-label">5</text> <text  x="50"  y="355"  class="axis-label">0</text> <text  x="40"  y="555"  class="axis-label">-5</text> <text  x="30"  y="655"  class="axis-label">-10</text> <!-- Ligne Teal --> <path  d="M 100,50 L 150,50 L 220,50 L 290,120 L 350,220 L 450,380 L 570,180 L 650,350 L 850,50 L 950,50 L 1050,50 L 1150,50 L 1250,80 L 1320,80"  class="line-teal"/> <!-- Ligne Orange --> <path  d="M 290,50 L 350,50 L 420,100 L 480,180 L 550,280 L 630,50 L 720,50 L 800,100 L 870,80 L 950,120 L 1020,100 L 1090,100 L 1160,150 L 1220,250 L 1320,120"  class="line-orange"/> <!-- Points et labels - Ligne Teal --> <circle  cx="100"  cy="50"  r="6"  class="point-teal"/> <circle  cx="150"  cy="50"  r="6"  class="point-teal"/> <text  x="110"  y="90"  class="label">Bac</text> <circle  cx="220"  cy="50"  r="6"  class="point-teal"/> <text  x="190"  y="90"  class="label">Diplome</text> <circle  cx="290"  cy="120"  r="6"  class="point-teal"/> <text  x="250"  y="180"  class="label">CDI Audio</text> <circle  cx="350"  cy="220"  r="6"  class="point-teal"/> <text  x="300"  y="280"  class="label">Mendy's Deli</text> <circle  cx="450"  cy="380"  r="6"  class="point-teal"/> <text  x="420"  y="420"  class="label">CDI Audika</text> <circle  cx="570"  cy="180"  r="6"  class="point-teal"/> <text  x="540"  y="220"  class="label">CDI OC</text> <circle  cx="650"  cy="350"  r="6"  class="point-teal"/> <circle  cx="850"  cy="50"  r="6"  class="point-teal"/> <text  x="820"  y="90"  class="label">Twingo</text> <circle  cx="1150"  cy="50"  r="6"  class="point-teal"/> <text  x="1120"  y="90"  class="label">KBLAB</text> <circle  cx="1250"  cy="80"  r="6"  class="point-teal"/> <text  x="1220"  y="120"  class="label">OrCam</text> <!-- Points et labels - Ligne Orange --> <circle  cx="290"  cy="50"  r="6"  class="point-orange"/> <circle  cx="350"  cy="50"  r="6"  class="point-orange"/> <text  x="350"  y="40"  class="label">Audio</text> <circle  cx="420"  cy="100"  r="6"  class="point-orange"/> <text  x="380"  y="140"  class="label">nonva</text> <circle  cx="630"  cy="50"  r="6"  class="point-orange"/> <text  x="600"  y="90"  class="label">Australie</text> <circle  cx="1220"  cy="250"  r="6"  class="point-orange"/> <text  x="1050"  y="240"  class="label">Covid - Ella/Lorem</text> <circle  cx="1320"  cy="120"  r="6"  class="point-orange"/> <text  x="1320"  y="110"  class="label">Balink</text> </svg> </div> </body> </html>
```

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

5. **Description courte**
   - Type : Text input
 
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
- **Technologie** : HTML5 Canvas ou SVG (ou D3js ?)
- **Responsive** : Adaptation à la taille d'écran
- **Zoom** : Possibilité de zoomer sur une période

### Calcul des Courbes
- **Algorithme** : Interpolation cubic spline
- **Lissage** : Courbes de Bézier entre points
- **Animation** : Dessin progressif des courbes

### Database
- **Clés** :
  - `module6_personal_points`
  - `module6_professional_points`
  - `module6_analysis`
  - `module6_visited`
  - `module6_completed`

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


## Notes pour l'Intégration

**Backup** : Sauvegarde régulière pour éviter perte de données

