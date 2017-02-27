require([
	"common",
], function() {
	var slideIndex =1;
	$(".arrow-right").on("click", function() {
		var listWidth = $(".show-viewer-lists>li").width() +10;
		$(".show-viewer-lists>li").animate({
			left: 100,
		}, {
			duration: 1000,
			step: function(now) {
				$(this).css("transform", "translate(-"+listWidth *slideIndex* (now/100.00)+"px)");
			},
		}).promise().done(function() {
			$(".show-viewer-lists>li").css("left", listWidth *slideIndex+"px");
			slideIndex++;
		});
	});

	$(".arrow-left").on("click", function() {
		$(".show-viewer-lists>li").animate({
			left: 100,
		}, {
			duration: 1000,
			step: function(now) {
				var listWidth = $(this).width() +10;
				$(this).css("transform", "translateX(+"+listWidth *slideIndex* (now/100.00)+"px)");
			},
		});
		slideIndex--;
	});
});
