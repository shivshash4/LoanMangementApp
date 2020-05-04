package com.app.loan.service;

import com.app.loan.model.UserDetails;

public interface UserService {
	public void createUser(UserDetails userDetails);

	public UserDetails getUserDetails(String userid);
}
