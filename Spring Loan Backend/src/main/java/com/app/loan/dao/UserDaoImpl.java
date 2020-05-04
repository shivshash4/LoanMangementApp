package com.app.loan.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.loan.model.UserDetails;
import com.app.loan.repository.UserRepo;

@Component
public class UserDaoImpl implements UserDao {
	@Autowired
	UserRepo userRepo;
	
	@Override
	public void createUser(UserDetails userDetails) {
		userRepo.save(userDetails);
	}

	@Override
	public UserDetails getUserDetails(String userid) {
		return userRepo.getOne(userid);
	}

}
