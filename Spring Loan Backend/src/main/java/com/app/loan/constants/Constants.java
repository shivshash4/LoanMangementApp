package com.app.loan.constants;

public class Constants {
	public static final String LOAN_CONTROLLER_MAPPING = "/loan/";
	public static final String SET_LOAN_RATE = "/setLoanRate";
	public static final String GET_LOAN_RATE = "/getLoanRate";
	public static final String REMOVE_LOAN_RATE = "/removeLoanRate/{loanType}";
	public static final String APPLY_LOAN = "/applyLoan";
	public static final String VIEW_LOAN = "/viewLoan/{userid}";
	public static final String ALL_LOAN = "/allLoan";
	public static final String APPROVE_LOAN = "/approveLoan/{userid}";
	public static final String FORECLOSE_LOAN = "/forecloseLoan/{userid}";
	
	public static final String PAY_EMI = "/emi/payEmi";
	public static final String GET_TRANSACTION = "/emi/getTransactions/{userid}";
	
	public static final String USER_CONTROLLER_MAPPING = "/user/";
	public static final String CREATE_USER = "/createUser";
	public static final String FIND_USER = "/findUser/{userid}";
}
