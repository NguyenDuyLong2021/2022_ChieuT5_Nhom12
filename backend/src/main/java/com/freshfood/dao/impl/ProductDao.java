package com.freshfood.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.freshfood.dao.IProductDao;
import com.freshfood.model.web.Product;

public class ProductDao extends ADao<Product> implements IProductDao {

	/*
	 * get list products from database
	 * input: none
	 * return a list product
	 */
	@Override
	public List<Product> getProducts() {
		String sql = " select p.id_product, p.name_product, p.price, p.thumnail from product p where p.id_product between 1 and 10 limit 10";
		Connection connection = getConnection();
		PreparedStatement statement = null;
		ResultSet resultset = null;
		try {
			statement = connection.prepareStatement(sql);
			resultset = statement.executeQuery();
			List<Product> products = new ArrayList<Product>();
			while (resultset.next()) {
				Product product = new Product();
				product.setId_product(resultset.getLong("id_product"));
				product.setName_product(resultset.getString("name_product"));
				product.setPrice(resultset.getDouble("price"));
				product.setThumnail(resultset.getString("thumnail"));
				products.add(product);
			}
			return products;
		} catch (SQLException e) {
			return null;
		} finally {
			close(connection, statement, resultset);
		}
	}

}
