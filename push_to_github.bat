@echo off
setlocal
cd /d "%~dp0"

echo ===================================================
echo        Elite24 - Push to GitHub Utility
echo ===================================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo [1/4] Initializing Git repository...
    git init
    git branch -M main
) else (
    echo [1/4] Git repository already initialized.
)

echo.
echo [2/4] Staging files...
git add .

echo.
set /p commit_msg="Enter commit message (Press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update Elite24 website with resilience and performance fixes

echo.
echo [3/4] Committing changes...
git commit -m "%commit_msg%"

echo.
REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo No GitHub remote URL found!
    set /p repo_url="Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): "
    if not "%repo_url%"=="" (
        git remote add origin %repo_url%
    ) else (
        echo Error: No URL provided. Exiting.
        pause
        exit /b 1
    )
)

echo.
echo [4/4] Pushing to GitHub (main branch)...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ===================================================
    echo   SUCCESS: Project successfully pushed to GitHub!
    echo ===================================================
) else (
    echo.
    echo Pushing failed. If this is a new repository or requires authentication,
    echo make sure you have created the repository on GitHub and entered correct credentials.
)

echo.
pause

