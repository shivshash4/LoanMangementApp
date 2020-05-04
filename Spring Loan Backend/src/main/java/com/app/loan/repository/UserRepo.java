package com.app.loan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.loan.model.UserDetails;

@Repository
public interface UserRepo extends JpaRepository<UserDetails, String> {

}
