function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //tag img
  const img = document.querySelector("#profile img")

  //trocar imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/assets/eu.png")
  } else {
    //se tiver dark mode, manter a imagem dark
    img.setAttribute("src", "./assets/assets/eu2.png")
  }
}
