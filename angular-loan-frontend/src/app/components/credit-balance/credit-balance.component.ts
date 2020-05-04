import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-balance',
  templateUrl: './credit-balance.component.html',
  styleUrls: ['./credit-balance.component.css']
})
export class CreditBalanceComponent implements OnInit {
  name: string;
  creditAmount: number;
  balanceAmount: number;
  numberOfEMI: number;
  userid: string;
  loanApplied: boolean;
  constructor(private loanService: LoanService, private userService: UserService, private router: Router) {
    this.userService.userId.subscribe(value => {
      this.userid = value;
      console.log(this.userid);
      if (localStorage.userid === null) {
        alert("Please Login!");
        this.router.navigate(["/login"]);
      }
    }, err => {
      console.log(err);
    });

    this.loanService.viewLoan(localStorage.userid).subscribe(data => {
      this.creditAmount = data.loanAmount;
      this.balanceAmount = +(data.finalAmount) - (+data.loanAmount);
      this.numberOfEMI = +(data.numberofEmi) - (+data.paidEmi);
      if(data.loanType !== "")
      this.loanApplied = true;
      else
      this.loanApplied = false;
    });

    this.userService.getUser(localStorage.userid).subscribe(value => {
      this.name = value.name;
    })
  }

  ngOnInit(): void {
  }

}
