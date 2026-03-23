const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "Potfolio");
const destAssetsDir = path.join(__dirname, "..", "public", "portfolio");
const destProjectsDir = path.join(__dirname, "..", "public", "projects");

if (!fs.existsSync(destAssetsDir))
  fs.mkdirSync(destAssetsDir, { recursive: true });
if (!fs.existsSync(destProjectsDir))
  fs.mkdirSync(destProjectsDir, { recursive: true });

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
      if (
        stat.isDirectory() &&
        !fullPath.includes("node_modules") &&
        !fullPath.includes(".git")
      ) {
        const img = getLargestImage(fullPath);
        if (img && img.size > largestSize) {
          largestSize = img.size;
          largestPath = img.path;
        }
      } else if (/\.(jpg|jpeg|png|webp|avif|gif)$/i.test(file)) {
        if (stat.size > largestSize && stat.size < 5000000) {
          largestSize = stat.size;
          largestPath = fullPath;
        }
      }
    }
  } catch (e) {}
  return largestPath ? { path: largestPath, size: largestSize } : null;
}

// Copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  try {
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        if (
          entry.name === "node_modules" ||
          entry.name === ".git" ||
          entry.name === ".vscode"
        )
          continue;
        copyDirSync(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  } catch (e) {
    console.error("Error copying folder", e);
  }
}

// Find HTML entry file
function findEntryHtml(dir) {
  try {
    const files = fs.readdirSync(dir);
    if (files.includes("index.html")) return "index.html";

    // try finding any .html file
    for (let file of files) {
      if (file.endsWith(".html")) return file;
    }
  } catch (e) {}

  return null;
}

const folders = fs.readdirSync(srcDir);
for (const folder of folders) {
  const fullFolderPath = path.join(srcDir, folder);
  if (!fs.statSync(fullFolderPath).isDirectory()) continue;

  // Some folders might not be portfolios
  const entryHtml = findEntryHtml(fullFolderPath);
  if (!entryHtml) continue; // skip if no HTML file found

  // Copy entire project to public/projects/[folder]
  const projectDestDir = path.join(destProjectsDir, folder);
  copyDirSync(fullFolderPath, projectDestDir);

  const img = getLargestImage(fullFolderPath);
  let imagePath = "/assets/is1.svg"; // Default image if no image found

  if (img) {
    const ext = path.extname(img.path);
    const newName =
      folder
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") + ext;
    const destPath = path.join(destAssetsDir, newName);
    fs.copyFileSync(img.path, destPath);
    imagePath = `/portfolio/${newName}`;
  }

  const name = folder.replace(/_/g, " ").replace(/-/g, " ");
  const label = name.replace(/\b\w/g, (c) => c.toUpperCase());

  if (label === "Apply For A Travel Package!") {
    projects.push({
      label: label,
      text: "Form",
      href: `/projects/${encodeURIComponent(folder)}/${encodeURIComponent(entryHtml)}`,
    });
  } else {
    projects.push({
      label: label,
      image: imagePath,
      href: `/projects/${encodeURIComponent(folder)}/${encodeURIComponent(entryHtml)}`,
    });
  }
}

fs.writeFileSync(
  path.join(__dirname, "..", "app", "components", "portfolioData.json"),
  JSON.stringify(projects, null, 2),
);
console.log(`Extracted ${projects.length} projects and copied their files.`);
