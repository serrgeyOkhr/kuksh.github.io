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

  $(document).ready(function(){
    $('.your-class').slick({
      // setting-name: setting-value
    });
  });