# Structure Détaillée - Module 1 : Faisons Connaissance

## Informations Générales du Module

- **Numéro du module** : Module 1
- **Titre du module** : Faisons Connaissance  
- **Description** : Commençons votre parcours de bilan de compétences en apprenant à mieux vous connaître. Ces informations nous permettront de personnaliser votre expérience.
- **Type** : Formulaire multi-étapes
- **Nombre d'étapes** : 3

## 🔗 Visualiser Preview

[Lien 1](https://g.co/gemini/share/c9998a8da80c)

## Structure de Navigation

### Barre de Progression
- **Type** : Barre de progression horizontale
- **Texte** : "[pourcentage]% complété"
- **Calcul** : (étape actuelle / nombre total d'étapes) * 100

### Indicateurs d'Étapes
1. **Étape 1** : Informations
2. **Étape 2** : Parcours  
3. **Étape 3** : Confirmation

---

## ÉTAPE 1 : Informations Personnelles

### En-tête de l'Étape
- **Titre** : Informations Personnelles
- **Sous-titre** : Commençons par quelques informations de base vous concernant.

### Champs de Formulaire

#### 1. Prénom
- **Type** : Champ texte (input text)
- **ID** : prenom
- **Placeholder** : "Votre prénom"
- **Validation** : Requis (*)
- **Message d'erreur** : "Ce champ est requis"

#### 2. Nom
- **Type** : Champ texte (input text)
- **ID** : nom
- **Placeholder** : "Votre nom"
- **Validation** : Requis (*)
- **Message d'erreur** : "Ce champ est requis"

#### 3. Email
- **Type** : Champ email (input email)
- **ID** : email
- **Placeholder** : "votre.email@exemple.com"
- **Validation** : Requis (*), format email valide
- **Message d'erreur** : "Veuillez entrer une adresse email valide"

#### 4. Téléphone
- **Type** : Champ téléphone (input tel)
- **ID** : telephone
- **Placeholder** : "06 12 34 56 78"
- **Validation** : Optionnel
- **Formatage** : Automatique (XX XX XX XX XX)

#### 5. Date de naissance
- **Type** : Sélecteur de date (input date)
- **ID** : dateNaissance
- **Validation** : Requis (*)
- **Message d'erreur** : "Ce champ est requis"

#### 6. Région
- **Type** : Liste déroulante (select)
- **ID** : region
- **Placeholder** : "Sélectionnez votre région"
- **Validation** : Requis (*)
- **Options** :
  - Auvergne-Rhône-Alpes
  - Bourgogne-Franche-Comté
  - Bretagne
  - Centre-Val de Loire
  - Corse
  - Grand Est
  - Hauts-de-France
  - Île-de-France
  - Normandie
  - Nouvelle-Aquitaine
  - Occitanie
  - Pays de la Loire
  - Provence-Alpes-Côte d'Azur
  - Outre-mer

### Bouton de Navigation
- **Type** : Bouton principal
- **Texte** : "Continuer"
- **Action** : Validation et passage à l'étape 2
- **Icône** : Flèche droite (SVG)

---

## ÉTAPE 2 : Votre Parcours

### En-tête de l'Étape
- **Titre** : Votre Parcours
- **Sous-titre** : Parlez-nous de votre situation actuelle et de votre parcours.

### Champs de Formulaire

#### 1. Niveau d'études
- **Type** : Liste déroulante (select)
- **ID** : niveauEtudes
- **Placeholder** : "Sélectionnez votre niveau"
- **Validation** : Requis (*)
- **Options** :
  - Sans diplôme
  - CAP/BEP
  - Baccalauréat
  - Bac+2 (BTS, DUT, DEUG)
  - Bac+3 (Licence, Bachelor)
  - Bac+5 (Master, Ingénieur)
  - Bac+8 (Doctorat)

#### 2. Situation professionnelle
- **Type** : Boutons radio en grille (radio-grid)
- **ID** : situationPro
- **Validation** : Requis (*)
- **Options** :
  - Salarié(e) CDI
  - Salarié(e) CDD
  - Indépendant(e)
  - En recherche
  - Étudiant(e)
  - Autre

#### 3. Années d'expérience professionnelle
- **Type** : Liste déroulante (select)
- **ID** : experience
- **Placeholder** : "Sélectionnez"
- **Validation** : Requis (*)
- **Options** :
  - Moins de 2 ans
  - 2 à 5 ans
  - 5 à 10 ans
  - 10 à 15 ans
  - Plus de 15 ans

### Boutons de Navigation
- **Bouton Retour** :
  - Type : Bouton secondaire
  - Texte : "Retour"
  - Action : Retour à l'étape 1
  - Icône : Flèche gauche (SVG)
  
- **Bouton Continuer** :
  - Type : Bouton principal
  - Texte : "Continuer"
  - Action : Validation et passage à l'étape 3
  - Icône : Flèche droite (SVG)

---

## ÉTAPE 3 : Récapitulatif et Confirmation

### En-tête de l'Étape
- **Titre** : Récapitulatif
- **Sous-titre** : Vérifiez vos informations avant de valider.

### Sections de Récapitulatif

#### 1. Carte "Informations personnelles"
- **Titre de section** : Informations personnelles
- **Contenu dynamique** :
  - Nom complet : [prénom] [nom]
  - Email : [email]
  - Téléphone : [telephone] ou "Non renseigné"
  - Date de naissance : [dateNaissance formatée]
  - Région : [région sélectionnée]

#### 2. Carte "Parcours professionnel"
- **Titre de section** : Parcours professionnel
- **Contenu dynamique** :
  - Niveau d'études : [niveau sélectionné]
  - Situation professionnelle : [situation sélectionnée]
  - Expérience : [expérience sélectionnée]

### Case à Cocher de Consentement
- **Type** : Checkbox
- **ID** : consent
- **Texte** : "J'accepte que mes données soient utilisées dans le cadre de ce bilan de compétences"
- **Validation** : Requis

### Boutons de Navigation
- **Bouton Retour** :
  - Type : Bouton secondaire
  - Texte : "Retour"
  - Action : Retour à l'étape 2
  - Icône : Flèche gauche (SVG)
  
- **Bouton Valider** :
  - Type : Bouton succès
  - Texte : "Valider et continuer"
  - Action : Soumission du formulaire
  - Icône : Coche (SVG)

---

## PAGE DE SUCCÈS (après validation)

### Éléments Visuels
- **Icône de succès** : Cercle vert avec coche (SVG 64x64)
- **Animation** : Confettis colorés tombants

### Contenu
- **Titre principal** : "Félicitations !"
- **Paragraphe 1** : "Vous avez complété avec succès le premier module de votre bilan de compétences."
- **Paragraphe 2** : "Vos informations ont été enregistrées et nous pouvons maintenant personnaliser votre parcours."

### Boutons d'Action
1. **Bouton Recommencer** :
   - Type : Bouton avec icône de redémarrage
   - Texte : "Recommencer l'activité"
   - Action : Réinitialisation du module
   - Icône : Flèche circulaire (SVG)

2. **Bouton Continuer** :
   - Type : Bouton principal
   - Texte : "Continuer vers le module 2"
   - Action : Navigation vers /module/02
   - Icône : Flèche droite (SVG)

---

## Fonctionnalités Techniques

### Validation
- **Validation en temps réel** : Sur blur et input
- **Messages d'erreur** : Affichage dynamique sous chaque champ
- **Style d'erreur** : Bordure rouge + message en rouge

### Sauvegarde des Données
- **LocalStorage** : 
  - Clé : `module1_data` (données du formulaire)
  - Clé : `module1_completed` (statut de complétion)
- **SCORM** : Si disponible, envoi des données à la plateforme LMS

### Navigation
- **Navigation par étapes** : Clic sur les indicateurs (si validation OK)
- **Navigation clavier** : Ctrl + flèches gauche/droite
- **Scroll automatique** : Retour en haut à chaque changement d'étape

### Formatage Automatique
- **Téléphone** : Format XX XX XX XX XX
- **Date** : Affichage en français (ex: 15 janvier 2024)

### Animations
- **Barre de progression** : Transition fluide
- **Changement d'étapes** : Fade in/out
- **Succès** : Animation de confettis (50 éléments, 5 couleurs)

---

## Structure JSON Proposée pour Base de Données

```json
{
  "module_id": 1,
  "module_title": "Faisons Connaissance",
  "module_type": "form_multistep",
  "total_steps": 3,
  "steps": [
    {
      "step_id": 1,
      "step_title": "Informations Personnelles",
      "fields": [
        {
          "field_id": "prenom",
          "field_type": "text",
          "label": "Prénom",
          "required": true,
          "placeholder": "Votre prénom"
        },
        {
          "field_id": "nom",
          "field_type": "text",
          "label": "Nom",
          "required": true,
          "placeholder": "Votre nom"
        },
        {
          "field_id": "email",
          "field_type": "email",
          "label": "Email",
          "required": true,
          "placeholder": "votre.email@exemple.com",
          "validation": "email"
        },
        {
          "field_id": "telephone",
          "field_type": "tel",
          "label": "Téléphone",
          "required": false,
          "placeholder": "06 12 34 56 78",
          "format": "phone_fr"
        },
        {
          "field_id": "dateNaissance",
          "field_type": "date",
          "label": "Date de naissance",
          "required": true
        },
        {
          "field_id": "region",
          "field_type": "select",
          "label": "Région",
          "required": true,
          "options": [
            {"value": "auvergne-rhone-alpes", "label": "Auvergne-Rhône-Alpes"},
            {"value": "bourgogne-franche-comte", "label": "Bourgogne-Franche-Comté"},
            {"value": "bretagne", "label": "Bretagne"},
            {"value": "centre-val-de-loire", "label": "Centre-Val de Loire"},
            {"value": "corse", "label": "Corse"},
            {"value": "grand-est", "label": "Grand Est"},
            {"value": "hauts-de-france", "label": "Hauts-de-France"},
            {"value": "ile-de-france", "label": "Île-de-France"},
            {"value": "normandie", "label": "Normandie"},
            {"value": "nouvelle-aquitaine", "label": "Nouvelle-Aquitaine"},
            {"value": "occitanie", "label": "Occitanie"},
            {"value": "pays-de-la-loire", "label": "Pays de la Loire"},
            {"value": "provence-alpes-cote-azur", "label": "Provence-Alpes-Côte d'Azur"},
            {"value": "outre-mer", "label": "Outre-mer"}
          ]
        }
      ]
    },
    {
      "step_id": 2,
      "step_title": "Votre Parcours",
      "fields": [
        {
          "field_id": "niveauEtudes",
          "field_type": "select",
          "label": "Niveau d'études",
          "required": true,
          "options": [
            {"value": "sans-diplome", "label": "Sans diplôme"},
            {"value": "cap-bep", "label": "CAP/BEP"},
            {"value": "bac", "label": "Baccalauréat"},
            {"value": "bac+2", "label": "Bac+2 (BTS, DUT, DEUG)"},
            {"value": "bac+3", "label": "Bac+3 (Licence, Bachelor)"},
            {"value": "bac+5", "label": "Bac+5 (Master, Ingénieur)"},
            {"value": "bac+8", "label": "Bac+8 (Doctorat)"}
          ]
        },
        {
          "field_id": "situationPro",
          "field_type": "radio",
          "label": "Situation professionnelle",
          "required": true,
          "layout": "grid",
          "options": [
            {"value": "salarie-cdi", "label": "Salarié(e) CDI"},
            {"value": "salarie-cdd", "label": "Salarié(e) CDD"},
            {"value": "independant", "label": "Indépendant(e)"},
            {"value": "recherche-emploi", "label": "En recherche"},
            {"value": "etudiant", "label": "Étudiant(e)"},
            {"value": "autre", "label": "Autre"}
          ]
        },
        {
          "field_id": "experience",
          "field_type": "select",
          "label": "Années d'expérience professionnelle",
          "required": true,
          "options": [
            {"value": "0-2", "label": "Moins de 2 ans"},
            {"value": "2-5", "label": "2 à 5 ans"},
            {"value": "5-10", "label": "5 à 10 ans"},
            {"value": "10-15", "label": "10 à 15 ans"},
            {"value": "15+", "label": "Plus de 15 ans"}
          ]
        }
      ]
    },
    {
      "step_id": 3,
      "step_title": "Récapitulatif",
      "type": "summary",
      "consent_required": true,
      "consent_text": "J'accepte que mes données soient utilisées dans le cadre de ce bilan de compétences"
    }
  ],
  "success_page": {
    "title": "Félicitations !",
    "messages": [
      "Vous avez complété avec succès le premier module de votre bilan de compétences.",
      "Vos informations ont été enregistrées et nous pouvons maintenant personnaliser votre parcours."
    ],
    "actions": [
      {
        "type": "restart",
        "label": "Recommencer l'activité"
      },
      {
        "type": "next_module",
        "label": "Continuer vers le module 2",
        "target": "/module/02"
      }
    ]
  }
}
```

---

## Notes pour l'Intégration Base de Données

1. **Stockage des réponses utilisateur** : Créer une table séparée pour stocker les valeurs saisies par l'utilisateur
2. **Validation côté serveur** : Implémenter la même logique de validation côté backend
3. **Gestion des sessions** : Sauvegarder l'état de progression de l'utilisateur
4. **Export des données** : Prévoir un format d'export (PDF, CSV) pour le bilan final
5. **RGPD** : Implémenter les fonctionnalités de suppression/modification des données personnelles

