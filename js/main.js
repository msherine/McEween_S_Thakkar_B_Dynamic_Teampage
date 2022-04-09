(() => {

  const list = document.querySelector("#bioList"),
  images = document.getElementById("bioImages")
  title = document.querySelector("#bioTitle")
  info = document.querySelector("#bioText");

  let currentBio = '';

  const bioInfo = [
    `Project description.`,

    `Hi! I am Sherine McEween working as a developer in this project. Currenty, I am enrolled in Interactive Media Design course at Fanshawe College on a journey to become a Ui-Ux Desiger and Front-end developer. `,

    `Bhavya's bio.`,
  ]

  function animateBioImg (){
    images.style.right = `${this.dataset.offset * 600}px`;

    getBioText(this.classList, this.dataset.offset);

    currentBio = this.classList[1];
  }

  function getBioText(bioTitle, index) {
    console.log(bioTitle[1], index);


  }

})();
