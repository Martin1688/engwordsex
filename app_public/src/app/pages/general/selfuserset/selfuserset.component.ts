import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-selfuserset',
  templateUrl: './selfuserset.component.html',
  styleUrls: ['./selfuserset.component.css']
})
export class SelfusersetComponent implements OnInit {
  public credentials:User = {
    name: '',
    email: '',
    password: '',
    role: 'client',
    grade: '初級',
    memo: '',
    signdate: '',
    keep: true
  };
  public formError: string = '';
  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.credentials = this.authService.getCurrentUser();
  }
  downGrade(){
    if(this.credentials.grade ==="初級"){
      this.formError="初級無法降級"
    } 
    // else if(this.credentials.grade === "中高彎"){
    //   this.credentials.grade="中級";
    // } else if(this.credentials.grade === "中彎"){
    //   this.credentials.grade="初級";
    // }
  }

  changePassword(){
    this.router.navigateByUrl('/general/changepws');
  }
}
