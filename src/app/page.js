import fs from 'fs';
import path from 'path';

/**
 * Home page — renders the pre-built Webflow HTML.
 *
 * The site is a Webflow export wrapped in Next.js for hosting flexibility.
 * All page content lives in `site-body.html`; Webflow's own CSS and JS
 * handle styling and interactions (loaded via layout.js).
 */
export default function Home() {
  const htmlPath = path.join(process.cwd(), 'src/app/site-body.html');
  const bodyHtml = fs.readFileSync(htmlPath, 'utf8');

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
