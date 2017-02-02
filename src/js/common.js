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

	/* 메뉴바 디테일스 */
	$(".header-details>ul>li>ul>li>div").on("click", function() {
		if($(this).hasClass("house-clicker")) {
			$(location).attr("href", "gallery.html");
			/* 파라미터를 받아서 하게끔 만들어야함*/
			$("#select-type").val("title");
		}
		else if($(this).hasClass("commercial-clicker")) {

		}
		else if($(this).hasClass("partial-clicker")) {

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

	/* 오른쪽 픽스 값*/
	function popupCloseRemoveTime() {
		$(".yellow-layer").remove();
		$(".zd-popup").remove();
	}
	function popupClose() {
		$(".zd-popup").animate({
			top: "-50%",
		}, 200);
		$(".yellow-layer").fadeOut(300);
		$(".zd-popup").fadeOut(300);
		setTimeout(popupCloseRemoveTime, 300);
	}

	function popupOpen(layerName) {
		$.ajax({
			url: "layers/" + layerName + ".html",
			success: function(html) {
				var blockLayerHTML = "<div class='yellow-layer ajax'></div>";
				$("body").append(blockLayerHTML);
				$("body").append(html);
				$(".yellow-layer").fadeIn(200);
				$(".zd-popup").fadeIn(200);
				$(".zd-popup").animate({
					top: "50%",
				}, 300);
				$(".popup-close-icon, .yellow-layer.ajax").on("click", function() {
					popupClose();
				});
			},
		});
	}

	$(".right-bar-contents>ul>li").on("click", function() {
		if ((this.id) === "detail-estimate") {
			$(location).attr("href", "gallery.html");
		}
		else if ((this.id) === "easy-estimate") {
			popupOpen(this.id);
		}
	});

	mainLogoEnter();
	mainLogoLeave();
	detailsEnter();
	detailsLeave();
	menuBarEnter();
	menuBarLeave();
	headerMenuFixed();
});
