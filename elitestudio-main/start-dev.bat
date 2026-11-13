@echo off
cd /d "%~dp0"
echo ==============================================
echo  Starting Elite24 Development Server...
echo ==============================================
if not exist "node_modules" (
    echo Installing dependencies (first run only)...
    npm install
)
echo Launching Vite Dev Server...
npm run dev
pause

