require([
	"common",
], function() {
	/* 셀렉트 박스들*/
	function spaceSelectInit(id) {
		if (id === "all") {
			$("#select-space-desc").html("<option>--주거선택--</option>");
		}
		else if ( id === "house") {
			$("#select-space-desc").html("" +
				"<option>--주거선택--</option>" +
				"<option >아파트</option>" +
				"<option >빌라</option>" +
				"<option >주택</option>" +
				"<option >원룸</option>");
		}
		else if ( id === "commercial") {
			$("#select-space-desc").html("" +
				"<option>--주거선택--</option>" +
				"<option >사무실</option>" +
				"<option >상가/매장</option>" +
				"<option>카페/식당</option>" +
				"<option >학원/교육</option>" +
				"<option >간판</option>" +
				"<option >숙박/병원</option>" +
				"<option >기타</option>");
		}
		else if ( id === "partial") {
			$("#select-space-desc").html("" +
				"<option>--주거선택--</option>" +
				"<option >도배/장판</option>" +
				"<option >욕실</option>" +
				"<option >집닥키친</option>" +
				"<option >수납가구</option>" +
				"<option >기타</option>");
		}
	}

	/* 초기 스프링에서 설정해준 값 넘겨 받기*/
	$.ajax({
		url: global.root+"/api/header/getdetails",
		success: function(data) {
				$("#select-space").val(data.result);
				$(".curious-clicker").addClass("header-details-bar-active");
		},
	});

	/* 갤러리 리스트 이동*/
	$(".gallery-list>ul>li").on("click", function() {
		location.href = global.root+"/html-gallery/gallery-details.html";
	});

	$("#select-space").on("change", function() {
		spaceSelectInit($(this).val());
	});

	/* 페이징 기법 초기 세팅*/
	/* 페이지 갯수*/
	var VIEWPAGES=5;
	var VIEWITEMS= 12;
	function itemPages(totalPages) {
		var pages = Math.floor(totalPages/VIEWITEMS);
		var pageLeft = totalPages % VIEWITEMS;
		if (pageLeft>0) {
			pages++;
		}
		return pages;
	}
	$.ajax({
		url: global.root+"/api/gallery/count",
		success: function(data){
			var totalPages = parseInt(data.totalPages);
			var pages=itemPages(totalPages);
			var startIndex = pages;// 수정수정
			$.ajax({
				url: global.root+"/api/gallery/lists",
				data:{
					startIndex: startIndex,
					viewItems: VIEWITEMS,
				},
				success: function(items){
					var galleyHtml="";
					for (var count = 0; count < items[count].length ; count++ ){
						item=items[count];
						galleyHtml+="<li>";
						galleyHtml+="	<div class=\"gallery-list-form\">";
						galleyHtml+="		<div class=\"gallery-list-img\" style=\"background-image: url('"+global.root+"/img/720x480_20170118160938280_e6JRX2pT9n.jpg')\">";
						galleyHtml+="		</div>";
						galleyHtml+="		<div class=\"gallery-list-text\">";
						galleyHtml+="			<div class=\"gallery-list-title overflow-text\">item.galleryTitle</div>";
						galleyHtml+="			<div class=\"list-addr overflow-text\">item.galleryAddr</div>";
						galleyHtml+="			<div class=\"gallery-list-desc\">";
						galleyHtml+="				<div class=\"list-room-size\">item.gallerySize+'평'</div>";
						galleyHtml+="				<div class=\"list-room-type\">item.galleryType</div>";
						galleyHtml+="				<div class=\"list-room-cost\">item.galleryCost+'만원'</div>";
						galleyHtml+="			</div>";
						galleyHtml+="		</div>";
						galleyHtml+="		<div class=\"gallery-list-favor\">";
						galleyHtml+="			<div class=\"fa fa-eye\" >item.galleryWatcher</div>";
						galleyHtml+="			<div class=\"fa fa-heart-o\" >item.galleryFavor</div>";
						galleyHtml+="			<div class=\"fa fa-paperclip\" >item.galleryClip</div>";
						galleyHtml+="		</div>";
						galleyHtml+="	</div>";
						galleyHtml+="</li>";
					}
					$(".gallery-list>ul").html(galleyHtml);

					var page = 1;
					if (page = 1) {
						
					}
					$(".pages").each(function () {
						$(this).text();
					});


				},
			});
		},
	});
});
