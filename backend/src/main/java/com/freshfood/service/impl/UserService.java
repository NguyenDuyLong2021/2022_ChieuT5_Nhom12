package com.freshfood.service.impl;

import javax.inject.Inject;

import com.freshfood.dao.IUserDao;
import com.freshfood.model.web.User;
import com.freshfood.service.IUserService;

public class UserService implements IUserService {
	@Inject
	private IUserDao userDao;

	/*
	 * get infor basic user input: id user return a user
	 */
	@Override
	public User getUser(Long idUser) {
		return userDao.getUser(idUser);
	}

	/*
	 * update address user input: id user and a new address output: string message
	 */
	@Override
	public String updateAddress(long id_user, String address) {
		if (userDao.updateAddress(id_user, address) > 0)
			return "Update success";
		else
			return "Update unsuccess";
	}

}
