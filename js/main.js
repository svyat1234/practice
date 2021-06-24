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
      var modal = $('.modal'), 
          modalBtn = $('[data-toggle=modal]'),
          closeBtn = $('.modal__close'),
          switchModal = () => {
              modal.toggleClass('modal--visible');
          } ;
      modalBtn.on('click', switchModal );
      closeBtn.on('click', switchModal);
      
      // пропадает (и почему то появляется) при нажатии на Esc
      $(document).keyup(function (e) {
          if (e.key === "Escape") {
              modal.removeClass('modal--visible');
          }
      });
      // Скрывает модально окно при нажатии вне него
      $(document).click(function (event) {
          if ($(event.target).is('.modal')) {
              modal.toggleClass('modal--visible');
          }
      });
      $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
          // simple rule, converted to {required:true}
          userName: {
            required: true,
            minlength: 2
          },
          userPhone: "required",
          // compound rule
          userEmail: {
            required: true,
            email: true
          },
          policyChekbox: {
            required: true
          }
        }, // сообщения
        messages: {
          userName: {
            required: "Имя обязательно",
            minlength: "Имя должно быть не короче двух букв"
          },
          userPhone: "Телефон обязателен",
          userEmail: {
            required: "Email обязателен",
            email: "Введите в формате: name@domain.com"
          },
          policyChekbox: {
            required: "Согласитесь с обработкой данных"
          }
        },
        submitHandler: function(form) {
          $.ajax({
              type: "POST",
              url: "send.php",
              data: $(form).serialize(),
              success: function (response) {
                  console.log('Ajax сработал. Ответ сервера:' + response);
                  $(form)[0].reset();
                  modal.removeClass('modal--visible');
                  alert('Спасибо за заявку! Мы свяжемся с вами в течении 15 минут.')
              }
          });
      }
    });
      $('.questions__form').validate({
        errorClass: "invalid",
        rules: {
          // simple rule, converted to {required:true}
          userName: {
            required: true,
            minlength: 2
          },
          userPhone: "required",
          // compound rule
          userEmail: {
            required: true,
            email: true
          },
          policyChekbox: {
            required: true
          }
        }, // сообщения
        messages: {
          userName: {
            required: "Имя обязательно",
            minlength: "Имя должно быть не короче двух букв"
          },
          userPhone: "Телефон обязателен",
          userEmail: {
            required: "Email обязателен",
            email: "Введите в формате: name@domain.com"
          },
          policyChekbox: {
            required: "Согласитесь с обработкой данных"
          }
        },
        submitHandler: function(form) {
          $.ajax({
              type: "POST",
              url: "send.php",
              data: $(form).serialize(),
              success: function (response) {
                  console.log('Ajax сработал. Ответ сервера:' + response);
                  $(form)[0].reset();
                  modal.removeClass('modal--visible');
                  alert('Спасибо за заявку! Мы свяжемся с вами в течении 15 минут.')
              }
          });
      }
    });
      $('.contacts__form').validate({
        errorClass: "invalid",
        rules: {
          // simple rule, converted to {required:true}
          userName: {
            required: true,
            minlength: 2
          },
          userText: "required",
          // compound rule
          userEmail: {
            required: true,
            email: true
          },
          policyChekbox: {
            required: true
          }
        }, // сообщения
        messages: {
          userName: {
            required: "Имя обязательно",
            minlength: "Имя должно быть не короче двух букв"
          },
          userText: "Задайте вопрос",
          userEmail: {
            required: "Email обязателен",
            email: "Введите в формате: name@domain.com"
          },
          policyChekbox: {
            required: "Согласитесь с обработкой данных"
          }
        },
        submitHandler: function(form) {
          $.ajax({
              type: "POST",
              url: "send.php",
              data: $(form).serialize(),
              success: function (response) {
                  console.log('Ajax сработал. Ответ сервера:' + response);
                  $(form)[0].reset();
                  modal.removeClass('modal--visible');
                  alert('Спасибо за заявку! Мы свяжемся с вами в течении 15 минут.')
              }
          });
      }
    });

    $('[type=tel]').mask('+7(000) 000-00-00');
    });
    // $('#onIntro').on('click', function(e){
    //     $('html,body').stop().animate({ scrollTop: $('#toIntro').offset().top - 100}, 1000);
    //     e.preventDefault();
    //   });
    // $('#onSolidWorks ').on('click', function(e){
    //     $('html,body').stop().animate({ scrollTop: $('#toSolidWorks').offset().top - 100}, 1000);
    //     e.preventDefault();
    //   });
    // $('#onSiemens').on('click', function(e){
    //     $('html,body').stop().animate({ scrollTop: $('#toSiemens').offset().top - 100}, 1000);
    //     e.preventDefault();
    //   });
    // $('#onAutocad ').on('click', function(e){
    //     $('html,body').stop().animate({ scrollTop: $('#toAutocad').offset().top - 100}, 1000);
    //     e.preventDefault();
    //   });


      