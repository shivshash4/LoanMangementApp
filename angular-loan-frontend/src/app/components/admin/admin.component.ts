import { Component, OnInit } from '@angular/core';
import { LoanRate } from 'src/app/models/LoanRate.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanService } from 'src/app/services/loan.service';
import { Router } from '@angular/router';
import { LoanDetails } from 'src/app/models/LoanDetails.model';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns = ['loanType', 'interestRate', 'lateCharges', 'foreclosureRate', 'action'];
  displayLoan = ['userid', 'loanAmount', 'duration', 'assetValue', 'referencePerson', 'action'];
  displayLoanSource: MatTableDataSource<LoanDetails>;
  dataSource: any;
  loanRateForm: FormGroup;
  loanRateObject: Object;
  loanRate: LoanRate = new LoanRate();
  loanDetails: LoanDetails = new LoanDetails();
  selected = new FormControl(0);
  check: boolean;
  checkLength: number;
  loan: boolean;
  loanLength: number;
  constructor(private loanRateService: LoanService, private router: Router, private userService: UserService) {
    
    this.loanRateService.isLoanType.subscribe(value => {
      this.check = value;
    });
    this.loanRateService.getLoanRate().subscribe(value => {
      this.checkLength = value.length;
      if (this.checkLength === 0)
        this.loanRateService.isLoanType.next(true);
      this.dataSource = value;
    });

    this.loanRateService.isLoan.subscribe(value => {
      this.loan = value;
    })

    this.loanRateService.allLoan().subscribe(value => {
      this.displayLoanSource = new MatTableDataSource(value);
      this.loanLength = value.length;
      if (this.loanLength === 0)
        this.loanRateService.isLoan.next(true);
    })
  }

  ngOnInit(): void {
    this.loanRateForm = new FormGroup({
      loanType: new FormControl('', [Validators.required]),
      interestRate: new FormControl('', [Validators.required]),
      lateCharges: new FormControl('', [Validators.required]),
      foreclosureRate: new FormControl('', [Validators.required])
    });
    this.userService.isUserLoggedIn.subscribe(value => {
      if (localStorage.length === 0)
        this.router.navigate(['/login']);
      else if(localStorage.userid.match("ADMIN*") ||  localStorage.userid.match("admin*")){
        this.router.navigate(['/admin']);}
      else {
        alert("You are not admin!\nNavigating to facility");
        this.router.navigate(['/facility']);
      }
    });
  }

  onRateSubmit() {
    this.loanRateObject = {
      "loanType": this.loanRateForm.value.loanType,
      "interestRate": this.loanRateForm.value.interestRate,
      "lateCharges": this.loanRateForm.value.lateCharges,
      "foreclosureRate": this.loanRateForm.value.foreclosureRate
    };
    this.loanRateService.setLoanRate(this.loanRateObject).subscribe(data => {
      console.log(data);
      alert("Rates added/updated successfully!");
      this.loanRateService.loanTypeLength.next(1);
      this.loanRateService.isLoanType.next(false);
    }, err => {
      console.log("some error occurred");
    });
    this.dataSource = this.loanRateService.getLoanRate();
    this.selected.setValue(0);
  }

  onEdit(loanType: String) {
    this.loanRateService.getLoanRate().subscribe(data => {
      data.forEach(data => {
        if (data.loanType === loanType) {
          console.log(data);
          this.selected.setValue(1);
          this.loanRateForm.setValue(data);
        }
      })
    });
  }

  onDelete(loanType: String) {
    this.loanRateService.removeLoanRate(loanType).subscribe(data => {
      console.log(data);
      this.loanRateService.getLoanRate().subscribe(value => {
        this.checkLength = value.length;
        if (this.checkLength === 0)
          this.loanRateService.isLoanType.next(true);
        this.dataSource = value;
      });
    }, err => {
      console.log("unable to delete" + err.stack());
    });
  }

  onLoanApprove(userid: String) {
    console.log(userid);
    console.log(typeof userid);
    this.loanRateService.approveLoan(userid).subscribe(value => {
      console.log(value);
      this.loanRateService.allLoan().subscribe(value => {
        this.loanLength = value.length;
        if (this.loanLength === 0)
          this.loanRateService.isLoan.next(true);
        this.displayLoanSource = new MatTableDataSource(value);
      });
    }, err => {
      console.log(userid);
      console.log("unable to approve" + err.stack());
      alert("Unable to approve");
    });
  }
}