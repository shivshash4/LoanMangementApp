import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmiService } from 'src/app/services/emi.service';
import { LoanService } from 'src/app/services/loan.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-print-transaction',
  templateUrl: './print-transaction.component.html',
  styleUrls: ['./print-transaction.component.css']
})
export class PrintTransactionComponent implements OnInit {
  name: string;
  amount: number;
  balance: number;
  paidEmi: number;
  emiAmount: number;
  constructor(private router: Router, private emiService: EmiService, private loanServie: LoanService, private userService : UserService) {
    this.emiService.getTransactions(localStorage.userid).subscribe(data => {
      data.forEach(value => {
        this.emiAmount = value.emiAmount;
      })
    }, err => {
      console.log("emi service error: " + err);
    });
   }
  ngOnInit(): void {
    this.loanServie.viewLoan(localStorage.userid).subscribe(data=>{
      this.amount = data.loanAmount;
      this.balance = +((data.loanAmount)-(+(+this.emiAmount)*(+data.numberofEmi-data.paidEmi))).toPrecision(4);
      console.log(data.loanAmount+"  "+data.numberofEmi);
      this.paidEmi = data.paidEmi;
      this.name = localStorage.name;
    });
  }
  onPrint(){
    alert("Printer will initiate");
  }
}
