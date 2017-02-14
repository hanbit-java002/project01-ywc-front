require([
	"common",
], function() {
	/* 회원가입*/
	function registerSuccess(userId, userPw, userName, userNickname, userPhone) {
		$.ajax({
			url: global.root+"/api/member/register",
			method: "POST",
			data: {
				userId: userId,
				userPw: userPw,
				userName: userName,
				userNickname: userNickname,
				userPhone: userPhone,
			},
			success: function(data) {
				if (data.result==="ok") {
					alert(userId+"님 반갑습니다.");
					location.href = global.root+"/"+"login.html";
				}
				else {
					alert("정상적으로 가입되지 않았습니다.");
				}
			},
			error: function(jqXHR) {
				alert(jqXHR.responseJSON.message);
			},
		});
	}
	/* 회원가입*/
	$(".resister-btn").on("click", function() {
		var userId =$("#register-id").val();
		var userPw =$("#register-pw").val();
		var userName =$("#register-name").val();
		var userNickname =$("#register-nickname").val();
		var userPhone =$("#register-phone").val();
		var personalCfm = $("#estimate-user-privacy-checker").is(":checked");
		var otherCfm = $("#estimate-user-for3-checker").is(":checked");
		console.log(personalCfm);
		var idCfm = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
		var pwCfm = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;
		var phoneCfm = /^0[1][01689]\d{4}\d{4}/;

		if (userId === undefined || userId ==="") {
			alert("아이디가 입력하세요.");
		}
		else if (userPw === undefined || userPw ==="") {
			alert("비밀번호가 입력하세요.");
		}
		else if (userName === undefined || userName ==="") {
			alert("이름을 입력하세요.");
		}
		else if (userNickname === undefined || userNickname ==="") {
			alert("닉네임을 입력하세요.");
		}
		else if (userPhone === undefined || userPhone ==="") {
			alert("핸드폰번호를 입력하세요.");
		}
		else if (!idCfm.test(userId)) {
			alert("아이디를 다시 입력하세요.");
		}
		else if (!pwCfm.test(userPw)) {
			alert("비밀번호를 다시 입력하세요.");
		}
		else if (!phoneCfm.test(userPhone)) {
			alert("핸드폰번호를 다시 입력하세요.");
		}
		else if (!personalCfm) {
			alert("개인정보에 체크를 해주세요");
		}
		else if (!otherCfm) {
			alert("3자정보제공에 체크를 해주세요");
		}
		else {
			registerSuccess(userId, userPw, userName, userNickname, userPhone);
		}
	});
});
