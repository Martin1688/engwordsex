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
  }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getUsername() {
    this.user = this.authService.getCurrentUser();
    return this.user.name;
  }
  doLogout() {
    return this.authService.logout();
  }
}
