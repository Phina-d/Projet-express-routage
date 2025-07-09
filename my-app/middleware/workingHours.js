module.exports = (req, res, next) => {
  // 🔒 Si le test de fermeture est forcé via .env
  if (process.env.FORCE_CLOSED === 'true') {
    return res.send(`
      <h2 style="text-align:center;margin-top:20%;">
        [FORCÉ] L'application est disponible du <strong>lundi au vendredi</strong>, de <strong>9h à 17h</strong>.
      </h2>
    `);
  }

  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.send(`
      <h2 style="text-align:center;margin-top:20%;">
        L'application est disponible du <strong>lundi au vendredi</strong>, de <strong>9h à 17h</strong>.
      </h2>
    `);
  }
};
