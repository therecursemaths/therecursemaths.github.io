// Configuration de MathJax
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// S'assurer que MathJax est initialisé après un changement de page instantané
document.addEventListener('DOMContentLoaded', function () {
  MathJax.typeset();  // Assure que MathJax fonctionne à chaque chargement de la page
});

// Si tu utilises pjax (pour les transitions instantanées de pages)
document.addEventListener('pjax:end', function () {
  MathJax.startup.output.clearCache();    // Vider le cache de MathJax
  MathJax.typesetClear();                 // Effacer les typesets précédents
  MathJax.texReset();                    // Réinitialiser MathJax pour qu'il soit prêt à traiter à nouveau
  MathJax.typesetPromise();              // Appliquer MathJax sur la page après le changement
});
