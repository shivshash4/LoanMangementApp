package com.app.loan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.loan.dao.UserDao;
import com.app.loan.model.UserDetails;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDao userDao;
	
	@Override
	public void createUser(UserDetails userDetails) {
		userDao.createUser(userDetails);
	}

	@Override
	public UserDetails getUserDetails(String userid) {
		return userDao.getUserDetails(userid);
	}
	
}
