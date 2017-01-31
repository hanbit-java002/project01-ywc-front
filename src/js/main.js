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
	itemEnter();
	itemLeave();
});
