package kr.or.ddit.common.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.common.service.ZipService;
import kr.or.ddit.common.vo.ZipVO;

@WebServlet("/ZipServlet")
public class ZipServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doGet(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String dong = req.getParameter("dong");
		
		ZipVO zipVo = new ZipVO();
		zipVo.setDong(dong);
		
		//회원 목록 조회
		ZipService service = new ZipService();
		try {
			List<ZipVO> list = service.retrieveZipList(zipVo);
			
			// 브라우저로 전달할 결과를 request에 attribute로 세팅
			req.setAttribute("list", list);
			
			// 결과를 받을 url 세팅
			RequestDispatcher  disp = req.getRequestDispatcher("/html/common/zipListResult.jsp");
			disp.forward(req, resp);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
}
