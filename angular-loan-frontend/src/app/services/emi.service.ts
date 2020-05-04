import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EMI } from '../models/EMI.model';

@Injectable({
  providedIn: 'root'
})
export class EmiService {
  constructor(private http: HttpClient) { }

  private baseURL: string = environment.baseURL;

  payEmi(emi: EMI)  {
    return this.http.post(this.baseURL + "/loan/emi/payEmi/", emi);
  }

  getTransactions(userid: string) {
    return this.http.get<EMI[]>(this.baseURL + "/loan/emi/getTransactions/"+userid);
  }

}
