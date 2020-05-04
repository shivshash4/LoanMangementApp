package com.app.loan.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;

@Entity(name = "loan_details")
@Component
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class LoanDetails {

	@Id
	@Column(name = "userid")
	String userId;

	@Column(name = "annualsalary")
	float annualSalary;

	@Column(name = "loanamount")
	float loanAmount;
	
	@Column(name = "duration")
	float duration;
	
	@Column(name = "loantype")
	String loanType;

	@Column(name = "differentassest")
	String differentAssest;
	
	@Column(name = "assestvaluation")
	String assestValuation;
	
	@Column(name = "referperson")
	String referPerson;
	
	@Column(name = "finalamount")
	float finalAmount;
    
	@Column(name = "numberofemi")
	float numberofEmi;
	
	@Column(name = "paiEemi")
	float paidEmi;
	
	public LoanDetails(String userId, float annualSalary, float loanAmount, float duration, String loanType,
			String differentAssest, String assestValuation, String referPerson, float finalAmount, float numberofEmi,
			float paidEmi, float lateCharges, boolean loanApproval, String sanctionDate) {
		super();
		this.userId = userId;
		this.annualSalary = annualSalary;
		this.loanAmount = loanAmount;
		this.duration = duration;
		this.loanType = loanType;
		this.differentAssest = differentAssest;
		this.assestValuation = assestValuation;
		this.referPerson = referPerson;
		this.finalAmount = finalAmount;
		this.numberofEmi = numberofEmi;
		this.paidEmi = paidEmi;
		this.lateCharges = lateCharges;
		this.loanApproval = loanApproval;
		this.sanctionDate = sanctionDate;
	}

	public float getDuration() {
		return duration;
	}

	public void setDuration(float duration) {
		this.duration = duration;
	}

	@Column(name = "lateCharges")
	float lateCharges;
	
	@Column(name = "loanApproval")
	@org.hibernate.annotations.Type(type = "org.hibernate.type.NumericBooleanType")
	boolean loanApproval;
	
	@Column(name = "sanctionDate")
	String sanctionDate;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public float getAnnualSalary() {
		return annualSalary;
	}

	public void setAnnualSalary(float annualSalary) {
		this.annualSalary = annualSalary;
	}

	public float getLoanAmount() {
		return loanAmount;
	}

	public void setLoanAmount(float loanAmount) {
		this.loanAmount = loanAmount;
	}

	public String getLoanType() {
		return loanType;
	}

	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}

	public String getDifferentAssest() {
		return differentAssest;
	}

	public void setDifferentAssest(String differentAssest) {
		this.differentAssest = differentAssest;
	}

	public String getAssestValuation() {
		return assestValuation;
	}

	public void setAssestValuation(String assestValuation) {
		this.assestValuation = assestValuation;
	}

	public String getReferPerson() {
		return referPerson;
	}

	public void setReferPerson(String referPerson) {
		this.referPerson = referPerson;
	}

	public float getFinalAmount() {
		return finalAmount;
	}

	public void setFinalAmount(float finalAmount) {
		this.finalAmount = finalAmount;
	}

	public float getNumberofEmi() {
		return numberofEmi;
	}

	public void setNumberofEmi(float numberofEmi) {
		this.numberofEmi = numberofEmi;
	}

	public float getPaidEmi() {
		return paidEmi;
	}

	public void setPaidEmi(float paidEmi) {
		this.paidEmi = paidEmi;
	}

	public float getLateCharges() {
		return lateCharges;
	}

	public void setLateCharges(float lateCharges) {
		this.lateCharges = lateCharges;
	}

	public boolean isLoanApproval() {
		return loanApproval;
	}

	public void setLoanApproval(boolean loanApproval) {
		this.loanApproval = loanApproval;
	}

	public String getSanctionDate() {
		return sanctionDate;
	}

	public void setSanctionDate(String sanctionDate) {
		this.sanctionDate = sanctionDate;
	}

	public LoanDetails() {
		super();
	}

	public LoanDetails(String userId, float annualSalary, float loanAmount, String loanType, String differentAssest,
			String assestValuation, String referPerson, float finalAmount, float numberofEmi, float paidEmi,
			float lateCharges, boolean loanApproval, String sanctionDate) {
		super();
		this.userId = userId;
		this.annualSalary = annualSalary;
		this.loanAmount = loanAmount;
		this.loanType = loanType;
		this.differentAssest = differentAssest;
		this.assestValuation = assestValuation;
		this.referPerson = referPerson;
		this.finalAmount = finalAmount;
		this.numberofEmi = numberofEmi;
		this.paidEmi = paidEmi;
		this.lateCharges = lateCharges;
		this.loanApproval = loanApproval;
		this.sanctionDate = sanctionDate;
	}

	@Override
	public String toString() {
		return "LoanDetails [userId=" + userId + ", annualSalary=" + annualSalary + ", loanAmount=" + loanAmount
				+ ", duration=" + duration + ", loanType=" + loanType + ", differentAssest=" + differentAssest
				+ ", assestValuation=" + assestValuation + ", referPerson=" + referPerson + ", finalAmount="
				+ finalAmount + ", numberofEmi=" + numberofEmi + ", paidEmi=" + paidEmi + ", lateCharges=" + lateCharges
				+ ", loanApproval=" + loanApproval + ", sanctionDate=" + sanctionDate + "]";
	}
	
}
