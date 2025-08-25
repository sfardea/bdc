# n8n Setup Guide for Bilan de Compétences

## Prerequisites

1. **n8n instance** running (locally or cloud)
2. **PostgreSQL database** for storing analytics
3. **Anthropic API key** for Claude integration (optional)
4. **Slack workspace** for notifications (optional)

## Step 1: Install n8n

### Option A: Docker (Recommended)
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

### Option B: npm
```bash
npm install n8n -g
n8n start
```

Access n8n at: http://localhost:5678

## Step 2: Import Workflows

1. Open n8n interface
2. Go to **Workflows** → **Import from File**
3. Import these workflow files:
   - `n8n-workflows/module-01-workflow.json`
   - `n8n-workflows/module-02-workflow.json`
   - `n8n-workflows/llm-analysis-workflow.json`

## Step 3: Configure Credentials

### PostgreSQL Database
1. Go to **Credentials** → **New**
2. Select **Postgres**
3. Configure:
   ```
   Host: localhost (or your DB host)
   Database: bilan_competences
   User: your_db_user
   Password: your_db_password
   Port: 5432
   ```

### Anthropic API (for Claude)
1. Go to **Credentials** → **New**
2. Select **HTTP Request (Header Auth)**
3. Configure:
   ```
   Name: Anthropic API
   Header Name: x-api-key
   Header Value: your-anthropic-api-key
   ```

### Slack (Optional)
1. Go to **Credentials** → **New**
2. Select **Slack API**
3. Follow OAuth flow or use Bot Token

## Step 4: Configure Webhook URLs

### Get Your Webhook URLs
After importing workflows, each webhook node will have a unique URL:

1. Open each workflow
2. Click on the **Webhook** node
3. Copy the webhook URL (e.g., `http://localhost:5678/webhook/abc123`)

### Update Frontend Configuration
Edit `shared/js/n8n-config.js`:

```javascript
window.N8N_CONFIG = {
    webhookBaseUrl: 'http://localhost:5678/webhook',
    endpoints: {
        module01: '/your-module-01-webhook-id',
        module02: '/your-module-02-webhook-id',
        general: '/your-general-webhook-id'
    }
};
```

## Step 5: Database Setup

Create the required tables:

```sql
-- Create database
CREATE DATABASE bilan_competences;

-- Connect to database
\c bilan_competences;

-- Module analytics table
CREATE TABLE module_analytics (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255),
    module_id VARCHAR(50),
    event_type VARCHAR(100),
    data JSONB,
    completion_score INTEGER,
    time_spent INTEGER,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- LLM interactions table
CREATE TABLE llm_interactions (
    id SERIAL PRIMARY KEY,
    request_id VARCHAR(255) UNIQUE,
    module_id VARCHAR(50),
    analysis_type VARCHAR(50),
    user_prompt TEXT,
    llm_response JSONB,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User sessions table
CREATE TABLE user_sessions (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(255) UNIQUE,
    user_id VARCHAR(255),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    modules_completed INTEGER DEFAULT 0,
    total_time_spent INTEGER,
    metadata JSONB
);

-- Create indexes for performance
CREATE INDEX idx_module_analytics_user ON module_analytics(user_id);
CREATE INDEX idx_module_analytics_module ON module_analytics(module_id);
CREATE INDEX idx_module_analytics_timestamp ON module_analytics(timestamp);
CREATE INDEX idx_llm_interactions_module ON llm_interactions(module_id);
```

## Step 6: Test the Integration

### Test Module Analytics
1. Open Module 1 in your browser
2. Fill in some fields
3. Check n8n executions to see if data is received
4. Verify data in PostgreSQL:
   ```sql
   SELECT * FROM module_analytics ORDER BY timestamp DESC LIMIT 10;
   ```

### Test LLM Integration
1. Click on "Obtenir des conseils personnalisés" in a module
2. Check n8n workflow execution
3. Verify response appears in the module

## Step 7: CORS Configuration (for LMS deployment)

If deploying to an LMS, configure CORS in n8n:

### n8n Webhook CORS
In each webhook node, add response headers:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

### Alternative: Proxy Setup
If CORS is blocked, set up a proxy:

1. Create an API endpoint on your server
2. Forward requests to n8n
3. Update `n8n-config.js` to use your proxy URL

## Step 8: Production Deployment

### Environment Variables
Create `.env` file:
```env
N8N_WEBHOOK_URL=https://your-n8n-domain.com/webhook
ANTHROPIC_API_KEY=sk-ant-xxxxx
DB_CONNECTION_STRING=postgresql://user:pass@host/db
```

### Security Considerations
1. Use HTTPS for all webhook URLs
2. Implement webhook authentication
3. Rate limit API calls
4. Anonymize personal data
5. Use environment variables for sensitive data

## Step 9: Monitoring

### n8n Monitoring
- Check workflow executions regularly
- Set up error notifications
- Monitor webhook response times

### Database Monitoring
```sql
-- Check daily analytics
SELECT 
    DATE(timestamp) as day,
    COUNT(*) as events,
    COUNT(DISTINCT user_id) as unique_users
FROM module_analytics
GROUP BY DATE(timestamp)
ORDER BY day DESC;

-- Check LLM usage
SELECT 
    analysis_type,
    COUNT(*) as requests,
    AVG(CHAR_LENGTH(llm_response::text)) as avg_response_length
FROM llm_interactions
GROUP BY analysis_type;
```

## Troubleshooting

### Webhook Not Receiving Data
1. Check browser console for errors
2. Verify webhook URL is correct
3. Check CORS settings
4. Test with curl:
   ```bash
   curl -X POST http://localhost:5678/webhook/your-webhook-id \
     -H "Content-Type: application/json" \
     -d '{"test": "data"}'
   ```

### LLM Not Responding
1. Verify API key is correct
2. Check API rate limits
3. Review n8n workflow execution logs
4. Test API directly

### Database Connection Issues
1. Verify credentials
2. Check network connectivity
3. Ensure database is running
4. Test connection:
   ```bash
   psql -h localhost -U user -d bilan_competences
   ```

## Support

For help with:
- **n8n**: https://community.n8n.io/
- **PostgreSQL**: https://www.postgresql.org/docs/
- **Anthropic API**: https://docs.anthropic.com/

## Next Steps

1. Configure alerts for important events
2. Set up backup for database
3. Implement custom analytics dashboards
4. Add more LLM-powered features
5. Scale n8n for production load