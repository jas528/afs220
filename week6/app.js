const menu=document.querySelector("#mobile-menu")
const menuLinks=document.querySelector('.navbar__menu')

const mobleMenu=()=>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}