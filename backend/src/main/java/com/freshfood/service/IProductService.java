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
}
