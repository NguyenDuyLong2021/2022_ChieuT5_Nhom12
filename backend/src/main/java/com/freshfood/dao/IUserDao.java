package com.freshfood.dao;

import com.freshfood.model.web.UserModel;

public interface IUserDao {
	/*
	 * get infor basic user input: id user return a user
	 */
	UserModel getUser(Long idUser);
}
