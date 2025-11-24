# Guide d'Intégration - Module 1 : Présentons-nous

## Vue d'ensemble

Ce guide détaille l'intégration complète du Module 1 "Présentons-nous" dans votre infrastructure Zoho Learn avec analytics avancés via n8n et Claude.

## 1. Structure des fichiers

```
module-01-presentons-nous/
├── imsmanifest.xml          # Manifeste SCORM
├── index.html               # Module principal
├── js/
│   ├── scorm_api.js        # API SCORM wrapper
│   ├── module_logic.js     # Logique métier
│   └── analytics.js        # Tracking personnalisé
├── css/
│   └── module_style.css    # Styles du module
├── assets/
│   └── images/             # Ressources visuelles
└── config.json             # Configuration module
```

## 2. Préparation du module SCORM

### 2.1 Personnalisation du module

1. **Modifier les informations de base** dans `index.html` :
   - Titre du module
   - Textes d'introduction
   - Questions du formulaire

2. **Adapter le tracking analytics** :
   ```javascript
   // Dans index.html, ligne 445
   function sendAnalytics(data) {
       fetch('https://YOUR-N8N-INSTANCE.com/webhook/bc-module-analytics', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data)
       });
   }
   ```

3. **Configurer les endpoints API** dans `config.json` :
   ```json
   {
     "analytics": {
       "webhook": "https://YOUR-N8N-INSTANCE.com/webhook/bc-module-analytics",
       "apiKey": "YOUR-API-KEY"
     },
     "zohoLearn": {
       "courseId": "bilan-competences-digital",
       "moduleId": "BC_Module_01"
     }
   }
   ```

### 2.2 Création du package SCORM

1. Vérifier que tous les fichiers sont présents
2. Créer une archive ZIP contenant tous les fichiers
3. Nommer l'archive : `BC_Module_01_Presentons_nous.zip`

## 3. Configuration n8n

### 3.1 Import du workflow

1. Ouvrir n8n
2. Créer un nouveau workflow
3. Importer le JSON du workflow fourni
4. Configurer les credentials :

#### Credentials nécessaires :
- **PostgreSQL** : Base de données analytics
- **Anthropic API** : Pour Claude
- **SMTP** : Serveur email
- **Zoho API** : Intégration LMS
- **Slack** : Notifications (optionnel)
- **MongoDB** : Analytics avancés (optionnel)

### 3.2 Configuration des webhooks

1. Dans n8n, activer le workflow
2. Copier l'URL du webhook généré
3. Mettre à jour cette URL dans le module SCORM

### 3.3 Base de données

Créer les tables nécessaires :

```sql
-- PostgreSQL
CREATE TABLE module_analytics (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255),
    module_id VARCHAR(50),
    event_type VARCHAR(50),
    data JSONB,
    completion_score INTEGER,
    time_spent INTEGER,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_module ON module_analytics(user_id, module_id);
CREATE INDEX idx_timestamp ON module_analytics(timestamp);
```

## 4. Intégration Zoho Learn

### 4.1 Upload du module

1. Se connecter à Zoho Learn en tant qu'administrateur
2. Aller dans **Courses** > **Bilan de Compétences Digital**
3. Cliquer sur **Add Content** > **SCORM Package**
4. Uploader `BC_Module_01_Presentons_nous.zip`
5. Configurer :
   - **Completion Criteria** : 100% progress
   - **Passing Score** : 80%
   - **Time Limit** : 30 minutes (optionnel)

### 4.2 Configuration API Zoho

1. Générer un token API dans Zoho Learn
2. Configurer les permissions :
   - Read user progress
   - Update course progress
   - Access analytics

3. Mettre à jour le workflow n8n avec le token

## 5. Configuration Claude (Anthropic)

### 5.1 Prompts personnalisés

Adapter le prompt dans le workflow n8n pour vos besoins :

```javascript
const prompt = `
Analyse le profil suivant d'un participant au bilan de compétences :
${JSON.stringify(profileData)}

Génère :
1. 3 insights personnalisés sur le profil
2. 2 recommandations pour optimiser son parcours
3. Des suggestions de modules optionnels pertinents

Format de réponse : JSON structuré
`;
```

### 5.2 Limites et optimisations

- Utiliser le modèle Claude-3-opus pour les analyses complexes
- Claude-3-sonnet pour les tâches simples
- Mettre en cache les analyses similaires

## 6. Dashboard Analytics

### 6.1 Configuration Grafana

1. Créer un nouveau dashboard
2. Ajouter les data sources :
   - InfluxDB pour les métriques temps réel
   - PostgreSQL pour les données détaillées

3. Panels recommandés :
   - **Progression globale** : Gauge chart
   - **Completions par jour** : Time series
   - **Temps moyen** : Stat panel
   - **Heatmap activité** : Heatmap panel
   - **Top difficultés** : Bar chart

### 6.2 Requêtes types

```sql
-- Taux de complétion
SELECT 
    COUNT(DISTINCT user_id) as total_users,
    COUNT(DISTINCT CASE WHEN completion_score = 100 THEN user_id END) as completed,
    AVG(completion_score) as avg_score
FROM module_analytics
WHERE module_id = 'BC_Module_01'
AND timestamp > NOW() - INTERVAL '7 days';

-- Points de friction
SELECT 
    data->>'lastSection' as section,
    COUNT(*) as abandons
FROM module_analytics
WHERE event_type = 'module_abandoned'
AND module_id = 'BC_Module_01'
GROUP BY section
ORDER BY abandons DESC;
```

## 7. Tests et validation

### 7.1 Checklist de test

- [ ] Module se charge correctement dans Zoho Learn
- [ ] Navigation entre sections fonctionne
- [ ] Données sauvegardées en cas de fermeture
- [ ] Progress bar mise à jour
- [ ] Analytics envoyés au webhook n8n
- [ ] Email de notification reçu
- [ ] Données visibles dans Grafana
- [ ] Claude génère des insights pertinents

### 7.2 Tests de charge

```bash
# Test de charge avec Apache Bench
ab -n 1000 -c 10 -p test_data.json -T application/json \
  https://YOUR-N8N-INSTANCE.com/webhook/bc-module-analytics
```

## 8. Maintenance et monitoring

### 8.1 Monitoring

- Configurer des alertes Grafana pour :
  - Taux d'abandon > 20%
  - Temps moyen > 45 minutes
  - Erreurs webhook

### 8.2 Logs

Centraliser les logs :
- Module SCORM → Browser console
- n8n → Workflow executions
- Claude API → Response logs
- Zoho Learn → Activity logs

### 8.3 Backup

- Sauvegarder quotidiennement :
  - Base PostgreSQL
  - Configurations n8n
  - Dashboards Grafana

## 9. Optimisations futures

1. **A/B Testing** : Tester différentes versions du module
2. **Personnalisation** : Adapter les questions selon le profil
3. **Multilingue** : Ajouter support anglais/espagnol
4. **Mobile** : Optimiser pour app Zoho Learn mobile
5. **Offline** : Support mode hors ligne avec sync

## 10. Support et ressources

- Documentation SCORM : [https://scorm.com/scorm-explained/](https://scorm.com/scorm-explained/)
- API Zoho Learn : [https://www.zoho.com/learn/api/](https://www.zoho.com/learn/api/)
- n8n Community : [https://community.n8n.io/](https://community.n8n.io/)
- Claude API : [https://docs.anthropic.com/](https://docs.anthropic.com/)

---

**Note** : Ce module est le premier d'une série de 25. Les modules suivants pourront réutiliser cette infrastructure avec des adaptations mineures.