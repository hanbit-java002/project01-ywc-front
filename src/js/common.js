define([
	"bootstrap",
], function() {
	/* 상단 로그인 회원가입 고개센터*/
	$(".header-info-list>ul>li").on("click", function() {
		if ($(this).hasClass("login")) {
			location.href=global.root+"/login.html";
		}
		else if ($(this).hasClass("register")) {
			location.href=global.root+"/register.html";
		}
		else if ($(this).hasClass("logout")) {
			$.ajax({
				url: global.root+"/api/member/logout",
				success: function(data) {
					if (data.result === "ok") {
						$(".logout").hide();
						$(".mypage").hide();
						$(".login").show();
						$(".register").show();
						alert("로그아웃 되셨습니다.");
					}
				},
			});
		}
		else if ($(this).hasClass("mypage")) {

		}
		else if ($(this).hasClass("customer-service")) {

		}
	});
	/* 로그아웃*/

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
			$(".main-logo").attr("src", global.root+"/img/img_zipdoc_logo_ani.gif");
		});
	}
	function mainLogoLeave() {
		$(".header-info-logo").mouseleave( function() {
			$(".main-logo").attr("src", global.root+"/img/img_zipdoc_logo.png");
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

	function setHeaderDetails(id) {
		$.ajax({
			url: global.root+"/api/header/setdetails",
			data: {
				headerDetails: id,
			},
			error: function(jqXHR) {
				alert(jqXHR.responseJSON.message);
			},
		});
	}

	/* 메뉴바 링크들*/
	$(".header-menu>ul>li").on("click", function() {
		if ($(this).hasClass("header-menu-gallery")) {
			setHeaderDetails("all");
			location.href = global.root+"/html-gallery"+"/gallery.html";
		}
		else if ($(this).hasClass("header-menu-community")) {
			setHeaderDetails("curious");
			location.href = global.root+"/comunity.html";
		}
		else if ($(this).hasClass("header-menu-magazine")) {
			setHeaderDetails("interior-tip");
			location.href =global.root+"/magazine.html";
		}
		else if ($(this).hasClass("header-menu-partners")) {
			setHeaderDetails("partners-index");
			location.href =global.root+"/partners.html";
		}
		else if ($(this).hasClass("header-menu-estimate")) {
			setHeaderDetails("estimate-apply");
			location.href =global.root+"/estimate.html";
		}
		else if ($(this).hasClass("header-menu-store")) {
			setHeaderDetails("store");
			location.href =global.root+"/store.html";
		}
	});

	/* 메뉴바 디테일스 */
	$(".header-details>ul>li>ul>li>div").on("click", function() {
		setHeaderDetails(this.id);
		if(this.id === "house") {
			location.href = global.root+"/html-gallery/gallery.html";
		}
		else if(this.id === "commercial") {
			location.href = global.root+"/html-gallery/gallery.html";
		}
		else if(this.id === "partial") {
			location.href = global.root+"/html-gallery/gallery.html";
		}
		else if(this.id === "curious") {
			location.href = global.root+"/comunity.html";
		}
		else if(this.id === "myroom") {
			location.href = global.root+"/comunity.html";
		}
		else if(this.id === "review") {
			location.href = global.root+"/comunity.html";
		}
		else if(this.id === "interior-tip") {
			location.href = global.root+"/magazine.html";
		}
		else if(this.id === "diary") {
			location.href = global.root+"/magazine.html";
		}
		else if(this.id === "news") {
			location.href = global.root+"/magazine.html";
		}
		else if(this.id === "event") {
			location.href = global.root+"/magazine.html";
		}
		else if(this.id === "partners-index") {
			location.href = global.root+"/partners.html";
		}
		else if(this.id === "partners-inquire") {
			location.href = global.root+"/partners.html";
		}
		else if(this.id === "estimate-apply") {
			location.href = global.root+"/estimate.html";
		}
		else if(this.id === "estimate-now") {
			location.href = global.root+"/estimate.html";
		}
		else if(this.id === "estimate-confirm") {
			location.href = global.root+"/estimate.html";
		}
		else if(this.id === "store") {
			location.href = global.root+"/store.html";
		}
	});

	/* 로고클릭시 메인페이지 가기*/
	$(".main-logo").on("click", function() {
		location.href = global.root+"/index.html";
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
			url: global.root+"/"+"layers/" + layerName + ".html",
			success: function(html) {
				var blockLayerHTML = "<div class='yellow-layer ajax'></div>";
				$("body").append(blockLayerHTML);
				$("body").append(html);
				$(".yellow-layer").fadeIn(200);
				$(".zd-popup").fadeIn(200);
				$(".zd-popup").animate({
					top: "200px",
				}, 300);
				zipdocGirl();
				$(".popup-close-icon, .yellow-layer.ajax").on("click", function() {
					popupClose();
				});
			},
		});
	}

	$(".right-bar-contents>ul>li").on("click", function() {
		if ((this.id) === "detail-estimate") {
			location.href = global.root+"/html-gallery"+"/gallery.html";
		}
		else if ((this.id) === "easy-estimate") {
			popupOpen(this.id);
		}
	});
	/* 슬라이드*/
	var adder=260;
	var listResult=0;
	$(".arrow-left").on("click", function() {
		if (listResult+adder >= 0) {
			listResult=0;
			$(".recommend-selects-contents>ul").animate({left: listResult+"px"});
			return;
		}
		listResult+=adder;
		$(".recommend-selects-contents>ul").animate({left: listResult+"px"});
	});

	$(".arrow-right").on("click", function() {
		var lastPosition = ($(".recommend-selects-contents>ul>li:last-child").position().left+250);
		var viewLength = $(".recommend-selects-contents").outerWidth();
		if ( -(lastPosition-viewLength) >= listResult-adder ) {
			listResult=-(lastPosition-viewLength);
			$(".recommend-selects-contents>ul").animate({left: listResult+"px"});
			return;
		}
		listResult-=adder;
		$(".recommend-selects-contents>ul").animate({left: listResult+"px"});
	});

	function logedIncheck() {
		$.ajax({
			url: global.root+"/api/member/logedin",
			success: function(data) {
				if (data.result === "yes") {
					$(".logout").show();
					$(".mypage").show();
					$(".login").hide();
					$(".register").hide();
				}
				else {
					$(".logout").hide();
					$(".mypage").hide();
					$(".login").show();
					$(".register").show();
				}
			},
		});
	}
	function zipdocGirl() {
		$(".zipdoc-girl").attr("src", global.root+"/img/img_modal_bg_character.png");
	}

	logedIncheck();
	mainLogoEnter();
	mainLogoLeave();
	detailsEnter();
	detailsLeave();
	menuBarEnter();
	menuBarLeave();
	headerMenuFixed();
});
