const fs = require('fs');
const html = fs.readFileSync('src/app/site-body.html', 'utf8');
const regex = /class="([^"]*hero[^"]*)"/g;
let m;
const classes = new Set();
while ((m = regex.exec(html)) !== null) {
  classes.add(m[1]);
}
console.log(Array.from(classes));
