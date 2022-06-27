package com.freshfood.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.freshfood.dao.IProductDao;
import com.freshfood.model.web.ImageProduct;
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

	/*
	 * get detail product by id product
	 * input: id product
	 * out put: a product
	 */
	@SuppressWarnings("resource")
	@Override
	public Product getDetailProduct(long idProduct) {
		String sql = "select p.id_product, p.name_product, p.decripstion, p.price, p.rate_discount, "
				+ "u.name_unit from product p left join unit u on p.id_unit=u.id_unit where p.id_product = ?";	
		Connection connection = getConnection();
		PreparedStatement statement = null;
		ResultSet resultset = null;	
		try {
			statement = connection.prepareStatement(sql);
			statement.setLong(1, idProduct);
			resultset = statement.executeQuery();
			Product product = new Product();
			while (resultset.next()) {
				product.setId_product(resultset.getLong("id_product"));
				product.setName_product(resultset.getString("name_product"));
				product.setDecripstion(resultset.getString("decripstion"));
				product.setPrice(resultset.getDouble("price"));
				product.setRate_discount(resultset.getDouble("rate_discount"));
				product.setName_unit(resultset.getString("name_unit"));
			}
			sql="select ip.image from image_product ip where ip.id_product =?";
			PreparedStatement newStatement = connection.prepareStatement(sql);
			newStatement.setLong(1, idProduct);
			ResultSet newRSS  = newStatement.executeQuery();
			List<ImageProduct> listImageProducts = new ArrayList<ImageProduct>();
			while (newRSS.next()) {
				ImageProduct imageProduct = new ImageProduct();
				imageProduct.setImage(newRSS.getString("image"));
				listImageProducts.add(imageProduct);
			}
			product.setListImages(listImageProducts);
			close(newRSS, newStatement);
			return product;
		} catch (SQLException e) {
			return null;
		} finally {
			close(connection, statement, resultset);
		}
	}

}
