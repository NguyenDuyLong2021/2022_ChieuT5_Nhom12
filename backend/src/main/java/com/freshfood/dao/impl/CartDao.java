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
				cartItem.setQuantity(resultSet.getInt("number_product"));
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
	 * get quantity of cart item from cart input: id_product
	 * ouput: int row effect
	 */
	@Override
	public int getQuantity (long idProduct) {
		String sql = "select * from cart_item where id_product = ?;";
		Connection connection = getConnection();//
		PreparedStatement statement = null;//
		int result = -1 ;
		try {
			connection.setAutoCommit(false);
			statement = connection.prepareStatement(sql);
			statement.setLong(1, idProduct);  
			ResultSet resultSet = statement.executeQuery();
			System.out.println(resultSet);  
			
			while (resultSet.next()) { 
				result = resultSet.getInt("number_product");
			}
			return result;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			try {
				connection.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			return result;
		} finally {
			close(connection, statement);
		}
	}
	/*
	 * delete cart item from cart user input: id_cart_item: long ouput: none
	 */
	@Override
	public int deleteCartItem(long id_cart_item) {
		String sql = "delete from cart_item ci where ci.id_cart_item=?;";
		Connection connection = getConnection();//
		PreparedStatement statement = null;//
		try {
			connection.setAutoCommit(false);
			statement = connection.prepareStatement(sql);
			statement.setLong(1, id_cart_item);
			 int rowEffect= statement.executeUpdate();
			 connection.commit();
			 return rowEffect;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			try {
				connection.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			return -1;
		} finally {
			close(connection, statement);
		}
	}

	/*
	 * edit quantity of cart item from cart input: id_cart_item, quantity product
	 * ouput: int row effect
	 */
	@Override
	public int updateCartItem(long idProduct, int quantity) {
		String sql = "update cart_item set number_product=?  where id_product=? ";
		Connection connection = getConnection();//
		PreparedStatement statement = null;//
		int quantitySold = getQuantity (idProduct) + quantity ;
		
		try {
			connection.setAutoCommit(false);
			statement = connection.prepareStatement(sql);
			statement.setInt(1, quantitySold);
			statement.setLong(2, idProduct);
			int roweffect = statement.executeUpdate();
			connection.commit();
			return  roweffect;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			try {
				connection.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			return -1;
		} finally {
			close(connection, statement);
		}
	}
	/*
	 * booleanProduct (idProduct)
	 * effect
	 */ 
	@Override
	public boolean booleanProduct (long idProduct) {
		String sql = "select * from freshfood.cart_item where id_product = ?;";
		Connection connection = getConnection();//
		PreparedStatement statement = null;//
		try {
			connection.setAutoCommit(false);
			statement = connection.prepareStatement(sql); 
			statement.setLong(1, idProduct); 
			ResultSet result = statement.executeQuery();
			connection.commit();
			return result.next();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			try {
				connection.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			return false;
		} finally {
			close(connection, statement);
		}
	}

	/*
	 * add new product to cart input: id cart, id product, quantity output: int row
	 * effect
	 */
	@Override
	public int addToCart(long idCart, long idProduct, int quantity) {
		String sql = "insert into cart_item (id_cart, id_product, number_product) values (?,?,?);";
		Connection connection = getConnection();//
		PreparedStatement statement = null;//
		try {
			connection.setAutoCommit(false);
			statement = connection.prepareStatement(sql);
			statement.setLong(1, idCart);
			statement.setLong(2, idProduct);
			statement.setInt(3, quantity);
			int roweffected = statement.executeUpdate();
			connection.commit();
			return roweffected;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			try {
				connection.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			return -1;
		} finally {
			close(connection, statement);
		}
	}

	/*
	 * clear all item in cart
	 * input: id user(idc cart)
	 * out put: number row effected
	 */
	@Override
	public int clearCart(long idUser) {
		String sql = "delete from cart_item where id_cart =?";
		Connection connection = getConnection();//
		PreparedStatement statement = null;//
		try {
			connection.setAutoCommit(false);
			statement = connection.prepareStatement(sql);
			statement.setLong(1, idUser);
			int roweffect = statement.executeUpdate();
			connection.commit();
			return  roweffect;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			try {
				connection.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			return -1;
		} finally {
			close(connection, statement);
		}
	}
	
}
