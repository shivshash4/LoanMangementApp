package com.app.loan.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.loan.model.EmiDetails;
import com.app.loan.repository.EmiRepo;

@Component
public class EmiDaoImpl implements EmiDao {
	@Autowired
	EmiRepo emidetails;
	
	@Override
	public List<EmiDetails> getTransactions() {
		return emidetails.findAll();
	}

}
