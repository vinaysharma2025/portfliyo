var typing=new Typed(".ti-container", {
    strings: ["", "Web Designer", "Frontend Developer", "", ""],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});


$('.owl-carousel').owlCarousel({
 loop: true,
 margin: 10,
 nav: true,
 autoplay: false,
 nav: false,
 dots: true,
 autoplayTimeout: 1000,
 responsive: {
   0: {
     items: 1
   },
   600: {
     items: 1
   },
   1000: {
     items: 2
   }
 }
})




