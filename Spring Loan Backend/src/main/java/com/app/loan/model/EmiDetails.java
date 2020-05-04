package com.app.loan.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "emi_details")
@Component
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class EmiDetails {
		@Id
		@Column(name = "transaction_id")
		String transactionId;

		@Column(name = "emi_amount")
		float emiAmount;

		@Column(name = "due_date")
		String dueDate;

		@Column(name = "paid_date")
		String paidDate;

		@Column(name = "userid")
		String userId;

		public String getUserId() {
			return userId;
		}

		public void setUserId(String userId) {
			this.userId = userId;
		}

		public float getEmiAmount() {
			return emiAmount;
		}

		public void setEmiAmount(float emiAmount) {
			this.emiAmount = emiAmount;
		}

		public String getDueDate() {
			return dueDate;
		}

		public void setDueDate(String dueDate) {
			this.dueDate = dueDate;
		}

		public String getPaidDate() {
			return paidDate;
		}

		public void setPaidDate(String paidDate) {
			this.paidDate = paidDate;
		}

		public String getTransactionId() {
			return transactionId;
		}

		public void setTransactionId(String transactionId) {
			this.transactionId = transactionId;
		}

		@Override
		public String toString() {
			return "EmiDetails [userId=" + userId + ", emiAmount=" + emiAmount + ", dueDate=" + dueDate + ", paidDate="
					+ paidDate + ", transactionId=" + transactionId + "]";
		}

		public EmiDetails() {
			super();
			// TODO Auto-generated constructor stub
		}

		public EmiDetails(String userId, float emiAmount, String dueDate, String paidDate, String transactionId) {
			super();
			this.userId = userId;
			this.emiAmount = emiAmount;
			this.dueDate = dueDate;
			this.paidDate = paidDate;
			this.transactionId = transactionId;
		}
		
}