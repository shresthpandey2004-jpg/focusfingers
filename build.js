// Simple build script for Vercel deployment
// Since this is a static HTML game, we just need to ensure index.html exists

const fs = require('fs');
const path = require('path');

console.log('🚀 Building Focus Fingers...');

// Check if index.html exists
if (fs.existsSync('index.html')) {
    console.log('✅ index.html found');
    console.log('✅ No build step required for static HTML game');
    console.log('🎮 Focus Fingers is ready for deployment!');
} else {
    console.error('❌ index.html not found!');
    process.exit(1);
}

console.log('🎉 Build completed successfully!');