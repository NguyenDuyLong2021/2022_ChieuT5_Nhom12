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
import com.freshfood.model.web.Cart;
import com.freshfood.model.web.CartItem;
import com.freshfood.service.ICartService;
import com.freshfood.service.IPromotionService;
import com.freshfood.utils.HttpUtil;
import com.freshfood.utils.ObjectReponse;

@WebServlet(urlPatterns = { "/cart", "/checkVoucher", "/updateCart/remove", "/updateCart/edit" })
public class CartApi extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Inject
	private ICartService cartService;
	@Inject
	private IPromotionService promotionService;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		String uri = req.getRequestURI();
		mapper.setSerializationInclusion(Include.NON_NULL);
		resp.setContentType("application/json");
		switch (uri) {
		case "/foodfresh/cart":
			Long idCart = Long.parseLong(req.getParameter("id_cart"));
			Cart cart = cartService.getCart(idCart);
			ObjectReponse<Cart> reponse = new ObjectReponse<Cart>();
			reponse.setStatusCode(200);
			reponse.setMessage("Success");
			reponse.setModel(cart);
			mapper.writeValue(resp.getOutputStream(), reponse);
			break;
		case "/foodfresh/checkVoucher": {
			long idUser = Long.parseLong(req.getParameter("id_user"));
			String codeVoucher = req.getParameter("codeVoucher");
			Boolean result = promotionService.checkValidateVoucher(idUser, codeVoucher);
			ObjectReponse<Boolean> rpsCheck = new ObjectReponse<Boolean>();
			rpsCheck.setStatusCode(200);
			rpsCheck.setMessage("Success");
			rpsCheck.setResult(result);
			mapper.writeValue(resp.getOutputStream(), rpsCheck);
		}
		default:
			break;
		}
	}

	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);
		resp.setContentType("application/json");
		long idCartItem = Long.parseLong(req.getParameter("id_cart_item"));
		String message = cartService.deleteCartItem(idCartItem);
		ObjectReponse<String> delCartItem = new ObjectReponse<String>();
		delCartItem.setMessage(message);
		delCartItem.setStatusCode(200);
		mapper.writeValue(resp.getOutputStream(), delCartItem);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	}

	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		CartItem cartItem = HttpUtil.of(req.getReader()).toModel(CartItem.class);
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);
		resp.setContentType("application/json");
		String message = cartService.updateCartItem(cartItem.getId_cart_item(), cartItem.getNumber_product());
		ObjectReponse<String> delCartItem = new ObjectReponse<String>();
		delCartItem.setMessage(message);
		delCartItem.setStatusCode(200);
		mapper.writeValue(resp.getOutputStream(), delCartItem);
	}
}
