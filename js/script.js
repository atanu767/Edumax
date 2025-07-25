//  const menuBtnIcon = document.querySelector('.menu-btn i');
//   const offcanvas    = document.getElementById('mobileNav');

//   offcanvas.addEventListener('show.bs.offcanvas', () => {
//     menuBtnIcon.classList.replace('fa-bars', 'fa-xmark');
//   });
//   offcanvas.addEventListener('hidden.bs.offcanvas', () => {
//     menuBtnIcon.classList.replace('fa-xmark', 'fa-bars');
//   });

$(document).ready(function(){
  $(".menu-btn").click(function(){
    $(".nav-links").toggleClass("on");
    $(".menu-btn i").toggleClass("fa-bars fa-xmark")
  })
})

