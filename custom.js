$(document).ready(function(){
 $("#carouselId").owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  pagination:true,
  nav:false,
  responsive:{
    0:{
      items:1
    },
    500:{
      items:2
    },
    700:{
      items:3
    },
    1000:{
      items:3
    }
  }
 })
});