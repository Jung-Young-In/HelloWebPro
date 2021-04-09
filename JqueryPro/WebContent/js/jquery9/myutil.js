/**
 * 
 */

//strUrl = "http://localhost:9090/JqueryPro/html/jquery9/jquery9_submit_result.jsp"
//strKey = "userId"
function getaValue(url, key) {
	var chk = url.substr(url.indexOf("?")+1);
	//strUrl에서 Key에 해당하는 값을 추출해서
	var arr = chk.split("&");
	var arr2 = arr[key].split("=");
	var result = decodeURI(arr2[1]);
	return result;
}

//validation 체크할 경우
function isEmpty(val) {
	//val이 빈값이거나  null이거나 undefined이거나 일 경우
	if(val == " ") {
		return false;
	}else if(val == null){
		return false;
	}else if(val == undefined){
		return false;
	}else {
		return true;
	}
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
		val = val.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1년$2월$3일");	//뒤 번호는 파라미터 순서 의미

		//val 010-1234-1234 형식으로 바꿔서
//		val = 010-1234-1234	//여기서 정규식 사용하여 형식 표현
		return val;
	}
}

//정규식 검사하는 경우
function chkRegExp(val, type) {
	var id = /^[a-z가-힣0-9_]{8,20}$/;
	var pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
	var name = /^[가-힣]{2,5}$/;
	var bir = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
	var phone = /^\d{3}\d{3,4}\d{4}$/; 
	var email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
	
	if(id.equals(type)){
		if(val.match(id) == null){
			return false;
		}else {
			return true;
		}
	}else if(pass.equals(type)){
		
		if(val.match(pass) == null){
			return false;
		}else {
			return true;
		}
		
	}else if(name.equals(type)){
		
		if(val.match(name) == null){
			return false;
		}else {
			return true;
		}
		
	}else if(bir.equals(type)){
		
		if(val.match(bir) == null){
			return false;
		}else {
			return true;
		}
		
	}else if(bir.equals(type)){
		
		if(val.match(bir) == null){
			return false;
		}else {
			return true;
		}
		
	}else if(phone.equals(type)){
		
		if(val.match(phone) == null){
			return false;
		}else {
			return true;
		}
		
	}else if(email.equals(type)){
		
		if(val.match(email) == null){
			return false;
		}else {
			return true;
		}
		
	}else {
		alert("잘못된 파라미터 값을 입력하였습니다.")
	}
}

















