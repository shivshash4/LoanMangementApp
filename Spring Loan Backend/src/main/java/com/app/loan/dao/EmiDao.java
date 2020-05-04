package com.app.loan.dao;

import java.util.List;

import com.app.loan.model.EmiDetails;

public interface EmiDao {
	public List<EmiDetails> getTransactions();
}
