



const slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    duration:2000
};

const slideRight = {
    distance: '150%',
    origin: 'right',
    opacity: null,
    duration:2000
};

const fade ={

}
ScrollReveal().reveal('.slideLeft',slideLeft);
ScrollReveal().reveal('.slideRight',slideRight);
ScrollReveal().reveal('.fade');


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    
    document.getElementById("navbar").style.background = "#000F14";
    
  } else {
    
    document.getElementById("navbar").style.background = "transparent";
    
  }
}