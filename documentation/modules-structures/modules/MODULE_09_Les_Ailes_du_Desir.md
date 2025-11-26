# Structure Détaillée - Module 9 : Les Ailes du Désir

## Informations Générales du Module

- **Numéro du module** : Module 9
- **Titre du module** : Les Ailes du Désir
- **Sous-titre** : Prenez conscience de vos envies et de vos motivations
- **Description** : Exercice d'orientation professionnelle de la collection "Chemin Faisant" pour explorer vos envies profondes
- **Type** : Exercice d'analyse et de planification
- **Durée estimée** : 30-40 minutes
- **Nombre d'étapes** : 4 étapes principales

## 🔗 Visualiser Preview

[Lien 1](https://www.marija.fr/wp-content/uploads/2023/01/Exercice-Les-Ailes-du-D)

## Structure de Navigation

### Barre de Progression
- **Type** : Barre de progression horizontale avec étapes
- **Texte** : "Étape [X] sur 4"
- **Calcul** : (étape actuelle / 4) * 100
- **Indicateurs** : Points numérotés pour chaque étape

### Indicateurs d'Étapes
1. **Étape 1** : Listing des expériences
2. **Étape 2** : Évaluation et notation
3. **Étape 3** : Regroupement thématique
4. **Étape 4** : Planification d'action

---

## PAGE D'INTRODUCTION

### En-tête de la Page
- **Badge Module** : "Module 9" (fond primary-bg, texte primary)
- **Titre Principal** : "Les Ailes du Désir"
- **Sous-titre** : "Exercice d'orientation professionnelle"
- **Badge Collection** : "Collection Chemin Faisant" (badge secondaire)
- **Icône/Emoji** : 🦢 (cygne symbolisant la liberté et l'envol)

### Section Présentation

#### Bloc Concept
- **Titre** : "Concept de l'exercice"
- **Contenu** : Texte explicatif sur la méthode ADVP
- **Mise en forme** : Paragraphe avec fond légèrement coloré
- **Points clés** :
  - Exploration des envies profondes
  - Domaines professionnel et personnel
  - Acceptation de l'utopie
  - Orientation vers l'action

#### Bloc Instructions Générales
- **Titre** : "Comment procéder"
- **Format** : Liste numérotée de 10 instructions
- **Contenu** :
  1. Listez 10 expériences souhaitées
  2. Expliquez vos motivations
  3. Notez la désirabilité (1-10)
  4. Notez la faisabilité (1-10)
  5. Calculez la somme
  6. Regroupez par thèmes
  7. Choisissez une priorité
  8. Estimez le temps nécessaire
  9. Définissez les étapes
  10. Identifiez la première action

### Boutons d'Action
- **Bouton Principal** : "Commencer l'exercice"
  - Style : btn-primary btn-lg
  - Icône : →
  - Action : Navigation vers Étape 1

---

## ÉTAPE 1 : LISTING DES EXPÉRIENCES

### En-tête de l'Étape
- **Titre** : "Vos 10 expériences souhaitées"
- **Sous-titre** : "Listez librement, sans censure, tout ce que vous aimeriez vivre"
- **Conseil** : "N'hésitez pas à inclure des rêves utopiques !"

### Tableau Principal

#### Structure du Tableau
- **Nombre de lignes** : 10 (numérotées de 1 à 10)
- **Colonnes** : 5 colonnes
- **En-têtes** :
  - N° (largeur : 50px)
  - Expérience (largeur : 40%)
  - D - Désirabilité (largeur : 100px)
  - F - Faisabilité (largeur : 100px)
  - S - Somme (largeur : 80px)
  - Pourquoi (largeur : restante)

#### Ligne Type (répétée 10 fois)

##### Colonne 1 : Numéro
- **Type** : Affichage statique
- **Contenu** : Numéro de ligne (1 à 10)
- **Style** : Centré, fond gris clair

##### Colonne 2 : Expérience
- **Type** : Zone de texte (textarea)
- **ID** : experience_[n]
- **Placeholder** : "Décrivez l'expérience n°[n]..."
- **Hauteur** : 3 lignes minimum, extensible
- **Validation** : Requis pour au moins 5 expériences
- **Caractères max** : 500

##### Colonne 3 : Désirabilité (D)
- **Type** : Champ numérique (input number)
- **ID** : desirability_[n]
- **Min** : 1
- **Max** : 10
- **Placeholder** : "-"
- **Info-bulle** : "10 = désir le plus fort"
- **Style** : Centré, largeur fixe

##### Colonne 4 : Faisabilité (F)
- **Type** : Champ numérique (input number)
- **ID** : feasibility_[n]
- **Min** : 1
- **Max** : 10
- **Placeholder** : "-"
- **Info-bulle** : "10 = très facile à réaliser"
- **Style** : Centré, largeur fixe

##### Colonne 5 : Somme (S)
- **Type** : Affichage calculé automatique
- **ID** : sum_[n]
- **Calcul** : D + F
- **Affichage** : Badge avec couleur selon score
  - 2-7 : Badge rouge
  - 8-14 : Badge orange
  - 15-20 : Badge vert
- **Animation** : Mise à jour en temps réel

##### Colonne 6 : Pourquoi
- **Type** : Zone de texte (textarea)
- **ID** : reason_[n]
- **Placeholder** : "Pourquoi cette expérience est importante pour vous..."
- **Hauteur** : 2 lignes minimum, extensible
- **Caractères max** : 300

### Fonctionnalités du Tableau

#### Calculs Automatiques
- Somme D + F calculée en temps réel
- Mise à jour visuelle immédiate
- Indication du score total global

#### Tri et Classement
- **Bouton** : "Trier par score"
  - Action : Réorganise les lignes par score décroissant
  - Animation : Transition fluide
- **Indicateur** : Top 3 mis en évidence

#### Validation Progressive
- Minimum 5 expériences remplies pour continuer
- Indicateur visuel du nombre d'expériences complétées
- Message d'encouragement dynamique

### Zone de Légende
- **Titre** : "Aide à la notation"
- **Contenu** :
  - Désirabilité : 1 (peu désiré) → 10 (fortement désiré)
  - Faisabilité : 1 (très difficile) → 10 (très facile)
  - Somme : Score total pour priorisation

### Boutons de Navigation
- **Bouton Secondaire** : "Sauvegarder"
  - Style : btn-outline-primary
  - Action : Sauvegarde locale
- **Bouton Principal** : "Continuer"
  - Style : btn-primary
  - État : Désactivé jusqu'à validation
  - Action : Navigation vers Étape 2

---

## ÉTAPE 2 : REGROUPEMENT THÉMATIQUE

### En-tête de l'Étape
- **Titre** : "Regroupez vos expériences par thèmes"
- **Sous-titre** : "Identifiez les grands domaines qui vous attirent"
- **Instructions** : "Créez au minimum 3 thèmes et associez-y vos expériences"

### Section Thèmes

#### Grille de Thèmes
- **Layout** : Grille responsive 3 colonnes (mobile : 1 colonne)
- **Nombre minimum** : 3 cartes
- **Nombre maximum** : 6 cartes

#### Carte Thème Type

##### En-tête de Carte
- **Champ Titre** :
  - Type : Input text
  - ID : theme_title_[n]
  - Placeholder : "Nom du thème [n]"
  - Validation : Requis
  - Caractères max : 50
- **Couleur** : Sélecteur de couleur (6 options prédéfinies)
- **Icône** : Sélection d'icône (optionnel)

##### Zone de Contenu
- **Type** : Zone de drop pour drag & drop
- **État vide** : "Glissez des expériences ici"
- **Capacité** : Illimitée
- **Affichage** : Liste des expériences associées

##### Liste des Expériences Associées
- **Format** : Pills/badges
- **Contenu** : Titre court de l'expérience + score
- **Action** : Click pour retirer du thème
- **Animation** : Fade in/out

#### Zone Source des Expériences
- **Titre** : "Vos expériences à classer"
- **Format** : Liste de cartes draggables
- **Contenu par carte** :
  - Numéro
  - Titre de l'expérience (tronqué si trop long)
  - Score (badge coloré)
- **État** : Grisé si déjà associé à un thème

### Fonctionnalités Drag & Drop
- **Drag** : Depuis la zone source
- **Drop** : Dans les cartes thèmes
- **Feedback visuel** : Zone de drop en surbrillance
- **Animation** : Smooth transition
- **Multi-assignation** : Une expérience peut être dans plusieurs thèmes

### Bouton Ajouter un Thème
- **Texte** : "+ Ajouter un thème"
- **Style** : btn-outline-secondary
- **Position** : Après la dernière carte
- **Action** : Ajoute une nouvelle carte thème
- **Limite** : Maximum 6 thèmes

### Validation
- Au moins 3 thèmes créés et nommés
- Chaque thème contient au moins 1 expérience
- Message d'erreur si conditions non remplies

### Boutons de Navigation
- **Bouton Retour** : "← Précédent"
- **Bouton Principal** : "Continuer"
  - État : Désactivé jusqu'à validation
  - Action : Navigation vers Étape 3

---

## ÉTAPE 3 : SÉLECTION ET PLANIFICATION

### En-tête de l'Étape
- **Titre** : "Choisissez votre expérience prioritaire"
- **Sous-titre** : "Sélectionnez l'expérience que vous souhaitez réaliser en premier"

### Section Sélection

#### Champ de Sélection Principal
- **Label** : "Mon expérience prioritaire"
- **Type** : Select/Dropdown
- **ID** : selected_experience
- **Options** : Liste des expériences avec leurs scores
- **Format option** : "[Score] - Titre de l'expérience"
- **Tri** : Par score décroissant
- **Validation** : Requis

#### Affichage de l'Expérience Sélectionnée
- **Card de Résumé** :
  - Titre de l'expérience
  - Score total
  - Raison (pourquoi)
  - Thème(s) associé(s)
- **Style** : Mise en évidence avec bordure colorée

### Section Planification Temporelle

#### Estimation de Durée
- **Label** : "Temps nécessaire estimé pour réaliser cette expérience"
- **Type** : Input text avec suggestions
- **ID** : time_estimation
- **Placeholder** : "Ex: 6 mois, 1 an, 2 ans..."
- **Suggestions dropdown** :
  - 3 mois
  - 6 mois
  - 1 an
  - 2 ans
  - 5 ans
  - Plus de 5 ans
- **Validation** : Requis

### Section Étapes de Réalisation

#### Titre Section
- **Texte** : "Décomposez votre projet en étapes"
- **Sous-titre** : "Listez les principales étapes nécessaires"

#### Liste d'Étapes
- **Type** : Liste ordonnée dynamique
- **Minimum** : 3 étapes
- **Maximum** : 10 étapes
- **Étapes initiales** : 3 champs pré-affichés

#### Champ Étape Type
- **Type** : Input text
- **ID** : step_[n]
- **Placeholder** : "Étape [n] : Décrivez l'action..."
- **Validation** : Requis pour les 3 premières
- **Caractères max** : 200
- **Numérotation** : Automatique

#### Bouton Ajouter
- **Texte** : "+ Ajouter une étape"
- **Style** : btn-outline-secondary btn-sm
- **Position** : Après la dernière étape
- **Action** : Ajoute un nouveau champ étape

### Boutons de Navigation
- **Bouton Retour** : "← Précédent"
- **Bouton Principal** : "Continuer"
  - État : Désactivé jusqu'à validation
  - Action : Navigation vers Étape 4

---

## ÉTAPE 4 : PREMIÈRE ACTION CONCRÈTE

### En-tête de l'Étape
- **Titre** : "Passez à l'action !"
- **Sous-titre** : "Définissez votre toute première action concrète"

### Section Récapitulatif

#### Card de Synthèse
- **Titre** : "Votre projet"
- **Contenu structuré** :
  - Expérience choisie (titre complet)
  - Score de priorité
  - Durée estimée
  - Nombre d'étapes planifiées
  - Thème(s) associé(s)
- **Style** : Card avec fond gradient léger

### Section Première Action

#### Champ Principal
- **Label** : "Par quoi je commence concrètement ?"
- **Type** : Textarea
- **ID** : first_action
- **Placeholder** : "Décrivez précisément votre première action. Ex: 'Demain, je prends RDV avec...', 'Cette semaine, je recherche...'"
- **Lignes** : 4 minimum
- **Validation** : Requis, minimum 20 caractères
- **Conseil** : "Soyez le plus spécifique possible : quoi, quand, comment"

#### Champs Complémentaires

##### Date de Début
- **Label** : "Quand allez-vous faire cette première action ?"
- **Type** : Date picker
- **ID** : action_date
- **Min** : Date du jour
- **Max** : Date du jour + 30 jours
- **Validation** : Requis

##### Engagement Personnel
- **Label** : "Mon engagement"
- **Type** : Checkbox avec texte
- **Texte** : "Je m'engage à réaliser cette première action à la date indiquée"
- **ID** : commitment_checkbox
- **Validation** : Doit être coché pour valider

### Section Conseil Final

#### Bloc Citation
- **Titre** : "💡 Conseil de l'exercice"
- **Contenu** : Citation inspirante sur l'importance de refaire l'exercice régulièrement
- **Style** : Blockquote avec icône
- **Texte** : "Cet exercice gagne à être refait tous les 6 mois pour suivre l'évolution de vos envies et ajuster votre trajectoire."

### Boutons de Navigation
- **Bouton Retour** : "← Précédent"
- **Bouton Secondaire** : "Sauvegarder le travail"
  - Style : btn-outline-success
  - Action : Sauvegarde locale + notification
- **Bouton Principal** : "Valider et terminer"
  - Style : btn-success btn-lg
  - Action : Validation finale et navigation vers page de succès

---

## PAGE DE SUCCÈS

### En-tête
- **Animation** : Confettis ou étoiles animées
- **Icône** : ✅ ou 🎉 (grande taille, animée)
- **Titre** : "Félicitations !"
- **Sous-titre** : "Vous avez complété l'exercice Les Ailes du Désir"

### Résumé des Résultats

#### Card Principale
- **Titre** : "Votre plan d'action"
- **Contenu** :
  - Expérience prioritaire choisie
  - Première action définie
  - Date d'engagement
  - Nombre total d'expériences identifiées
  - Nombre de thèmes créés

### Options d'Export

#### Boutons d'Action
- **Télécharger PDF** :
  - Texte : "📄 Télécharger mon exercice complet"
  - Style : btn-primary
  - Action : Génère et télécharge un PDF
  
- **Envoyer par Email** :
  - Texte : "✉️ M'envoyer une copie"
  - Style : btn-outline-primary
  - Action : Modal pour saisir email

- **Partager avec le Coach** :
  - Texte : "👤 Partager avec mon conseiller"
  - Style : btn-outline-info
  - Action : Envoi au coach si connecté

### Message de Clôture
- **Texte** : Message encourageant sur les prochaines étapes
- **Rappel** : Importance de passer à l'action
- **Suggestion** : Programmer un rappel dans 6 mois

### Navigation Finale
- **Bouton Secondaire** : "Refaire l'exercice"
  - Action : Retour au début avec données vierges
- **Bouton Principal** : "Continuer vers le module suivant"
  - Action : Navigation vers Module 10

---

## Interactions et Comportements

### Sauvegarde Automatique
- **Fréquence** : Toutes les 30 secondes
- **Déclencheur** : À chaque modification de champ
- **Stockage** : LocalStorage
- **Indicateur** : "Sauvegardé" avec timestamp

### Validation Progressive
- Chaque étape valide ses prérequis
- Bouton "Continuer" activé dynamiquement
- Messages d'aide contextuels
- Indication visuelle des champs requis

### Animations
- **Transitions entre étapes** : Slide horizontal
- **Focus sur champs** : Highlight avec bordure colorée
- **Drag & Drop** : Ghost element + zone de drop illuminée
- **Calculs** : Animation de compteur pour les sommes
- **Validation** : Shake sur erreur, check sur succès

### Responsive Design
- **Desktop** : Tableau complet, 3 colonnes pour thèmes
- **Tablette** : Tableau scrollable, 2 colonnes pour thèmes
- **Mobile** : Tableau en cards, 1 colonne pour thèmes

---

## Styles et Design

### Palette de Couleurs
- **Primaire** : Bleu ciel (#3B82F6)
- **Secondaire** : Violet doux (#8B5CF6)
- **Succès** : Vert (#10B981)
- **Warning** : Orange (#F59E0B)
- **Danger** : Rouge (#EF4444)
- **Neutre** : Gris (#6B7280)

### Typographie
- **Titres** : Font-weight 700, tailles progressives
- **Labels** : Font-weight 600, uppercase pour certains
- **Corps** : Font-weight 400, line-height 1.6
- **Placeholders** : Italique, couleur gris clair

### Espacements
- **Padding sections** : 2rem
- **Margin entre sections** : 3rem
- **Padding champs** : 0.75rem
- **Gap grilles** : 1.5rem

### Composants Visuels
- **Cards** : Border-radius 12px, shadow-sm
- **Boutons** : Border-radius 8px, transitions hover
- **Inputs** : Border 1px, focus ring
- **Tableaux** : Alternance de couleurs de lignes

---

## Données Sauvegardées

### Structure JSON
```javascript
{
  "module_9_data": {
    "experiences": [
      {
        "id": 1,
        "description": "string",
        "desirability": "number (1-10)",
        "feasibility": "number (1-10)",
        "sum": "number (2-20)",
        "reason": "string"
      }
    ],
    "themes": [
      {
        "id": 1,
        "name": "string",
        "color": "string (hex)",
        "experienceIds": [1, 3, 5]
      }
    ],
    "planning": {
      "selectedExperienceId": "number",
      "timeEstimation": "string",
      "steps": ["string"],
      "firstAction": "string",
      "actionDate": "date",
      "commitment": "boolean"
    },
    "metadata": {
      "startedAt": "timestamp",
      "completedAt": "timestamp",
      "lastSavedAt": "timestamp",
      "completionPercentage": "number"
    }
  }
}
```

## Intégration SCORM

### Tracking
- **Début module** : cmi.interactions.n.id = "module_9_start"
- **Fin module** : cmi.interactions.n.result = "completed"
- **Score** : Basé sur le taux de complétion
- **Durée** : cmi.total_time enregistré

### Données Persistantes
- Sauvegarde dans cmi.suspend_data
- Restauration à la reprise
- Export possible vers LMS

## Notes d'Implémentation

1. **Méthode ADVP** : Respecter les principes de la méthode d'orientation
2. **Accessibilité** : ARIA labels sur tous les champs interactifs
3. **Performance** : Lazy loading pour les animations
4. **Sécurité** : Validation côté client et serveur
5. **Analytics** : Tracking des interactions principales
6. **Support** : Aide contextuelle disponible à chaque étape