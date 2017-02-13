require([
	"common",
], function() {
	/* 초기 스프링에서 설정해준 값 넘겨 받기*/
	$.ajax({
		url: global.root+"/api/header/getdetails",
		success: function(data) {
			$(".zd-contents>section").removeClass("common-active");
			$(".header-details-bar>ul>li").removeClass("header-details-bar-active");
			$("."+data.result).addClass("common-active");
			$("."+data.result+"-clicker").addClass("header-details-bar-active");
		},
	});
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
