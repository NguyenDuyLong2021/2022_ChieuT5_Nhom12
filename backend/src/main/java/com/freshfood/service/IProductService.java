package com.freshfood.service;

import java.util.List;

import com.freshfood.model.web.Product;

public interface IProductService {
	/*
	 * get list products from database
	 * input: none
	 * return a list product
	 */
	List<Product> getProducts();
	/*
	 * get detail product by id product
	 * input: id product
	 * out put: a product
	 */
	Product getDetailProduct(long idProduct);
// phương thuc tim kiem san pham dua vao tu khoa
	List<Product> search(String key);
}
