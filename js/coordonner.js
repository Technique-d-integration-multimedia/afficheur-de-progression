(function () {
  /*==================== Boutons pour choisir la section ====================*/
  // Plus nécessaire selon le modèle
  // let sectionSelector = document.querySelector('#section-selector');
  // let labels = [];
  // let choices = [];
  // for (let i = 0; i < sectionSelector.childNodes.length; i++) {
  //   let child = sectionSelector.childNodes[i];
  //   if (child.tagName == 'LABEL') {
  //     labels.push(child);
  //   }
  // }
  // for (let i = 0; i < labels.length; i++) {
  //   for (let j = 0; j < labels[i].childNodes.length; j++) {
  //     let child = labels[i].childNodes[j];
  //     if (child.tagName == 'INPUT') {
  //       choices.push(child);
  //     }
  //   }
  // }

  // function selectSection() {
  //   for (let i = 0; i < choices.length; i++) {
  //     let field = document.querySelector('#' + choices[i].id + "-info");
  //     if (choices[i].checked) {
  //       field.classList.add('active');
  //     } else {
  //       field.classList.remove('active');
  //     }
  //   }
  // }

  // selectSection();
  // for (let i = 0; i < choices.length; i++) {
  //   choices[i].addEventListener('click', selectSection);
  // }

  /*==================== Sidebar toggles ====================*/ 
  let collapsibles = document.querySelectorAll(".sidebar-section-toggle");
  for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  let sidebarButton = document.querySelector('#sidebar-button');
  let sidebar = document.querySelector('aside').parentElement;
  let tab = window.matchMedia('(min-width: 768px)');

  function changeWidth() {
    if (tab.matches) {
      sidebar.classList.remove('sidebar-open');
    }
  }

  window.addEventListener('resize', changeWidth);
  sidebarButton.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar-open')
  })
})()