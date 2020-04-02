// JavaScript Document


/*$(document).ready(function(){       
            var scroll_pos = 0;
			
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
				vh = $("#home").height();
                if(scroll_pos > (vh-45)) {
                    $("svg #logo").css('fill', '#fff');
                    $("#menu ul li a").css('color', '#fff');

                } else {
                    $("svg #logo").css('fill', '#44433F');
                    $("#menu ul li a").css('color', '#6B685F');
                }
            });
        });
	*/
	
	
/*$(document).ready(function(){       
            var scroll_pos = 0;
			
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
				vh = $("#home").height();
                if(scroll_pos > (vh-85)) {
                    $("#container").css('background-color', '#fff');
                    $("nav").css('background-color', '#fff');

                } else {
					$("#container").css('background-color', 'transparent');
                    $("nav").css('background-color', 'transparent');
                }
            });
        });
*/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});


/*

$(function() {
    var div = $('#w1');
    var width = div.width();
    
    div.css('height', width*.6);

});

$(function() {
    var div = $('#w2');
    var width = div.width();
    
    div.css('height', width*.6);
});

$(function() {
    var div = $('#w3');
    var width = div.width();
    
    div.css('height', width*.6);
});

$(function() {
    var div = $('#w4');
    var width = div.width();
    
    div.css('height', width*.6);
});

$(function() {
    var div = $('#w5');
    var width = div.width();
    
    div.css('height', width*.6);
});

$(function() {
    var div = $('#w6');
    var width = div.width();
    
    div.css('height', width*.6);
});

$(function() {
    var div = $('#w7');
    var width = div.width();
    
    div.css('height', width*.6);
});

$(function() {
    var div = $('#w8');
    var width = div.width();
    
    div.css('height', width*.6);
});

$(function() {
    var div = $('#w9');
    var width = div.width();
    
    div.css('height', width*.6);
});

$(function() {
    var div = $('#w10');
    var width = div.width();
    
    div.css('height', width*.6);
});

$(function() {
    var div = $('#w11');
    var width = div.width();
    
    div.css('height', width*.6);
});

$(function() {
    var div = $('#w12');
    var width = div.width();
    
    div.css('height', width*.6);
});
*/

/*
$(function() {
    var div = $('#overlay1');
    var div2 = $('#w5')
    var height = div2.height();
    
    div.css('padding', height*.5, 0px);
});

*/

/*$(function() {
	
$("h1").fitText(1.2, { minFontSize: '80px', maxFontSize: '120px' });

});


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );*/