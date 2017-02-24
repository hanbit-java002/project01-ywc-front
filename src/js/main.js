require([
	"common",
], function() {
	/* 갤러리 디테일스 마우스오버 이벤트*/
	function itemEnter() {
		$(".item").mouseenter( function() {
			$(this).find(".item-hide").fadeIn(100);
		});
	}
	function itemLeave() {
		$(".item").mouseleave( function() {
			$(this).find(".item-hide").fadeOut(100);
		});
	}
	/* 스페셜 바텀 이벤트*/
	$(".special-title>div").on("click", function() {
		$(".special-title>div").removeClass("special-title-active");
		$(".special-content>div").removeClass("content-active");
		$(this).addClass("special-title-active");
		if($(this).hasClass("title-service")) {
			$(".content-service").addClass("content-active");
		}
		else if($(this).hasClass("title-step")) {
			$(".content-step").addClass("content-active");
		}
		else if($(this).hasClass("title-contact")) {
			$(".content-contact").addClass("content-active");
		}
	});

	/* 윈도우 사이즈에 따라 달라지는 것 크기 변경*/
	$(window).resize(function() {
		console.log("너비: "+window.innerWidth);
		console.log("높이: "+window.innerHeight);
		var windowHeight = window.innerWidth;
		var row1 = parseInt($(".row").css("width"));
		console.log("높이높ㄴ이"+row1);
		/* var row2 = 416;*/
		if (windowHeight < 1300) {
			/* $(".row1").css("height", minusRow1);
			$(".row2").css("height", minusRow2);*/
		}
		else if (windowHeight > 1300) {
			/* $(".row1").css("height", minusRow1);
			$(".row2").css("height", minusRow2);*/
		}
	}).resize();
	itemEnter();
	itemLeave();
});
