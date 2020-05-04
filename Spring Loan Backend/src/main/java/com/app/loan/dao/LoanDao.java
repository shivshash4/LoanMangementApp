package com.app.loan.dao;

import java.util.List;

import com.app.loan.model.EmiDetails;
import com.app.loan.model.LoanDetails;
import com.app.loan.model.LoanRate;
import com.app.loan.model.UserDetails;

public interface LoanDao {
	public void setLoanRates(LoanRate loanrate);

	public List<LoanRate> getLoanRates();

	public void removeLoanRate(String loanType);

	public void applyLoan(LoanDetails loandetials);

	public LoanDetails viewLoan(String userid);

	public List<LoanDetails> allLoan();

	public void approveLoan(String userid);

	public void payEmi(EmiDetails emi);

	public void forecloseLoan(String userid);
}
