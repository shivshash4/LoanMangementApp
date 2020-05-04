package com.app.loan.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import com.app.loan.model.LoanRate;;

@Repository
public interface LoanRateRepo extends JpaRepository<LoanRate, String>{

}
