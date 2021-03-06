package kr.or.ddit.member.servlet;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.member.service.MemberService;
import kr.or.ddit.member.vo.MemberVO;

@WebServlet("/MemberServlet")
public class MemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doGet(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		super.doPost(req, resp); // 지워야함 : extends한 HttpServlet 의 doPost를 호출하는 것이기 때문에 현재 클래스의 doPost를 사용할 수 없음
		
		// 브라우저로 부터 받은 값을 사용하기 위해 request에서 parameter를 get.
		String flag = req.getParameter("flag");
		
		if(flag.equals("C")) {// 등록
			create(req, resp);
		} else if(flag.equals("R")) {//상세조회
		} else if(flag.equals("U")) {//수정
		} else if(flag.equals("D")) {//삭제
		} else if(flag.equals("CHK")) {//ID체크
			checkMemberId(req, resp);
		} else {// 회원목록조회
			retrieveList(req, resp);
			
		}
		
		
	}
	
	private void checkMemberId(HttpServletRequest req, HttpServletResponse resp) {
		try { 
			String memId = req.getParameter("memId");
	
			MemberVO memberVo = new MemberVO();
			memberVo.setMemId(memId);
			
			MemberService service = new MemberService();
			int count = service.checkMemberId(memberVo);
			
			req.setAttribute("count", count);
			
			RequestDispatcher  disp = req.getRequestDispatcher("/html/member/countResult.jsp");
			disp.forward(req, resp);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	private void create(HttpServletRequest req, HttpServletResponse resp) {
		
	}
	
	private void retrieveList(HttpServletRequest req, HttpServletResponse resp) {
		String memId = req.getParameter("memId");
		String memName = req.getParameter("memName");
		// form serialize를 사용해서 파라미터를 전달한 경우, request에 요소의 name으로 parameter가 매핑됨.
		// 예) <input type="text" name="userId"> ==> req.getParameter("userId")
		
		MemberVO memberVo = new MemberVO();
		memberVo.setMemId(memId);
		memberVo.setMemName(memName);
		
		//회원 목록 조회
		MemberService service = new MemberService();
		try {
			List<MemberVO> list = service.retrieveMemberList(memberVo);
			
			// 브라우저로 전달할 결과를 request에 attribute로 세팅
			req.setAttribute("list", list);
			
			// 결과를 받을 url 세팅
//			RequestDispatcher  disp = req.getRequestDispatcher("/MemberPj/html/member/memberListResult.jsp"); // <== contextroot 포함하면 안됨!
			RequestDispatcher  disp = req.getRequestDispatcher("/html/member/memberListResult.jsp");
			try {
				disp.forward(req, resp);
			} catch (ServletException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	
}
