// карусель в блоке работ
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
        margin: 20
      }
    }
  })
});


// input mask для поля ввода телефона

$(function () {
  $("#phone1").mask("8(999) 999-99-99");
  $("#phone2").mask("8(999) 999-99-99");
});


// выделение ссылки на заявку в header при прокрутке страницы более 580px

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 580) {
      $("#callme").addClass("callme_me");
    } else {
      // удалить фон если расстояние от верха менее 580px
      $("#callme").removeClass("callme_me");
    }
  });
});

// плавный переход по ссылкам

$(document).ready(function () {
  $(".links").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top - 62;
    $('body,html').animate({
      scrollTop: top
    }, 1300);
  });
});


// появление ссылки на политику обработки персональных данных при наведении на "перезвоните мне"
window.onload = function () {
  const modalPers = document.querySelector('.btn-modal'),
    modalPers2 = document.querySelector('.btn-modal2'),
    btnCallMe = document.querySelector('.btn-bg-wrap'),
    btnCallMe2 = document.querySelector('.btn-bg-wrap2');

  if ($(window).width() >= 650) {

    btnCallMe.onmouseout = function (e) {
      modalPers.style.visibility = 'hidden';
      modalPers.style.opacity = '0';
    };

    btnCallMe.onmouseover = function (e) {
      modalPers.style.visibility = 'visible';
      modalPers.style.opacity = '1';
    };

    btnCallMe2.onmouseout = function (e) {
      modalPers2.style.visibility = 'hidden';
      modalPers2.style.opacity = '0';
    };

    btnCallMe2.onmouseover = function (e) {
      modalPers2.style.visibility = 'visible';
      modalPers2.style.opacity = '1';
    };
  };
};


// калькулятор цен

(function ($) {
  $(function () {

    calculate();

    jQuery('#calculator input').keyup(function () {
      this.value = this.value.replace(/[^0-9\.,]/g, '');
      this.value = this.value.replace(/[,]/, '.');
    });
    jQuery('#calculator input, #calculator select').change(function () {
      calculate();
    });
    jQuery('#calculator input').keyup(function () {
      calculate();
    });

    function calculate() {
      $('.calculator').each(function (key, val) {
        calcInputs = {};
        $(this).find('input, select').each(function (key, val) {
          name = $(this).attr('name');
          val = $(this).val();
          if (!$.isNumeric(val)) {
            switch (name) {
              case 'area':
                val = '';
                break;
              case 'corners':
                val = '';
                break;
              case 'lamp':
                val = '';
                break;
              case 'tube':
                val = '';
                break;
              case 'chandelier-hook':
                val = '';
                break;
              default:
                break;
            }
            $(this).val(val);
          }
          calcInputs[name] = val;
        });

        total = 0;

        switch (calcInputs.texture) {
          case 'mat':
            total += calcInputs.area * 150;
            break;
          case 'glossy':
            total += calcInputs.area * 300;
            break;
          case 'satin':
            total += calcInputs.area * 200;
            break;
          case 'fabric':
            total += calcInputs.area * 110;
            break;
          default:
            break;
        }




        // кабель
        total += calcInputs.corners * 40;

        // установка коробка
        if (calcInputs['chandelier-hook'] >= 1) {
          total += calcInputs['chandelier-hook'] * 300;
        }
        // установка светильника
        if (calcInputs.lamp >= 1) {
          total += calcInputs.lamp * 150;
        }
        // розетки/выключатели
        if (calcInputs.tube >= 1) {
          total += calcInputs.tube * 150;
        }

        install = calcInputs.area * 0;
        total += install;

        total += ' руб.';
        jQuery(this).find('span.total').html(total);
      });
    }

  });
})(jQuery);;