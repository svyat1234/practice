$(document).ready(function(){
    $('.hero-slider').slick({
        speed: 2000,
        autoplay: true,
        draggable: false,
        pauseOnHover: false
    });
    $(window).on("scroll", function() {
        $('.main__header').toggleClass("active", $(this).scrollTop() > 10);
      });
    $(window).on("scroll", function() {
        $('.header__logo__img').toggleClass("header__logo__img-active", $(this).scrollTop() > 10);
      });
      
    });
    $('#onIntro').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#toIntro').offset().top - 100}, 1000);
        e.preventDefault();
      });
    $('#onSolidWorks ').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#toSolidWorks').offset().top - 100}, 1000);
        e.preventDefault();
      });
    $('#onSiemens').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#toSiemens').offset().top - 100}, 1000);
        e.preventDefault();
      });
    $('#onAutocad ').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#toAutocad').offset().top - 100}, 1000);
        e.preventDefault();
      });
