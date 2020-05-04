package com.app.loan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.loan.model.EmiDetails;

@Repository
public interface EmiRepo extends JpaRepository<EmiDetails, String> {

}
