# DW EVENT - Gestion Premium des Événements

## 🚀 Description
Application web moderne pour gérer vos événements avec élégance. Full-stack Node.js + SQLite.

**Fonctionnalités:**
- ✅ Création/Suppression événements
- ✅ Filtrage (tous/à venir/passés)
- ✅ Stats en temps réel
- ✅ Thème sombre/clair
- ✅ Design responsive premium
- ✅ API REST + Fallback localStorage

## 📋 Installation & Lancement Local

```bash
npm install
npm start
```

Ouvrir http://localhost:3000

## 🌐 Déploiement Render GRATUIT (Étapes Précises)

**AVERTISSEMENT SQLite :** DB reset sur restart (free tier). OK pour démo/léger trafic. Upgrade PostgreSQL pour prod.

1. **GitHub Repo :**
   - `git init` (si pas fait)
   - `git add .`
   - `git commit -m \"Initial commit DW EVENT\"`
   - Créer repo GitHub: `dw-event-app`
   - `git remote add origin https://github.com/VOTRE-USERNAME/dw-event-app.git`
   - `git branch -M main`
   - `git push -u origin main`

2. **Render.com (GRATUIT 100%) :**
   - Inscrivez-vous: https://render.com (connect GitHub)
   - Dashboard > New > Web Service
   - Connect repo `dw-event-app`
   - Settings:
     - Name: `dw-event-prod`
     - Environment: `Node`
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Plan: **Free** (sleep après 15min inactif, OK site)
   - Deploy ! (Auto sur git push)

3. **URL Live:** https://dw-event-prod.onrender.com
   - Test: Ajoutez/supprimez événements (DB reset sleep)
   - API: https://.../api/events

**Problèmes courants:**
- Port: Auto (process.env.PORT)
- SQLite: Limité, migrer PG si besoin (dites-moi)

## 🛠️ Scripts
- `npm start` : Prod (PORT env)
- `npm run dev` : Dev nodemon

## 🔗 Partage Mobile
Double-clic `share-links.bat` → Copie URL → WhatsApp/SMS/Email.

## 📱 Aperçu
![DW EVENT](IMG-20260226-WA0120.jpg)

**Fait avec ❤️ à Kinshasa, RDC**
