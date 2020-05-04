package com.app.loan.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class LoanException extends RuntimeException {
	private static final long serialVersionUID = -4005267182579342970L;

	public LoanException() {
		super();
		 
	}

	public LoanException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		 
	}

	public LoanException(String message, Throwable cause) {
		super(message, cause);
		 
	}

	public LoanException(String message) {
		super(message);
		 
	}

	public LoanException(Throwable cause) {
		super(cause);
		 
	}
	
}
