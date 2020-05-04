import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  loginForm: FormGroup;
  hide = true;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userid: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]{4,15}")]),
      name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$")]),
      mobNumber: new FormControl('', [Validators.required, Validators.pattern("[6-9][0-9]{9}")]),
      aadhaarNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]{16}")]),
      panNumber: new FormControl('', [Validators.required, Validators.pattern("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$")]),
      address: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]{10,100}")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });
  }

  onLoginSubmit() {
    this.userService.createUser(this.user).subscribe(data=>{
      console.log("signup successful");
    });
    
    alert("Registration successful, Please  Login!");
      this.router.navigate(['/login']);

  }
}
