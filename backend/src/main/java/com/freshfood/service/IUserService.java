package com.freshfood.service;

import com.freshfood.model.web.User;

public interface IUserService {
	/*
	 * get infor basic user 
	 * input: id user
	 * return a user
	 */
	User getUser(Long id_user);
	
	/*
	 * update address user
	 * input: id user and a new address 
	 * output: string message
	 */
	String updateAddress(long id_user, String address);
}
