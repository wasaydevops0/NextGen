const fs = require('fs');
const html = fs.readFileSync('src/app/site-body.html', 'utf8');

const navLogoIdx = html.indexOf('brand w-nav-brand');
if (navLogoIdx !== -1) {
  console.log("Navbar Logo Snippet:\n", html.substring(navLogoIdx, navLogoIdx + 300));
}

const heroLogoIdx = html.indexOf('dynamic-hero-logo');
if (heroLogoIdx !== -1) {
  console.log("\nHero Logo Snippet:\n", html.substring(heroLogoIdx - 100, heroLogoIdx + 300));
}
