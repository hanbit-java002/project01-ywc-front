require([
	"common",
], function() {
	$.ajax({
		url: global.root+"/api/header/getdetails",
		success: function(data) {
			if (data.result ==="") {
				return;
			}
			else if (data.result === "house") {
				$("#select-space").val("주거공간").attr("selected", "selected");
			}
			else if (data.result === "commercial") {
				$("#select-space").val("상업공간").attr("selected", "selected");
			}
			else if (data.result === "partial") {
				$("#select-space").val("부분시공").attr("selected", "selected");
			}
		},
	});
	$(".gallery-list>ul>li").on("click", function() {
		location.href = global.root+"/html-gallery/gallery-details.html";
	});
	/* 셀렉트 박스들*/
	var spaceSelected=$("#select-space>option:selected").val();
	function spaseSelectInit() {
		spaceSelected=$("#select-space>option:selected").val();
		if ("--공간선택--" === spaceSelected) {
			$("#select-space-desc").html("<option>--주거선택--</option>");
		}
		else if ( "주거공간" === spaceSelected) {
			$("#select-space-desc").html("" +
				"<option>--주거선택--</option>" +
				"<option >아파트</option>" +
				"<option >빌라</option>" +
				"<option >주택</option>" +
				"<option >원룸</option>");
		}
		else if ( "상업공간" === spaceSelected) {
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
		else if ( "부분시공" === spaceSelected) {
			$("#select-space-desc").html("" +
				"<option>--주거선택--</option>" +
				"<option >도배/장판</option>" +
				"<option >욕실</option>" +
				"<option >집닥키친</option>" +
				"<option >수납가구</option>" +
				"<option >기타</option>");
		}
	}
	$("#select-space").on("change", function() {
		spaseSelectInit();
	});
	spaseSelectInit();
});
