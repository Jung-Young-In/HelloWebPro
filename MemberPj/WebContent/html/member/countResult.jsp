<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
int count = (Integer) request.getAttribute("count");
%>
{ "count" : "<%=count %>" }

<%
// { "count" : "1" }
%>