package com.freshfood.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.inject.Inject;

import com.freshfood.dao.ICartDao;
import com.freshfood.dao.IOrderDao;
import com.freshfood.model.web.OrderItem;
import com.freshfood.model.web.OrderProduct;

public class OrderDao extends ADao<OrderProduct> implements IOrderDao {
	
	@Inject
	private ICartDao cartDao;

	/*
	 * order product input: id_user, id voucher, id_type_payment, date_shipping,
	 * time_shipping, fee_shipping and order item list (OrderProduct model) output:
	 * number row effected
	 */
	@SuppressWarnings("resource")
	@Override
	public int orderProduct(long idUser, OrderProduct orderProduct) {
		// query using to insert new order into database
		String sql1 = "insert into order_product (id_user, id_voucher, id_type_payment, date_shipping, time_shipping, fee_shipping)\r\n"
				+ "values (?, ?, ?, ?, ?,?);";
		Connection connection = getConnection();//
		PreparedStatement statement = null;//
		ResultSet resultSet = null;
		try {
			connection.setAutoCommit(false);
			statement = connection.prepareStatement(sql1, Statement.RETURN_GENERATED_KEYS);
			statement.setLong(1, idUser);
			statement.setLong(2, orderProduct.getId_voucher());
			statement.setLong(3, orderProduct.getId_type_payment());
			statement.setTimestamp(4, orderProduct.getDate_shipping());
			statement.setTime(5, orderProduct.getTime_shipping());
			statement.setDouble(6, orderProduct.getFee_shipping());
			// row effected bigger than 0 then executing next SQL
			if (statement.executeUpdate() > 0) {
				resultSet = statement.getGeneratedKeys();
				// get generated key
				long idOrder = -1;
				while (resultSet.next()) {
					idOrder = resultSet.getLong(1);
				}
				// query using insert order irtem into database
				String sql2 = "insert into order_item (id_order, id_product, number_product) values (?	,?,?)";
				statement = connection.prepareStatement(sql2);
				for (OrderItem oi : orderProduct.getOrderItems()) {
					statement.setLong(1, idOrder);
					statement.setLong(2,oi.getId_product());
					statement.setInt(3, oi.getQuantity());
					statement.addBatch();
				}
				statement.executeBatch();
				cartDao.clearCart(idUser);
				connection.commit();
				return 1;
			}
			return -1;
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
			close(connection, statement, resultSet);
		}
	}

}
