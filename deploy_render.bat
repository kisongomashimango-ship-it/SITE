@echo off
echo ========================================
echo ETAPE GIT POUR RENDER - Exécutez-moi !
echo ========================================
echo.

git status
echo.
git add .
git commit -m "Deploy Render ready" || echo "Pas de changements"
echo.

echo OUVREZ GitHub.com >> Nouveau repo "dw-event-render" (NO README)
echo Puis remplacez VOTRE_USERNAME ci-dessous:
set /p USERNAME="Votre GitHub username: "
git remote add origin https://github.com/%USERNAME%/dw-event-render.git 2>nul
git branch -M main
git push -u origin main

echo.
echo ✅ PUSH GIT FAIT ! Allez sur Render.com connecter ce repo.
pause
