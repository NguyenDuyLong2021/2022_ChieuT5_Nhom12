package com.freshfood.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.freshfood.dao.ICartDao;
import com.freshfood.model.web.Cart;
import com.freshfood.model.web.CartItem;

public class CartDao extends ADao<Cart> implements ICartDao {

	/*
	 * get data cart by id cart input: id_cart output: a cart
	 */
	@Override
	public List<CartItem> getCart(Long id_cart) {
		String sql = "select ci.id_cart_item, p.id_product, p.name_product, p.thumnail, ci.number_product, p.price \r\n"
				+ "from cart_item ci left join product p on ci.id_product=p.id_product \r\n" + "where ci.id_cart=?";
		Connection connection = getConnection();//
		ResultSet resultSet = null;//
		List<CartItem> listCartItems = null;//
		PreparedStatement statement = null;//
		try {
			statement = connection.prepareStatement(sql);
			statement.setLong(1, id_cart);
			resultSet = statement.executeQuery();
			listCartItems = new ArrayList<CartItem>();
			while (resultSet.next()) {
				CartItem cartItem = new CartItem();
				cartItem.setId_cart_item(resultSet.getLong("id_cart_item"));
				cartItem.setId_product(resultSet.getLong("id_product"));
				cartItem.setName_product(resultSet.getString("name_product"));
				cartItem.setNumber_product(resultSet.getInt("number_product"));
				cartItem.setPrice(resultSet.getDouble("price"));
				cartItem.setThumnail(resultSet.getString("thumnail"));
				listCartItems.add(cartItem);
			}
			return listCartItems;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		} finally {
			close(connection, statement, resultSet);
		}
	}
	
	/*
	 * delete cart item from cart user
	 * input: id_cart_item: long
	 * ouput: none
	 */
	@Override
	public int deleteCartItem(long id_cart_item) {
		String sql = "delete from cart_item ci where ci.id_cart_item=?;";
		Connection connection = getConnection();//
		PreparedStatement statement = null;//
		try {
			statement = connection.prepareStatement(sql);
			statement.setLong(1, id_cart_item);
			return statement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return -1;
		} finally {
			close(connection, statement);
		}
	}

	/*
	 * edit quantity of cart item from cart
	 * input: id_cart_item, quantity product
	 * ouput: int row effect
	 */
	@Override
	public int updateCartItem(long id_cart_item, int quantity) {
		String sql = "update cart_item set number_product=?  where id_cart_item=? ";
		Connection connection = getConnection();//
		PreparedStatement statement = null;//
		try {
			statement = connection.prepareStatement(sql);
			statement.setInt(1, quantity);
			statement.setLong(2, id_cart_item);
			return statement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return -1;
		} finally {
			close(connection, statement);
		}
	}
}
