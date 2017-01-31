require([
	"common",
], function() {
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
