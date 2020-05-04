import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMI } from 'src/app/models/EMI.model';
import { EmiService } from 'src/app/services/emi.service';
import { LoanService } from 'src/app/services/loan.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pay-emi',
  templateUrl: './pay-emi.component.html',
  styleUrls: ['./pay-emi.component.css']
})
export class PayEmiComponent implements OnInit {

  payEmi: EMI = new EMI();
  credential: Credential = new Credential();
  paymentForm: FormGroup;
  hide = true;
  borrower: string;
  amount: number;
  date: Date = new Date();


  constructor(private router: Router, private emiService: EmiService, private loanServie: LoanService, private userService : UserService) {
    this.loanServie.viewLoan(localStorage.userid).subscribe(data=>{
      this.amount = data.loanAmount/data.numberofEmi;
      this.date.setMonth(Date.now());

      console.log(data.loanAmount+"  "+data.numberofEmi);

      this.borrower = localStorage.name;
    });
   }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      expiryDate: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required]),
      pin: new FormControl('',[Validators.required])
    });
  }
  onPayment() {
    this.payEmi.userId = localStorage.userid;
    console.log(this.payEmi);
    this.emiService.payEmi(this.payEmi).subscribe(data=>{
      alert("Transaction successful");
      this.router.navigate(['/facility']);
    },err=>{
      alert("Transaction Failed");
    });
    
  }
}
class Credential{
  cardNumber: string;
  expiryDate: string;
  name: string;
  cvv: string;
  pin: string;
}