package com.freshfood.service.impl;

import java.util.List;

import javax.inject.Inject;

import com.freshfood.dao.impl.ProductDao;
import com.freshfood.model.web.Product;
import com.freshfood.service.IProductService;

public class ProductService implements IProductService {

	@Inject
	private ProductDao productDao; // instance of product dao

	/*
	 * get list products from database
	 * input: none
	 * return a list product
	 */
	@Override
	public List<Product> getProducts() {
		return productDao.getProducts();
	}

	/*
	 * get detail product by id product
	 * input: id product
	 * out put: a product
	 */
	@Override
	public Product getDetailProduct(long idProduct) {
		return productDao.getDetailProduct(idProduct);
	}

	/*
	 * search product
	 * input: a string
	 * output: a list product
	 */
	@Override
	// Phuong thuc tim kiems san pham
	// tra ve 1 danh sach cac san pham khi nhap vao String
	public List<Product> search(String key) {
		return productDao.search(key);
	}

}
