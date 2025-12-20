@echo off
echo 🚀 Deploying Focus Fingers to Vercel...

REM Check if vercel is installed
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo 📦 Installing Vercel CLI...
    npm install -g vercel
)

REM Deploy to Vercel
echo 🌐 Starting deployment...
vercel --prod

echo ✅ Deployment complete!
echo 🎮 Your Focus Fingers game is now live!
pause