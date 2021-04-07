<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
	<title>Insert title here</title>
</head>
<%
String str = "홍길동";
System.out.println("오잉");

String userName = request.getParameter("userName");
String userAge = request.getParameter("userAge");
%>
<body>
	<p>안녕안녕?</p><br>
	<p>나는 <span id="spUserName"><%=userName %></span></p><br>
	<p><span id="spUserAge"><%=userAge %></span> 살이얌</p>
	<%=str %>
</body>
</html>