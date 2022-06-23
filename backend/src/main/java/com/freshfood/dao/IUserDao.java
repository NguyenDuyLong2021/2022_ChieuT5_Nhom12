package com.freshfood.dao;

import com.freshfood.model.web.User;

public interface IUserDao {
	/*
	 * get infor basic user inculues : id user, last name, first name, phone number
	 * address, total cart item and avatar
	 * input: id user type long
	 * return a user object
	 */
	User getUser(Long idUser);
	/*
	 * update address user
	 * input: id user and a new address 
	 * output: number row effected
	 */
	int updateAddress(long idUser, String address);
}
