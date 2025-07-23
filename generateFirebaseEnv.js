const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'backend/config/credentials/firebase-service-account.json');

try {
  const serviceAccount = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const escaped = JSON.stringify(serviceAccount).replace(/\n/g, '\\n');

  console.log('\nCopy and paste this into Render ENV as: FIREBASE_SERVICE_ACCOUNT 👇\n');
  console.log(escaped);
  console.log('\n Paste it into the Render dashboard as a single line.\n');
} catch (err) {
  console.error(' Failed to generate FIREBASE_SERVICE_ACCOUNT:', err.message);
}
