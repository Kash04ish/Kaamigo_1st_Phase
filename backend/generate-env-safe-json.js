// encodeKey.js
const fs = require("fs");
const raw = fs.readFileSync("./config/credentials/firebase-service-account.json", "utf8");
const formatted = JSON.stringify(JSON.parse(raw)).replace(/\n/g, "\\n");
console.log(formatted);
