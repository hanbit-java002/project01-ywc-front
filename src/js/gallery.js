require([
	"common",
], function() {
	$(".gallery-list>ul>li").on("click", function() {
		location.href = global.root+"/gallery-details.html";
	});
});
