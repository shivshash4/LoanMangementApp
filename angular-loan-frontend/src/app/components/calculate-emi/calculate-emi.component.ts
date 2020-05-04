import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-calculate-emi',
  templateUrl: './calculate-emi.component.html',
  styleUrls: ['./calculate-emi.component.css']
})
export class CalculateEmiComponent implements OnInit {

  calculateEmi: FormGroup;
  principle: number;
  duration: number;
  emi: number;
  emiString: string;
  loanTypes: string[] = [];
  selectedLoanType: string;
  rate: number;
  amount: number;
  constructor(private router: Router, private loanRate: LoanService, private userService: UserService) {
    this.loanRate.getLoanRate().subscribe(data =>
      data.forEach(data => {
        this.loanTypes.push(data.loanType);
        console.log(data);
      }
      ));
      this.userService.isUserLoggedIn.subscribe(value => {
        if (localStorage.length === 0)
          this.router.navigate(['/login']);
      });
  }

  ngOnInit(): void {
    this.calculateEmi = new FormGroup({
      loanType: new FormControl('', []),
      principle: new FormControl('', []),
      duration: new FormControl('', [])
    });
  }
  onSubmit() {
    this.loanRate.getLoanRate().subscribe(data => {
      data.forEach(data => {
        if (data.loanType === this.selectedLoanType) {
          this.rate = data.interestRate;
          this.amount = +(this.principle * this.duration * this.rate * 0.01)+(+this.principle);
          console.log("amount: "+this.amount);
          this.emi = (this.amount)/(this.duration*12);
          console.log(this.emi);
          this.emiString = "Monthly EMI to be paid: ";
        }
      })
    });

  }
}
