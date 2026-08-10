import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to create a minimal valid PNG image buffer in pure Node.js
function createMinimalPNG(width, height) {
  // We can write a simple SVG convert or valid PNG chunk structure
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="#0f172a"/>
    <circle cx="${width/2}" cy="${height/2}" r="${width*0.35}" fill="url(#grad)" />
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4f46e5"/>
        <stop offset="50%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#fbbf24"/>
      </linearGradient>
    </defs>
    <text x="50%" y="55%" font-family="sans-serif" font-size="${width*0.25}" font-weight="900" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">JS</text>
  </svg>`;
  return svg;
}

const publicDir = path.join(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'icon-192.svg'), createMinimalPNG(192, 192));
fs.writeFileSync(path.join(publicDir, 'icon-512.svg'), createMinimalPNG(512, 512));
console.log('SVG PWA Icons Created');
