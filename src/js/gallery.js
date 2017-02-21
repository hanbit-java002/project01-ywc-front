require([
	"common",
], function() {
	/* 셀렉트 박스들*/
	function spaceSelectInit(id) {
		if (id === "gallery") {
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
				spaceSelectInit(data.result);
		},
	});

	$("#select-space").on("change", function() {
		spaceSelectInit($(this).val());
	});

	/* 페이징 기법 초기 세팅*/
	function setGalleryLists(items) {
		var galleyHtml="";
		var img = "/img/720x480_20170118160938280_e6JRX2pT9n.jpg";
		for (var count = 0; count < items.length; count++ ) {
			var item = items[count];
			galleyHtml+="<li>";
			galleyHtml+="	<div class=\"gallery-list-form\">";
			galleyHtml+="	<div class=\"gallery-list-img\" style=\"background-image: url('"+global.root+img+"')\">";
			galleyHtml+="		</div>";
			galleyHtml+="		<div class=\"gallery-list-text\">";
			galleyHtml+="			<div class=\"gallery-list-title overflow-text\">"+item.title+"</div>";
			galleyHtml+="			<div class=\"list-addr overflow-text\">"+item.addr+"</div>";
			galleyHtml+="			<div class=\"gallery-list-desc\">";
			galleyHtml+="				<div class=\"list-room-size\">"+item.size+"평</div>";
			galleyHtml+="				<div class=\"list-room-type\">"+item.type+"</div>";
			galleyHtml+="				<div class=\"list-room-cost\">"+item.cost+"만원</div>";
			galleyHtml+="			</div>";
			galleyHtml+="		</div>";
			galleyHtml+="		<div class=\"gallery-list-favor\">";
			galleyHtml+="			<div class=\"fa fa-eye\" >"+item.watcher+"</div>";
			galleyHtml+="			<div class=\"fa fa-heart-o\" >"+item.favor+"</div>";
			galleyHtml+="			<div class=\"fa fa-paperclip\" >"+item.clip+"</div>";
			galleyHtml+="		</div>";
			galleyHtml+="	</div>";
			galleyHtml+="</li>";
		}
		$(".gallery-list>ul").html(galleyHtml);
	}
	var VIEWITEMS = 12;
	function getGalleryData(pager) {
		$.ajax({
			url: global.root+"/api/gallery/lists",
			data: {
				pager: pager,
				viewItems: VIEWITEMS,
			},
			success: function(items) {
				setGalleryLists(items);
			},
		});
	}

	function totalPages(totalCount) {
		var pages = Math.floor(totalCount/ VIEWITEMS);
		var pageLeft = totalCount % VIEWITEMS;
		if (pageLeft>0) {
			pages++;
		}
		return pages;
	}

	function totalCounts() {
		$.ajax({
			url: global.root+"/api/gallery/totalcount",
			success: function(data) {
				setPages(totalPages(parseInt(data)));
			},
		});
	}
	totalCounts();

	/* 페이지 세팅*/
	var startPage =1;
	var totalPage =0;

	function setPages(totalPages) {
		totalPage=totalPages;
		var pageSetting = startPage;

		if (pageSetting === 1) {
			$(".page-leftest").hide();
			$(".page-left").hide();
		}
		else if (pageSetting > 1) {
			$(".page-leftest").show();
			$(".page-left").show();
		}

		$(".pages").each(function() {
			if (totalPages>=pageSetting) {
				$(this).show();
				$(this).text(pageSetting++);
			}
			else if (totalPages<pageSetting) {
				$(this).hide();
			}
		});
		if (totalPages>=pageSetting) {
			$(".page-right").show();
			$(".page-rightest").show();
		}
		else if (totalPages<pageSetting) {
			$(".page-right").hide();
			$(".page-rightest").hide();
		}
	}

	$(".pages").on("click", function() {
		$(".pages").removeClass("page-active");
		$(this).addClass("page-active");
		var pager = parseInt($(this).text());
		getGalleryData(pager);
	});

	$(".page-navi").on("click", function() {
		if ($(this).hasClass("page-leftest")) {
			startPage = 1;
			totalCounts();
			getGalleryData(startPage);
			$(".pages").removeClass("page-active");
			$(".page-first").addClass("page-active");
		}
		else if ($(this).hasClass("page-left")) {
			startPage-=5;
			totalCounts();
			var activePage = startPage;
			getGalleryData(activePage+4);
			$(".pages").removeClass("page-active");
			$(".page-last").addClass("page-active");
		}
		else if ($(this).hasClass("page-rightest")) {
			totalCounts();
			startPage = Math.floor(totalPage/5)*5+1;
			getGalleryData(totalPage);
			$(".pages").removeClass("page-active");
			$(window).ready(function() {
				$(".pages:contains('"+totalPage+"')").addClass("page-active");
			});
		}
		else if ($(this).hasClass("page-right")) {
			startPage+=5;
			totalCounts();
			getGalleryData(startPage);
			$(".pages").removeClass("page-active");
			$(".page-first").addClass("page-active");
		}
	});
	/* 갤러리 리스트 이동*/
	$(".gallery-list>ul>li").on("click", function() {
		location.href = global.root+"/html-gallery/gallery-details.html";
	});

	getGalleryData(1);
});
