import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoanDetails } from 'src/app/models/LoanDetails.model';
import { LoanService } from 'src/app/services/loan.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {
  loanDetails: LoanDetails = new LoanDetails();
  loanForm: FormGroup;
  selectedLoanType: string;
  loanTypes: string[] = [];
  userId: string;

  constructor(private loanApplyService: LoanService, private loanRate: LoanService, private userService: UserService, private router: Router) {
    this.userService.userId.subscribe(value => {
      this.userId = value;
    });
    this.userService.isUserLoggedIn.subscribe(value => {
      if (localStorage.length === 0)
        this.router.navigate(['/login']);
    });
    this.loanRate.getLoanRate().subscribe(data=>
      data.forEach(data => {
          this.loanTypes.push(data.loanType);
          console.log(data);
        }
      ));
  }

  ngOnInit() {
    this.loanForm = new FormGroup({
      annualSalary: new FormControl('', [Validators.required]),
      loanAmount: new FormControl('', [Validators.required]),
      duration: new FormControl('',[Validators.required]),
      loanType: new FormControl('', [Validators.required]),
      differentAssest: new FormControl('', [Validators.required]),
      assestValuation: new FormControl('', [Validators.required]),
      referPerson: new FormControl('', [Validators.required]),
    });
  }
  onLoanSubmit() {
    this.loanDetails.userId = this.userId;
    console.log(this.loanDetails);
    this.loanApplyService.applyLoan(this.loanDetails).subscribe(data => {
      console.log("application successfully submitted");
      alert("Loan Application successfully submitted!\nWait 2-3 Days for Approval. ");
      this.router.navigate(['/facility']);
    }, err => {
      console.log("Unable to submit: " + err);
      alert("Unable to submit!");
    });
  }
}
