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
    caption: function(instance) {
        return '<h3>Мышь компьютерная</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
    caption: function(instance) {
        return '<h3>Телефон будущего</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
    caption: function(instance) {
        return '<h3>Multy-tool</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
    caption: function(instance) {
        return '<h3>Будильник</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
    caption: function(instance) {
        return '<h3>Ланч-бокс</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
    }
});