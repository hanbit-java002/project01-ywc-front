require([
	"common",
], function() {
	/* 로그인 아이디 나 패스워드 입력시 창뜨는 것*/
	$(".login-zipdoc-input>div>input").focus(function() {
		$(this).parent().find("div").addClass("active");
		$(this).parent().find(".login-zipdoc-input-desc").animate({
			top: 44,
		}, 50);
	});
	$(".login-zipdoc-input>div>input").blur(function() {
		$(".login-zipdoc-input>div>div").removeClass("active");
		$(this).parent().find(".login-zipdoc-input-desc").css("top", "94px");
	});

	/* 로그인 서버에 보내는 처리*/
	function login() {
		var userId = $("#login-id").val();
		var userPw = $("#login-pw").val();

		if (userId === undefined || userId === "") {
			alert("아이디를 입력해주세요");
		}
		else if (userPw === undefined || userPw === "") {
			alert("비밀번호를 입력해주세요");
		}
		else {
			$.ajax({
				url: global.root+"/api/member/login",
				method: "POST",
				data: {
					userId: userId,
					userPw: userPw,
				},
				success: function(data) {
					if (data.result ==="ok") {
						alert(userId+"로 로그인되셨습니다.");
						location.href=global.root+"/"+"index.html";
					}
					else {
						alert("회원정보가 일치하지 않습니다.");
					}
				},
				error: function(jqXHR) {
					alert(jqXHR.responseJSON.message);
				},
			});
		}
	}
	$(".login-zipdoc-btn").on("click", function() {
		login();
	});
	var ENTER_KEYCODE = 13;
	$(document).on("keydown", function(event) {
		if (event.keyCode === ENTER_KEYCODE) {
			login();
		}
	});
});
