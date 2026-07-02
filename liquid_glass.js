const fs = require('fs');
const path = require('path');

const htmlPath = path.join(process.cwd(), 'src/app/tafsol-body.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Remove inline styles from the dynamic hero logo that conflict with the CSS glass effect
const inlineStyleRegex = /<span class="dynamic-hero-logo" style="([^"]*)color: #ffffff; opacity: 0\.25; text-shadow: 0px 4px 20px rgba\(0,0,0,0\.5\);([^"]*)">/g;

html = html.replace(inlineStyleRegex, (match, p1, p2) => {
  return `<span class="dynamic-hero-logo" style="${p1}${p2}">`;
});

// Since the regex might not perfectly match if it was formatted differently, let's also just do a split join
const originalInline = `color: #ffffff; opacity: 0.25; text-shadow: 0px 4px 20px rgba(0,0,0,0.5); `;
html = html.split(originalInline).join('');

fs.writeFileSync(htmlPath, html, 'utf8');

const cssPath = path.join(process.cwd(), 'src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Remove the old rule for body.nextgen-light-mode .dynamic-hero-logo
const oldCssRule = `/* Custom Dynamic Hero Logo Theme Rules */
body.nextgen-light-mode .dynamic-hero-logo {
  color: #000000 !important;
  opacity: 0.15 !important;
  text-shadow: none !important;
}`;

css = css.replace(oldCssRule, '');

// Append the new Liquid Glass CSS
const liquidGlassCss = `
/* ═══════════════════════════════════════════
   LIQUID GLASS TEXT EFFECT (APPLE STYLE)
   ═══════════════════════════════════════════ */
.dynamic-hero-logo {
  /* Reflection Gradient */
  background: linear-gradient(
    170deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.4) 45%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.2) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* Glass Bevel/Edge */
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  
  /* Diffuse Refraction Shadow */
  filter: drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.6)) drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.1));
  
  opacity: 0.85;
  transition: all 0.5s ease;
}

body.nextgen-light-mode .dynamic-hero-logo {
  /* Dark Liquid for Light Mode */
  background: linear-gradient(
    170deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.2) 45%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.05));
  opacity: 0.85;
}
`;

if (!css.includes('LIQUID GLASS TEXT EFFECT')) {
  css += liquidGlassCss;
  fs.writeFileSync(cssPath, css, 'utf8');
}

console.log('Applied liquid glass text effect to Hero logo!');
