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
import com.freshfood.model.web.Voucher;
import com.freshfood.service.ICartService;
import com.freshfood.service.IPromotionService;
import com.freshfood.utils.HttpUtil;
import com.freshfood.utils.ObjectReponse;

@WebServlet(urlPatterns = { "/cart", "/checkVoucher", "/updateCart/remove", "/updateCart/edit" ,"/updateCart/addToCart" ,"/booleanProduct", "/getQuantity"})
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
			
		case "/foodfresh/getQuantity":
			long idProductQuantity = Long.parseLong(req.getParameter("id_product")); 
			int quantity = cartService.getQuantity(idProductQuantity); 
			ObjectReponse<Cart> reponseQuantity = new ObjectReponse<Cart>();
			reponseQuantity.setStatusCode(200);
			reponseQuantity.setMessage("Quantity: " + quantity);
//			reponseQuantity.setModel(cart);
			mapper.writeValue(resp.getOutputStream(), reponseQuantity);
			break;
			
		case "/foodfresh/booleanProduct":
			long idProduct = Long.parseLong(req.getParameter("id_product")); 
			String resultProduct = cartService.booleanProduct(idProduct);
			ObjectReponse<Boolean> rpsCheckProduct = new ObjectReponse<Boolean>();
			rpsCheckProduct.setStatusCode(200);
			rpsCheckProduct.setMessage(resultProduct); 
			mapper.writeValue(resp.getOutputStream(), rpsCheckProduct); 
			
		case "/foodfresh/checkVoucher": {
			long idUser = Long.parseLong(req.getParameter("id_user"));
			String codeVoucher = req.getParameter("codeVoucher");
			Voucher v = promotionService.checkValidateVoucher(idUser, codeVoucher);
			ObjectReponse<Voucher> rpsCheck = new ObjectReponse<Voucher>();
			rpsCheck.setStatusCode(200);
			rpsCheck.setMessage("Success");
			rpsCheck.setResult(v);
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
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);
		resp.setContentType("application/json");
		long idCart = Long.parseLong(req.getParameter("id_cart"));
		CartItem cartItem = HttpUtil.of(req.getReader()).toModel(CartItem.class);
		String message = cartService.addToCart(idCart, cartItem.getId_product(), cartItem.getQuantity());
		ObjectReponse<String> delCartItem = new ObjectReponse<String>();
		delCartItem.setMessage(message);
		delCartItem.setStatusCode(200);
		mapper.writeValue(resp.getOutputStream(), delCartItem);
	}

	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		CartItem cartItem = HttpUtil.of(req.getReader()).toModel(CartItem.class);
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);
		resp.setContentType("application/json");
		String message = cartService.updateCartItem(cartItem.getId_product(), cartItem.getQuantity());
		ObjectReponse<String> delCartItem = new ObjectReponse<String>();
		delCartItem.setMessage(message);
		delCartItem.setStatusCode(200);
		mapper.writeValue(resp.getOutputStream(), delCartItem);
	}
}
