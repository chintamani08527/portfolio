@echo off
echo ========================================================
echo   Pushing Portfolio Modules to GitHub Repository
echo   Target: https://github.com/chintamani08527/portfolio
echo ========================================================
echo.

git init
git add .
git commit -m "Upload complete interactive portfolio modules"
git branch -M main
git remote add origin https://github.com/chintamani08527/portfolio.git
git push -u origin main

echo.
echo ========================================================
echo   Upload process complete!
echo ========================================================
pause
