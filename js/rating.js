(function () {
  let projectsID = ['#bande-annonce', '#savoir-faire', '#documentaire'];
  let bandeAnnonceRating = localStorage.getItem('bande-annonce');
  let savoirFaireRating = localStorage.getItem('savoir-faire');
  let documentaireRating = localStorage.getItem('documentaire');
  let savedRatings = [bandeAnnonceRating, savoirFaireRating, documentaireRating]

  /* Vive le code semi-compréhensible */ 
  function addRating() {
    let element = this;
    let childrens = this.parentElement.childNodes;
    let parentID = this.parentElement.id;
    let numberOfStars = 4;
    childrens.forEach(function (e) {
      e.classList.remove('active');
      console.log
    });
    element.classList.add('active');
    let sibling = element.nextSibling;
    while (sibling) {
      sibling.classList.add('active');
      sibling = sibling.nextSibling;
      numberOfStars--;
    }
    window.localStorage.setItem(parentID, numberOfStars);
  }

  function loadRatings() {
    for (let i = 0; i < projectsID.length; i++) {
      let project = document.querySelector(projectsID[i]);
      if (savedRatings[i]) {
        let element = project.childNodes[savedRatings[i]];
        let sibling = element.nextSibling;
        element.classList.add('active');
        while (sibling) {
          sibling.classList.add('active');
          sibling = sibling.nextSibling;
        }
      }
    }
  }

  for (let i = 0; i < projectsID.length; i++) {
    let project = document.querySelector(projectsID[i]);
    for (let j = 0; j < project.childNodes.length; j++) {
      let child = project.childNodes[j];
      child.addEventListener('click', addRating)
    }
  }

  loadRatings();
})()