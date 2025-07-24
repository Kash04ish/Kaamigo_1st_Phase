const fs = require('fs');
const path = require('path');

// Load your service account
const filePath = path.join(__dirname, 'config/credentials/firebase-service-account.json');
const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Escape newline characters in the private key
raw.private_key = raw.private_key.replace(/\n/g, '\\n');

// Escape quotes and stringify
const output = JSON.stringify(raw).replace(/"/g, '\\"');

// Log the result
console.log(`\nPaste this into .env:\n\nFIREBASE_SERVICE_ACCOUNT="${output}"\n`);