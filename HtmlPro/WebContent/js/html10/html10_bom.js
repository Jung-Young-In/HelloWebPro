/**
 * 
 */


var pop;

function proc() {
	pop = window.open("https://www.google.com/");	//window 생략하고 사용 가능(open();)
}

function proc2() {
	pop.close();
}

function showMsg() {
	window.setTimeout(alertMsg, 3000);	//window는 생략 가능

//		아래와 같이도 사용 가능
//		window.setTimeout(function () {
//		alert("타이머 사용");}, 3000);

//		바로 쓸때 예시 형식
//		window.setTimeout(function (){
//			alert();}, 5000);		
}

function alertMsg() {
	alert("타이머 사용");
}

function changeBgColor() {
	setInterval(changeColr, 1000);
}

function changeColr() {
	//랜덤으로 색상을 만들어서 p태그의 배경을 넣어주기
	//1. 랜덤 색 뽑기
	var r = 0, g = 0, b = 0;
	r = Math.floor(Math.random() * 256)
	g = Math.floor(Math.random() * 256)
	b = Math.floor(Math.random() * 256)
	//2. p태그에 배경색 주기
	document.getElementById("pInterval").style.backgroundColor 
	= "rgb(" + r + ", " + g + ", " + b + ")";
//	<p id="pInterval" style="background-color: yellow;">
//  색상 주는 법
//  "red", "#ff0055", "rgb(255,0,255)"
}