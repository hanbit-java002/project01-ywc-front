require([
	"common",
], function() {
	function getQuerystring(paraName) {
		var tempURL = location.search.substring(1);
		var tempUnitURL=tempURL.split("&");
		for (var count=0; count<tempUnitURL.length; count++) {
			var tempValueURL=tempUnitURL[count].split("=");
			if (tempValueURL[0] === paraName) {
				return tempValueURL[1];
			}
		}
	}

	/* 무한 슬라이더*/
	/* 제한적인 슬라이더*/
	limitSlider();
	function limitSlider() {
		var slider = {
			index: 0,
			tx: [],
		};

		$(window).on("resize", function() {
			var listWidth = $(".show-viewer-lists>li").width() +10;
			var listCount = $(".show-viewer-lists>li").length;

			var nowTx = listWidth * -slider.index;

			for (var count=0; count<listCount; count++) {
				slider.tx[count] = nowTx;
			}

			$(".show-viewer-lists>li").css("transform", "translateX(" + nowTx + "px)");
		});

		$(".arrow-left, .arrow-right").on("click", function() {
			/* 애니메이션 도중에 실행 안되게 하는 처리*/
			if (slider.animating) {
				return;
			}

			var listWidth = $(".show-viewer-lists>li").width() +10;
			var listCount = $(".show-viewer-lists>li").length;
			var maxIndex = -listWidth *(listCount -1);
			slider.animating = true;
			slider.direction = $(this).hasClass("arrow-left") ? "left" : "right";

			$(".show-viewer-lists>li").animate({
				left: 100,
			}, {
				duration: 1000,
				start: function() {
					slider.tx[$(this).index()] = slider.tx[$(this).index()] || 0;
				},
				step: function(now) {
					var tx = slider.tx[$(this).index()];
					var move = listWidth * (now/100.00);
					if (slider.direction === "left") {
						if (tx >= 0) {
							tx = 0;
						}
						else {
							tx += move;
						}
					}
					else {
						if (tx <= maxIndex) {
							tx = maxIndex;
						}
						else {
							tx -= move;
						}
					}

					$(this).css("transform", "translateX("+ tx +"px)");
				},
				complete: function() {
					$(this).css("left", 0);
					if (slider.direction === "left") {
						if (slider.tx[$(this).index()] >= 0) {
							slider.tx[$(this).index()]=0;
							if ($(this).index() === 0) {
								slider.index = 0;
							}
						}
						else {
							if ($(this).index() === 0) {
								slider.index--;
								console.log("왼쪽"+slider.index);
							}
							slider.tx[$(this).index()] += listWidth;
						}
					}
					else {
						if (slider.tx[$(this).index()] <= maxIndex) {
							slider.tx[$(this).index()] = maxIndex;
							if ($(this).index() === 0) {
								slider.index =listCount-1;
							}
						}
						else {
							if ($(this).index() === 0) {
								slider.index++;
								console.log("오른쪽"+slider.index);
							}
							slider.tx[$(this).index()] -= listWidth;
						}
					}

					slider.animating = false;
				},
			});
		});
	}

	console.log(getQuerystring("id"));
	function setGalleryDetails(items) {
		for (var count=0; count<items.length; count++) {
			var item = items[count];
			item.
		}
	}
	function InitGalleryDetails() {
		$.ajax({
			url:  global.root+"/api/gallery/detail",
			data: {
				galleryId: getQuerystring("id"),
			},
			success: function(items) {
				setGalleryDetails(items);
			},
		});
	}
	InitGalleryDetails()
});
