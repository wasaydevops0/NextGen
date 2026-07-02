const fs = require('fs');
const path = require('path');

const htmlPath = path.join(process.cwd(), 'src/app/tafsol-body.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Add data-text attribute to the hero logo span if it doesn't have it
html = html.replace(/<span class="dynamic-hero-logo"([^>]*)>NextGenApps<\/span>/g, (match, p1) => {
  if (!p1.includes('data-text')) {
    return `<span class="dynamic-hero-logo"${p1} data-text="NextGenApps">NextGenApps</span>`;
  }
  return match;
});

// Make sure inline styles don't conflict (we already stripped them, but let's be safe)
html = html.replace(/color: #ffffff; opacity: 0\.25; text-shadow: [^;]*; /g, '');

fs.writeFileSync(htmlPath, html, 'utf8');

const cssPath = path.join(process.cwd(), 'src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Remove the old LIQUID GLASS TEXT EFFECT block
const startMarker = '/* ═══════════════════════════════════════════\r\n   LIQUID GLASS TEXT EFFECT (APPLE STYLE)\r\n   ═══════════════════════════════════════════ */';
const startMarker2 = '/* ═══════════════════════════════════════════\n   LIQUID GLASS TEXT EFFECT (APPLE STYLE)\n   ═══════════════════════════════════════════ */';

let startIndex = css.indexOf(startMarker);
if (startIndex === -1) startIndex = css.indexOf(startMarker2);

if (startIndex !== -1) {
  css = css.substring(0, startIndex);
}

// Add the Ultra-Premium Apple Liquid Glass Effect
const ultraGlassCss = `
/* ═══════════════════════════════════════════
   ULTRA-PREMIUM LIQUID GLASS TEXT EFFECT (APPLE STYLE)
   ═══════════════════════════════════════════ */
.dynamic-hero-logo {
  position: relative;
  display: inline-block;
  
  /* The core text becomes transparent to show the gradient */
  color: transparent !important;
  
  /* Base reflection gradient (milky glass) */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.1) 48%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.05) 100%
  ) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  
  /* Thick glass shadow casting on the background */
  filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.8)) drop-shadow(0px 5px 15px rgba(255, 255, 255, 0.15)) !important;
  
  /* A subtle white outline to define the glass shape */
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4) !important;
  
  z-index: 10;
}

/* 3D Specular Highlight layer layered exactly on top */
.dynamic-hero-logo::before {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  
  /* Highlight at the very top edge */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0) 20%
  ) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent !important;
  
  /* Blend it in for that glossy wet look */
  mix-blend-mode: overlay !important;
  pointer-events: none;
}

/* Light mode overrides for the glass text */
body.nextgen-light-mode .dynamic-hero-logo {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.1) 48%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.05) 100%
  ) !important;
  -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.3) !important;
  filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.2)) drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.05)) !important;
}

body.nextgen-light-mode .dynamic-hero-logo::before {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0) 30%
  ) !important;
  mix-blend-mode: hard-light !important;
}
`;

css += ultraGlassCss;
fs.writeFileSync(cssPath, css, 'utf8');

console.log('Ultra Liquid Glass effect applied successfully!');
