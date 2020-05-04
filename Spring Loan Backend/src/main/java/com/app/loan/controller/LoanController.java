package com.app.loan.controller;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.loan.service.LoanService;
import com.app.loan.model.EmiDetails;
import com.app.loan.model.LoanDetails;
import com.app.loan.model.LoanRate;
import com.app.loan.model.UserDetails;
import com.app.loan.repository.LoanDetailsRepo;
import com.app.loan.constants.Constants;
import com.app.loan.exception.LoanException;;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(Constants.LOAN_CONTROLLER_MAPPING)
public class LoanController {
	@Autowired
	LoanService loanservice;
	@Autowired
	LoanRate loanrate;
	@Autowired
	LoanDetails loandetails;
	@Autowired
	EmiDetails emi;
	
	@GetMapping(Constants.GET_LOAN_RATE)
	public List<LoanRate> getList() {
		return loanservice.getLoanRates();
	}
	
	@PostMapping(Constants.SET_LOAN_RATE)
	public void setLoanRate(@RequestBody LoanRate loanrate) {
			loanservice.setLoanRates(loanrate);
	}
	
	@DeleteMapping(Constants.REMOVE_LOAN_RATE)
	public String removeLoanRate(@PathVariable String loanType) {
		JSONObject dataResponse = new JSONObject();
		try {
			loanservice.removeLoanRate(loanType);
			dataResponse.put("success", true);
			dataResponse.put("message", "Loan Type Deleted Successfully");
		} catch (LoanException e) {
			dataResponse.put("success", false);
			dataResponse.put("message", e.getMessage());
		}
		return dataResponse.toString();
	}
	
	@PostMapping(Constants.APPLY_LOAN)
	public void applyLoan(@RequestBody LoanDetails loandetials) {
			loanservice.applyLoan(loandetials);
	}
	
	@RequestMapping(Constants.VIEW_LOAN)
	public LoanDetails viewLoan(@PathVariable String userid) {
		return loanservice.viewLoan(userid);
	}
	
	
	@GetMapping(Constants.ALL_LOAN)
	public List<LoanDetails> allLoan() {
		return loanservice.allLoan();
	}
	
	@DeleteMapping(Constants.APPROVE_LOAN)
	public String approveLoan(@PathVariable String userid) {
		JSONObject dataResponse = new JSONObject();
		try {
			loanservice.approveLoan(userid);
			dataResponse.put("success", true);
			dataResponse.put("message", "Loan Approved Successfully");
		} catch (LoanException e) {
			dataResponse.put("success", false);
			dataResponse.put("message", e.getMessage());
		}
		return dataResponse.toString();
	}
	
	@PostMapping(Constants.PAY_EMI)
	public void payEmi(@RequestBody EmiDetails emi) {
			loanservice.payEmi(emi);
	}

	@GetMapping(Constants.GET_TRANSACTION)
	public List<EmiDetails> getTransactions(@PathVariable String userid) {
		return loanservice.getTransactions(userid);
	}
	
	@DeleteMapping(Constants.FORECLOSE_LOAN)
	public String forecloseLoan(@PathVariable String userid) {
		JSONObject dataResponse = new JSONObject();
		try {
			loanservice.forecloseLoan(userid);
			dataResponse.put("success", true);
			dataResponse.put("message", "Loan foreclosed Successfully");
		} catch (LoanException e) {
			dataResponse.put("success", false);
			dataResponse.put("message", e.getMessage());
		}
		return dataResponse.toString();
	}
	
}
