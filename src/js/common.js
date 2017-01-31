define([
	"bootstrap",
], function() {
	/* 메뉴바 픽스드*/
	function menuFixer() {
		if (document.body.scrollTop>=117.99) {
			$(".header-menu-wrapper").addClass("header-menu-fixed");
		}
		else {
			$(".header-menu-wrapper").removeClass("header-menu-fixed");
		}
	}
	function headerMenuFixed() {
		$(window).on("scroll", function() {
			menuFixer();
		});
	}
	/* 메인로고 마우스오버 이벤트*/
	function mainLogoEnter() {
		$(".header-info-logo").mouseenter( function() {
			$(".main-logo").attr("src", "img/img_zipdoc_logo_ani.gif");
		});
	}
	function mainLogoLeave() {
		$(".header-info-logo").mouseleave( function() {
			$(".main-logo").attr("src", "img/img_zipdoc_logo.png");
		});
	}
	/* 디테일스 마우스오버 이벤트*/
	function detailsEnter() {
		$(".header-details>ul>li>ul>li").mouseenter( function() {
			$(this).find(".details-hover").fadeIn(100);
		});
	}
	function detailsLeave() {
		$(".header-details>ul>li>ul>li").mouseleave( function() {
			$(this).find(".details-hover").fadeOut(100);
		});
	}
	/* 메뉴바 마우스오버 이벤트*/
	function menuBarEnter() {
		$(".header-menu").hover( function() {
			$(".header-details").fadeIn(10);
		});
	}
	function menuBarLeave() {
		$(".header-menu").mouseleave( function() {
			$(".header-details").fadeOut(10);
		});
	}
	/* 메뉴바 링크들~~아직 갤러리만함*/
	$(".header-menu>ul>li").on("click", function() {
		if ($(this).hasClass("header-menu-gallery")) {
			$(location).attr("href", "gallery.html");
		}
		else if ($(this).hasClass("header-menu-community")) {
			$(location).attr("href", "comunity.html");
		}
		else if ($(this).hasClass("header-menu-magazine")) {
			$(location).attr("href", "magazine.html");
		}
		else if ($(this).hasClass("header-menu-partners")) {
			$(location).attr("href", "partners.html");
		}
		else if ($(this).hasClass("header-menu-estimate")) {
			$(location).attr("href", "estimate.html");
		}
		else if ($(this).hasClass("header-menu-store")) {
			$(location).attr("href", "store.html");
		}
	});
	/* 로고클릭시 메인페이지 가기*/
	$(".main-logo").on("click", function() {
			$(location).attr("href", "/");
	});
	/* 헤더 디테일스바 색상변경*/
	$(".header-details-bar>ul>li").on("click", function() {
		$(".header-details-bar>ul>li").removeClass("header-details-bar-active");
		$(this).addClass("header-details-bar-active");
	});

	mainLogoEnter();
	mainLogoLeave();
	detailsEnter();
	detailsLeave();
	menuBarEnter();
	menuBarLeave();
	headerMenuFixed();
});
