const fs = require('fs');
const html = fs.readFileSync('src/app/site-body.html', 'utf8');
const idx = html.indexOf('we design experiences,');
const snippet = html.substring(Math.max(0, idx - 1000), idx + 2000);
const backgrounds = snippet.match(/background-image:[^;"]+/gi);
const images = snippet.match(/<img[^>]+>/gi);
console.log('Backgrounds:', backgrounds);
console.log('Images:', images);
