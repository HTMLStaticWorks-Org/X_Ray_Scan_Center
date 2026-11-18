const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const htmlFiles = [
  'index.html',
  'home-2.html',
  'about.html',
  'services.html',
  'products.html',
  'pricing.html',
  'services/x-ray.html',
  'services/ultrasound.html',
  'services/ecg.html',
  'technology.html',
  'patient-guide.html',
  'contact.html'
];

console.log('==============================================');
console.log('PREMIUM X-RAY & SCAN CENTER - SITE VERIFIER');
console.log('==============================================\n');

// 1. Check all HTML files exist
console.log('Checking 12 mandatory pages existence:');
let allFilesExist = true;
htmlFiles.forEach(file => {
  const filePath = path.join(projectRoot, file);
  if (fs.existsSync(filePath)) {
    console.log(`  [OK] ${file}`);
  } else {
    console.error(`  [MISSING] ${file}`);
    allFilesExist = false;
  }
});

// 2. Count images usage
const imageCounts = {};
for (let i = 1; i <= 78; i++) {
  imageCounts[i] = {
    count: 0,
    files: []
  };
}

const fileImageMap = {};

htmlFiles.forEach(file => {
  const filePath = path.join(projectRoot, file);
  const content = fs.readFileSync(filePath, 'utf8');
  fileImageMap[file] = [];

  // Match all instances of image-X.png
  const regex = /image-(\d+)\.png/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const num = parseInt(match[1], 10);
    if (num >= 1 && num <= 78) {
      imageCounts[num].count++;
      imageCounts[num].files.push(file);
      if (!fileImageMap[file].includes(num)) {
        fileImageMap[file].push(num);
      }
    }
  }
});

console.log('\n----------------------------------------------');
console.log('Images Per Page Breakdown:');
let totalPageImages = 0;
htmlFiles.forEach(file => {
  console.log(`  ${file}: ${fileImageMap[file].length} images -> [${fileImageMap[file].sort((a,b)=>a-b).join(', ')}]`);
  totalPageImages += fileImageMap[file].length;
});
console.log(`Total images assigned: ${totalPageImages}`);

// 3. Check for missing or duplicate images
console.log('\n----------------------------------------------');
console.log('Verifying All 78 Images (image-1.png to image-78.png):');

const missingImages = [];
const duplicateImages = [];
let validExactOnce = 0;

for (let i = 1; i <= 78; i++) {
  const info = imageCounts[i];
  if (info.count === 0) {
    missingImages.push(i);
  } else if (info.count > 1) {
    duplicateImages.push({ id: i, count: info.count, files: info.files });
  } else {
    validExactOnce++;
  }
}

console.log(`  Exact 1 Occurrence: ${validExactOnce} / 78 images`);

if (missingImages.length > 0) {
  console.error(`  [ERROR] Missing Images (${missingImages.length}):`, missingImages);
} else {
  console.log('  [PASS] Zero missing images! All 78 images are in use.');
}

if (duplicateImages.length > 0) {
  console.error(`  [ERROR] Duplicate Images (${duplicateImages.length}):`);
  duplicateImages.forEach(d => {
    console.error(`    - image-${d.id}.png used ${d.count} times in: ${d.files.join(', ')}`);
  });
} else {
  console.log('  [PASS] Zero duplicate images! Every image is used exactly ONCE across the entire site.');
}

// 4. Verify no Login/Register/Dashboard buttons
console.log('\n----------------------------------------------');
console.log('Verifying No Login / Register / Dashboard buttons:');
const forbiddenTerms = [/>\s*Login\s*</i, />\s*Sign in\s*</i, />\s*Register\s*</i, />\s*Dashboard\s*</i];
let forbiddenFound = false;

htmlFiles.forEach(file => {
  const filePath = path.join(projectRoot, file);
  const content = fs.readFileSync(filePath, 'utf8');
  forbiddenTerms.forEach(term => {
    if (term.test(content)) {
      console.error(`  [ERROR] Forbidden term ${term} found in ${file}`);
      forbiddenFound = true;
    }
  });
});

if (!forbiddenFound) {
  console.log('  [PASS] Clean! No Login, Register, or Dashboard links/buttons found.');
}

console.log('\n==============================================');
console.log('VERIFICATION SUMMARY:');
if (allFilesExist && missingImages.length === 0 && duplicateImages.length === 0 && !forbiddenFound) {
  console.log('SUCCESS: All 12 pages pass all structural, clinical, and image distribution requirements!');
} else {
  console.error('FAIL: Verification checks failed.');
}
console.log('==============================================');
