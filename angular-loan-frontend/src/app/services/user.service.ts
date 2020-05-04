import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseURL: string = environment.baseURL;

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.length===0?false:true);
  public userName: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.length===0?"":localStorage.name);
  public userId: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.length===0?"":localStorage.userid);

  createUser(userDetails: Object) {
    return this.http.post(this.baseURL + "user/createUser", userDetails);
  }

  getUser(userid: string) {
    return this.http.get<User>(this.baseURL + "user/findUser/"+userid);
  }

}
