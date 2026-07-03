const fs = require('fs');

const htmlPath = 'src/app/site-body.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const images = [
  '/images/open_plan_office_1783085131975.png',
  '/images/team_brainstorming_1783085102566.png',
  '/images/tech_award_1783085119649.png',
  '/images/tech_office_coding_1783085087868.png'
];

let imgIndex = 0;

// Match all img tags with class containing "home-gallery-img"
const regex = /(<img[^>]*class="[^"]*home-gallery-img[^"]*"[^>]*)src="[^"]*"([^>]*>)/gi;

html = html.replace(regex, (match, p1, p2) => {
  const replacementUrl = images[imgIndex % images.length];
  imgIndex++;
  
  // Strip out srcset if it exists, since our new images don't have multiple resolutions yet
  let startTag = p1.replace(/srcset="[^"]*"/gi, '');
  let endTag = p2.replace(/srcset="[^"]*"/gi, '');
  
  return `${startTag}src="${replacementUrl}"${endTag}`;
});

fs.writeFileSync(htmlPath, html, 'utf8');
console.log(`Replaced ${imgIndex} home gallery images with AI-generated realistic photos.`);
