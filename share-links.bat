@echo off
echo ========================================
echo 🔗 PARTAGE LIEN SITE DW EVENT
echo ========================================
echo.

REM Remplacez par votre URL Render (ex: https://dw-event-app-xxx.onrender.com)
set SITE_URL=https://your-site.onrender.com
echo 🌐 URL Site: %SITE_URL%
echo.
echo 📱 Copiez cette URL et partagez-la via:
echo    - WhatsApp: Ouvrez WA ^> Nouvelle discussion ^> Coller URL
echo    - SMS: Contacts ^> Envoyer lien
echo    - Email/Gmail: Coller dans nouveau message
echo    - Telegram/Facebook: Même chose
echo.
echo 📲 Test mobile: Ouvrez navigateur tel (Chrome/Safari)
echo.
echo Ouvrez dans navigateur? (o/n)
set /p CHOICE=Ouvrir? (o/n): 
if /i "%CHOICE%"=="o" start %SITE_URL%

echo.
echo ✅ Prêt à partager!
pause

