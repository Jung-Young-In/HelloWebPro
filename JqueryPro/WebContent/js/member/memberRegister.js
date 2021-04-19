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
	// 밸리데이션 체크
	
	
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