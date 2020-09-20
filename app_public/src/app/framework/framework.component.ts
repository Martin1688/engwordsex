import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../classes/user';
@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  user: User;
  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    console.log(this.user);
  }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  userRole(){
    return 'admin';
    // const myRole = this.user===null ? '':this.user.role; 
    // return myRole;
  }
  getUsername() {
    const myName = this.user===null ? '':this.user.name; 
    return myName;
  }
  doLogout() {
    return this.authService.logout();
  }
}
