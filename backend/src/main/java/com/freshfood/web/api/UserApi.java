package com.freshfood.web.api;

import java.io.IOException;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.freshfood.model.web.User;
import com.freshfood.service.impl.UserService;
import com.freshfood.utils.HttpUtil;
import com.freshfood.utils.ObjectReponse;

@WebServlet(urlPatterns = { "/user", "/user/updateAddress" })
public class UserApi extends HttpServlet {
	@Inject
	private UserService userService;
	@Inject
	private ObjectReponse<User> reponseUser;
	@Inject
	private ObjectReponse<String> messageReps;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("application/json");
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);
		String uri = req.getRequestURI();
		switch (uri) {
		case "/foodfresh/user":
			long id = Long.parseLong(req.getParameter("id_user"));
			User user = userService.getUser(id);
			reponseUser.setStatusCode(200);
			reponseUser.setMessage("Success");
			reponseUser.setModel(user);
			mapper.writeValue(resp.getOutputStream(), reponseUser);
			break;
		default:
			break;
		}
	}
	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("application/json");
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);
		long idUser = Long.parseLong(req.getParameter("id_user"));
		User user = HttpUtil.of(req.getReader()).toModel(User.class);
		String message = userService.updateAddress(idUser, user.getAddress());
		messageReps.setStatusCode(200);
		messageReps.setMessage("Success");
		messageReps.setResult(message);
		mapper.writeValue(resp.getOutputStream(), messageReps);
	}
}
