package com.freshfood.dao;

import java.util.List;

import com.freshfood.model.web.Product;

public interface IProductDao {
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
	/*
	 * search product
	 * input: a string
	 * output: a list product
	 */
	List<Product> search(String key);
}
