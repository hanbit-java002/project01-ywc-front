require([
	"common",
], function() {
	$(".gallery-list>ul>li").on("click", function() {
		$(location).attr("href", "gallery-details.html");
	});
});
