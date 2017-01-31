require([
	"common",
], function() {
	/* 메뉴바 클릭 컨텐츠 변경*/
	$(".header-details-bar>ul>li").on("click", function() {
		$(".zd-contents>section").removeClass("common-active");
		if($(this).hasClass("partners-index-clicker")) {
			$(".partners-index").addClass("common-active");
		}
		else if($(this).hasClass("partners-inquire-clicker")) {
			$(".partners-inquire").addClass("common-active");
		}
	});
});
