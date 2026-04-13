import fs from 'fs';
import path from 'path';

const aliasMap: Record<string, string> = {
  'sniadanie-na-wydziale': 'snw',
  'kapuczino-z-alpaczino': 'kza',
  dw: 'dw',
  szpilka: 'szpilka',
};

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.JPG', '.JPEG']);

export function getEditionImages(slug: string, year: string): string[] {
  const cand = aliasMap[slug] ?? slug;
  const publicDir = path.join(process.cwd(), 'public', 'images');
  const byYear = path.join(publicDir, cand, year);
  const byFolder = path.join(publicDir, cand);
  const results: string[] = [];

  const tryRead = (dirPath: string) => {
    if (!fs.existsSync(dirPath)) return;
    const items = fs.readdirSync(dirPath);
    for (const it of items) {
      const full = path.join(dirPath, it);
      const stat = fs.statSync(full);
      if (stat.isFile() && exts.has(path.extname(it))) {
        const rel = path.relative(path.join(process.cwd(), 'public'), full).split(path.sep).join('/');
        results.push('/' + rel);
      }
    }
  };

  tryRead(byYear);
  if (results.length === 0) tryRead(byFolder);
  return results.sort();
}
