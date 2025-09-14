function mostrarColores() {
  const menu = document.getElementById("menu-colores");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function mostrarOpcionesMedias() {
  const menu = document.getElementById("menu-medias");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function mostrarOpcionesTop() {
  const menu = document.getElementById("menu-top");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function irARedes() {
  document.getElementById("redes").scrollIntoView({ behavior: "smooth" });
}