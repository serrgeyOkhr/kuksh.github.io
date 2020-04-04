$('[data-fancybox="gallery"]').fancybox({
    baseClass: "fancybox-custom-layout",
    infobar: true,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs", "share"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption: function(instance) {
      return '<h3>Проект к 75-летию</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
    }
  });
$('[data-fancybox="gallery2"]').fancybox({
    baseClass: "fancybox-custom-layout",
    infobar: true,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs", "share"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption: function(instance) {
      return '<h3>Конкурс в «Crona»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
    }
  });
$('[data-fancybox="gallery3"]').fancybox({
    baseClass: "fancybox-custom-layout",
    infobar: true,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs", "share"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption: function(instance) {
      return '<h3>Арт «Природа»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
    }
  });
$('[data-fancybox="gallery4"]').fancybox({
    baseClass: "fancybox-custom-layout",
    infobar: true,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs", "share"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption: function(instance) {
      return '<h3>К 75-летию в Краснообске</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
    }
  });
$('[data-fancybox="gallery5"]').fancybox({
    baseClass: "fancybox-custom-layout",
    infobar: true,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs", "share"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption: function(instance) {
      return '<h3>Арт на Орионе</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
    }
  });
$('[data-fancybox="gallery6"]').fancybox({
    baseClass: "fancybox-custom-layout",
    infobar: true,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs", "share"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption: function(instance) {
      return '<h3>Арт в Доме молодежи</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
    }
  });
$('[data-fancybox="gallery7"]').fancybox({
    baseClass: "fancybox-custom-layout",
    infobar: true,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs", "share"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption: function(instance) {
      return '<h3>Фестиваль «Жилфонд»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
    }
  });
$('[data-fancybox="gallery8"]').fancybox({
    baseClass: "fancybox-custom-layout",
    infobar: true,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs", "share"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption: function(instance) {
      return '<h3>Арт на мусоровозе</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
    }
  });
$('[data-fancybox="gallery9"]').fancybox({
    baseClass: "fancybox-custom-layout",
    infobar: true,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs", "share"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption: function(instance) {
      return '<h3>Проект «Авангард»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
    }
  });

  $(document).ready(function(){
    $('.idn-sliders').slick({
      arrows: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
          }
        },
      ]
    });
  });
