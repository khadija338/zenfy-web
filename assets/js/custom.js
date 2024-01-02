(function ($) {
	"use strict";

	document.querySelector('.sidebar-button').addEventListener('click', () =>
    document.querySelector('.main-menu').classList.toggle('show-menu'));
    $('.menu-close-btn').on("click", function() {
        $('.main-menu').removeClass('show-menu');
    });
    $('.sidebar-button').on("click", function () {
        $(this).toggleClass('active');
    });




	jQuery('.dropdown-icon').on('click', function () {
		// alert()
		// $(this).next('.mob-submenu').slideToggle();
		jQuery(this).toggleClass('active').next('ul, .mega-menu').slideToggle();
		jQuery(this).parent().siblings().children('ul, .mega-menu').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});


	// sticky header
	window.addEventListener('scroll', function () {
		const header = document.querySelector('header.header-area');
		header.classList.toggle("sticky", window.scrollY > 0);
	});


}(jQuery));