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
import com.freshfood.model.web.OrderProduct;
import com.freshfood.service.impl.OrderService;
import com.freshfood.utils.HttpUtil;
import com.freshfood.utils.ObjectReponse;

/**
 * Servlet implementation class OrderApi
 */
@WebServlet(urlPatterns = { "/order" })
public class OrderApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@Inject
	private OrderService orderService;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		String id_user = request.getParameter("id_user");
		OrderProduct orderProduct = HttpUtil.of(request.getReader()).toModel(OrderProduct.class);
		String message = orderService.orderProduct(Integer.parseInt(id_user), orderProduct);
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);
		ObjectReponse<String> delCartItem = new ObjectReponse<String>();
		delCartItem.setMessage(message);
		delCartItem.setStatusCode(200);
		mapper.writeValue(response.getOutputStream(), delCartItem);
	}

}
