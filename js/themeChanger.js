(function() {
  // Prend la donnée "theme" à partir du stockage local
  const themeLocal = localStorage.getItem('theme');
  const texteDuToggle = document.querySelector("#theme-toggle-label");
  const iconeDuToggle = document.querySelector("#theme-toggle-icon");
  const themeToggle = document.querySelector("#theme-toggle");
  // Icône pour chaque thème, voir fontawesome.com
  iconeClair = "fas fa-sun";
  iconeSombre = "fas fa-moon";
  texteClair = "Clair ";
  texteSombre = "Sombre ";

  function mettreSombre() {
    // Ajoute l'attribut data-theme et le définit à sombre
    document.documentElement.setAttribute('data-theme', 'sombre');
    // Définit le thème dans le stockage local
    window.localStorage.setItem('theme', 'sombre');
    iconeDuToggle.classList = iconeClair;
    texteDuToggle.textContent = texteClair;
  }

  function mettreClair() {
    // Ajoute l'attribut data-theme et le définit à clair
    document.documentElement.setAttribute('data-theme', 'clair');
    // Définit le thème dans le stockage local
    window.localStorage.setItem('theme', 'clair');
    iconeDuToggle.classList = iconeSombre;
    texteDuToggle.textContent = texteSombre;
  }

  function basculeurDeTheme() {
    // Vérifie le thème actuel
    let themeActuel = document.documentElement.getAttribute('data-theme');
    if (themeActuel === "sombre") {
      mettreClair();
    } else {
      mettreSombre();
    }
  }

  // Après le chargement de la page, sert à définir les textes et les icônes
  if (themeLocal === "sombre") {
    mettreSombre();
  } else if (themeLocal === "clair") {
    mettreClair();
  } else {
    mettreClair();
  }

  // Si on clique sur le bouton, basculer le thème
  themeToggle.addEventListener('click', basculeurDeTheme)
})()