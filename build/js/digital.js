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
      return '<h3>Карнавал</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Girl ART</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Арт под акварель</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Undergraund</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Fashion ART</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Проект «Читай город»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Проект «Вейперная»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Подводный мир</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
      return '<h3>Проект «НТИ ргу»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
    }
  });
$('[data-fancybox="gallery10"]').fancybox({
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
      return '<h3>Проект «НТИ ргу»</h3><p>А здесь краткое описсание того, что ты делал. Что бы прям вообще кайф был</p>';
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
