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
      return '<h3>Тайный показ</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Проект «Dark Side»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Проект «квАРТира»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Проект «Куклин дом»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Проект «One day films»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Проект «Moskva live»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Проект «Чай Radzha»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Проект «Форум молодежи»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Проект "Я люблю Бердск"</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
