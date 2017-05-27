var	lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex eros, consequat tempus nunc quis, eleifend finibus ex. Quisque varius magna lectus, vitae tempor metus tempor sed. Phasellus at semper odio. Proin scelerisque ex fermentum ipsum ornare lobortis. Sed non est hendrerit ex aliquam gravida sed in dui. Praesent condimentum dolor a hendrerit porttitor. Etiam eget lacus fringilla, porttitor lorem et, placerat urna. Aliquam et volutpat risus, id feugiat ante. In venenatis sapien sed elit placerat rhoncus."
var lorem1, lorem2, lorem3;
lorem1= lorem + lorem + '<img src="images/sesto elemento.jpg">' + lorem + lorem + lorem + lorem
lorem2= lorem + lorem + '<img src="images/miura.jpg">' + lorem + lorem + lorem + lorem
lorem3= lorem + lorem +  '<img src="images/25.jpg">' + lorem + lorem + lorem + lorem
$ ('.lorem1').html(lorem1);
$ ('.lorem2').html(lorem2);
$ ('.lorem3').html(lorem3);

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
