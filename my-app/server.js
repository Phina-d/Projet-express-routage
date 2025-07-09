// 📦 Charge les variables d’environnement depuis .env (ex : PORT, CHECK_WORKING_HOURS)
require('dotenv').config();

// 📁 Importe les modules nécessaires
const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// 🔐 Active ou non le middleware des heures ouvrables en fonction du .env
const checkWorkingHours = process.env.CHECK_WORKING_HOURS === 'true';

// 📌 Middleware par défaut (aucune restriction si désactivé)
let workingHoursMiddleware = (req, res, next) => next();

// ✅ Si l’option est activée, utilise le vrai middleware
if (checkWorkingHours) {
  workingHoursMiddleware = require('./middleware/workingHours');
}

// 🌐 Sert les fichiers statiques du dossier /public (CSS, JS, images...)
app.use(express.static(path.join(__dirname, 'public')));

// 📨 Permet de récupérer les données POST (formulaires)
app.use(express.urlencoded({ extended: true }));

// ⏰ Middleware pour restreindre l'accès en dehors des heures ouvrables
app.use(workingHoursMiddleware);

// 🧱 Configuration du moteur de templates EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout'); // Fichier layout.ejs comme modèle principal

// 🔽 Déclaration des routes principales

// Page d'accueil
app.get('/', (req, res) => {
  res.render('index', { title: 'Accueil' });
});

// Page services
app.get('/services', (req, res) => {
  res.render('services', { title: 'Nos services' });
});

// Page de contact (GET)
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contactez-nous', messageSent: false });
});

// Traitement du formulaire de contact (POST)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Nouveau message:', name, email, message);

  // Réaffiche la page contact avec un message de confirmation
  res.render('contact', { title: 'Contactez-nous', messageSent: true });
});

// 🚀 Démarrage du serveur sur le port défini (par défaut 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
