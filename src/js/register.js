require([
	"common",
], function() {
	/* 회원가입*/
	$(".resister-btn").on("click", function() {
		var userId =$("#register-id").val();
		var userPw =$("#register-pw").val();
		var userName =$("#register-name").val();
		var userNickname =$("#register-nickname").val();
		var userPhone =$("#register-phone").val();

		if (userId === undefined || userId ==="") {
			alert("아이디가 입력하세요.");
		}
		else if (userPw === undefined || userId ==="") {
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

		$.ajax({
			url: "/api/member/register",
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
				}
				else {
					alert("정상적으로 가입되지 않았습니다.");
				}
			},
			error: function(jqXHR) {
				alert(jqXHR.responseJSON.message);
			},
		});
	});
});
