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
import com.freshfood.model.web.UserModel;
import com.freshfood.service.impl.UserService;
import com.freshfood.utils.ObjectReponse;

@WebServlet(urlPatterns = { "/user" })
public class UserApi extends HttpServlet {
	@Inject
	private UserService userService;
	@Inject
	private ObjectReponse<UserModel> reponseUser;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("application/json");
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);
		String uri = req.getRequestURI();
		switch (uri) {
		case "/foodfresh/user":
			long id = Long.parseLong(req.getParameter("id_user"));
			UserModel user = userService.getUser(id);
			reponseUser.setStatusCode(200);
			reponseUser.setMessage("Success");
			reponseUser.setModel(user);
			mapper.writeValue(resp.getOutputStream(), reponseUser);
			break;
		default:
			break;
		}
	}
}
