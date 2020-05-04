package com.app.loan.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity(name = "loan_rate")
@Component
public class LoanRate {
	@Id
	@Column(name = "loan_type")
	String loanType;
	
	@Column(name = "interest_rate")
	float interestRate;
	
	@Column(name = "late_charges")
	float lateCharges;
	
	@Column(name = "forclosure_rate")
	float foreclosureRate;
	
	
	
	public LoanRate() {
	}

	public LoanRate(String loanType, float interestRate, float lateCharges, float foreclosureRate) {
		super();
		this.loanType = loanType;
		this.interestRate = interestRate;
		this.lateCharges = lateCharges;
		this.foreclosureRate = foreclosureRate;
	}

	public String getLoanType() {
		return loanType;
	}

	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}

	public float getInterestRate() {
		return interestRate;
	}

	public void setInterestRate(float interestRate) {
		this.interestRate = interestRate;
	}

	public float getLateCharges() {
		return lateCharges;
	}

	public void setLateCharges(float lateCharges) {
		this.lateCharges = lateCharges;
	}

	public float getForeclosureRate() {
		return foreclosureRate;
	}

	public void setForeclosureRate(float foreclosureRate) {
		this.foreclosureRate = foreclosureRate;
	}

	@Override
	public String toString() {
		return "LoanRate [loanType=" + loanType + ", interestRate=" + interestRate + ", lateCharges=" + lateCharges
				+ ", foreclosureRate=" + foreclosureRate + "]";
	}
	
}
