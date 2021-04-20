/**
 * 
 */

function test(str){
	alert(str);
}

function checkId(){
	var memId = $("#memId").val();
	//빈 값인지 체크
	if(isEmpty(memId)) {
		alert("입력된 값이 없습니다.");
		$("#memId").focus();
		return;
	}
	
	//유효한 값인지 체크()
	if(!chkRegExp(memId, "ID")){
		alert("ID는 형식 맞지 않습니다.");
		$("#spMemId").text("ID는 영어소문자로 시작해야하며 영어소문자, 숫자 조합의 4~12글자 입니다.");
		$("#spMemId").attr("class", "text-danger");
		$("#spMemId").show();
		$("#memId").focus();
		return;
	}
	
	var param = {
			"memId" : $("#memId").val()
			,"flag" : "CHK"
	};
	
	$.ajax({
		url : "/JqueryPro/MemberServlet"
		,type : "post"
		,data : param
		,dataType : "json"
		,success: function(data) {
			console.log(data);
			// { count : "1" }
			if(data.count == 0) { // 동일한 아이디 없음
				alert("사용가능한 아이디 입니다.");
				$("#spMemId").text("사용가능한 아이디 입니다.");
				$("#spMemId").attr("class", "text-success");
			} else {
				alert("이미 사용중인 아이디 입니다.");
				$("#spMemId").text("이미 사용중인 아이디 입니다.");
				$("#spMemId").attr("class", "text-danger");
			}
		}
	 	,error: function(xhr) {
	 		console.log(xhr);
	 		alert("오류발생");
		}
	});
}

function save(){
	var result = validate();
	// 밸리데이션 체크
	function validate() {
		
	
	var memId = $("#memId").val();
	if(isEmpty(memId)){
		alert("아이디는 필수 입력 사항입니다.");
		$("#spMemId").show();
		$("#memId").focus();
		return false;
	}
	
	var memName = $("#memName").val();
	if(isEmpty(memName)){
		alert("이름은 필수 입력 사항입니다.");
		$("#spMemName").show();
		$("#MemName").focus();
		return false;
	}

	var regName = /^[가-힣]{2,5}$/;
	if(!regName.test(memName)){
		$("#spMemName").text("한글(2~5글자)만 입력 가능합니다.");
		$("#memBirth").focus();
		$("#spMemName").show();
		return false;
	}

	var memBir = $("#memBir").val();
	if(isEmpty(memBir)){
		alert("생년월일은 필수 입력 사항입니다.");
		$("#spMemBirth").show();
		$("#memBir").focus();
		return false;
	}

	var regPwd = $("#pwd").val();
	if(isEmpty(pwd)){
		alert("비밀번호는 필수 입력 사항입니다.");
		$("#spPwd").show();
		$("#memTel").focus();
		return false;
	}
	
	var regPwd = /^(?=.*?[a-z])(?=.*?[0-9]).{8,12}$/;
	if(!regPwd.test(pwd)){
		$("#spPwd").text("영문 소문자 및 숫자(8~12글자)만 입력 가능합니다.");
		$("#pwd").focus();
		$("#spPwd").show();
		return false;
	}
	
	var memTel = $("#memTel").val();
	if(isEmpty(memTel)){
		alert("휴대전화는 필수 입력 사항입니다.");
		$("#spMemTel").show();
		$("#memTel").focus();
		return false;
	}
	
	var regMemTel = /^\d{3}\d{3,4}\d{4}$/;
	if(!regMemTel.test(memTel)){
		$("#spMemTel").text("-를 제외한 휴대전화 번호를 입력해 주세요.");
		$("#memEmail").focus();
		$("#spMemTel").show();
		return false;
	}
	
	var memEmail = $("#memEmail").val();
	if(!isEmpty(memEmail)){
		alert("이메일은 필수 입력 사항입니다.");
		$("#spMemEmail").show();
		$("#memEmail").focus();
		return false;
	}
	
	var regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
	if(!regEmail.test(memEmail)){
		$("#spMemEmail").text("올바른 형식으로 이메일 주소를 입력해 주세요.");
		$("#memEmail").focus();
		$("#spMemEmail").show();
		return false;
	}
}
	
	
	
	// 사용자 컨펌
	var result = confirm("저장하시겠습니까?");
	if(!result)// 취소버튼 클릭시 종료
		return;
	
	// 저장 서블릿 호출
	var param = {
			"memId" : $("#memId").val()
			,"flag" : "CHK"
	};
	
	$("#flag").val("C");
	$.ajax({
		url : "/JqueryPro/MemberServlet"
		,type : "post"
		,data : $("#fm").serialize()
		,dataType : "json"
		,success: function(data) {
			console.log(data);
			// { count : "1" }
			if(data.count == 0) { // 동일한 아이디 없음
				alert("사용가능한 아이디 입니다.");
				$("#spMemId").text("사용가능한 아이디 입니다.");
				$("#spMemId").attr("class", "text-success");
			} else {
				alert("이미 사용중인 아이디 입니다.");
				$("#spMemId").text("이미 사용중인 아이디 입니다.");
				$("#spMemId").attr("class", "text-danger");
			}
		}
	 	,error: function(xhr) {
	 		console.log(xhr);
	 		alert("오류발생");
		}
	});
	
}