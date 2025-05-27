// Pre-request Script for OAuth2 Authentication
const clientId = pm.environment.get('clientId');
const clientSecret = pm.environment.get('clientSecret');
const tenantId = pm.environment.get('tenantId');

// Check if token exists and is not expired
const tokenData = pm.environment.get('tokenData');
if (tokenData) {
    try {
        const parsedToken = JSON.parse(tokenData);
        const expiryDate = new Date(parsedToken.expiry);
        if (expiryDate > new Date()) {
            // Token is still valid
            pm.environment.set('accessToken', parsedToken.accessToken);
            return;
        }
    } catch (e) {
        console.error('Error parsing token data:', e);
    }
}

// Get new token
const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
const getTokenRequest = {
    method: 'POST',
    url: tokenUrl,
    header: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: {
        mode: 'urlencoded',
        urlencoded: [
            { key: 'grant_type', value: 'client_credentials' },
            { key: 'client_id', value: clientId },
            { key: 'client_secret', value: clientSecret },
            { key: 'scope', value: 'https://api.businesscentral.dynamics.com/.default' }
        ]
    }
};

pm.sendRequest(getTokenRequest, (err, response) => {
    if (err) {
        console.error('Error getting token:', err);
        return;
    }

    const responseJson = response.json();
    if (responseJson.access_token) {
        // Calculate expiry time (subtracting 5 minutes for safety)
        const expiryDate = new Date(Date.now() + (responseJson.expires_in - 300) * 1000);
        
        // Store token data
        const tokenData = {
            accessToken: responseJson.access_token,
            expiry: expiryDate.toISOString()
        };
        
        pm.environment.set('tokenData', JSON.stringify(tokenData));
        pm.environment.set('accessToken', responseJson.access_token);
    }
});
