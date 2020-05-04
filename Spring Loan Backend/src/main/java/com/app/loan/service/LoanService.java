package com.app.loan.service;

import java.util.List;

import com.app.loan.model.EmiDetails;
import com.app.loan.model.LoanDetails;
import com.app.loan.model.LoanRate;

public interface LoanService {
	public void setLoanRates(LoanRate loanrate);

	public List<LoanRate> getLoanRates();

	public void removeLoanRate(String loanType);

	public void applyLoan(LoanDetails loandetials);

	public LoanDetails viewLoan(String userid);

	public List<LoanDetails> allLoan();

	public void approveLoan(String userid);

	public void payEmi(EmiDetails emi);

	public List<EmiDetails> getTransactions(String userid);

	public void forecloseLoan(String userid);
}
