import { Injectable } from '@angular/core';
import { LoanRate } from '../models/LoanRate.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LoanDetails } from '../models/LoanDetails.model';


@Injectable({
  providedIn: 'root'
})
export class LoanService {
  
  constructor(private http: HttpClient) { }

  private baseURL: string = environment.baseURL;

  public isLoanType: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loanTypeLength: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public isLoan: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loanLength: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  setLoanRate(loanRate: Object) {
    return this.http.post(this.baseURL + "loan/setLoanRate", loanRate);
  }
  getLoanRate() {
    return this.http.get<LoanRate[]>(this.baseURL + "loan/getLoanRate");
  }
  removeLoanRate(loanType: String) {
    return this.http.delete(this.baseURL+"loan/removeLoanRate/"+loanType);
  }

  forecloseLoan(userid: String) {
    return this.http.delete(this.baseURL+"loan/forecloseLoan/"+userid);
  }
  
  applyLoan(loanDetails: LoanDetails)  {
    return this.http.post(this.baseURL + "loan/applyLoan/", loanDetails);
  }

  viewLoan(userid: String) {
    return this.http.get<LoanDetails>(this.baseURL + "loan/viewLoan/"+userid);
  }

  allLoan(){
    return this.http.get<LoanDetails[]>(this.baseURL + "loan/allLoan");
  } 

  approveLoan(userid: String){
    return this.http.delete(this.baseURL+"loan/approveLoan/"+userid);
  }
}
