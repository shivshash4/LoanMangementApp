package com.app.loan.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.loan.model.EmiDetails;
import com.app.loan.model.LoanDetails;
import com.app.loan.model.LoanRate;
import com.app.loan.model.UserDetails;
import com.app.loan.repository.EmiRepo;
import com.app.loan.repository.LoanDetailsRepo;
import com.app.loan.repository.LoanRateRepo;

@Component
public class LoanDaoImpl implements LoanDao {

	@Autowired
	LoanRateRepo loanrates;
	@Autowired
	LoanDetailsRepo loandetails;
	@Autowired
	EmiRepo emidetails;
	
	public void setLoanRates(LoanRate loanrate) {
		loanrates.save(loanrate);
	}

	@Override
	public List<LoanRate> getLoanRates() {
		return loanrates.findAll();
	}

	@Override
	public void removeLoanRate(String loanType) {
		loanrates.deleteById(loanType);
	}

	@Override
	public void applyLoan(LoanDetails loanDetials) {
		loandetails.save(loanDetials);
	}

	@Override
	public LoanDetails viewLoan(String userid) {
		return loandetails.getOne(userid);
		
	}

	@Override
	public List<LoanDetails> allLoan() {
		return loandetails.findAll();
	}

	@Override
	public void approveLoan(String userid) {
		LoanDetails details = loandetails.getOne(userid);
		System.out.println(details);
		details.setLoanApproval(true);
		loandetails.save(details);
	}

	@Override
	public void payEmi(EmiDetails emi) {
		emidetails.save(emi);
	}

	@Override
	public void forecloseLoan(String userid) {
		loandetails.deleteById(userid);
	}

}
