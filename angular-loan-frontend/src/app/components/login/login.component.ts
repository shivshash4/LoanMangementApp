import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  loginForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'userid': [this.user.userid, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]{4,15}")
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6), Validators.maxLength(20)
      ]]
    });
  }

  onLoginSubmit() {
    this.userService.getUser(this.user.userid).subscribe(data => {
      console.log(data.userid);
      console.log(this.user.userid);
      if (data.userid === this.user.userid && data.password === this.user.password) {
        localStorage.userid = data.userid;
        localStorage.passkey = data.password;
        localStorage.name = data.name;
        this.userService.isUserLoggedIn.next(true);
        this.userService.userName.next(data.name);
        this.userService.userId.next(data.userid);
        if (localStorage.userid.match("ADMIN*") || localStorage.userid.match("admin*")){
          this.router.navigate(['/admin']);
          console.log("Logged In As Admin");
          alert("Login Successful!\nLogged in as Admin.");
        }
        else{
          alert("Login Successful!");
          this.router.navigate(['/facility']);
        }
      }
    }, err=>{
      alert("Wrong Credentials!");
      console.log(err);
      console.log("Unable to Login");
    });
    
  }
}
