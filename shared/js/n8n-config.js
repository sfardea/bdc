// n8n Configuration for Testing
// Update the webhookUrl with your actual n8n webhook URL

window.N8N_CONFIG = {
    // IMPORTANT: Replace this with your n8n webhook URL
    // You'll get this from n8n when you create the webhook node
    webhookUrl: 'http://localhost:5678/webhook-test/test-bilan', // Update with your working webhook URL
    
    // Set to true to see console logs
    debug: true
};

// Simple function to send data to n8n
window.sendToN8N = async function(eventType, data) {
    const config = window.N8N_CONFIG;
    
    if (!config.webhookUrl || config.webhookUrl.includes('webhook-test')) {
        console.warn('⚠️ Please update webhookUrl in n8n-config.js with your actual n8n webhook URL');
    }
    
    const payload = {
        timestamp: new Date().toISOString(),
        event: eventType,
        data: data,
        source: 'bilan-competences',
        url: window.location.href
    };
    
    if (config.debug) {
        console.log('📤 Sending to n8n:', payload);
    }
    
    try {
        const response = await fetch(config.webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        
        const result = await response.json();
        
        if (config.debug) {
            console.log('✅ n8n response:', result);
        }
        
        return result;
    } catch (error) {
        console.error('❌ Error sending to n8n:', error);
        throw error;
    }
};