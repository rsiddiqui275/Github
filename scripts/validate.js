const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'app', 'app.component.ts');
const content = fs.readFileSync(file, 'utf8');

const match = content.match(/title\s*=\s*['"](.+)['"]/);
if (!match) {
  console.error('Could not find `title` in app.component.ts');
  process.exit(1);
}

const title = match[1];
console.log('Found title:', title);
if (title !== 'Angular App') {
  console.error(`Unexpected title value: ${title}`);
  process.exit(1);
}

console.log('Validation passed.');
process.exit(0);
