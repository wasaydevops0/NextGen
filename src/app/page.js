import fs from 'fs';
import path from 'path';

export default function Home() {
  const filePath = path.join(process.cwd(), 'src/app/tafsol-body.html');
  const bodyHtml = fs.readFileSync(filePath, 'utf8');

  return (
    <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
  );
}
