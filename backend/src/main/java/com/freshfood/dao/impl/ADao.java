package com.freshfood.dao.impl;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

//abstract class dao
public class ADao<T> {
	/*
	 * method to get a connection from the database and return a connection
	 */
	public Connection getConnection() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			String userName = "root";
			String password = "1234";
			String baseURL = "jdbc:mysql://localhost:3306/freshfood";
			try {
				return DriverManager.getConnection(baseURL, userName, password);
			} catch (SQLException e) {
				return null;
			}
		} catch (ClassNotFoundException e) {
			return null;
		}
	}

	/*
	 * close object like connection, prestatement, resultset input : multi params
	 * inclues connection, prestatement, resultset return none
	 */

	public void close(Object... objects) {
		try {
			for (Object object : objects) {
				if (object instanceof Connection && object != null)
					((Connection) object).close();
				else if (object instanceof PreparedStatement && object != null)
					((PreparedStatement) object).close();
				else if (object instanceof ResultSet && object != null)
					((ResultSet) object).close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
