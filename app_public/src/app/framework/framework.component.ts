import { Component, OnInit,Input,Output } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  user: User;
  constructor(private router: Router,private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    //console.log(this.user);
  }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  userRole(){
    //return 'admin';
     let myRole = '';
     if(this.user && this.user.role){
       myRole=this.user.role;
     } 
    return myRole;
  }
  getUsername() {
    let myName ='';
     if(this.user && this.user.name){
       myName=this.user.name;
     }
    return myName;
  }
  doLogout() {
     this.authService.logout();
     setTimeout(() => {
      this.router.navigateByUrl('/words');  
     }, 100);
  }
}
