# DW EVENT - Gestion Premium des Événements

## 🚀 **Vercel + Neon 100% GRATUIT**

## 📱 **Live Demo URLs après deploy:**
```
https://dw-event.vercel.app/
https://dw-event.vercel.app/events.html
https://dw-event.vercel.app/api/events
```

## 🛠️ **Déploiement Vercel (5min)**

### 1. **Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel
```
**Choisir:** Production • GitHub (si repo) • Continue

### 2. **DATABASE_URL Neon**
**Vercel Dashboard → Project → Settings → Environment Variables:**
```
Name: DATABASE_URL
Value: postgresql://neondb_owner:npg_atF5zMkP0EOu@ep-mute-brook-alc6k5vo-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require
```

**3 types:** Production/Preview/Development

### 3. **Auto-deploy GitHub**
```
GitHub repo → Settings → Vercel (Connect)
Push → Live instant!
```

## 🧪 **Test Local**
```bash
npm run test-pg
# ou
node server-pg.js
```

## 📁 **Structure Vercel**
```
├── api/events/route.js     ← API Événements GET/POST
├── api/stats/route.js      ← Stats
├── vercel.json             ← Config
├── events.html             ← Page live
├── index.html              ← Landing
└── .env.example            ← Template DB
```

**✅ Neon table `events` requise (migrate-neon.js)**

**Fait avec ❤️ Kinshasa → Vercel ∞**
