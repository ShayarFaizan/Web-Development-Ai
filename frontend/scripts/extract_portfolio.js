const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'Potfolio');
const destDir = path.join(__dirname, '..', 'public', 'portfolio');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const projects = [];

// Helper to get largest image recursively
function getLargestImage(dir) {
    let largestSize = 0;
    let largestPath = null;
    try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory() && !fullPath.includes('node_modules') && !fullPath.includes('.git')) {
                const img = getLargestImage(fullPath);
                if (img && img.size > largestSize) {
                    largestSize = img.size;
                    largestPath = img.path;
                }
            } else if (/\.(jpg|jpeg|png|webp|avif|svg)$/i.test(file)) {
                if (stat.size > largestSize && stat.size < 5000000) { // arbitrary cap to avoid massive BG images
                    largestSize = stat.size;
                    largestPath = fullPath;
                }
            }
        }
    } catch (e) {}
    return largestPath ? { path: largestPath, size: largestSize } : null;
}

const folders = fs.readdirSync(srcDir);
for (const folder of folders) {
    const fullFolderPath = path.join(srcDir, folder);
    if (!fs.statSync(fullFolderPath).isDirectory()) continue;
    
    const img = getLargestImage(fullFolderPath);
    if (img) {
        const ext = path.extname(img.path);
        const newName = folder.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + ext;
        const destPath = path.join(destDir, newName);
        fs.copyFileSync(img.path, destPath);
        
        // Let's cap the name to look good
        const name = folder.replace(/_/g, ' ').replace(/-/g, ' ');
        // capitalize
        const label = name.replace(/\b\w/g, c => c.toUpperCase());
        
        projects.push({
            label: label,
            image: `/portfolio/${newName}`,
            href: "/book-appointment"
        });
    }
}

fs.writeFileSync(path.join(__dirname, '..', 'app', 'components', 'portfolioData.json'), JSON.stringify(projects, null, 2));
console.log(`Extracted ${projects.length} projects.`);
