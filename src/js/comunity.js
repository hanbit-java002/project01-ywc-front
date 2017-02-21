require([
	"common",
], function() {
	/* 초기 스프링에서 설정해준 값 넘겨 받기*/
	$.ajax({
		url: global.root+"/api/header/getdetails",
		success: function(data) {
			$(".zd-contents-under>section").removeClass("common-active");
			$(".header-details-bar>ul>li").removeClass("header-details-bar-active");
			$("."+data.result).addClass("common-active");
			$("."+data.result+"-clicker").addClass("header-details-bar-active");

			id = "abc";
		},
	});

	$(".header-details-bar>ul>li").on("click", function() {
		$(".zd-contents-under>section").removeClass("common-active");
		if($(this).hasClass("curious-clicker")) {
			$(".curious").addClass("common-active");
		}
		else if($(this).hasClass("myroom-clicker")) {
			$(".myroom").addClass("common-active");
		}
		else if($(this).hasClass("review-clicker")) {
			$(".review").addClass("common-active");
		}
	});
});
