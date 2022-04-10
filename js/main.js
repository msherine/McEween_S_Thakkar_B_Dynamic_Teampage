(() => {

  const list = document.querySelector("#bioList"),
  images = document.getElementById("bioImages")
  bioTitle = document.querySelector("#bioTitle")
  bioText = document.querySelector("#bioText");

  let currentBio = '';

  const bioText = [
    `Our FIP Hawaiian Tropic is the brand mashup of two different brands.One being 'Shock top' the beer brand and the second one called the 'Hawaiian Tropic', a sunscreen lotion brand. In this project we tried to combine the branding and packaging to create a new beer flavoured sheer-touch sunscreen lotion. `,

    `Hi! I am Sherine McEween working as a developer in this project. Currenty, I am enrolled in Interactive Media Design course at Fanshawe College on a journey to become a Ui-Ux Desiger and Front-end developer. `,

    `I'm a self-taught designer who loves to solve problems. I developed my kken interest in visual design while pursuing my engineering. After my graduation, I worked with various brands to have fair understanding of design trends and the industry.`,
  ]

  function animateBioImg () {
    images.style.right = `${this.dataset.offset * 300}px`;

    getBioText(this.classList, this.dataset.offset);

    currentBio = this.classList[1];
    debugger;
  }

  function getBioText(bioTitle, index) {
    console.log(bioTitle[1], index);

    bioTitle.textContent = `title \u00A0 ${bioTitle[1]} `;

    bioText.textContent = bioInfo[index];

  }

  list.forEach(list =>
  list.addEventListener('click', animateBioImg));


})();
