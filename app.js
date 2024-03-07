let menu= document.querySelector('#menu-bars');
let right =document.querySelector('.right');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    right.classList.toggle('active');
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 500,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  