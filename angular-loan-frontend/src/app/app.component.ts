import { Component, DoCheck, OnChanges, Input, ChangeDetectorRef, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title = 'loan-management-app';
  isUserLoggedIn: boolean;
  userName: string;
  user: string;
  helloPage: boolean;
  constructor(private router: Router, private userService: UserService) {
    this.userService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
      if (localStorage.length === 0){
        this.router.navigate(['/']);
        this.helloPage = true;
      }
  });
  this.userService.userName.subscribe( value => {
    this.userName = value;
});
   }
  ngOnInit() {

  }

  onLogout() {
    localStorage.clear();
    console.log("log out successful");
    this.userService.isUserLoggedIn.next(false);
    this.userService.userName.next("");
    alert("Logout successful!");
  }

}
