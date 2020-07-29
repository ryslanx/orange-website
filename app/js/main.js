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

    $('.blog__carousel').slick({
		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		appendArrows: $('.blog__slider'),
  		prevArrow: '<div class="blog__slider-left"><div class="left"><i class="fas fa-arrow-left"></i></div></div>',
  		nextArrow: '<div class="blog__slider-right"><div class="right"><i class="fas fa-arrow-right"></i></div></div>',
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

	$('.blog__carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
		  var index = currentSlide + 1;
		  $('.blog__item').hide();
		  $('.blog__item-' + index).show();
		  console.log('.blog__item-' + index);
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