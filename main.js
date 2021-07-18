/*jshint jquery:true */

(function($,w,d){
	'use strict';

	/* global google: false */

	/**
	 * Nav fixed
	 */
	var winDow = $(w);
	try{
		$('.triggerAnimation').waypoint(function() {
			var animation = $(this).attr('data-animate');
			$(this).css('opacity', '');
			$(this).addClass("animated " + animation);

		},
			{
				offset: '75%',
				triggerOnce: true
			}
		);
		var _header = $('header.header').first(),
			_nav = $('.navbar-default').first(),
			_offset = _nav.position().top;
		if( winDow.width()>767 ){
			winDow.on('scroll', function(){
				if( winDow.scrollTop() >= _offset ){
					_nav.addClass('navbar-fixed-top');
					_header.addClass('active');
				}else{
					_nav.removeClass('navbar-fixed-top');
					_header.removeClass('active');
				}
			}).trigger('scroll');
		}


		// navbar toggle
		var _togle =  _nav.find('.nabar-togle');
		if(_togle.length ){
			_togle.off('click').on('click', function(){
				var _nav_mobile = _nav.find($(this).data('target')),
					_this = $(this);
				if( _nav_mobile.hasClass('in') ){
					_nav_mobile.fadeOut(function(){
						$(this).removeClass('outin bounceInDown bounceInLeft in');
					});
					_this.addClass('collapsed');
				}else{
					var _wContainer = $('body').find('.container').first().width(),
						_wW = winDow.width(),
						_class_name = 'bounceInLeft',
						_maxW = ( _wW - _wContainer )/2;
					if( _maxW > 300 ){
						_class_name += ' outin';
						_nav_mobile.css('width', _maxW+70);
					}

					_nav_mobile.fadeIn().addClass('in').addClass( _class_name );
					setTimeout(function(){
						_this.removeClass('collapsed');
					},600);
				}
			});
		}

		// active hover search
		_header.on('mouseenter','.search,.form-search', function(){
			_header.addClass('search-fixed');
		}).on('mouseleave', '.search,.form-search', function(){
			_header.removeClass('search-fixed');
		});
	}catch(err){

	}
	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/
		// Needed variables
		var $container=$('.iso-call');
		var $filter=$('.filter');

		try{

			$('.mixit-call').each(function(){
				$(this).mixItUp({
					selectors:{
						target: '.project-post'
					}
				});
			});
			$('.filters').on('click','a',function(e){
				e.preventDefault();
			});
			$container.imagesLoaded( function(){
				$container.trigger('resize');
				$container.isotope({
					filter:'*',
					itemSelector: '.project-post',
					layoutMode:'masonry',
					percentPosition: true,
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		winDow.on('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('a').on('click', function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


	var filterItemA	= $('.filter li a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});

	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
		// Example with multiple objects
		$('.video').magnificPopup({
			type: 'iframe'
		});

	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  countup
	/*-------------------------------------------------*/
	try{
		$('.circle-countup-box').appear(function() {
			$('.circle-countup').easyPieChart({
				delay: 3000,
				size:163,
				barColor: '#4cd7ff',
				trackColor: 'rgba(241,245,247,0.2)',
				scaleColor: false,
				lineWidth: 5,
				trackWidth: 1,
				lineCap: 'butt'
			});
			$('.circle-countup2').easyPieChart({
				delay: 3000,
				size:163,
				barColor: '#4cd7ff',
				trackColor: '#ebebeb',
				scaleColor: false,
				lineWidth: 5,
				trackWidth: 5,
				lineCap: 'butt'
			});
		});
	}catch(err){

	}

	/*-------------------------------------------------*/
	/* =  count increment
	/*-------------------------------------------------*/
	try {
		$('.countup-box').appear(function() {
			$('.timer').each( function(){
				$(this).countTo({
					speed: 4000,
					refreshInterval: 60,
					formatter: function (value, options) {
						return value.toFixed(options.decimals);
					}
				});
			});
		});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	client logo
	/* ---------------------------------------------------------------------- */
	try {
		$('.client-logo').bxSlider({
			slideWidth: 170,
			minSlides: 2,
			maxSlides: 5,
			moveSlides: 1,
			slideMargin: 30
		});

		$('.other-products').bxSlider({
			slideWidth: 135,
			minSlides: 1,
			maxSlides: 3,
			moveSlides: 1,
			slideMargin: 30
		});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Blog
	/* ---------------------------------------------------------------------- */
	try {
		var owl = $(".blog-carousel3,.team-carousel,.testimonial-carousel3");
		owl.owlCarousel({
			autoPlay: 10000,
			loop:true,
			margin:30,
			navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			dots:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				768:{
					items: 2,
				},
				992:{
					items: 3,
					nav:true
				},
				1200:{
					items:3,
					nav:true
				}
			}
		});
		var owl4 = $(".ui-carousel4");
		owl4.owlCarousel({
			autoPlay: 10000,
			loop:true,
			margin:30,
			navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			dots:false,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				768:{
					items: 2,
				},
				992:{
					items: 3,
					nav:true
				},
				1200:{
					items:4,
					nav:true
				}
			}
		});
		var blog_carousel2 = $(".blog-carousel2");
		blog_carousel2.owlCarousel({
			autoPlay: 10000,
			loop:true,
			margin:30,
			navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			dots:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				768:{
					items: 1,
				},
				992:{
					items: 2,
					nav:true
				},
				1200:{
					items:2,
					nav:true
				}
			}
		});


		var one_carousel = $(".testimonial-carousel1,.testimonial-carousel2,.ui-slider-image");
		one_carousel.owlCarousel({
			autoPlay: 10000,
			loop:true,
			items:1,
			margin:30,
			navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			dots:true,
			nav:true,
			responsiveClass:true
		});
		var one2_carousel = $(".testimonial-carousel21");
		one2_carousel.on('initialized.owl.carousel', function(event) {
		    var _element   = $(event.target),
		    	_items     = event.item.count,
		    	_item     = event.item.index-1,
		    	_prev = _item > 1 ? (_item-1) : _items,
		    	_next = _item < _items ? (_item+1) : 1;
		    _element.find('.owl-prev').children('span').remove().end().append('<span>'+_prev+'/'+_items+'</span>');
		    _element.find('.owl-next').children('span').remove().end().append('<span>'+_next+'/'+_items+'</span>');
		});    
		one2_carousel.owlCarousel({
			autoPlay: 10000,
			loop:true,
			items:1,
			margin:30,
			navText:['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
			dots:true,
			nav:true,
			responsiveClass:true
		});

		one2_carousel.on('changed.owl.carousel', function(event) {
		    var _element   = $(event.target),
		    	_items     = event.item.count,
		    	_item     = event.item.index-1,
		    	_prev = _item > 1 ? (_item-1) : _items,
		    	_next = _item < _items ? (_item+1) : 1;
		    _element.find('.owl-prev').children('span').remove().end().append('<span>'+_prev+'/'+_items+'</span>');
		    _element.find('.owl-next').children('span').remove().end().append('<span>'+_next+'/'+_items+'</span>');
		});

		var page_carousel = $(".ui-carousel-page");
		page_carousel.on('initialized.owl.carousel', function(event) {
		    var _element   = $(event.target);
		    _element.find('.owl-dots').children().each(function(){
		    	var _index = $(this).index()+1;
		    	_index = _index < 10 ? '0'+_index : _index;
		    	$(this).children().text( _index );
		    });
		});    
		page_carousel.owlCarousel({
			autoPlay: 10000,
			loop:true,
			items:1,
			margin:30,
			navText:['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
			dots:true,
			nav:true,
			responsiveClass:true
		});
		
		
	} catch(err) {

	}

	try{
		$('.progressbar-wrap').appear(function() {
			$('.ui-progressbar').each( function(){
			    var _ui_progress = $(this).children('.ui-progress');
			    _ui_progress.find('.ui-label').hide();
			    // Set initial value
			    _ui_progress.css('width', _ui_progress.data('initial')+'%');

			    // Simulate some progress
			    var _value = parseFloat( _ui_progress.data('value') ),
			        _break = _ui_progress.data('point') ? parseFloat(_ui_progress.data('point') ) : _value - 5;
			    _ui_progress.animateProgress(_value, function() {
			      $(this).animateProgress(_break, function() {
			        setTimeout(function() {
			          _ui_progress.animateProgress(_value, function() {
			          });
			        }, 2000);
			      });
			    });
			});
		});
	}catch(err){

	}

	try{
		if( $(window).width() > 768 ){
			var _same_height = $('.same-height');
			if( _same_height.length ){
				_same_height.imagesLoaded( function(){
					_same_height.children().matchHeight();
				});
				$(window).on('resize', function(){
					_same_height.children().matchHeight();
				});
			}
			var _testimonial_box = $('.testimonial-box-style');
			if( _testimonial_box.length ){
				_testimonial_box.imagesLoaded( function(){
					_testimonial_box.find('.item').matchHeight();
				});
				$(window).on('resize', function(){
					_testimonial_box.find('.item').matchHeight();
				});
			}
		}
		$('.group-samehei').matchHeight({
		    byRow: false,
		    property: 'height',
		    target: null,
		    remove: false
		});
		$('.client-logo-grid').find('.item').matchHeight({
		    byRow: false,
		    property: 'height',
		    target: null,
		    remove: false
		});
	}catch(err){

	}

	// testimonial slider
	try{
		var _el_slider = $('.ui-center-carousel3'),
			_page_control = $('.page-control'),
			_carousel_ops = {
                visibleItems: 3,
                infiniteScroll: true,
                userChangedCallback: function(obj, currentItem){
                	_page_control.find('li').eq(currentItem).addClass('active').siblings().removeClass('active');
                }
			};
		_el_slider.imagesLoaded( function(){
			_el_slider.AnimatedSlider( _carousel_ops );
			var _hei = 290;
			_el_slider.children().each(function(){
				_hei = $(this).height() > _hei ? $(this).height() : _hei;
			});
			_el_slider.height( _hei + 35 ).css('visibility','visible');
			var el_slider = _el_slider.data("AnimatedSlider");
			$('.page-control').on('click','a', function(e){
				e.preventDefault();
				var _index = parseInt( $(this).attr('href'), 10);
				if( el_slider.currentItem !== _index ){
					el_slider.setItem( _index );
					el_slider.currentItem = _index;
					// el_slider.clearAnimations();
					_page_control.find('li').eq(_index).addClass('active').siblings().removeClass('active');
				}
			});
			$('.nav-control').on('click','.prev', function(){
				el_slider.prevItem();
			}).on('click','.next', function(){
				el_slider.nextItem();
			});
		});
	}catch( err ){

	}


	try{
		$('.wrap-profolio-box').each(function(){
			$(this).niceScroll({
				cursorcolor: "#4cd7ff",
				cursorborder: "none",
			});
		});
	}catch(err){

	}

	// slider price
	try{
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 150,
			values: [ 20, 100 ],
			slide: function( event, ui ) {
				var _el = $(ui.handle),
					_index = _el.index() - 1;
				_el.children().remove();
				_el.append('<span class="ui-value">$'+ui.values[ _index ]+'</span>');
			}
	    });
	    $( "#slider-range" ).find('span.ui-slider-handle').first().append("<span class='ui-value'>$" + $( "#slider-range" ).slider( "values", 0 ) +"</span>" ).next('span.ui-slider-handle').append("<span class='ui-value'>$" + $( "#slider-range" ).slider( "values", 1 )+"</span>");
	}catch(err){

	}


	/*-------------------------------------------------*/
	/* =  Google maps
	/*-------------------------------------------------*/
		var contact = {"lat":"38.582195", "lon":"-121.478755"}; //Change a map coordinate here!

		try {


			var mapContainer = $('#map');
			mapContainer.gmap3({
				action: 'addMarker',
				marker:{
					options:{
						icon : new google.maps.MarkerImage('images/marker.png')
					}
				},
				latLng: [contact.lat, contact.lon],
				map:{
					center: [contact.lat, contact.lon],
					zoom: 12,
					styles: [
						{
							featureType: 'water',
							elementType: 'geometry.fill',
							stylers: [
								{ color: '#2b2b2b' }
							]
						},
						{
							featureType: 'landscape',
							elementType: 'geometry',
							stylers: [
								{ hue: '#333333' },
								{ saturation: -100 },
								{ lightness: -78 },
								{ visibility: 'on' }
							]
						},
						{
							featureType: 'poi',
							elementType: 'geometry',
							stylers: [
								{ color: '#333' }
							]
						},
						{
							featureType: 'road',
							elementType: 'geometry',
							stylers: [
								{ color: '#2e2e2e' }
							]
						},
						{
							featureType: 'all',
							elementType: 'labels',
							stylers: [
								{ hue: '#333' },
								{ saturation: -100 },
								{ lightness: -38 },
								{ visibility: 'on' }
							]
						},
						{
							featureType: 'administrative',
							elementType: 'labels',
							stylers: [
								{ hue: '#656565' },
								{ saturation: -100 },
								{ lightness: -38 },
								{ visibility: 'on' }
							]
						},
						{
							featureType: 'transit',
							elementType: 'geometry',
							stylers: [
								{ hue: '#333333' },
								{ saturation: 0 },
								{ lightness: -73 },
								{ visibility: 'on' }
							]
						}
					]
					},
				},
				{action: 'setOptions', args:[{scrollwheel:false}]}
			);


			var mapContainer2 = $('#map2');
			mapContainer2.gmap3({
				action: 'addMarker',
				marker:{
					options:{
						icon : new google.maps.MarkerImage('images/marker.png')
					}
				},
				latLng: [contact.lat, contact.lon],
				map:{
					center: [contact.lat, contact.lon],
					zoom: 12,
					styles: [
						{
							featureType: 'water',
							elementType: 'geometry.fill',
							stylers: [
								{ color: '#2b2b2b' }
							]
						},
						{
							featureType: 'landscape',
							elementType: 'geometry',
							stylers: [
								{ hue: '#333333' },
								{ saturation: -100 },
								{ lightness: -78 },
								{ visibility: 'on' }
							]
						},
						{
							featureType: 'poi',
							elementType: 'geometry',
							stylers: [
								{ color: '#333' }
							]
						},
						{
							featureType: 'road',
							elementType: 'geometry',
							stylers: [
								{ color: '#2e2e2e' }
							]
						},
						{
							featureType: 'all',
							elementType: 'labels',
							stylers: [
								{ hue: '#333' },
								{ saturation: -100 },
								{ lightness: -38 },
								{ visibility: 'on' }
							]
						},
						{
							featureType: 'administrative',
							elementType: 'labels',
							stylers: [
								{ hue: '#656565' },
								{ saturation: -100 },
								{ lightness: -38 },
								{ visibility: 'on' }
							]
						},
						{
							featureType: 'transit',
							elementType: 'geometry',
							stylers: [
								{ hue: '#333333' },
								{ saturation: 0 },
								{ lightness: -73 },
								{ visibility: 'on' }
							]
						}
					]
					},
				},
				{action: 'setOptions', args:[{scrollwheel:false}]}
			);

			var mapContainer3 = $('#map3');
			mapContainer3.gmap3({
				action: 'addMarker',
				marker:{
					options:{
						icon : new google.maps.MarkerImage('images/marker.png')
					}
				},
				latLng: [contact.lat, contact.lon],
				map:{
					center: [contact.lat, contact.lon],
					zoom: 12,
					styles: [
						{
							featureType: 'water',
							elementType: 'all',
							stylers: [
								{ hue: '#f2f2f2' },
								{ saturation: -100 },
								{ lightness: 79 },
								{ visibility: 'on' }
							]
						},{
							featureType: 'poi',
							elementType: 'all',
							stylers: [
								{ hue: '#f2f2f2' },
								{ saturation: -100 },
								{ lightness: 77 },
								{ visibility: 'on' }
							]
						},{
							featureType: 'landscape',
							elementType: 'all',
							stylers: [
								{ hue: '#f2f2f2' },
								{ saturation: -100 },
								{ lightness: 54 },
								{ visibility: 'on' }
							]
						},{
							featureType: 'road',
							elementType: 'all',
							stylers: [
								{ hue: '#d6d6d6' },
								{ saturation: -100 },
								{ lightness: 55 },
								{ visibility: 'on' }
							]
						},{
							featureType: 'road.local',
							elementType: 'all',
							stylers: [
								{ hue: '#ffffff' },
								{ saturation: -100 },
								{ lightness: 100 },
								{ visibility: 'on' }
							]
						},
						{
							featureType: 'all',
							elementType: 'labels',
					  		stylers: [
								{ visibility: 'off' }
							]
						}
					]
					},
				},
				{action: 'setOptions', args:[{scrollwheel:false}]}
			);
		} catch(err) {

		}

	/*-------------------------------------------------*/
	/* =  product increase
	/*-------------------------------------------------*/
	
	var btnIncrease = $('button.increase'),
		btnDecrease = $('button.decrease');

	btnIncrease.on('click', function(event){
		event.preventDefault();
		var fieldVal = $(this).parent('div.quantity-add').find(':text').val();
		var nextVal = parseFloat(fieldVal) + 1;
		$(this).parent('div.quantity-add').find(':text').val(nextVal);
	});

	btnDecrease.on('click', function(event){
		event.preventDefault();
		var fieldVal = $(this).parent('div.quantity-add').find(':text').val();
		var nextVal = parseFloat(fieldVal) - 1;
		if (fieldVal > 0) {
			$(this).parent('div.quantity-add').find(':text').val(nextVal);
		} else {
			$(this).parent('div.quantity-add').find(':text').val(0);
		}
	});

	// ship to different address
	$('#checkbox-ship-to-different-address').on('click', function(){
		if( $(this).is(":checked") ){
			$(this).parent().next('.shipping_address').fadeIn();
		}else{
			$(this).parent().next('.shipping_address').fadeOut();
		}
	});
	$('#list-payment').on('click',':radio', function(){
		if( $(this).is(':checked') ){
			$(this).closest('#list-payment').find('p').slideUp();
			$(this).parent().next('p').slideDown();
		}
	});


})(window.jQuery, window, document);