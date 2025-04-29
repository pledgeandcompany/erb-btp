# Script to commit and push changes to GitHub
Write-Host "Starting deployment process..." -ForegroundColor Green

# Add all changes
Write-Host "Adding all changes..." -ForegroundColor Yellow
git add .

# Commit changes with a descriptive message
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Update projects with new construction site details and fix modal display"

# Push to GitHub
Write-Host "Pushing to GitHub repository..." -ForegroundColor Yellow
git push origin main

Write-Host "Deployment completed!" -ForegroundColor Green
