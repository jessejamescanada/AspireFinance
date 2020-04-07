const navbar = document.querySelector('.nav-container')
const  sticky = navbar.offsetTop;
const topBTN = document.querySelector('.top-btn')
const modal = document.querySelectorAll('.modal')
const modalBTN = document.querySelectorAll('.modalButton')
const closeX = document.querySelectorAll('.close')
const introRM = document.querySelector('.intro-readMore')
const introExtra = document.querySelector('.intro-extra')
const expand = document.querySelectorAll('.expandText')
const expandAnswer = document.querySelectorAll('.expandAnswer')

window.addEventListener('scroll', navScroll)
window.addEventListener('scroll', navOpacity)
window.addEventListener('scroll', topScroll)
topBTN.addEventListener('click', scrollToTop)
window.addEventListener('click', closeMultipleModals)

// FAQ expand / hide questions/answer
for(let i = 0; i < expand.length; i++){
  expand[i].addEventListener('click', function(){
    expandAnswer[i].classList.toggle('hidden')
  })
}


// Intro Expand text
introRM.onclick = function(e){
  introExtra.style.display = 'block'
  introRM.style.display = 'none'
}

// close modal by clicking outside of it
function closeMultipleModals(e){
  if(e.target.classList.contains('modal')){
    for(let i in modal) {
      if(typeof modal[i].style !== 'undefined') modal[i].style.display='none'
    }
  }
}

// close modals by clicking 'X'
for(let i = 0; i < closeX.length; i++){
  closeX[i].addEventListener('click', function(){
    modal[i].style.display = 'none'
  })
}


// show modals
for(let i = 0; i < modalBTN.length; i++){
  modalBTN[i].addEventListener('click', function(){
    modal[i].style.display = 'block'
  })
}

// Scroll functions
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
}

function topScroll() {
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topBTN.style.display = 'block'
  }else{
    topBTN.style.display = 'none'
  }
}

// Navbar opacity functions
function navOpacity(){
  if(window.scrollY > 150){
    navbar.style.opacity = 0.9
  }else{
    navbar.style.opacity = 1
  }
}

function navScroll() {
  if(window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  }else{
    navbar.classList.remove('sticky')
  }
}


