package com.app.loan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.loan.constants.Constants;
import com.app.loan.model.UserDetails;
import com.app.loan.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(Constants.USER_CONTROLLER_MAPPING)
public class UserController {
	@Autowired
	UserService userService;
	
	@Autowired
	UserDetails userDetails;
	
	@PostMapping(Constants.CREATE_USER)
	public void createUser(@RequestBody UserDetails userDetails) {
			userService.createUser(userDetails);
	}
	
	@RequestMapping(Constants.FIND_USER)
	public UserDetails findUser(@PathVariable String userid) {
		return userService.getUserDetails(userid);
	}
}
