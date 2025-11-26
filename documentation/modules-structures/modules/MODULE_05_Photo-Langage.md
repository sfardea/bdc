# Structure Détaillée - Module 5 : Photo-Langage

## Informations Générales du Module

- **Numéro du module** : Module 5
- **Titre du module** : Photo langage
- **Description** : Investigation personnelle par l'image - Méthode d'entretien utilisant des photographies comme médiateur
- **Type** : Activité interactive de sélection et analyse d'images
- **Nombre d'étapes** : 4 écrans (2 sélections de photos + 2 formulaires d'analyse)

## 🔗 Visualiser Preview

[Lien 1](https://g.co/gemini/share/efa3fda17158)

## Structure de Navigation

### Modal d'Introduction
- **Titre** : "📸 Activité : Photo-Langage"
- **Sections** :
  1. **Le Principe** : Explication de l'outil photo-langage
  2. **Comment ça marche** : Instructions en 3 points
  3. **L'objectif** : Stimuler la réflexion et libérer la parole
- **Bouton** : "Commencer l'activité"

### Barre de Progression
- **Type** : Barre horizontale avec gradient
- **Calcul** : (écran actuel / 4) * 100%
- **Texte dynamique** : Change selon l'écran actuel
- **Position** : Sticky en haut de page

---

## ÉCRAN 1 : SÉLECTION PHOTO "MOI AUJOURD'HUI"

### En-tête
- **Titre** : "🌟 Moi aujourd'hui"
- **Instruction** : "Choisissez une photo qui représente votre 'Moi aujourd'hui'"
- **Style** : Centré avec animation fadeInUp

### Grille de Photos
- **Nombre de photos** : 15 images variées
- **Sources** : Images Unsplash avec thèmes universels
- **Disposition** : Grille responsive (auto-fit, minmax 200px)
- **Aspect ratio** : 4/3
- **Thématiques** :
  1. Montagne et liberté
  2. Équipe collaborative
  3. Route vers l'horizon
  4. Lecture et réflexion
  5. Espace de travail moderne
  6. Portrait confiant
  7. Innovation technologique
  8. Créativité artistique
  9. Présentation publique
  10. Voyage et découverte
  11. Réunion stratégique
  12. Vision d'avenir
  13. Croissance et développement
  14. Équilibre vie/travail
  15. Accomplissement personnel

### Interaction
- **Au hover** : Transform translateY(-4px) + shadow
- **Au clic** : Sélection et passage au formulaire
- **Animation** : Scale 1.05 sur l'image au hover

---

## ÉCRAN 2 : FORMULAIRE "MOI AUJOURD'HUI"

### Photo Sélectionnée
- **Affichage** : Image centrée, max-width 400px
- **Style** : Border-radius xl, shadow-xl
- **Position** : Au-dessus du formulaire

### Champs du Formulaire

#### 1. Titre/Légende
- **Type** : Input text
- **ID** : title1
- **Placeholder** : "Donnez un titre à cette photo..."
- **Validation** : Requis

#### 2. Description
- **Type** : Textarea
- **ID** : description1
- **Placeholder** : "Décrivez ce que vous voyez dans cette photo..."
- **Hauteur** : 150px (fixe)
- **Validation** : Requis

#### 3. Ce que je ressens
- **Type** : Textarea
- **ID** : feeling1
- **Placeholder** : "Quelles émotions cette photo éveille-t-elle en vous ?"
- **Validation** : Requis

#### 4. Ce qui m'attire
- **Type** : Textarea
- **ID** : attracts1
- **Placeholder** : "Qu'est-ce qui vous attire dans cette photo ?"
- **Validation** : Requis

#### 5. Ce qui me repousse
- **Type** : Textarea
- **ID** : repels1
- **Placeholder** : "Y a-t-il quelque chose qui vous dérange ou vous repousse ?"
- **Validation** : Requis

#### 6. Connexion personnelle
- **Type** : Textarea
- **ID** : connection1
- **Placeholder** : "Comment cette photo reflète-t-elle votre personnalité actuelle ?"
- **Validation** : Requis

### Boutons de Navigation
- **Retour** : Retour à la grille de photos
- **Valider et continuer** : Vers l'étape 2 (désactivé si formulaire incomplet)

---

## ÉCRAN 3 : SÉLECTION PHOTO "MA PROJECTION FUTURE"

### En-tête
- **Titre** : "🚀 Ma projection en fin de bilan"
- **Instruction** : "Choisissez une photo qui représente votre 'Ma projection en fin de bilan'"

### Grille de Photos
- **Identique à l'écran 1** : Mêmes 15 photos disponibles
- **Possibilité** : Choisir la même photo ou une différente

### Navigation Spécifique
- **Bouton Retour** : "← Retour à l'étape 1"
- **Position** : En bas de la grille

---

## ÉCRAN 4 : FORMULAIRE "MA PROJECTION FUTURE"

### Photo Sélectionnée
- **Affichage** : Identique à l'écran 2
- **ID** : selectedPhoto2

### Champs du Formulaire

#### 1. Titre/Légende
- **ID** : title2
- **Identique structure** : Comme étape 1

#### 2. Description
- **ID** : description2

#### 3. Ce que je ressens
- **ID** : feeling2

#### 4. Ce qui m'attire
- **ID** : attracts2

#### 5. Projection future (spécifique)
- **Type** : Textarea
- **ID** : projection2
- **Placeholder** : "Comment cette photo reflète-t-elle la personne que vous aspirez à devenir ?"
- **Note** : Remplace "Ce qui me repousse" de l'étape 1

### Boutons Finaux
- **Retour** : Retour à la grille étape 2
- **Terminer l'activité** : Validation finale

---

## PAGE DE SUCCÈS

### Éléments Visuels
- **Icône** : Cercle vert avec coche SVG (64x64)
- **Animation** : FadeInUp + confettis optionnels

### Contenu
- **Titre** : "Félicitations !"
- **Message principal** : "Vous avez terminé avec succès l'activité de photo-langage."
- **Message secondaire** : "Vos choix d'images et vos réflexions ont été sauvegardés et alimenteront votre parcours de découverte professionnelle."

### Récapitulatif (optionnel)
- **Section 1** : "🌟 Moi aujourd'hui - Photo sélectionnée et analysée"
- **Section 2** : "🚀 Ma projection future - Vision d'avenir exprimée"

### Boutons d'Action
1. **Recommencer l'activité**
   - Style : Gris
   - Icône : Flèche circulaire
   - Action : Reset complet du module

2. **Continuer vers le module 6**
   - Style : Primary gradient
   - Icône : Flèche droite
   - Action : Navigation vers /module/06

---

## Fonctionnalités Techniques

### Sauvegarde Automatique
- **Déclencheur** : À chaque modification de champ
- **Indicateur** : Toast "💾 Sauvegardé" (1 seconde)
- **Position** : Fixed top-right
- **Données sauvegardées** :
  - Écran actuel
  - Photos sélectionnées
  - Données des formulaires
  - Timestamp

### Navigation entre Écrans
- **Type** : Navigation séquentielle
- **Animations** : FadeInUp pour chaque écran
- **Retour possible** : À tout moment vers écrans précédents
- **Tracking** : Écrans visités mémorisés

### Validation des Formulaires
- **Type** : Validation en temps réel
- **Tous les champs requis**
- **Bouton désactivé** : Si formulaire incomplet
- **Feedback** : Visuel immédiat

### Structure des Données
```javascript
{
  currentScreen: 1-4,
  selectedPhotos: {
    step1: photoObject,
    step2: photoObject
  },
  formData: {
    step1: {
      title1: "",
      description1: "",
      feeling1: "",
      attracts1: "",
      repels1: "",
      connection1: ""
    },
    step2: {
      title2: "",
      description2: "",
      feeling2: "",
      attracts2: "",
      projection2: ""
    }
  },
  visitedScreens: [1,2,3,4],
  timestamp: "ISO string"
}
```

### Database
- **Clé principale** : `module5_data`
- **Clés secondaires** :
  - `module5_selected_photos`
  - `module5_form_data`
  - `module5_current_step`
  - `module5_completed`

### SCORM Support
- **Données envoyées** :
  - Photos sélectionnées
  - Réponses complètes
  - Statut de complétion
  - Timestamp

## Structure JSON pour Base de Données

```json
{
  "module_id": 5,
  "module_title": "Photo-Langage",
  "module_type": "photo_selection_analysis",
  "total_screens": 4,
  "photo_library": [
    {
      "id": 1,
      "src": "url",
      "alt": "Montagne et liberté",
      "theme": "freedom"
    }
    // ... 15 photos
  ],
  "steps": [
    {
      "step_id": 1,
      "type": "photo_selection",
      "title": "Moi aujourd'hui",
      "instruction": "Choisissez une photo qui représente votre 'Moi aujourd'hui'"
    },
    {
      "step_id": 2,
      "type": "analysis_form",
      "title": "Analyse Moi aujourd'hui",
      "fields": [
        {
          "id": "title",
          "type": "text",
          "label": "Titre/Légende",
          "required": true
        },
        {
          "id": "description",
          "type": "textarea",
          "label": "Description",
          "required": true
        }
        // ... autres champs
      ]
    },
    {
      "step_id": 3,
      "type": "photo_selection",
      "title": "Ma projection future"
    },
    {
      "step_id": 4,
      "type": "analysis_form",
      "title": "Analyse projection future"
    }
  ],
  "features": {
    "auto_save": true,
    "progress_tracking": true,
    "photo_comparison": true,
    "scorm_compatible": true
  }
}
```



## Notes pour l'Intégration

1. **Optimisation images** : Lazy loading + format WebP recommandé
2. **Accessibilité** : Alt texts descriptifs pour toutes les photos
3. **Responsive** : Grille adaptative selon la taille d'écran
4. **Performance** : Préchargement des images suivantes

