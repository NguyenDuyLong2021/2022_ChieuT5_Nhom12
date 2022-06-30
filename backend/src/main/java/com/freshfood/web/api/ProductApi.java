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
import com.freshfood.model.web.User;
import com.freshfood.service.IProductService;
import com.freshfood.utils.ObjectReponse;

@WebServlet(urlPatterns = { "/products", "/product", "/search" })
public class ProductApi extends HttpServlet {

	/**
	 * 	 */
	private static final long serialVersionUID = 1L;
	@Inject
	private IProductService productService;
	@Inject
	private ObjectReponse<Product> reponseProduct;

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

		case "/foodfresh/product": {
			long idProduct = Long.parseLong(req.getParameter("id_product"));
			Product product = productService.getDetailProduct(idProduct);
			ObjectReponse<Product> reponse = new ObjectReponse<Product>();
			reponse.setStatusCode(200);
			reponse.setMessage("Success");
			reponse.setModel(product);
			mapper.writeValue(resp.getOutputStream(), reponse);
			break;
		}
		case "/foodfresh/search": {
			String key = req.getParameter("key");
			List<Product> products1 = productService.search(key);
			ObjectReponse<Product> reponse = new ObjectReponse<Product>();
			reponse.setStatusCode(200);
			reponse.setMessage("Success");
			reponse.setDatas(products1);
			mapper.writeValue(resp.getOutputStream(), reponse);
			break;
		}
		default:
			break;
		}
	}
}
