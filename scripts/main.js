//Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 650) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

//main page scroll
$("#scroll").click(function() {
    $('html,body').animate({
        scrollTop: $("#work").offset().top},
        'slow');
  });


//dots
;( function( window ) {

	'use strict';

	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function DotNav( el, options ) {
		this.nav = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	DotNav.prototype.options = {};

  DotNav.prototype._init = function() {
  var dots = [].slice.call( this.nav.querySelectorAll( 'li' ) ), current = 0, self = this;

  dots.forEach( function( dot, idx ) {
    dot.addEventListener( 'click', function( ev ) {
      if( idx !== current ) {
        dots[ current ].className = '';

        setTimeout( function() {
          dot.className += ' current';
          current = idx;
          if( typeof self.options.callback === 'function' ) {
            self.options.callback( current );
          }
        }, 25 );
      }
    } );
  } );
}

	window.DotNav = DotNav;

})( window );

$(".dotsyle > li").click(function() {
    $('html,body').animate({
        scrollTop: href.offset().top},
        'slow');
  });
