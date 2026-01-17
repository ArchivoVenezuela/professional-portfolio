// Script to update content.ts from exported JSON
// Usage: node scripts/update-content.js <path-to-json-file>

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = process.argv[2];

if (!jsonPath) {
  console.error('Usage: node scripts/update-content.js <path-to-json-file>');
  process.exit(1);
}

try {
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
  const data = JSON.parse(jsonContent);
  
  const contentTsPath = path.join(__dirname, '../src/content.ts');
  let contentTs = fs.readFileSync(contentTsPath, 'utf-8');
  
  // Update heroContent
  if (data.hero) {
    contentTs = updateExport(contentTs, 'heroContent', data.hero);
  }
  
  // Update featuredProject
  if (data.featured) {
    contentTs = updateExport(contentTs, 'featuredProject', data.featured);
  }
  
  // Update siteConfig
  if (data.site) {
    contentTs = updateExport(contentTs, 'siteConfig', data.site);
  }
  
  // Update aboutContent
  if (data.about) {
    contentTs = updateExport(contentTs, 'aboutContent', data.about);
  }
  
  // Write back to file
  fs.writeFileSync(contentTsPath, contentTs, 'utf-8');
  console.log('✅ Successfully updated content.ts');
  
} catch (error) {
  console.error('Error updating content.ts:', error);
  process.exit(1);
}

function updateExport(content, exportName, newData) {
  // Find the export statement
  const exportRegex = new RegExp(`export const ${exportName} = \\{[\\s\\S]*?\\};`, 'm');
  const match = content.match(exportRegex);
  
  if (!match) {
    console.warn(`Warning: Could not find export ${exportName}`);
    return content;
  }
  
  // Convert object to TypeScript format
  const tsString = objectToTS(newData, 0);
  const replacement = `export const ${exportName} = ${tsString};`;
  
  return content.replace(exportRegex, replacement);
}

function objectToTS(obj, indent) {
  const spaces = '  '.repeat(indent);
  const nextSpaces = '  '.repeat(indent + 1);
  
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    const items = obj.map(item => `${nextSpaces}${objectToTS(item, indent + 1)}`).join(',\n');
    return `[\n${items}\n${spaces}]`;
  }
  
  if (obj === null) return 'null';
  if (typeof obj !== 'object') {
    if (typeof obj === 'string') {
      return `"${obj.replace(/"/g, '\\"')}"`;
    }
    return String(obj);
  }
  
  const entries = Object.entries(obj);
  if (entries.length === 0) return '{}';
  
  const props = entries.map(([key, value]) => {
    const formattedKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
    return `${formattedKey}: ${objectToTS(value, indent + 1)}`;
  }).join(',\n');
  
  return `{\n${nextSpaces}${props.split('\n').join(`\n${nextSpaces}`)}\n${spaces}}`;
}
