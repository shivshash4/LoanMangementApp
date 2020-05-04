package com.app.loan.dao;

import com.app.loan.model.UserDetails;

public interface UserDao {
	public void createUser(UserDetails userDetails);

	public UserDetails getUserDetails(String userid);
}
