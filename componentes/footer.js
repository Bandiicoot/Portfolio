function footer(el) {
  const footerEl = document.createElement("P");
  footerEl.innerHTML = `
    
    <div class="footer-contenedor">
    <h3 class="footer__logo">
      Contactos
    </h3>
    <div class="footer__links">
      <div class="link-linkedin">
        <p>Linkedin</p>
        <i class="fa-brands fa-linkedin"></i>
      </div>
      <div class="link-gitHub">
        <p>GitHub</p>
        <i class="fa-brands fa-github"></i>
      </div>
    </div>
  </div>
  
    
    `;
  el.appendChild(footerEl);

  const linkedinEl = document.querySelector(".link-linkedin");

  linkedinEl.addEventListener("click", () => {
    let ass = document.createElement("a");
    ass.target = "_blank";
    ass.href = "https://www.linkedin.com/in/facundo-piqueras-707a18219/";
    ass.click();
  });

  const gitHubEl = document.querySelector(".link-gitHub");
  gitHubEl.addEventListener("click", () => {
    let ass = document.createElement("a");
    ass.target = "_blank";
    ass.href = "https://github.com/Bandiicoot";
    ass.click();
  });
}
