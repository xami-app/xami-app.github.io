// scripts/generateSearchIndex.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { fileURLToPath } from 'url';

// Because __dirname and __filename don't exist in ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsPath = path.join(__dirname, '../public/docs');
const outputPath = path.join(__dirname, '../public/search.json');

function extractTextFromAst(tree) {
  const texts = [];

  function walk(node) {
    if (node.type === 'heading') {
      texts.push({
        type: 'heading',
        depth: node.depth,
        value: node.children.map(child => child.value).join(''),
      });
    } else if (node.type === 'paragraph') {
      texts.push({
        type: 'paragraph',
        value: node.children.map(child => child.value).join(''),
      });
    }

    if (node.children) {
      node.children.forEach(walk);
    }
  }

  walk(tree);
  return texts;
}

function getAllMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.flatMap(entry => {
    const res = path.resolve(dir, entry.name);
    return entry.isDirectory() ? getAllMarkdownFiles(res) : res;
  });
  return files.filter(file => file.endsWith('.md'));
}

const mdFiles = getAllMarkdownFiles(docsPath);
const searchIndex = [];

for (const file of mdFiles) {
  const raw = fs.readFileSync(file, 'utf-8');
  const { content, data } = matter(raw);
  const ast = unified().use(remarkParse).parse(content);
  const parsed = extractTextFromAst(ast);

  searchIndex.push({
    file: path.relative(docsPath, file).replace(/\.md$/, ''),
    title: data.title || parsed.find(p => p.type === 'heading')?.value || '',
    content: parsed,
  });
}

fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2));
console.log(`search.json generated at ${outputPath}`);
