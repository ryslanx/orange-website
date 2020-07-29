$(function(){
	$('.header__slider').slick({
		dots: true,
		arrows: false,
		vertical: true,
	});

	$('.shop__items').slick({
		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		appendArrows: $('.shop__arrows'),
  		prevArrow: '<div class="shop__left"><i class="fas fa-arrow-left"></i></div>',
  		nextArrow: '<div class="shop__right"><i class="fas fa-arrow-right"></i></div>',
  		responsive: [
	    {
	      breakpoint: 415,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    },
  		]
	});

	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	$('.blog__img').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    mainClass: 'mfp-img-mobile',
	    image: {
	      verticalFit: true
	    }     
    });

    $('.bottom__slider').slick({
		vertical: true,
		appendArrows: $('.bottom__slidenav'),
  		prevArrow: '<span class="top"><i class="fas fa-arrow-up"></i></span>',
  		nextArrow: '<span class="bottom"><i class="fas fa-arrow-down"></i></span>'
	});

	$('.fa-bars').on('click', function() {
		$(this).hide();
		$('.mobile__menu').css('display', 'flex');;
		$('.fa-times').show();
	});
	$('.fa-times').on('click', function() {
		$(this).hide();
		$('.mobile__menu').hide();
		$('.fa-bars').show();
	});
  
});