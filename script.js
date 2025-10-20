// função do botão de dark

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// funçao do botão de menu
let botaomenu = document.getElementById('botao-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


botaomenu.addEventListener('click',()=>{
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',()=>{
  menu.classList.remove('abrir-menu')
})
