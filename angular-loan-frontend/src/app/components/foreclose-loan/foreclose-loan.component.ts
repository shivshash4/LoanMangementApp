import { Component, OnInit } from '@angular/core';
import { EMI } from 'src/app/models/EMI.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanDetails } from 'src/app/models/LoanDetails.model';
import { LoanService } from 'src/app/services/loan.service';
import { EmiService } from 'src/app/services/emi.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-foreclose-loan',
  templateUrl: './foreclose-loan.component.html',
  styleUrls: ['./foreclose-loan.component.css']
})
export class ForecloseLoanComponent implements OnInit {

  loanDetails: LoanDetails = new LoanDetails();
  credential: Credential = new Credential();
  paymentForm: FormGroup;
  hide = true;
  amount: number;
  borrower: string;
  balance: number;
  charges: number;
  emiAmount: number;
  loanType: string;

  constructor(private router: Router, private emiService: EmiService, private loanService: LoanService, private userService: UserService) {
 

    this.loanService.getLoanRate().subscribe(data => {
      data.forEach(data => {
        if (data.loanType === this.loanType) {
          this.charges = data.foreclosureRate;
          console.log(this.charges + " " + data.foreclosureRate);
        }
      });
    }, err => {
      console.log("Error in loan rate service ");
    });
  }

  ngOnInit() {
    this.loanService.viewLoan(localStorage.userid).subscribe(data => {
      this.amount = +(data.loanAmount) + (+data.lateCharges);
      this.borrower = localStorage.name;
      this.loanType = data.loanType;
      console.log(data.loanAmount + " " + data.paidEmi + " " + this.emiAmount);
      this.balance = +(data.loanAmount) - (+data.paidEmi * this.emiAmount);
    });
    this.emiService.getTransactions(localStorage.userid).subscribe(data => {
      data.forEach(value => {
        this.emiAmount = value.emiAmount;
      })
    }, err => {
      console.log("emi service error: " + err);
    });

    this.paymentForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      expiryDate: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      name: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      cvv: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      pin: new FormControl('', [Validators.required])
    });
  }

  onPayment() {
    this.loanService.forecloseLoan(localStorage.userid).subscribe(data => {
      alert("Transaction successful!\nLoan Repayment Completed.");
      this.router.navigate(['/facility']);
    }, err => {
      alert("Transaction Failed");
    });
  }
}
class Credential {
  cardNumber: string;
  expiryDate: string;
  name: string;
  cvv: string;
  pin: string;
}
