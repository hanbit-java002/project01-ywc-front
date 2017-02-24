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
	/* 이름 세팅해서 가져오기*/
	function setHeaderDetails(name) {
		$.ajax({
			url: global.root+"/api/header/setdetails",
			data: {
				headerDetails: name,
			},
			error: function(jqXHR) {
				alert(jqXHR.responseJSON.message);
			},
		});
	}

	/* 메뉴바 링크들*/
	$(".header-menu>ul>li").on("click", function() {
		if ($(this).hasClass("header-menu-gallery")) {
			setHeaderDetails("gallery");
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

	function detailsLocation(name) {
		setHeaderDetails(name);
		if(name === "house") {
			location.href = global.root+"/html-gallery/gallery.html";
		}
		else if(name === "commercial") {
			location.href = global.root+"/html-gallery/gallery.html";
		}
		else if(name === "partial") {
			location.href = global.root+"/html-gallery/gallery.html";
		}
		else if(name === "curious") {
			location.href = global.root+"/comunity.html";
		}
		else if(name === "myroom") {
			location.href = global.root+"/comunity.html";
		}
		else if(name === "review") {
			location.href = global.root+"/comunity.html";
		}
		else if(name === "interior-tip") {
			location.href = global.root+"/magazine.html";
		}
		else if(name === "diary") {
			location.href = global.root+"/magazine.html";
		}
		else if(name === "news") {
			location.href = global.root+"/magazine.html";
		}
		else if(name === "event") {
			location.href = global.root+"/magazine.html";
		}
		else if(name === "partners-index") {
			location.href = global.root+"/partners.html";
		}
		else if(name === "partners-inquire") {
			location.href = global.root+"/partners.html";
		}
		else if(name === "estimate-apply") {
			location.href = global.root+"/estimate.html";
		}
		else if(name === "estimate-now") {
			location.href = global.root+"/estimate.html";
		}
		else if(name === "estimate-confirm") {
			location.href = global.root+"/estimate.html";
		}
		else if(name === "store") {
			location.href = global.root+"/store.html";
		}
	}
	/* 메뉴바 디테일스 */
	$(".header-details>ul>li>ul>li>div").on("click", function() {
		detailsLocation($(this).attr("name"));
	});
	/*  반응형 헤더 로그인 버튼 눌렀을 때*/
	function reactHeaderLogin() {
		$(".side-navi-login-text").on("click", function() {
				location.href=global.root+"/login.html";
		});
	}
	function reactHeaderDetailsLocation() {
		$(".side-navi-lists>li").on("click", function() {
			console.log($(this).attr("name"));
			detailsLocation($(this).attr("name"));
		});
	}

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
	function popupCloseRemoveTime(layerColor) {
		$("."+layerColor+"-layer").remove();
		$(".zd-popup").remove();
	}
	function popupClose(layerName, layerColor) {
		if (layerName === "easy-estimate") {
			$(".zd-popup").animate({
				top: "-50%",
			}, 200);
		}
		else if (layerName === "side-navi") {
			$(".zd-popup").animate({
				left: "-100%",
			}, 300);
		}
		$("."+layerColor+"-layer, .zd-popup").fadeOut(300, function() {
			popupCloseRemoveTime(layerColor);
		});
	}
	function popupOpen(layerName, layerColor) {
		$.ajax({
			url: global.root+"/"+"layers/" + layerName + ".html",
			success: function(html) {
				var blockLayerHTML="";

				blockLayerHTML = "<div class='"+layerColor+"-layer ajax'></div>";
				$("body").append(blockLayerHTML);
				$("body").append(html);
				$("."+layerColor+"-layer").css({
						"display": "none",
						"position": "fixed",
						"width": "100%",
						"height": "100%",
						"top": "0px",
						"left": "0px",
						"opacity": "0.8",
						"z-index": "10",
				});
				$("."+layerColor+"-layer").css({"background-color": layerColor,
					});
				$("."+layerColor+"-layer").fadeIn(200);
				$(".zd-popup").fadeIn(200);
				if (layerName === "easy-estimate") {
					$(".zd-popup").animate({
						top: "200px",
					}, 300);
					zipdocGirl();
				}
				else if (layerName === "side-navi") {
					$(".zd-popup").animate({
						left: "0px",
					}, 300);
				}
				reactHeaderLogin();
				reactHeaderDetailsLocation();
				/* 팝업 닫기*/
				$(".popup-close-icon, ."+layerColor+"-layer.ajax").on("click", function() {
					popupClose(layerName, layerColor);
				});
			},
		});
	}

	/* 반응형시 헤더 부분 클릭이벤트*/
	$(".header-info-bars-icon").on("click", function() {
		popupOpen(this.id, "black");
	});

	/* 우측 픽스드 바 부분*/
	$(".right-bar-contents>ul>li").on("click", function() {
		if ((this.id) === "detail-estimate") {
			location.href = global.root+"/html-gallery"+"/gallery.html";
		}
		else if ((this.id) === "easy-estimate") {
			popupOpen(this.id, "orange");
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
