/**
 * 
 */

//strUrl = "http://localhost:9090/JqueryPro/html/jquery9/jquery9_submit_result.jsp"
//strKey = "userId"
function getaValue(strUrl, strKey) {
	var val = "";
	//strUrl에서 strKey에 해당하는 값을 추출해서
	val = "";
	return val;
}

//validation 체크할 경우
function isEmpty(val) {
	//val이 빈값이거나  null이거나 undefined이거나 일 경우
	return true;
	
	return false;
}

//어떤 값을 형식에 맞게끔 바꾸고 싶은 경우
function format(val, type) {
//	010-1234-1234
//	01012341234
//	010-12341234
//	위 케이스의 경우를 고려하여 작성
	if(type == "hpno"){
		val = val.replaceAll("-", "").replaceAll(" ", "");
		
		//2020-04-08
		val = val.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");	//뒤 번호는 파라미터 순서 의미
		
		//2020/04/08
		val = val.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1/$2/$3");	//뒤 번호는 파라미터 순서 의미

		//2020년04월08일
		val.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1년$2월$3일");	//뒤 번호는 파라미터 순서 의미

		//val 010-1234-1234 형식으로 바꿔서
		val = 010-1234-1234	//여기서 정규식 사용하여 형식 표현
		return val;
	}
}

//정규식 검사하는 경우
function chkRegExp(val, type) {
	
}