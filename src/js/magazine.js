require([
	"common",
], function() {
	/* 메뉴바 클릭 컨텐츠 변경*/
	$(".header-details-bar>ul>li").on("click", function() {
		$(".zd-contents>section").removeClass("common-active");
		if($(this).hasClass("interior-tip-clicker")) {
			$(".interior-tip").addClass("common-active");
		}
		else if($(this).hasClass("diary-clicker")) {
			$(".diary").addClass("common-active");
		}
		else if($(this).hasClass("news-clicker")) {
			$(".news").addClass("common-active");
		}
		else if($(this).hasClass("event-clicker")) {
			$(".event").addClass("common-active");
		}
	});
});
