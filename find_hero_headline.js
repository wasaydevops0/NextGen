const fs = require('fs');
const html = fs.readFileSync('src/app/site-body.html', 'utf8');

const regex = /.{0,100}We Build.{0,100}/i;
const match = html.match(regex);
console.log("Context around 'We Build':");
console.log(match ? match[0] : "Not found");
