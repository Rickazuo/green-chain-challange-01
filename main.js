
const menuBtn = document.querySelector('.button-sandwich')
const mobileMenuBtn = document.querySelector('.button-mobile')
const expandMenu = document.querySelector('.main-square')
const expandMenuMobile = document.querySelector('.header-mobile')
let menuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    mobileMenuBtn.classList.add('open')
    expandMenuMobile.classList.add('open')
    menuOpen = true
  } else {
    mobileMenuBtn.classList.remove('open')
    expandMenuMobile.classList.remove('open')
    menuOpen = false
  }
})

