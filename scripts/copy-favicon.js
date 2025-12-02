const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const src = path.join(repoRoot, 'src', 'assets', 'logo.png');
const destDir = path.join(repoRoot, 'public');
const dest = path.join(destDir, 'favicon.png');

try {
  if (!fs.existsSync(src)) {
    console.error(`Source logo not found: ${src}`);
    process.exit(1);
  }

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.copyFileSync(src, dest);
  console.log(`Copied favicon: ${src} -> ${dest}`);
} catch (err) {
  console.error('Failed to copy favicon:', err);
  process.exit(2);
}
