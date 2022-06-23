package com.freshfood.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.freshfood.dao.IUserDao;
import com.freshfood.model.web.User;

public class UserDao extends ADao<UserDao> implements IUserDao {

	/*
	 * get infor basic user inculues : id user, last name, first name, phone number
	 * address, total cart item and avatar input: id user type long return a user
	 * object
	 */
	@Override
	public User getUser(Long idUser) {
		Connection connection = getConnection();
		PreparedStatement statement = null;
		ResultSet resultset = null;
		String sql = "select u.id_user, u.first_name, u.last_name, u.avatar, c.id_cart, "
				+ "u.phone_number, u.address,count(ci.id_cart) as quanity_item  from\r\n" + "user u \r\n"
				+ "inner join cart c on u.id_user = c.id_user\r\n"
				+ "inner join cart_item ci on c.id_cart=ci.id_cart\r\n" + " where c.id_user=? group by ci.id_cart ;";
		try {
			statement = connection.prepareStatement(sql);
			statement.setLong(1, idUser);
			resultset = statement.executeQuery();
			User user = new User();
			while (resultset.next()) {
				user.setId_user(resultset.getLong("id_user"));
				user.setFirst_name(resultset.getString("first_name"));
				user.setLast_name(resultset.getString("last_name"));
				user.setAvatar(resultset.getString("avatar"));
				user.setId_cart(resultset.getLong("id_cart"));
				user.setPhone_number(resultset.getString("phone_number"));
				user.setAddress(resultset.getString("address"));
				user.setQuantity_item_cart(resultset.getInt("quanity_item"));
			}
			return user;
		} catch (SQLException e) {
			return null;
		} finally {
			close(connection, statement, resultset);
		}
	}

	/*
	 * update address user input: id user and a new address output: number row
	 * effected
	 */
	@Override
	public int updateAddress(long id_user, String address) {
		String sql = "update user set address=?  where id_user=? ";
		Connection connection = getConnection();//
		PreparedStatement statement = null;//
		try {
			connection.setAutoCommit(false);
			statement = connection.prepareStatement(sql);
			statement.setString(1, address);
			statement.setLong(2, id_user);
			connection.commit();
			return statement.executeUpdate();
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
