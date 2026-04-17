#!/usr/bin/env node

/**
 * Generate favicon PNGs from SVG logo
 * Uses Sharp (Next.js built-in) to convert SVG → PNG at multiple sizes
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const logosDir = path.join(projectRoot, 'public', 'logos');
const publicDir = path.join(projectRoot, 'public');

// Favicon sizes to generate
const sizes = [
  { size: 16, filename: 'favicon-16x16.png' },
  { size: 32, filename: 'favicon-32x32.png' },
  { size: 180, filename: 'apple-touch-icon.png' },
  { size: 192, filename: 'android-chrome-192x192.png' },
  { size: 512, filename: 'android-chrome-512x512.png' },
];

async function generateFavicons() {
  try {
    console.log('🎨 Gerando favicons a partir de logo-icon.svg...');

    const svgPath = path.join(logosDir, 'logo-icon.svg');

    if (!fs.existsSync(svgPath)) {
      throw new Error(`Logo SVG não encontrado: ${svgPath}`);
    }

    // Read SVG
    const svgBuffer = fs.readFileSync(svgPath);

    // Generate each size
    for (const { size, filename } of sizes) {
      const outputPath = path.join(publicDir, filename);

      await sharp(svgBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }, // Transparent background
        })
        .png()
        .toFile(outputPath);

      console.log(`✅ Gerado: ${filename} (${size}x${size})`);
    }

    // Also create favicon.ico from 16x16 PNG
    const favicon16Path = path.join(publicDir, 'favicon-16x16.png');
    const faviconIcoPath = path.join(publicDir, 'favicon.ico');

    // For simplicity, we'll use the 32x32 PNG and note that a proper ICO
    // would need multi-size support (use RealFaviconGenerator online for best results)
    const favicon32Path = path.join(publicDir, 'favicon-32x32.png');
    fs.copyFileSync(favicon32Path, faviconIcoPath);
    console.log(`✅ Criado: favicon.ico (cópia de favicon-32x32.png)`);

    console.log('\n✨ Todos os favicons foram gerados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao gerar favicons:', error.message);
    process.exit(1);
  }
}

generateFavicons();
