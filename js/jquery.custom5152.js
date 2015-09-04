/* <![CDATA[ */
( function( $ ) {
	"use strict";
	
	/* Slides
	================================================== */
	$('#slides').superslides({
		animation: 'fade',
		pagination: false,
		play: 7000,
		animation_speed: 3000,
	});

	$('#portfolio-slider').superslides({
		animation: 'fade',
		pagination: false,
		play: 5000,
		animation_speed: 1500,
		inherit_width_from: '#portfolio-slider-wrapper',
		inherit_height_from: '#portfolio-slider-wrapper'
	});

	$('#portfolio-carousel').bxSlider({
		slideWidth: 255,
		minSlides: 1,
		maxSlides: 4,
		slideMargin: 30,
		moveSlides: 1,
		auto: true,
		autoHover: true,
		pager: false,
		nextText: '',
		prevText: '',
	});

	$('.bx-wrapper .bx-prev').addClass('icon-left-open');
	$('.bx-wrapper .bx-next').addClass('icon-right-open');


	/* Scroll Header
	================================================== */
	var H_height = jQuery(".page-template-template-home #header-section").height();

	if( $.browser.msie && $.browser.version <= 9){
		 jQuery(".page-template-template-home #header-section").css("top", -H_height);
	}

	$(window).on('scroll',function(){

		if( $(window).scrollTop() >= $(window).height()-20){

			if( $.browser.msie && $.browser.version <= 9){
				 jQuery(".page-template-template-home #header-section").stop(true).animate({top: "0"} , 600 );
			}

			jQuery(".page-template-template-home #header-section").addClass("header-fixed");

		}else{

			if( $.browser.msie && $.browser.version <= 9){
				 jQuery(".page-template-template-home #header-section").stop(true).animate({top: -H_height} , 600 );
			}

			jQuery(".page-template-template-home #header-section").removeClass("header-fixed");

			jQuery("#menu_link.active").removeClass('active').next().slideUp();
		}
	});
	 $(document).ready(function(){
		$('#navigation > ul > li > a').addClass('text-hover-color');
	 });
} )( jQuery );
 /* ]]> */	