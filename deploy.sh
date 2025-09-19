#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Building and deploying to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Copy files to a temporary directory for deployment
    echo "📁 Preparing files for deployment..."
    
    # Create a clean deployment directory
    rm -rf deploy-temp
    mkdir deploy-temp
    
    # Copy all files from out directory
    cp -r out/* deploy-temp/
    
    echo "🎉 Ready for deployment!"
    echo "📋 Next steps:"
    echo "1. Copy all files from 'deploy-temp/' directory"
    echo "2. Upload them to your GitHub Pages repository"
    echo "3. Or use: git add . && git commit -m 'Deploy' && git push"
    
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
