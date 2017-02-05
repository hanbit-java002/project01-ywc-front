require([
	"common",
], function() {
	/* 로그인 아이디 나 패스워드 입력시 창뜨는 것*/
	$(".login-zipdoc-input>div>input").focus(function() {
		$(this).parent().find("div").addClass("active");
	});
	$(".login-zipdoc-input>div>input").blur(function() {
		$(".login-zipdoc-input>div>div").removeClass("active");
	});
	
});
