const menu = document.querySelector('.header__menu');
const menuBurger = document.querySelector('.header__burger');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body');

menuBurger.addEventListener('click', function() {
    menuBurger.classList.toggle('active');
	menu.classList.toggle('active');
    body.classList.toggle('lock');
});

menuList.addEventListener('click', function() {
    menuBurger.classList.remove('active');
	menu.classList.remove('active');
    body.classList.remove('lock');
});

/*------------------------------------------------------------*/

let lastScroll = 0;
const defaultOffSet = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
const showBurger = () => menuBurger.classList.contains('active');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && !showBurger()) {
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('hide');
    }
    lastScroll = scrollPosition();
})

/*-------------------------------------------------------------*/

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  $('.roadmap__box').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
  
  $('.team__box').slick({
    slidesToShow: 5,
    autoplaySpeed: 4000,
    responsive: [
        {
          breakpoint: 1290,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
/*-----------------------------------------------------------*/

SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime    : 800,
  // Размер шага в пикселях 
  stepSize         : 75,

  // Дополнительные настройки:
  
  // Ускорение 
  accelerationDelta : 30,  
  // Максимальное ускорение
  accelerationMax   : 2,   

  // Поддержка клавиатуры
  keyboardSupport   : true,  
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll       : 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm   : true,
  pulseScale       : 4,
  pulseNormalize   : 1,

  // Поддержка тачпада
  touchpadSupport   : true,
})

