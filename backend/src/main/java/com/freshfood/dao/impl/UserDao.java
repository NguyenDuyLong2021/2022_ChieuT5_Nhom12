package com.freshfood.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.freshfood.dao.IUserDao;
import com.freshfood.model.web.UserModel;

public class UserDao extends ADao<UserDao> implements IUserDao {

	/*
	 * get infor basic user 
	 * input: id user
	 * return a user
	 */
	@Override
	public UserModel getUser(Long idUser) {
		Connection connection = getConnection();
		PreparedStatement statement = null;
		ResultSet resultset = null;
		String sql = "select u.id_user, u.first_name, u.last_name, u.avatar, c.id_cart, count(ci.id_cart) as quanity_item  from\r\n"
				+ "user u \r\n"
				+ "inner join cart c on u.id_user = c.id_user\r\n"
				+ "inner join cart_item ci on c.id_cart=ci.id_cart\r\n"
				+ " where c.id_user=? group by ci.id_cart ;";
		try {
			statement = connection.prepareStatement(sql);
			statement.setLong(1, idUser);
			resultset = statement.executeQuery();
			UserModel user = new UserModel();
			while (resultset.next()) {
				user.setId_user(resultset.getLong("id_user"));
				user.setFirst_name(resultset.getString("first_name"));
				user.setLast_name(resultset.getString("last_name"));
				user.setAvatar(resultset.getString("avatar"));
				user.setId_cart(resultset.getLong("id_cart"));
				user.setQuantity_item_cart(resultset.getInt("quanity_item"));
			}
			return user;
		} catch (SQLException e) {
			return null;
		} finally {
			close(connection, statement, resultset);
		}
	}

}
