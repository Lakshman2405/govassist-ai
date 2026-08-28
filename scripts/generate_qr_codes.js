import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const artifactDir = 'C:\\Users\\laksh\\.gemini\\antigravity-ide\\brain\\3e155795-10f1-460f-9dbc-1dcba6c84a57';

const githubUrl = 'https://github.com/Lakshman2405/govassist-ai';
const liveAppUrl = 'https://govassist-ai-chi.vercel.app/';

async function generateQRCodes() {
  const qrOptions = {
    errorCorrectionLevel: 'H',
    type: 'image/png',
    quality: 1,
    margin: 2,
    width: 600,
    color: {
      dark: '#0f172a',
      light: '#ffffff'
    }
  };

  // Generate GitHub Repo QR Code
  const githubPublicPath = path.join(publicDir, 'qr-github.png');
  const githubArtifactPath = path.join(artifactDir, 'qr-github.png');
  await QRCode.toFile(githubPublicPath, githubUrl, qrOptions);
  await QRCode.toFile(githubArtifactPath, githubUrl, qrOptions);
  console.log('Generated GitHub QR Code:', githubPublicPath);

  // Generate Live App QR Code
  const liveAppPublicPath = path.join(publicDir, 'qr-live-app.png');
  const liveAppArtifactPath = path.join(artifactDir, 'qr-live-app.png');
  await QRCode.toFile(liveAppPublicPath, liveAppUrl, qrOptions);
  await QRCode.toFile(liveAppArtifactPath, liveAppUrl, qrOptions);
  console.log('Generated Live App QR Code:', liveAppPublicPath);
}

generateQRCodes().catch(console.error);
