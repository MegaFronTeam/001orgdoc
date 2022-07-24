"use strict";

function ownKeys(object, enumerableOnly) {
	var keys = Object.keys(object);

	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		if (enumerableOnly) symbols = symbols.filter(function (sym) {
			return Object.getOwnPropertyDescriptor(object, sym).enumerable;
		});
		keys.push.apply(keys, symbols);
	}

	return keys;
}

function _objectSpread(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i] != null ? arguments[i] : {};

		if (i % 2) {
			ownKeys(Object(source), true).forEach(function (key) {
				_defineProperty(target, key, source[key]);
			});
		} else if (Object.getOwnPropertyDescriptors) {
			Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
		} else {
			ownKeys(Object(source)).forEach(function (key) {
				Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
			});
		}
	}

	return target;
}

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true
		});
	} else {
		obj[key] = value;
	}

	return obj;
}

var $ = jQuery;

if ($('#unWrapWidget').length) {
	$('#unWrapWidget').unwrap();
}

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal, .link-modal-js").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".fancy, .wp-block-image a").fancybox({
			protect: true
		});
		$().fancybox({
			selector: '.slick-slide:not(.slick-cloned) a',
			hash: false
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {
				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});

				_this.menuMobile.classList.toggle("active");

				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
		});

		_this.menuMobile.classList.remove("active");

		_this.body.classList.remove("fixed");
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu();

		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);

				_this.closeMenu();
			});
		});

		document.addEventListener('mouseup', function (event) {
			var container = event.target.closest(".menu-mobile--js.active"); // (1)

			if (!container) {
				_this.closeMenu();
			}
		});
	},
	// /mobileMenu
	// табы  .
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/6.png);"></div>')
	// /добавляет подложку для pixel perfect
	// /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}); // конец добавил
		// if (window.matchMedia("(min-width: 992px)").matches) {
		// 	JSCCommon.closeMenu();
		// }
	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var icon = '<svg width = "18" height = "13" xmlns = "http://www.w3.org/2000/svg" version = "1.1" xmlns: xlink = "http://www.w3.org/1999/xlink" xmlns: avocode = "https://avocode.com/" viewBox = "0 0 18 13" > <defs></defs> <g><g><path d="M-0.00018,6.99896v-1.00096l16.20587,0l-5.19071,-5.19059l0.79388,-0.79371l6.1758,6.17591l-0.30905,0.3088l0.30905,0.30894l-6.1758,6.17591l-0.79388,-0.79371l5.1904,-5.19059z" fill="#90c336" fill-opacity="1"></path></g></g></svg> ';
	var arrl2 = ' <div class="r">' + icon,
			arrr2 = ' <div class="l">' + icon; // // карусель

	var defaultSlide = {
		speed: 600,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		autoplaySpeed: 6000,
		lazyLoad: 'progressive'
	};
	$('.section').each(function () {
		$(this).find('.slider--js').slick(_objectSpread({}, defaultSlide, {
			slidesToShow: 2,
			autoplay: true,
			appendArrows: $(this).find('.arrow-wrap'),
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
					arrows: true
				}
			}]
		}));
	}); // $('.s-gal__slider\
	// ,.slider-for2 ')
	// 	.on('lazyLoaded', function (event, slick, image, imageSource) {
	// 		image.parent().css('background-image', 'url(' + image.attr('src') + ')');
	// 	});
	// slider
	// const swiper4 = new Swiper('.color-slider', {
	// 	// slidesPerView: 5,
	// 	slidesPerView: 'auto',
	// 	watchOverflow: true,
	// 	spaceBetween: 0,
	// 	freeMode: true,
	// 	watchOverflow: true,
	// 	slidesPerGroup: 3,
	// 	// centeredSlides: true,
	// 	loop: true,
	// 	loopFillGroupWithBlank: true,
	// 	touchRatio: 0.2,
	// 	slideToClickedSlide: true,
	// 	freeModeMomentum: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// });
	// modal window
	//    const wow = new WOW({ mobile: false });
	//         wow.init();
	//Replace all SVG images with inline SVG

	$('img.img-svg, .menu-image').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg'); // Add replaced image's classes to the new SVG

			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			} // Remove any invalid XML tags as per http://validator.w3.org


			$svg = $svg.removeAttr('xmlns:a'); // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
			} // Replace image with new SVG


			$img.replaceWith($svg);
		}, 'xml');
	}); // accordion

	$('.accordion-item__title').click(function () {
		var $this = $(this);
		$this.next().slideToggle();
		$this.toggleClass("active");
	});
	var wow = new WOW({
		mobile: false
	});
	wow.init();
	$('.header').hcSticky({
		stickTo: 'body'
	});
	$('.top-nav__menu-wrap li').each(function () {
		if ($(this).children().length > 1) {
			$(".menu-item-has-children").addClass("menu-item-has-children");
		}
	});
	var tabsSl = new Swiper('.top-nav__menu-wrap', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		freeMode: true,
		freeModeMomentum: true,
		// spaceBetween: 30,
		watchOverflow: true,
		// spaceBetween: 10
	});
	let sCardSliderRev = new Swiper('.sCardSlider--rev .sCardSlider__slider--js', {
		watchOverflow: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		// lazy: {
		// 	loadPrevNext: true,
		// 	loadPrevNextAmount: 10,
		// },
		loop: true,
		//-
		navigation: {
			nextEl: '.sCardSlider--rev .swiper-button-next',
			prevEl: '.sCardSlider--rev .swiper-button-prev'
		},
		pagination: {
			el: '.sCardSlider--rev .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
	let sCardSliderCert = new Swiper('.sCardSlider--cert .sCardSlider__slider--js', {
		watchOverflow: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		// lazy: {
		// 	loadPrevNext: true,
		// 	loadPrevNextAmount: 10,
		// },
		loop: true,
		//-
		navigation: {
			nextEl: '.sCardSlider--cert .swiper-button-next',
			prevEl: '.sCardSlider--cert .swiper-button-prev'
		},
		pagination: {
			el: '.sCardSlider--cert .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
	window.bioEp = {
		// Private variables
		bgEl: {},
		popupEl: {},
		closeBtnEl: {},
		shown: false,
		overflowDefault: "visible",
		transformDefault: "",
		// Popup options
		width: 400,
		height: 220,
		html: "",
		css: "",
		fonts: [],
		delay: 0,
		showOnDelay: false,
		cookieExp: 0,
		showOncePerSession: false,
		onPopup: null,
		// Object for handling cookies, taken from QuirksMode
		// http://www.quirksmode.org/js/cookies.html
		cookieManager: {
			// Create a cookie
			create: function create(name, value, days, sessionOnly) {
				var expires = "";
				if (sessionOnly) expires = "; expires=0";else if (days) {
					var date = new Date();
					date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
					expires = "; expires=" + date.toGMTString();
				}
				document.cookie = name + "=" + value + expires + "; path=/";
			},
			// Get the value of a cookie
			get: function get(name) {
				var nameEQ = name + "=";
				var ca = document.cookie.split(";");

				for (var i = 0; i < ca.length; i++) {
					var c = ca[i];

					while (c.charAt(0) == " ") {
						c = c.substring(1, c.length);
					}

					if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
				}

				return null;
			},
			// Delete a cookie
			erase: function erase(name) {
				this.create(name, "", -1);
			}
		},
		// Handle the bioep_shown cookie
		// If present and true, return true
		// If not present or false, create and return false
		checkCookie: function checkCookie() {
			// Handle cookie reset
			if (this.cookieExp <= 0) {
				// Handle showing pop up once per browser session.
				if (this.showOncePerSession && this.cookieManager.get("bioep_shown_session") == "true") return true;
				this.cookieManager.erase("bioep_shown");
				return false;
			} // If cookie is set to true


			if (this.cookieManager.get("bioep_shown") == "true") return true;
			return false;
		},
		// Add font stylesheets and CSS for the popup
		addCSS: function addCSS() {},
		// Add the popup to the page
		addPopup: function addPopup() {
			// Add the background div
			this.bgEl = document.createElement("div");
			this.bgEl.id = "bio_ep_bg";
			document.body.appendChild(this.bgEl); // Add the popup

			if (document.getElementById("bio_ep")) this.popupEl = document.getElementById("bio_ep");else {
				this.popupEl = document.createElement("div");
				this.popupEl.id = "bio_ep";
				this.popupEl.innerHTML = this.html;
				document.body.appendChild(this.popupEl);
			} // Add the close button

			if (document.getElementById("bio_ep_close")) this.closeBtnEl = document.getElementById("bio_ep_close");else {
				this.closeBtnEl = document.createElement("div");
				this.closeBtnEl.id = "bio_ep_close";
				this.closeBtnEl.appendChild(document.createTextNode("X"));
				this.popupEl.insertBefore(this.closeBtnEl, this.popupEl.firstChild);
			}
		},
		// Show the popup
		showPopup: function showPopup() {
			if (this.shown) return;
			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-call-2',
				type: 'inline'
			}); // this.bgEl.style.display = "block";
			// this.popupEl.style.display = "block";
			// // Handle scaling
			// this.scalePopup();
			// // Save body overflow value and hide scrollbars
			// this.overflowDefault = document.body.style.overflow;
			// document.body.style.overflow = "hidden";

			this.shown = true;
			this.cookieManager.create("bioep_shown", "true", this.cookieExp, false);
			this.cookieManager.create("bioep_shown_session", "true", 0, true);

			if (typeof this.onPopup === "function") {
				this.onPopup();
			}
		},
		// Hide the popup
		hidePopup: function hidePopup() {},
		// Handle scaling the popup
		scalePopup: function scalePopup() {},
		// Event listener initialisation for all browsers
		addEvent: function addEvent(obj, event, callback) {
			if (obj.addEventListener) obj.addEventListener(event, callback, false);else if (obj.attachEvent) obj.attachEvent("on" + event, callback);
		},
		// Load event listeners for the popup
		loadEvents: function loadEvents() {
			this.addEvent(document, "mouseout", function (e) {
				e = e ? e : window.event; // If this is an autocomplete element.

				if (e.target.tagName.toLowerCase() == "input") return; // Get the current viewport width.

				var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); // If the current mouse X position is within 50px of the right edge
				// of the viewport, return.

				if (e.clientX >= vpWidth - 50) return; // If the current mouse Y position is not within 50px of the top
				// edge of the viewport, return.

				if (e.clientY >= 50) return; // Reliable, works on mouse exiting window and
				// user switching active program

				var from = e.relatedTarget || e.toElement;
				if (!from) bioEp.showPopup();
			}.bind(this)); // Handle the popup close button

			this.addEvent(this.closeBtnEl, "click", function () {
				bioEp.hidePopup();
			}); // Handle window resizing

			this.addEvent(window, "resize", function () {
				bioEp.scalePopup();
			});
		},
		// Set user defined options for the popup
		setOptions: function setOptions(opts) {
			this.width = typeof opts.width === 'undefined' ? this.width : opts.width;
			this.height = typeof opts.height === 'undefined' ? this.height : opts.height;
			this.html = typeof opts.html === 'undefined' ? this.html : opts.html;
			this.css = typeof opts.css === 'undefined' ? this.css : opts.css;
			this.fonts = typeof opts.fonts === 'undefined' ? this.fonts : opts.fonts;
			this.delay = typeof opts.delay === 'undefined' ? this.delay : opts.delay;
			this.showOnDelay = typeof opts.showOnDelay === 'undefined' ? this.showOnDelay : opts.showOnDelay;
			this.cookieExp = typeof opts.cookieExp === 'undefined' ? this.cookieExp : opts.cookieExp;
			this.showOncePerSession = typeof opts.showOncePerSession === 'undefined' ? this.showOncePerSession : opts.showOncePerSession;
			this.onPopup = typeof opts.onPopup === 'undefined' ? this.onPopup : opts.onPopup;
		},
		// Ensure the DOM has loaded
		domReady: function domReady(callback) {
			document.readyState === "interactive" || document.readyState === "complete" ? callback() : this.addEvent(document, "DOMContentLoaded", callback);
		},
		// Initialize
		init: function init(opts) {
			// Handle options
			if (typeof opts !== 'undefined') this.setOptions(opts);
			this.addCSS();
			this.domReady(function () {
				// Handle the cookie
				// if(bioEp.checkCookie()) return;
				// Add the popup
				bioEp.addPopup(); // Load events

				setTimeout(function () {
					bioEp.loadEvents();
					if (bioEp.showOnDelay) bioEp.showPopup();
				}, bioEp.delay * 1000);
			});
		}
	};
	setTimeout(function (){
		bioEp.init({});
	}, 20000);
	console.log(1)
	$('.s-content--main').readmore({
		speed: 75,
		lessLink: "<button class=\"btn btn-toggle-js\" type=\"button\">\u0421\u043A\u0440\u044B\u0442\u044C\n\t</button> ",
		moreLink: "<button class=\"btn btn-toggle-js\" type=\"button\">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C\n\t</button> "
	});
	let sCasesSlider = new Swiper('.sCases__slider--js', {
		watchOverflow: true,
		slidesPerView: 1,
		spaceBetween: 30,
		// lazy: {
		// 	loadPrevNext: true,
		// 	loadPrevNextAmount: 10,
		// },
		loop: true,
		breakpoints: {
			576: {
				slidesPerView: 2
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 3
			}
		},
		//-
		navigation: {
			nextEl: '.sCases .swiper-button-next',
			prevEl: '.sCases .swiper-button-prev'
		},
		pagination: {
			el: '.sCases .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
	let sPartnersSlider = new Swiper('.sPartners__slider--js', {
		watchOverflow: true,
		slidesPerView: 1,
		spaceBetween: 30,
		// lazy: {
		// 	loadPrevNext: true,
		// 	loadPrevNextAmount: 10,
		// },
		loop: true,
		breakpoints: {
			576: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 3
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 4
			}
		},
		//-
		navigation: {
			nextEl: '.sPartners .swiper-button-next',
			prevEl: '.sPartners .swiper-button-prev'
		},
		pagination: {
			el: '.sPartners .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
	$(".toggle-search--js").click(function () {
		$(".search-wrap--js").slideToggle();
	}); // let div = document.createElement('input');
	// div.className = "clientID";
	// $(this).append('<input type="hidden" name="clientID" class="clientID"/>')
	// this.append(div);

	let sListOfJobsSlider = new Swiper('.slider-jobs--js', {
		watchOverflow: true,
		slidesPerView: 1,
		spaceBetween: 30,
		slidesPerColumn: 2,
		// slidesPerGroup: 2,
		// slidesPerColumnFill: 'row',
		// lazy: {
		// 	loadPrevNext: true,
		// 	loadPrevNextAmount: 10,
		// },
		// loop: true,
		//-
		navigation: {
			nextEl: '.slider-jobs-wrap .swiper-button-next',
			prevEl: '.slider-jobs-wrap .swiper-button-prev'
		},
		pagination: {
			el: '.slider-jobs-wrap .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
	let sfinishedProjectSlider = new Swiper('.slider-projects--js', {
		watchOverflow: true,
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.slider-projects-wrap .swiper-button-next',
			prevEl: '.slider-projects-wrap .swiper-button-prev'
		},
		pagination: {
			el: '.slider-projects-wrap .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
	let sPprSlider = new Swiper('.ppr__slider--js', {
		watchOverflow: true,
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.ppr__slider .swiper-button-next',
			prevEl: '.ppr__slider .swiper-button-prev'
		},
		pagination: {
			el: '.ppr__slider .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
	let sExampleSlider = new Swiper('.slider-examples--js', {
		watchOverflow: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		navigation: {
			nextEl: '.slider-examples-wrap .swiper-button-next',
			prevEl: '.slider-examples-wrap .swiper-button-prev'
		},
		pagination: {
			el: '.slider-examples-wrap .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
	let sServiceSlider = new Swiper('.slider-service--js', {
		watchOverflow: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		navigation: {
			nextEl: '.slider-service-wrap .swiper-button-next',
			prevEl: '.slider-service-wrap .swiper-button-prev'
		},
		pagination: {
			el: '.slider-service-wrap .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	}); // ===================
	ym(21984247, 'getClientID', function (clientID) {
		$(".wpcf7 form .clientID" ).each(function(){
				$(this).val(clientID);
		})
	});
	// window.on('load', function(){
	// })

	$('.sForm--js').each(function () {
		let parent = this;
		let ty = this.dataset.typeServ;
		let input = parent.querySelector('.sForm-search-js');
		let btn = parent.querySelector('.sForm-btn-js');
		let resultItemsCont = parent.querySelector('.ppr-items-js');
		let itemsFound = parent.querySelector('.sForm-items-found');
		let priceFrom = resultItemsCont.getAttribute('data-price-from');
		let btnMute = false;
		$(btn).click(function () {
			console.log(this);

			if (btnMute) {
				return;
			}

			let val = input.value;

			if (val.length > 2) {
				btnMute = true;
				itemsFound.innerHTML = '1';
				$(resultItemsCont).slideUp(function () {
					$(this).toggleClass('active');
					$(".btn-wrap-more, .sForm-items-found").removeClass('d-none');
					let foundItem = `
					<div class="sForm__item">
						<div class="sForm__i-row row align-items-center">
							<div class="sForm__i-title col-md">
								${val}
							</div>
							<div class="sForm__i-price col-md-auto">
								${priceFrom}
							</div>
							<div class="col-md-auto">
								<a class="sForm__i-btn link-modal" href="#modal-price" data-title="${val}" data-price="${priceFrom}">
									${ty || "Заказать ППр"}
								</a>
							</div>
						</div>
					</div>
					`;
					this.innerHTML = foundItem;
					$(".link-modal").fancybox({
						arrows: false,
						infobar: false,
						touch: false,
						type: 'inline',
						i18n: {
							en: {
								CLOSE: "Закрыть",
								NEXT: "Вперед",
								PREV: "Назад" // PLAY_START: "Start slideshow",
								// PLAY_STOP: "Pause slideshow",
								// FULL_SCREEN: "Full screen",
								// THUMBS: "Thumbnails",
								// DOWNLOAD: "Download",
								// SHARE: "Share",
								// ZOOM: "Zoom"

							}
						}
					});
					$(this).slideDown(function () {
						$(this).addClass('active');
						btnMute = false;
					});
				});
			} //-

		}); //let resultItems = document.querySelectorAll('.result-item-js');
	});
	$('.typed-js').each(function () {
		let thisStings = $(this).data("text");
		var arrayOfStrings = thisStings.split(', ');
		let typed = new Typed(this, {
			strings: arrayOfStrings,
			typeSpeed: 50,
			loop: true
		});
	});
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
document.addEventListener('wpcf7mailsent', function (event) {
	ym(21984247, 'reachGoal', 'zakaz');
}, false);
jQuery(document).ready(function ($) {
	$('#more_items').click(function (e) {
		e.preventDefault();
		$('.slide_more').removeClass('d-none');
		$(this).remove();
	});
	if (typeof OptionPos !== 'undefined') {
		$('#title_form').text(TitleForm);
		for (let index = 0; index < OptionPos.length; index++) {
			const element = OptionPos[index];
			$('#pos_select').append('<option data-price="' + element['price'] + '" value="' + element['title'] + '">' + element['title'] + '</option>');
			if (index == 0) {
				$('#price_pos').text(element['price']);
			}
		}
		$('#pos_select').change(function (e) {
			let price = $('option:selected', $('#pos_select')).data('price');
			$('#price_pos').text(price);
		});
	}

	// console.log(zaraz_form_title)
	// console.log(typeof zaraz_form_title !== 'undefined')
	// console.log(typeof zaraz_form_title )
	// console.log(zaraz_form_title)
	if (typeof zaraz_form_title !== 'undefined') {
		$('#zaraz_form_title_el').text(zaraz_form_title);
	}
	if (typeof form_text_home !== 'undefined') {
		$('#zaraz_form_text_el' ).text(form_text_home);
	}

});

$("#modal-call-2 [name=\"form-id\"]").val("Не нашли, что искали?(форма, при выходе с сайте)")

	$(".toggle-list").click(function(){
		$(this).toggleClass("active").next().find("ul").slideToggle();
	})

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
