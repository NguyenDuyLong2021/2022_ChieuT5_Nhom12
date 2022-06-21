package com.freshfood.service.impl;

import javax.inject.Inject;

import com.freshfood.dao.impl.UserDao;
import com.freshfood.model.web.UserModel;
import com.freshfood.service.IUserService;

public class UserService implements IUserService {
	@Inject
	private UserDao userDao;

	/*
	 * get infor basic user 
	 * input: id user
	 * return a user
	 */
	@Override
	public UserModel getUser(Long idUser) {
		return userDao.getUser(idUser);
	}

}
