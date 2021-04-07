/**
 * 
 */

function fnGet() {
			//submit 실행
			var fm = document.getElementById("fm");	//<form>
			fm.action = "jquery7_filter.html?userId=test01&password=asdf";	//url 세팅
			fm.method = "post";j
			fm.submit();	//form이 submit타입으로 설정됨
		}
		
function fnAjax() {
	$.ajax({
		url : "intro.html"
	,	type : "GET"
// 			,	data : 
// 			,	datatype :
	,	success : function(data) {	//intro.html 파일 전체가 data로 들어오게 됨.
		$("#divResult").html(data);	//text()로 붙이면 html 내용 전부가 오게 됨.
	}
	,	error : function() {
		
	}
	});
}

function fnText() {
	$.ajax({
// 				url : "../sample/data_text.txt"	//상대경로
		url : "/JqueryPro/html/sample/data_text.txt"	//절대경로(권장)
// 			,	type : "get"	//데이터를 전송할 것이 아니기 때문에 의미 없음 
// 			,   data : {}
	,	dataType : "text"	//안써도 상관은 없음(html로 써도 무관)
	,	success : function(data) {
		$("#divResult").html(data);	//text파일이기 때문에 text()로 하여도 결과 같음
	}
	});
}

function fnJsonObj() {
	$.ajax({
		url : "/JqueryPro/html/sample/data_json_obj.txt"
	,	dataType : "json"	//json파일인 경우 json이라고 명시하지 않으면 일반 text로 인식하게 됨.
	,	success : function(data) {
		console.log(data);	//name, age, gender, job이 따옴표가 사라지면서 객체(Object)로 오게 됨.				
		console.log(data.name);	//객체로 오기 때문에 .name으로 홍길동을 빼오게 됨.
		//div에 이름 : - ,나이 : - 와 같은 형식으로 뿌려주면 됨"
		
		var str = "";
		str += "이름 : " + data.name + "<br>"
			+ "나이 : " + data.age + "<br>"
			+ "성별 : " + data.gender + "<br>"
			+ "직업 : " + data.job;
			
		$("#divResult").html(str);
	}
	});
}

function fnJsonArr() {
	$.ajax({
		url : "/JqueryPro/html/sample/data_json_arr.txt"
	,	dataType : "json"
	,	success : function(data) {
		console.log(data);
		
		var str = "<ol>";
		
		for(var i = 0; i < data.length; i++){
			str += "<li>" + data[i] + "</li>";
		}
		
// 				(for문 대신 사용가능한 each문 예)
// 				$data.each();	//jquery 객체인 경우 사용가능한 방식
// 				$.each(data, function(idx) {
// 					str += "<li>" + data[idx] + "</li>"
// 				});
		
		str += "</ol>";
		
		$("#divResult").html(str);
		
//			출력할 목표 적어놓고 시작하기				
// 			<ol>
// 				<li>프로그래머</li>
// 				<li>주부 /li>
// 			</ol>

	}
	});
}

//실제 필드에서 많이 사용되는 방식
function fnJsonList() {
	$.ajax({
		url : "/JqueryPro/html/sample/data_json_list.txt"
	,	dataType : "json"
	,	success : function(data) {
		console.log(data);
		//1번째 회원
		//이름 : 
		//나이 : 
		var str = "";
			for(var i = 0; i < data.length; i++){
			var obj = data[i];
			str += (i + 1) + "번째 회원<br><br>"
				+ "이름 : " + obj.name + "<br>" 
				+ "나이 : " + obj.age + "<br>성별 : " + obj.gender 
				+ "<br>직업 : " + obj.job + "<br>"
				+ "============================<br>";
		}
			$("#divResult").html(str);
	}
	});
}

function fnJsonTable() {
	$.ajax({
		url : "/JqueryPro/html/sample/data_json_list.txt"
			,	dataType : "json"
			,	success : function(data) {
				console.log(data);
		
		var str = "";
		str += "<br><table id=\"JsonT\"><th>회원번호</th>"
			+ "<th>이름</th>"
			+ "<th>나이</th>"
			+ "<th>직업</th>"
			+ "<th>성별</th>";
		for(var i = 0; i < data.length; i++){
		var obj = data[i];
		str += "<tr><td>" + (i + 1) + "</td>"
			+ "<td>" + obj.name + "</td>"
			+ "<td>" + obj.age + "</td>"
			+ "<td>" + obj.gender + "</td>"
			+ "<td>" + obj.job + "</td></tr>";
		}
		str += "</table>";
		$("#divResult").html(str);
		}
	});
}

function fnXml() {
	$.ajax({
		url : "cd_catalog.xml"
	,	type : "get"	//"post"
	,	data : {}
	,	dataType : "xml"
	, 	success : function(data) {
			console.log(data);
			console.log(data.getElementsByTagName("CATALOG"));
// 					document.getElementsByTagName();
// 					childnodes
// 					children

			makeArtistList(data);
	}
	,	error : function(xhr) {	//에러는 data 대신 xhr이라고 보통 많이 사용
			console.log(xhr);
			alert("오류 발생")
	}
		
	});
}

function fnXml2() {
	$.ajax({
		url : "cd_catalog.xml"
	,	type : "get"	//"post"
	,	data : {}
	,	dataType : "xml"
	, 	success : function(data) {
			console.log(data);
			console.log(data.getElementsByTagName("CATALOG"));
// 					document.getElementsByTagName();
// 					childnodes
// 					children

			makeTitleList(data);
	}
	,	error : function(xhr) {	//에러는 data 대신 xhr이라고 보통 많이 사용
			console.log(xhr);
			alert("오류 발생")
	}
		
	});
}

function makeArtistList(param) {
	//param ==> document
// 			console.log(data.getElementsByTagName("CATALOG"));
// 			document.getElementsByTagName();
// 			childnodes
// 			children
	var arr = param.getElementsByTagName("ARTIST");
	
	console.log(arr);
	console.log(arr[0]);
	console.log(arr[0].innerHTML);
	
	var str = "";
	for(var i = 0; i < arr.length; i++) {
		str += arr[i].innerHTML + "<br>";	//가수 이름
	}
	$("#divResult").html(str);
}

function makeTitleList(param) {
	
	var arr = param.getElementsByTagName("TITLE");
	
// 			console.log(arr[0].innerHTML);
// 			console.log($(arr[0]).html());
	console.log(arr[0]);
	console.log(arr[0].childNodes[0].nodeValue);
	
	//[HTML 교재10 - DOM순회] PDF 참고
	var str = "";
	for(var i = 0; i < arr.length; i++) {
		str += arr[i].childNodes[0].nodeValue + "<br>";	//제목 이름
	}
	$("#divResult").html(str);
}

function fnXmlTable() {
	$.ajax({
		url : "cd_catalog.xml"
	,	type : "get"
	,	data : {}
	,	dataType : "xml"
	,	success : function(data) {
		
		makeTable(data);
		
	}, 	error : function() {
		
	}
	});
}

function makeTable(param) {
	
	var cds = param.getElementsByTagName("CD");
//	var cds = $("CD", param); //위를 왼쪽과 같이 작성해도 같음
	
	console.log(cds);
	str = "<br><table id=\"ajaxT\">"
		+ "<tr><th>TITLE</th>"
		+ "<th>ARTIST</th>"
		+ "<th>COUNTRY</th>"
		+ "<th>COMPANY</th>"
		+ "<th>PRICE</th>"
		+ "<th>YEAR</th></tr>";
	
//	for (var i = 0; i < cds.length; i++) {
//		var obj = cds[i];
//		var objTitle = obj.getElementsByTagName("TITLE");
//		var title = $(objTitle).html();
//		console.log(cds);
//		
//	}
	
	for(var obj of cds) {
		str += "<tr><td>" + $(obj).children().eq(0).html() + "</td>"
			+ "<td>" + $(obj).children().eq(1).html() + "</td>"
			+ "<td>" + $(obj).children().eq(2).html() + "</td>"
			+ "<td>" + $(obj).children().eq(3).html() + "</td>"
			+ "<td>" + "$" + $(obj).children().eq(4).html() + "</td>"
			+ "<td>" + $(obj).children().eq(5).html() + "</td></tr>";
	}
	str += "</table>";
	
	$("#divResult").html(str);
}
		