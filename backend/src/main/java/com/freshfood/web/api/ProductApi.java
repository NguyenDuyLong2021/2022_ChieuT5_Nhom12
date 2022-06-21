package com.freshfood.web.api;

import java.io.IOException;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.freshfood.model.web.Product;
import com.freshfood.model.web.UserModel;
import com.freshfood.service.IProductService;
import com.freshfood.utils.ObjectReponse;

@WebServlet(urlPatterns = { "/products", "/api-product/post" })
public class ProductApi extends HttpServlet {

	/**
	 * 	 */
	private static final long serialVersionUID = 1L;
	@Inject
	private IProductService productService;
	@Inject
	private ObjectReponse<UserModel> reponseProduct;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("application/json");
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);
		String uri = req.getRequestURI();
		switch (uri) {
		case "/foodfresh/products":
			List<Product> products = productService.getProducts();
			reponseProduct.setStatusCode(200);
			reponseProduct.setMessage("Success");
			reponseProduct.setDatas(products);
			reponseProduct.setTotal(products.size());
			mapper.writeValue(resp.getOutputStream(), reponseProduct);
			break;
		default:
			break;
		}
	}
}
