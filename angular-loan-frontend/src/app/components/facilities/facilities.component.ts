import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
    this.userService.isUserLoggedIn.subscribe(value => {
      if (localStorage.length === 0)
        this.router.navigate(['/login']);
      else if(localStorage.userid.match("ADMIN*") ||  localStorage.userid.match("admin*")){
        this.router.navigate(['/admin']);
      }
    });
   }

  ngOnInit(): void {
  }

}
