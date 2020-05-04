package com.app.loan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.loan.model.LoanDetails;

@Repository
public interface LoanDetailsRepo extends JpaRepository<LoanDetails, String> {

}
