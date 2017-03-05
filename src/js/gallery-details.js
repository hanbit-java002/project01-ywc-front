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
							}
							slider.tx[$(this).index()] -= listWidth;
						}
					}

					slider.animating = false;
				},
			});
		});
	}

	function setGalleryDetailsImgs(items) {
		var htmlImg="";
		for (var count=0; count<items.length; count++) {
			var item = items[count];
			htmlImg += "<li class=\"show-viewer-factor\">";
			htmlImg += "	<img src=\""+global.root+"/img/"+item.galleryimgs+"\">";
			htmlImg += "</li>";
		}
		$(".show-viewer-lists").append(htmlImg);
	}

	function initGalleryDetailsImgs() {
		$.ajax({
			url: global.root+"/api/gallery/imgs",
			data: {
				galleryId: getQuerystring("id"),
			},
			success: function(items) {
				setGalleryDetailsImgs(items);
			},
		});
	}

	function setGalleryDetails(items) {
		var htmlTitle="";
		var htmlDesc="";

		for (var count=0; count<items.length; count++) {
			var item = items[count];

			htmlTitle+="	<ul class=\"summary-header-title\">";
			htmlTitle+="		<li>";
			htmlTitle+=				item.title;
			htmlTitle+="		</li>";
			htmlTitle+="		<li>";
			htmlTitle+="			<i class=\"fa fa-eye\">"+item.watcher+"</i>";
			htmlTitle+="			<i class=\"fa fa-paperclip\">"+item.clip+"</i>";
			htmlTitle+="			<i class=\"fa fa-share-alt\">"+item.favor+"</i>";
			htmlTitle+="		</li>";
			htmlTitle+="	</ul>";
			htmlTitle+="	<ul class=\"summary-header-desc\">";
			htmlTitle+="		<li>"+item.addr+"</li>";
			htmlTitle+="		<li>"+item.size+"평</li>";
			htmlTitle+="		<li>"+item.cost+"만원</li>";
			htmlTitle+="	</ul>";

			htmlDesc+="<ul>";
			htmlDesc+="	<li>";
			htmlDesc+="		<div class=\"galinfo-title\">공사명</div>";
			htmlDesc+="		<div class=\"galinfo-desc\">"+item.title+"</div>";
			htmlDesc+="	</li>";
			htmlDesc+="	<li>";
			htmlDesc+="		<div class=\"galinfo-title\">공사구분</div>";
			htmlDesc+="		<div class=\"galinfo-desc\">"+item.type+"</div>";
			htmlDesc+="	</li>";
			htmlDesc+="	<li>";
			htmlDesc+="		<div class=\"galinfo-title\">공사면적</div>";
			htmlDesc+="		<div class=\"galinfo-desc\">"+item.size+"평</div>";
			htmlDesc+="	</li>";
			htmlDesc+="	<li>";
			htmlDesc+="		<div class=\"galinfo-title\">공사지역</div>";
			htmlDesc+="		<div class=\"galinfo-desc\">"+item.addr+"</div>";
			htmlDesc+="	</li>";
			htmlDesc+="	<li>";
			htmlDesc+="		<div class=\"galinfo-title\">공사기간</div>";
			htmlDesc+="		<div class=\"galinfo-desc\">"+item.terms+"</div>";
			htmlDesc+="	</li>";
			htmlDesc+="	<li>";
			htmlDesc+="		<div class=\"galinfo-title\">시공방법	</div>";
			htmlDesc+="		<div class=\"galinfo-desc\">"+item.method+"</div>";
			htmlDesc+="	</li>";
			htmlDesc+="	<li>";
			htmlDesc+="		<div class=\"galinfo-title\">시공업체	</div>";
			htmlDesc+="		<div class=\"galinfo-desc\">"+item.partnername+"</div>";
			htmlDesc+="	</li>";
			htmlDesc+="</ul>";
		}
		$(".summary-header").append(htmlTitle);
		$(".summary-contents-galinfo").prepend(htmlDesc);
	}

	function initGalleryDetails() {
		$.ajax({
			url: global.root+"/api/gallery/detail",
			data: {
				galleryId: getQuerystring("id"),
			},
			success: function(items) {
				setGalleryDetails(items);
			},
		});
	}

	function setGalleryPartners(items) {
		var htmlPartnersImg="";
		for (var count=0; count<items.length; count++) {
			var item = items[count];
			$(".galpartners-contents-name").text(item.partnername);
			htmlPartnersImg = "<img class=\"galpartners-img\" src='"+global.root+"/img/"+item.partnerimg+"'>";
			$(".galpartners-contents-desc.specialty").text(item.partnerspecialty);
			$(".galpartners-contents-desc.range").text(item.partnerrange);
		}
		$(".galpartners-img-box").append(htmlPartnersImg);
	}

	function initGalleryPartners() {
		$.ajax({
			url: global.root+"/api/gallery/partner",
			data: {
				galleryId: getQuerystring("id"),
			},
			success: function(items) {
				setGalleryPartners(items);
			},
		});
	}
/*	function SetGalleryPartnersExample(items) {
		for (var count=0; count<items.length; count++) {
			var item = items[count];
		}
	}
	function InitGalleryPartnersExample() {
		$.ajax({
			url:  global.root+"/api/gallery/partners/example/limit",
			data: {
				galleryId: getQuerystring("id"),
			},
			success: function(items) {
				SetGalleryPartnersExample(items);
			},
		});
	}*/
	console.log($.cookie("galleryId"));
	initGalleryDetailsImgs();
	initGalleryDetails();
	initGalleryPartners();
	/* InitGalleryPartnersExample();*/
});
