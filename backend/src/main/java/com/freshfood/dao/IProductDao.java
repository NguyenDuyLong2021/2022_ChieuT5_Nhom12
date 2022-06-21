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
}
