# Structure Détaillée - Module 2 : Mon Autoportrait

## Informations Générales du Module

- **Numéro du module** : Module 2
- **Titre du module** : Mon Autoportrait
- **Description** : Découvrez-vous à travers un questionnaire interactif et créez votre blason personnel
- **Type** : Questionnaire interactif avec génération de blason
- **Nombre d'étapes** : 10 questions + page de résultat (blason) + page de succès

## Structure de Navigation

### Barre de Progression
- **Type** : Barre de progression horizontale avec dégradé de couleurs
- **Texte** : "[pourcentage]% complété"
- **Calcul** : (question actuelle / nombre total de questions) * 100
- **Couleurs** : Dégradé linéaire (primary, secondary, accent)

---

## QUESTIONS DU QUESTIONNAIRE

### Question 1 : Qui suis-je ?

#### En-tête
- **Indicateur** : "Question 1 / 10"
- **Titre** : "Qui suis-je ?"
- **Sous-titre** : "Décrivez-vous en quelques mots. Qui êtes-vous vraiment ?"

#### Champ de Saisie
- **Type** : Zone de texte (textarea)
- **ID** : Non spécifié (dans step-1)
- **Placeholder** : "Parlez de vous, de votre personnalité, de ce qui vous définit..."
- **Limite** : 500 caractères maximum
- **Hauteur** : 600px minimum
- **Validation** : Champ requis (non vide)

#### Boutons de Navigation
- **Bouton Précédent** : Désactivé (première question)
- **Bouton Suivant** : "Suivant"

---

### Question 2 : Qu'est-ce qui m'anime ?

#### En-tête
- **Indicateur** : "Question 2 / 10"
- **Titre** : "Qu'est-ce qui m'anime ?"
- **Sous-titre** : "Qu'est-ce qui vous motive et vous donne de l'énergie au quotidien ?"

#### Champ de Saisie
- **Type** : Zone de texte (textarea)
- **ID** : Non spécifié (dans step-2)
- **Placeholder** : "Vos passions, vos sources de motivation, ce qui vous fait lever le matin..."
- **Limite** : 500 caractères maximum
- **Hauteur** : 600px minimum
- **Validation** : Champ requis

#### Boutons de Navigation
- **Bouton Précédent** : "Précédent"
- **Bouton Suivant** : "Suivant"

---

### Question 3 : Qu'est-ce que je fais actuellement ?

#### En-tête
- **Indicateur** : "Question 3 / 10"
- **Titre** : "Qu'est-ce que je fais actuellement ?"
- **Sous-titre** : "Décrivez votre situation actuelle, professionnelle et personnelle"

#### Champ de Saisie
- **Type** : Zone de texte (textarea)
- **ID** : Non spécifié (dans step-3)
- **Placeholder** : "Votre travail, vos activités, vos projets en cours..."
- **Limite** : 500 caractères maximum
- **Hauteur** : 600px minimum
- **Validation** : Champ requis

#### Boutons de Navigation
- **Bouton Précédent** : "Précédent"
- **Bouton Suivant** : "Suivant"

---

### Question 4 : Qu'est-ce qui me plaît dans la vie ?

#### En-tête
- **Indicateur** : "Question 4 / 10"
- **Titre** : "Qu'est-ce qui me plaît dans la vie ?"
- **Sous-titre** : "Partagez ce qui vous apporte du bonheur et de la satisfaction"

#### Champ de Saisie
- **Type** : Zone de texte (textarea)
- **ID** : Non spécifié (dans step-4)
- **Placeholder** : "Vos plaisirs, vos moments de bonheur, ce que vous aimez faire..."
- **Limite** : 500 caractères maximum
- **Hauteur** : 600px minimum
- **Validation** : Champ requis

#### Boutons de Navigation
- **Bouton Précédent** : "Précédent"
- **Bouton Suivant** : "Suivant"

---

### Question 5 : Qu'est-ce qui est important pour moi ?

#### En-tête
- **Indicateur** : "Question 5 / 10"
- **Titre** : "Qu'est-ce qui est important pour moi ?"
- **Sous-titre** : "Identifiez vos valeurs fondamentales et vos priorités dans la vie"

#### Champ de Saisie
- **Type** : Zone de texte (textarea)
- **ID** : Non spécifié (dans step-5)
- **Placeholder** : "Vos valeurs, vos principes, ce qui compte vraiment pour vous..."
- **Limite** : 500 caractères maximum
- **Hauteur** : 600px minimum
- **Validation** : Champ requis

#### Boutons de Navigation
- **Bouton Précédent** : "Précédent"
- **Bouton Suivant** : "Suivant"

---

### Question 6 : Mon objectif principal

#### En-tête
- **Indicateur** : "Question 6 / 10"
- **Titre** : "Mon objectif principal"
- **Sous-titre** : "Quel est votre objectif le plus important à atteindre ?"

#### Champ de Saisie
- **Type** : Champ texte simple (input text)
- **ID** : Non spécifié (dans step-6)
- **Placeholder** : "Votre objectif principal..."
- **Limite** : 200 caractères maximum
- **Validation** : Champ requis
- **Style** : Texte centré

#### Boutons de Navigation
- **Bouton Précédent** : "Précédent"
- **Bouton Suivant** : "Suivant"

---

### Question 7 : Mes 2 points forts

#### En-tête
- **Indicateur** : "Question 7 / 10"
- **Titre** : "Mes 2 points forts"
- **Sous-titre** : "Identifiez vos deux principales forces ou talents"

#### Champs de Saisie
1. **Premier point fort**
   - Type : Champ texte (input text)
   - Name : strength1
   - Placeholder : "Premier point fort..."
   - Limite : 100 caractères maximum
   - Validation : Requis

2. **Deuxième point fort**
   - Type : Champ texte (input text)
   - Name : strength2
   - Placeholder : "Deuxième point fort..."
   - Limite : 100 caractères maximum
   - Validation : Requis

#### Boutons de Navigation
- **Bouton Précédent** : "Précédent"
- **Bouton Suivant** : "Suivant"

---

### Question 8 : Mon rêve le plus fou

#### En-tête
- **Indicateur** : "Question 8 / 10"
- **Titre** : "Mon rêve le plus fou"
- **Sous-titre** : "Si tout était possible, quel serait votre rêve le plus ambitieux ?"

#### Champ de Saisie
- **Type** : Champ texte simple (input text)
- **ID** : Non spécifié (dans step-8)
- **Placeholder** : "Votre rêve le plus fou..."
- **Limite** : 200 caractères maximum
- **Validation** : Champ requis
- **Style** : Texte centré

#### Boutons de Navigation
- **Bouton Précédent** : "Précédent"
- **Bouton Suivant** : "Suivant"

---

### Question 9 : Ma plus grande peur

#### En-tête
- **Indicateur** : "Question 9 / 10"
- **Titre** : "Ma plus grande peur"
- **Sous-titre** : "Qu'est-ce qui vous fait le plus peur ou vous inquiète ?"

#### Champ de Saisie
- **Type** : Champ texte simple (input text)
- **ID** : Non spécifié (dans step-9)
- **Placeholder** : "Votre plus grande peur..."
- **Limite** : 200 caractères maximum
- **Validation** : Champ requis
- **Style** : Texte centré

#### Boutons de Navigation
- **Bouton Précédent** : "Précédent"
- **Bouton Suivant** : "Suivant"

---

### Question 10 : Ma devise

#### En-tête
- **Indicateur** : "Question 10 / 10"
- **Titre** : "Ma devise"
- **Sous-titre** : "Quelle phrase ou citation guide votre vie ?"

#### Champ de Saisie
- **Type** : Champ texte simple (input text)
- **ID** : Non spécifié (dans step-10)
- **Placeholder** : "Votre devise personnelle..."
- **Limite** : 200 caractères maximum
- **Validation** : Champ requis
- **Style** : Texte centré

#### Boutons de Navigation
- **Bouton Précédent** : "Précédent"
- **Bouton Suivant** : "Créer mon blason"

---

## PAGE DE RÉSULTAT : BLASON PERSONNEL

### En-tête
- **Icône** : 🏆
- **Titre** : "Votre Blason Personnel"
- **Style** : Titre avec dégradé de couleur

### Structure du Blason

#### Forme du Blason
- **Type** : Bouclier stylisé
- **Dimensions** : Max 600px de largeur
- **Bordure** : 3px solid primary color
- **Forme** : Rectangle avec coins arrondis en bas (80px)
- **Fond** : Dégradé linéaire gris clair

#### Sections du Blason

1. **Bannière Supérieure (Aspirations)**
   - ID : blason-aspirations
   - Position : En haut du blason
   - Couleur : Fond primary, texte blanc
   - Contenu : Objectif principal (Question 6)
   - Style : Texte en majuscules, gras

2. **Section Valeurs**
   - ID : blason-valeurs
   - Position : Quadrant supérieur gauche
   - Titre : "Valeurs"
   - Contenu : Extrait automatique des réponses
   - Par défaut : "Authenticité, Courage, Persévérance"

3. **Section Talents**
   - ID : blason-talents
   - Position : Quadrant supérieur droit
   - Titre : "Talents"
   - Contenu : Les 2 points forts (Question 7)
   - Par défaut : "Leadership, Créativité"

4. **Section Enjeux**
   - ID : blason-enjeux
   - Position : Quadrant inférieur gauche
   - Titre : "Enjeux"
   - Contenu : Rêve le plus fou (Question 8)
   - Par défaut : "Innovation"

5. **Section Limites**
   - ID : blason-limites
   - Position : Quadrant inférieur droit
   - Titre : "Limites"
   - Contenu : Plus grande peur (Question 9)
   - Par défaut : "Perfectionnisme"

6. **Section Fondations**
   - ID : blason-fondations
   - Position : Base du blason (toute la largeur)
   - Titre : "Fondations"
   - Contenu : Devise personnelle (Question 10)
   - Par défaut : "Authenticité et respect"
   - Style : Fond avec dégradé spécial

#### Éléments Décoratifs
- **Supports latéraux** : Deux barres verticales de chaque côté
- **Couleur** : Primary color
- **Ombre** : Box-shadow medium

### Boutons d'Action
1. **Bouton Recommencer**
   - Classe : btn-restart
   - Texte : "Recommencer"
   - Icône : Flèche circulaire (SVG)
   - Action : Réinitialisation complète

2. **Bouton Terminer**
   - Classe : btn-finish
   - Texte : "Terminer l'activité"
   - Icône : Coche (SVG)
   - Action : Sauvegarde et affichage du message de succès

---

## PAGE DE SUCCÈS

### Éléments Visuels
- **Icône de succès** : Cercle vert avec coche (SVG 64x64)
- **Animation** : Confettis colorés (30 éléments, 5 couleurs)

### Contenu
- **Titre principal** : "Félicitations !"
- **Paragraphe 1** : "Vous avez complété avec succès votre autoportrait personnel."
- **Paragraphe 2** : "Votre blason a été créé et sauvegardé. Vous pouvez maintenant passer au module suivant."

### Boutons d'Action
1. **Bouton Recommencer**
   - Style : Gris (gray-200)
   - Texte : "Recommencer l'activité"
   - Action : Réinitialisation du module
   - Icône : Flèche circulaire (SVG)

2. **Bouton Continuer**
   - Style : Bouton principal (dégradé primary)
   - Texte : "Continuer vers le module 3"
   - Action : Navigation vers /module/03
   - Icône : Flèche droite (SVG)

---

## Fonctionnalités Techniques

### Système de Points
- **Points par question** : +10 points par question répondue
- **Bonus final** : +50 points à la génération du blason
- **Total possible** : 150 points
- **Note** : Les points sont suivis en interne mais non affichés dans l'interface

### Validation
- **Questions 1-5** : Zone de texte non vide
- **Question 6** : Champ texte non vide
- **Question 7** : Les deux champs doivent être remplis
- **Questions 8-10** : Champ texte non vide
- **Message d'erreur** : "Veuillez compléter cette étape avant de continuer."

### Sauvegarde des Données
- **LocalStorage** :
  - Clé : `blason-questionnaire` (progression et réponses)
  - Clé : `blason-completed` (données finales)
  - Clé : `module2_completed` (statut de complétion)
- **Structure sauvegardée** :
  - currentStep : numéro de l'étape actuelle
  - points : nombre de points accumulés
  - answers : objet avec toutes les réponses
- **SCORM** : Si disponible, envoi des données à la plateforme LMS

### Navigation
- **Navigation par boutons** : Précédent/Suivant
- **Validation avant progression** : Vérification du contenu
- **Retour arrière** : Toujours possible
- **Chargement des réponses** : Restauration automatique lors de la navigation

### Génération du Blason
- **Mapping des réponses** :
  - Aspirations ← Question 6 (objectif principal)
  - Valeurs ← Généré automatiquement ou extrait
  - Talents ← Question 7 (2 points forts)
  - Enjeux ← Question 8 (rêve)
  - Limites ← Question 9 (peur)
  - Fondations ← Question 10 (devise)

### Animations
- **Changement de question** : slideInUp (0.6s)
- **Gain de points** : Scale animation (0.8s)
- **Confettis** : 30 éléments, chute avec mouvement sinusoïdal

---

## Structure JSON Proposée pour Base de Données

```json
{
  "module_id": 2,
  "module_title": "Mon Autoportrait",
  "module_type": "questionnaire_with_result",
  "total_questions": 10,
  "questions": [
    {
      "question_id": 1,
      "question_title": "Qui suis-je ?",
      "question_subtitle": "Décrivez-vous en quelques mots. Qui êtes-vous vraiment ?",
      "field_type": "textarea",
      "placeholder": "Parlez de vous, de votre personnalité, de ce qui vous définit...",
      "max_length": 500,
      "required": true,
      "maps_to": "self_description"
    },
    {
      "question_id": 2,
      "question_title": "Qu'est-ce qui m'anime ?",
      "question_subtitle": "Qu'est-ce qui vous motive et vous donne de l'énergie au quotidien ?",
      "field_type": "textarea",
      "placeholder": "Vos passions, vos sources de motivation, ce qui vous fait lever le matin...",
      "max_length": 500,
      "required": true,
      "maps_to": "motivations"
    },
    {
      "question_id": 3,
      "question_title": "Qu'est-ce que je fais actuellement ?",
      "question_subtitle": "Décrivez votre situation actuelle, professionnelle et personnelle",
      "field_type": "textarea",
      "placeholder": "Votre travail, vos activités, vos projets en cours...",
      "max_length": 500,
      "required": true,
      "maps_to": "current_situation"
    },
    {
      "question_id": 4,
      "question_title": "Qu'est-ce qui me plaît dans la vie ?",
      "question_subtitle": "Partagez ce qui vous apporte du bonheur et de la satisfaction",
      "field_type": "textarea",
      "placeholder": "Vos plaisirs, vos moments de bonheur, ce que vous aimez faire...",
      "max_length": 500,
      "required": true,
      "maps_to": "pleasures"
    },
    {
      "question_id": 5,
      "question_title": "Qu'est-ce qui est important pour moi ?",
      "question_subtitle": "Identifiez vos valeurs fondamentales et vos priorités dans la vie",
      "field_type": "textarea",
      "placeholder": "Vos valeurs, vos principes, ce qui compte vraiment pour vous...",
      "max_length": 500,
      "required": true,
      "maps_to": "values"
    },
    {
      "question_id": 6,
      "question_title": "Mon objectif principal",
      "question_subtitle": "Quel est votre objectif le plus important à atteindre ?",
      "field_type": "text",
      "placeholder": "Votre objectif principal...",
      "max_length": 200,
      "required": true,
      "maps_to": "blason_aspirations"
    },
    {
      "question_id": 7,
      "question_title": "Mes 2 points forts",
      "question_subtitle": "Identifiez vos deux principales forces ou talents",
      "field_type": "double_text",
      "fields": [
        {
          "name": "strength1",
          "placeholder": "Premier point fort...",
          "max_length": 100
        },
        {
          "name": "strength2",
          "placeholder": "Deuxième point fort...",
          "max_length": 100
        }
      ],
      "required": true,
      "maps_to": "blason_talents"
    },
    {
      "question_id": 8,
      "question_title": "Mon rêve le plus fou",
      "question_subtitle": "Si tout était possible, quel serait votre rêve le plus ambitieux ?",
      "field_type": "text",
      "placeholder": "Votre rêve le plus fou...",
      "max_length": 200,
      "required": true,
      "maps_to": "blason_enjeux"
    },
    {
      "question_id": 9,
      "question_title": "Ma plus grande peur",
      "question_subtitle": "Qu'est-ce qui vous fait le plus peur ou vous inquiète ?",
      "field_type": "text",
      "placeholder": "Votre plus grande peur...",
      "max_length": 200,
      "required": true,
      "maps_to": "blason_limites"
    },
    {
      "question_id": 10,
      "question_title": "Ma devise",
      "question_subtitle": "Quelle phrase ou citation guide votre vie ?",
      "field_type": "text",
      "placeholder": "Votre devise personnelle...",
      "max_length": 200,
      "required": true,
      "maps_to": "blason_fondations"
    }
  ],
  "result_page": {
    "type": "blason",
    "title": "Votre Blason Personnel",
    "sections": [
      {
        "id": "aspirations",
        "label": "Aspirations",
        "position": "banner",
        "source": "question_6"
      },
      {
        "id": "valeurs",
        "label": "Valeurs",
        "position": "top_left",
        "source": "generated_or_question_5"
      },
      {
        "id": "talents",
        "label": "Talents",
        "position": "top_right",
        "source": "question_7"
      },
      {
        "id": "enjeux",
        "label": "Enjeux",
        "position": "bottom_left",
        "source": "question_8"
      },
      {
        "id": "limites",
        "label": "Limites",
        "position": "bottom_right",
        "source": "question_9"
      },
      {
        "id": "fondations",
        "label": "Fondations",
        "position": "base",
        "source": "question_10"
      }
    ]
  },
  "gamification": {
    "points_per_question": 10,
    "completion_bonus": 50,
    "total_possible": 150,
    "display_points": false
  },
  "success_page": {
    "title": "Félicitations !",
    "messages": [
      "Vous avez complété avec succès votre autoportrait personnel.",
      "Votre blason a été créé et sauvegardé. Vous pouvez maintenant passer au module suivant."
    ],
    "actions": [
      {
        "type": "restart",
        "label": "Recommencer l'activité"
      },
      {
        "type": "next_module",
        "label": "Continuer vers le module 3",
        "target": "/module/03"
      }
    ]
  }
}
```

---

## Illustration du Blason - Code HTML/CSS

### Structure HTML du Blason

```html
<div class="blason-container">
    <h2>🏆 Votre Blason Personnel</h2>
    
    <div class="blason-shield">
        <!-- Bannière supérieure : Aspirations -->
        <div class="blason-banner" id="blason-aspirations">
            Mon objectif principal
        </div>
        
        <!-- Grille des 4 sections principales -->
        <div class="blason-sections">
            <!-- Quadrant supérieur gauche -->
            <div class="blason-section">
                <h4>Valeurs</h4>
                <p id="blason-valeurs">Authenticité, Courage, Persévérance</p>
            </div>
            
            <!-- Quadrant supérieur droit -->
            <div class="blason-section">
                <h4>Talents</h4>
                <p id="blason-talents">Leadership, Créativité</p>
            </div>
            
            <!-- Quadrant inférieur gauche -->
            <div class="blason-section">
                <h4>Enjeux</h4>
                <p id="blason-enjeux">Innovation et transformation</p>
            </div>
            
            <!-- Quadrant inférieur droit -->
            <div class="blason-section">
                <h4>Limites</h4>
                <p id="blason-limites">Perfectionnisme</p>
            </div>
            
            <!-- Section base : Fondations (toute la largeur) -->
            <div class="blason-section blason-foundations">
                <h4>Fondations</h4>
                <p id="blason-fondations">Ma devise personnelle</p>
            </div>
        </div>
        
        <!-- Éléments décoratifs latéraux -->
        <div class="blason-supports">
            <div class="support-left"></div>
            <div class="support-right"></div>
        </div>
    </div>
</div>
```

### Code CSS du Blason

```css
/* Container principal */
.blason-container {
    background: white;
    border-radius: 24px;
    padding: 3rem;
    margin: 2rem 0;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    text-align: center;
}

/* Forme du bouclier */
.blason-shield {
    max-width: 600px;
    margin: 0 auto;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border: 3px solid #6366f1; /* primary color */
    /* Forme caractéristique du blason : rectangle avec pointe en bas */
    border-radius: 20px 20px 80px 80px;
    padding: 2rem;
    position: relative;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    box-sizing: border-box;
}

/* Bannière supérieure (Aspirations) */
.blason-banner {
    background: #6366f1; /* primary color */
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
}

/* Grille des sections */
.blason-sections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
}

/* Style des sections individuelles */
.blason-section {
    background: white;
    border: 2px solid #e5e7eb; /* gray-200 */
    border-radius: 8px;
    padding: 1.5rem;
    min-height: 120px;
    overflow: hidden;
    box-sizing: border-box;
}

/* Titres des sections */
.blason-section h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #6366f1; /* primary */
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Contenu des sections */
.blason-section p {
    color: #374151; /* gray-700 */
    font-size: 0.9rem;
    line-height: 1.4;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    max-width: 100%;
}

/* Section Fondations (base du blason) */
.blason-foundations {
    grid-column: 1 / -1; /* Prend toute la largeur */
    background: linear-gradient(
        135deg, 
        rgba(99, 102, 241, 0.05), /* primary-bg */
        rgba(16, 185, 129, 0.05)  /* success-bg */
    );
    border-color: #6366f1; /* primary */
}

/* Supports décoratifs latéraux */
.blason-supports {
    position: absolute;
    left: -20px;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
}

.support-left, 
.support-right {
    width: 40px;
    height: 120px;
    background: #6366f1; /* primary */
    border-radius: 20px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
    .blason-shield {
        padding: 1.5rem;
    }
    
    .blason-sections {
        grid-template-columns: 1fr; /* Une seule colonne sur mobile */
    }
    
    .blason-banner {
        font-size: 1rem;
        padding: 0.75rem 1.5rem;
    }
    
    .blason-section {
        padding: 1rem;
        min-height: 100px;
    }
    
    /* Masquer les supports latéraux sur mobile */
    .blason-supports {
        display: none;
    }
}
```

### Représentation Visuelle ASCII

```
     ╔═══════════════════════════════╗
     ║      ASPIRATIONS              ║  ← Bannière (Objectif principal)
     ╠═══════════════════════════════╣
     ║                               ║
     ║  ┌─────────┐   ┌─────────┐   ║
     ║  │ VALEURS │   │ TALENTS │   ║  ← Quadrants supérieurs
     ║  └─────────┘   └─────────┘   ║
     ║                               ║
     ║  ┌─────────┐   ┌─────────┐   ║
     ║  │ ENJEUX  │   │ LIMITES │   ║  ← Quadrants inférieurs
     ║  └─────────┘   └─────────┘   ║
     ║                               ║
     ║  ┌───────────────────────┐   ║
     ║  │     FONDATIONS        │   ║  ← Base (Devise)
     ║  └───────────────────────┘   ║
     ║                               ║
     ╚═══════╗         ╔═══════════╝
             ╚═══════╝              ← Pointe caractéristique du blason
```

### Exemple de Rendu avec Données Réelles

```html
<div class="blason-shield">
    <div class="blason-banner">Devenir consultant indépendant</div>
    
    <div class="blason-sections">
        <div class="blason-section">
            <h4>Valeurs</h4>
            <p>Liberté, Excellence, Partage</p>
        </div>
        
        <div class="blason-section">
            <h4>Talents</h4>
            <p>Communication, Analyse stratégique</p>
        </div>
        
        <div class="blason-section">
            <h4>Enjeux</h4>
            <p>Créer ma propre entreprise de conseil</p>
        </div>
        
        <div class="blason-section">
            <h4>Limites</h4>
            <p>Peur de l'instabilité financière</p>
        </div>
        
        <div class="blason-section blason-foundations">
            <h4>Fondations</h4>
            <p>"Le succès c'est tomber sept fois, se relever huit"</p>
        </div>
    </div>
</div>
```

## Notes pour l'Intégration Base de Données

1. **Stockage des réponses** : Créer une table pour stocker toutes les réponses textuelles
2. **Génération du blason** : Prévoir un système de mapping entre les questions et les sections du blason
3. **Système de points** : Table séparée pour le suivi de la gamification (même si non affiché)
4. **Export du blason** : Prévoir une fonctionnalité d'export en image ou PDF
5. **Analyse des réponses** : Possibilité d'analyse sémantique pour extraire automatiquement les valeurs
6. **Historique** : Conserver l'historique des différentes versions du blason créées par l'utilisateur
