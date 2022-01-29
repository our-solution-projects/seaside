/*
  Strata by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  var $window = $(window),
      $header = $('#header'),
      $footer = $('#footer'),
      $main   = $('#main');

  breakpoints({
    xlarge:  [ '1281px',  '1800px' ],
    large:   [ '981px',   '1280px' ],
    medium:  [ '737px',   '980px'  ],
    small:   [ '481px',   '736px'  ],
    xsmall:  [ null,      '480px'  ],
  });

  // Footer.
  breakpoints.on('<=medium', function() {
    $footer.insertAfter($main);
  });

  breakpoints.on('>medium', function() {
    $footer.appendTo($header);
  });

  // Lightbox gallery.
  $window.on('load', function() {
    $('#two').poptrox({
      caption: function($a) { return $a.next('h3').text(); },
      overlayColor: '#2c2c2c',
      overlayOpacity: 0.85,
      popupCloserText: '',
      popupLoaderText: '',
      selector: '.work-item a.image',
      usePopupCaption: true,
      usePopupDefaultStyling: false,
      usePopupEasyClose: false,
      usePopupNav: true,
      windowMargin: (breakpoints.active('<=small') ? 0 : 50)
    });
  });

})(jQuery);
