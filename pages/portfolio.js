//Aca traigo la info de Contentfull

// function addWorkCard(params = {}) {
//   const template = document.querySelector("#servicios1-template");
//   const contenedor = document.querySelector(".contenedor-de-cards");
//   template.content.querySelector(".card-subtitle").textContent = params.title;
//   template.content.querySelector(".card__img").src = params.image;
//   template.content.querySelector(".card-text").textContent = params.descripcion;
//   template.content.querySelector(".card-link").href = params.url;
//   const clone = document.importNode(template.content, true);
//   contenedor.appendChild(clone);
// }

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/b8btg7kqes7l/environments/master/entries?access_token=urZv1ThIopPc-FIwI4vTFL-EP0jIWojllDZ2FZgh6jI&&content_type=portfolioo"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollections = data.items.map((item) => {
        const imgId = item.fields.portfolioImg.sys.id;
        const img = getImgW(imgId, data);
        return {
          title: item.fields.titulo,
          descripcion: item.fields.descripcion,
          url: item.fields.imgUrl,
          image: img.fields.file.url,
        };
      });
      return fieldsCollections;
    });
}

function getImgW(id, data) {
  return data.includes.Asset.find((i) => {
    return i.sys.id == id;
  });
}
const dynamicText = document.querySelector("h1 span");
const words = ["Front-End", "Back-End", "Full-Stack", "Freelancer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // If word is deleted then switch to the next word
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

function main() {
  container = document.querySelector(".header-portfolio");
  header(container);

  containerCarrusel = document.querySelector(".contenedor-carrusell");
  carrusel(containerCarrusel);

  containerFooter = document.querySelector(".footer-portfolio");
  footer(containerFooter);

  containerButtonUp = document.querySelector(".container-buttonUp");
  buttonUp(containerButtonUp);

  const bgAnimation = document.getElementById("bgAnimation");

  const numberOfColorBoxes = 400;

  for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement("div");
    colorBox.classList.add("colorBox");
    bgAnimation.append(colorBox);
  }

  // getWorks().then((works) => {
  //   for (const w of works) {
  //     addWorkCard(w);
  //   }
  // });
  typeEffect();
}

main();
