const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'Potfolio');
const folders = fs.readdirSync(dir);
const projects = [];

// Helper to get largest image recursively
function getLargestImage(folderDir) {
    let largestSize = 0;
    let largestPath = null;
    try {
        const queue = [folderDir];
        while (queue.length > 0) {
            const currentDir = queue.shift();
            const files = fs.readdirSync(currentDir);
            for (const file of files) {
                const fullPath = path.join(currentDir, file);
                const stat = fs.statSync(fullPath);
                if (stat.isDirectory() && !fullPath.includes('node_modules') && !fullPath.includes('.git')) {
                    queue.push(fullPath);
                } else if (/\.(jpg|jpeg|png|webp|avif|gif)$/i.test(file)) {
                    if (stat.size > largestSize && stat.size < 5000000) { // cap 5MB
                        largestSize = stat.size;
                        largestPath = fullPath;
                    }
                }
            }
        }
    } catch (e) {}
    return largestPath;
}

function findEntryHtml(dir) {
    try {
        const files = fs.readdirSync(dir);
        if (files.includes('index.html')) return 'index.html';
        for(let file of files) {
            if(file.endsWith('.html')) return file;
        }
    } catch(e) {}
    return null;
}

function findImageInHtml(htmlFile) {
    try {
        const content = fs.readFileSync(htmlFile, 'utf8');
        const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (imgMatch && imgMatch[1]) {
            return imgMatch[1];
        }
    } catch(e) {}
    return null;
}

for (let folder of folders) {
  const folderPath = path.join(dir, folder);
  if (!fs.statSync(folderPath).isDirectory()) continue;
  
  const entryHtml = findEntryHtml(folderPath) || 'index.html';
  
  let imageUrl = null;

  const imgPath = getLargestImage(folderPath);
  
  if (imgPath) {
      imageUrl = imgPath.replace(path.join(__dirname, 'public'), '').replace(/\\/g, '/');
  } else {
      // try looking inside the html file for an image link
      const entryPath = path.join(folderPath, entryHtml);
      const htmlImg = findImageInHtml(entryPath);
      if (htmlImg) {
          if (htmlImg.startsWith('http')) {
              imageUrl = htmlImg;
          } else {
              // try to resolve relative path
              // but actually it's easier to just assume it's relative to HTML
              imageUrl = `/Potfolio/${encodeURIComponent(folder)}/${htmlImg.replace(/^\/+/, '')}`;
          }
      }
  }

  // Final fallback if absolutely nothing found
  if (!imageUrl) {
      // Create a nice looking initials placeholder from placehold.co
      const initials = folder.slice(0, 2).toUpperCase();
      imageUrl = `https://placehold.co/600x400/eeeeee/222222?text=${encodeURIComponent(folder)}`;
  }

  const name = folder.replace(/_/g, ' ').replace(/-/g, ' ');
  const label = name.replace(/\b\w/g, c => c.toUpperCase());
  
  projects.push({
      label: label,
      image: imageUrl,
      href: `/Potfolio/${encodeURIComponent(folder)}/${encodeURIComponent(entryHtml)}`
  });
}

fs.writeFileSync(path.join(__dirname, 'app', 'components', 'portfolioData.json'), JSON.stringify(projects, null, 2));
console.log(`Generated JSON for ${projects.length} projects.`);
