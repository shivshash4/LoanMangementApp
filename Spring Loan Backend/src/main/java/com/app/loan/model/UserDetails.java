package com.app.loan.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "user_details")
@Component
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class UserDetails {
	@Id
	@Column(name = "userid")
	String userid;
	
	@Column(name = "name")
	String name;
	
	@Column(name = "password")
	String password;
	
	@Column(name = "passkey")
	String passkey;
	
	@Column(name = "panNumber")
	String panNumber;
	
	@Column(name = "aadhaarNumber")
	String aadhaarNumber;
	
	@Column(name = "mobNumber")
	String mobNumber;
	
	@Column(name = "address")
	String address;

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPasskey() {
		return passkey;
	}

	public void setPasskey(String passkey) {
		this.passkey = passkey;
	}

	public String getPanNumber() {
		return panNumber;
	}

	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}

	public String getAadhaarNumber() {
		return aadhaarNumber;
	}

	public void setAadhaarNumber(String aadhaarNumber) {
		this.aadhaarNumber = aadhaarNumber;
	}

	public String getMobNumber() {
		return mobNumber;
	}

	public void setMobNumber(String mobNumber) {
		this.mobNumber = mobNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "UserDetails [userid=" + userid + ", name=" + name + ", password=" + password + ", passkey=" + passkey
				+ ", panNumber=" + panNumber + ", aadhaarNumber=" + aadhaarNumber + ", mobNumber=" + mobNumber
				+ ", address=" + address + "]";
	}

	public UserDetails(String userid, String name, String password, String passkey, String panNumber,
			String aadhaarNumber, String mobNumber, String address) {
		super();
		this.userid = userid;
		this.name = name;
		this.password = password;
		this.passkey = passkey;
		this.panNumber = panNumber;
		this.aadhaarNumber = aadhaarNumber;
		this.mobNumber = mobNumber;
		this.address = address;
	}

	public UserDetails() {
		super();
	}

}
