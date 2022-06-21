package com.freshfood.service;

import com.freshfood.model.web.UserModel;

public interface IUserService {
	/*
	 * get infor basic user 
	 * input: id user
	 * return a user
	 */
	UserModel getUser(Long id_user);
}
