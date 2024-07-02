import fs from 'fs';
import path, { join } from 'path';
import { fileURLToPath } from 'url';

const sourcePath = join(__dirname, 'publish-package.json');
const destPath = join(__dirname, 'dist', 'package.json');

async function copyFile() {
  try {
    await fs.copyFile(sourcePath, destPath);
    console.log('File copied successfully.');
  } catch (err) {
    console.error('Error copying file:', err);
  }
}

(async () => {
    await copyFile();
  })();

// Calculate __dirname equivalent for ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the main package.json
const mainPackageJsonPath = path.join(__dirname, 'package.json');
// Path to the dist package.json
const distPackageJsonPath = path.join(__dirname, 'dist', 'package.json');

// Read the main package.json
const mainPackageJson = JSON.parse(fs.readFileSync(mainPackageJsonPath, 'utf8'));

// Read the dist package.json
const distPackageJson = JSON.parse(fs.readFileSync(distPackageJsonPath, 'utf8'));

// Update the version in the dist package.json
distPackageJson.version = mainPackageJson.version;

// Write the updated dist package.json back to disk
fs.writeFileSync(distPackageJsonPath, JSON.stringify(distPackageJson, null, 2) + '\n');
console.log( "Finished updating dist package.json version to " + mainPackageJson.version + "!");