
# 🌐 Mon Site Express – Application Web Express.js

## 📋 Description
Ce projet est une application web développée avec **Express.js**, comprenant trois pages principales :
- **Accueil**
- **Nos services**
- **Contactez-nous**

L’application est disponible **uniquement pendant les heures ouvrables** (du lundi au vendredi, de 9h à 17h), grâce à un middleware personnalisé.

## 💡 Fonctionnalités principales
- 🎨 Interface responsive et moderne (HTML + CSS personnalisés)
- 🌗 Thème clair / sombre dynamique (avec `localStorage`)
- 🕐 Middleware Express pour bloquer l’accès en dehors des horaires
- 📱 Menu de navigation responsive avec burger menu
- 🧾 Formulaire de contact avec message de confirmation
- 🦶 Footer avec icônes de réseaux sociaux

## 🛠️ Technologies utilisées
- Node.js
- Express.js
- EJS (moteur de template)
- HTML / CSS
- JavaScript Vanilla ( juste du JavaScript natif)

## ▶️ Installation

npm install
npm start
```

> L’application démarre sur : `http://localhost:3000`

## 🧪 Test de l'accès horaire
- L’accès est **autorisé uniquement de 9h à 17h, du lundi au vendredi**
- En dehors de cette plage, un message d’indisponibilité s’affiche

## 📁 Structure du projet
```
projet-express-complet/
├── server.js
├── middleware/
│   └── workingHours.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── theme.js
├── routes/
│   └── index.js
├── views/
│   ├── layout.ejs
│   ├── index.ejs
│   ├── services.ejs
│   └── contact.ejs
└── package.json
```

## 👤 Auteur
Phina DIOUF – Projet GOMYCODE

---

© 2025 Phina DIOUF Site Express. Tous droits réservés.
