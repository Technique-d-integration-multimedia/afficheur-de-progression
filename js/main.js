/*               Petite préface
   Je sais que mon JavaScript est assez différent de
   ce qu'on apprend en classe. Par contre, ma raison
   pour faire ça, c'est que j'essaie de suivre les
   standards et les fonctionnalitées les plus récents.
   Par exemple, utiliser "let" à la place de "var".
   J'espère que mon code est assez compréhensible
   
   -Jakob
*/

// Cette fonction s'auto-exécute 
(function () {
  /*==================== Sticky header ====================*/
  let header = document.querySelector("header")
  let sticky = header.offsetTop

  window.addEventListener('scroll', stickyNav)

  function stickyNav() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky")
    }
  }

  /*==================== Burger menu ====================*/
  let hamburger = document.querySelector('#sandwich-menu')
  let navbar = document.querySelector('nav')

  hamburger.addEventListener('click', toggleHamburger)

  function toggleHamburger() {
    this.classList.toggle('change')
    if (navbar.style.maxHeight) {
      navbar.style.maxHeight = null
    } else {
      navbar.style.maxHeight = navbar.scrollHeight + 'px'
    }
  }

  /*============= Année actuelle, copyright =============*/
  let footerYear = document.querySelector("#copyright-year");
  let footerName = document.querySelector("#copyright-name");
  let copyrightName = "EinsTIM";

  footerYear.textContent = new Date().getFullYear();
  footerName.textContent = copyrightName;
})()