package com.app.loan.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.loan.dao.EmiDao;
import com.app.loan.dao.LoanDao;
import com.app.loan.model.EmiDetails;
import com.app.loan.model.LoanDetails;
import com.app.loan.model.LoanRate;
import com.app.loan.model.UserDetails;

@Service
public class LoanServiceImpl implements LoanService {

	@Autowired
	LoanDao loandao;
	@Autowired
	EmiDao emidao;

	@Override
	public void setLoanRates(LoanRate loanrate) {
		loandao.setLoanRates(loanrate);
	}

	@Override
	public List<LoanRate> getLoanRates() {
		return loandao.getLoanRates();
	}

	@Override
	public void removeLoanRate(String loanType) {
		loandao.removeLoanRate(loanType);
	}

	@Override
	public void applyLoan(LoanDetails loandetials) {
		float principle = loandetials.getLoanAmount();
		float rate = loandao.getLoanRates().stream().filter(v -> v.getLoanType().equals(loandetials.getLoanType()))
				.findFirst().get().getInterestRate();
		float time = loandetials.getDuration();
		float finalAmount = (float) ((principle * rate * time * 0.01) + (principle));
		loandetials.setFinalAmount(finalAmount);
		loandetials.setNumberofEmi(12 * time);
		loandao.applyLoan(loandetials);

	}

	@Override
	public LoanDetails viewLoan(String userid) {
		return loandao.viewLoan(userid);
	}

	@Override
	public List<LoanDetails> allLoan() {
		return loandao.allLoan();
	}

	@Override
	public void approveLoan(String userid) {
		loandao.approveLoan(userid);
	}

	@Override
	public void payEmi(EmiDetails emi) {
		emi.setTransactionId(LocalDateTime.now().toString());
		emi.setDueDate("5/"+LocalDate.now().getMonthValue()+"/"+LocalDate.now().getYear());
		LoanDetails loan = loandao.viewLoan(emi.getUserId());
		emi.setEmiAmount(loan.getLoanAmount()/loan.getNumberofEmi());
		loan.setPaidEmi(loan.getPaidEmi()+1);
		loandao.applyLoan(loan);
		loandao.payEmi(emi);
	}

	@Override
	public List<EmiDetails> getTransactions(String userid) {
		return emidao.getTransactions().stream().filter(d->d.getUserId().equals(userid)).collect(Collectors.toList());
	}

	@Override
	public void forecloseLoan(String userid) {
		loandao.forecloseLoan(userid);
	}
}
