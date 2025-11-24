# Prompt Template pour Génération Automatique des Modules SCORM

## Prompt Principal pour Claude Opus

```
Tu es un expert en création de modules e-learning SCORM. Je vais te demander de créer le Module [NUMERO] : "[TITRE_MODULE]" pour un parcours de Bilan de Compétences digitalisé.

## Contexte
- Ce module fait partie d'un parcours de 25 modules
- Il doit être compatible Zoho Learn (SCORM 1.2)
- Il doit inclure un tracking analytics avancé
- Il doit s'intégrer avec n8n pour l'orchestration
- Il doit utiliser l'API Claude pour l'analyse intelligente

## Spécifications du Module [NUMERO]

### Informations de base
- **Titre** : [TITRE_MODULE]
- **Phase** : [PHASE_DU_PARCOURS]
- **Durée estimée** : [DUREE] minutes
- **Prérequis** : Module [NUMERO-1] complété
- **Objectif** : [DESCRIPTION_OBJECTIF]

### Type d'interactions requises
[LISTE_DES_INTERACTIONS]

### Données à collecter
[LISTE_DES_DONNEES]

## Structure attendue

1. **index.html** : Page principale avec :
   - Header avec titre et progression
   - Sections interactives selon le type de module
   - Intégration SCORM complète
   - Analytics embarqués
   - Design responsive et accessible
   - Animations et micro-interactions

2. **imsmanifest.xml** : Manifeste SCORM avec :
   - Identifier unique : BC_Module_[NUMERO_2_CHIFFRES]
   - Métadonnées complètes
   - Structure SCO appropriée

3. **Fonctionnalités spécifiques** :
   [FONCTIONNALITES_SPECIFIQUES_AU_MODULE]

## Style et expérience utilisateur
- Utiliser la même charte graphique que le Module 1
- Couleur principale : #1155cc
- Animations fluides avec CSS
- Feedback visuel immédiat
- Messages d'erreur clairs et constructifs
- Sauvegarde automatique toutes les 30 secondes

## Analytics à implémenter
- Tracking de toutes les interactions
- Mesure du temps par section
- Détection des points de friction
- Envoi webhook vers n8n à chaque événement significatif

## Code à générer

Génère le code complet pour :
1. index.html avec tout le JavaScript inline
2. imsmanifest.xml
3. Un exemple de configuration n8n spécifique à ce module

Assure-toi que le code est production-ready, sans placeholders, avec une gestion d'erreur robuste.
```

## Exemples de Prompts Spécifiques par Module

### Module 2 : Mon autoportrait

```
Crée le Module 2 : "Mon autoportrait" avec :

### Interactions requises :
1. Questionnaire interactif en 4 sections :
   - Ce qui me plaît (choix multiples avec images)
   - Mes peurs (slider d'intensité 1-10)
   - Mes qualités (sélection dans une liste + ajout libre)
   - Mon rêve (champ texte enrichi)

2. Création de blason personnel :
   - Canvas interactif 400x500px
   - 4 quadrants pour différents aspects
   - Palette de couleurs
   - Bibliothèque de symboles/icônes
   - Upload d'images personnelles
   - Outils de dessin basiques
   - Export en PNG

### Données à collecter :
- Réponses structurées du questionnaire
- Image du blason (base64)
- Temps passé sur chaque section
- Nombre de modifications du blason

### IA spécifique :
- Analyse des choix pour générer un profil psychologique initial
- Suggestions de symboles pour le blason basées sur les réponses
- Interprétation du blason créé
```

### Module 5 : Photo Language

```
Crée le Module 5 : "Photo Language" avec :

### Interactions requises :
1. Galerie de photos thématiques :
   - 50 photos haute qualité organisées par catégories
   - Visionneuse lightbox
   - Possibilité de zoom
   - Navigation par tags

2. Sélection et analyse :
   - Sélection de 3 photos maximum
   - Pour chaque photo : zone de commentaire
   - Enregistrement audio (optionnel)
   - Questions guidées : "Que voyez-vous ?", "Que ressentez-vous ?", "Pourquoi ce choix ?"

### Fonctionnalités avancées :
- Recherche par mots-clés dans les photos
- Filtres par ambiance (joyeux, mélancolique, dynamique...)
- Mode comparaison côte-à-côte
- Historique des sélections

### IA spécifique :
- Analyse des choix d'images (thèmes récurrents)
- Analyse sentiment du texte/audio
- Génération d'insights sur l'état émotionnel
```

### Module 7 : Test MBTI®

```
Crée le Module 7 : "Test MBTI®" avec :

### Interactions requises :
1. Questionnaire adaptatif :
   - 60 questions avec réponses sur échelle
   - Questions adaptatives selon les réponses précédentes
   - Barre de progression par dimension (E/I, S/N, T/F, J/P)
   - Possibilité de revenir en arrière

2. Interface de test :
   - Questions une par une avec transition fluide
   - Indicateur de confiance pour chaque dimension
   - Pause possible avec sauvegarde

### Résultats :
- Affichage dynamique du type MBTI
- Graphiques radar pour chaque dimension
- Description détaillée du profil
- Forces et points de vigilance
- Compatibilité avec différents environnements pro

### Intégration :
- API 16personalities ou calcul interne
- Export PDF du profil complet
```

## Template de Workflow n8n Générique

```yaml
Workflow Module [NUMERO]:
  1. Webhook Reception
  2. Validation données spécifiques module
  3. Enrichissement contextuel
  4. Storage (PostgreSQL + InfluxDB)
  5. Analyse Claude si nécessaire
  6. Notifications conditionnelles
  7. Update Zoho Learn
  8. Triggers pour modules suivants
```

## Instructions pour l'utilisation

1. Remplacer les [PLACEHOLDERS] par les valeurs spécifiques
2. Ajouter les détails d'interaction propres à chaque module
3. Spécifier les analyses IA pertinentes
4. Demander à Claude de générer le code complet

## Checklist de validation

Pour chaque module généré, vérifier :
- [ ] Code SCORM valide
- [ ] Tracking analytics complet
- [ ] Responsive design
- [ ] Gestion d'erreurs
- [ ] Sauvegarde automatique
- [ ] Intégration n8n
- [ ] Documentation inline
- [ ] Accessibilité WCAG 2.1