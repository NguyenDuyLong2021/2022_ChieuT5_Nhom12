package com.freshfood.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.freshfood.dao.IPromotionDao;
import com.freshfood.model.web.Promotion;

public class PromotionDao extends ADao<Promotion> implements IPromotionDao{
	/*
	 * check voucher is used
	 * input: id user and code voucher
	 * output: true or false
	 */
	@Override
	public boolean isUsed(long id_user, String code_voucher) {
		String sql = "select uv.available from user_voucher uv left join voucher v "
				+ "on uv.id_voucher=v.id_voucher where uv.id_user=? and v.code_voucher=?;";
		Connection connection = getConnection();
		ResultSet resultSet = null;
		boolean result =false;
		PreparedStatement statement = null;
		try {
			statement = connection.prepareStatement(sql);
			statement.setLong(1, id_user);
			statement.setString(2, code_voucher);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				result=resultSet.getBoolean("available");
			}
			return result;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		} finally {
			try {
				connection.close();
				resultSet.close();
				statement.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	/*
	 * get end date of voucher
	 * input: a code voucher
	 * output: end date type timestamp
	 */
	@Override
	public Timestamp getEndDate(String codeVoucher) {
		String sql = "select p.end_date from voucher v left join promotion p on v.id_promotion=p.id_promotion "
				+ "where v.code_voucher=?;";
		Connection connection = getConnection();
		ResultSet resultSet = null;
		Timestamp result =null;
		PreparedStatement statement = null;
		try {
			statement = connection.prepareStatement(sql);
			statement.setString(1, codeVoucher);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				result=resultSet.getTimestamp("end_date");
			}
			return result;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		} finally {
			try {
				connection.close();
				resultSet.close();
				statement.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
