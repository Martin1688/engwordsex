import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formError: string = '';
  public credentials = {
    name: '',
    email: '',
    password: '',
    role:'client',
    grade:'初級',
    memo:'',
    signdate:'',
    keep: true
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private historyService: HistoryService) { }

  ngOnInit() {
    const currentUser =this.authenticationService.getCurrentUser();
    if(currentUser){
      this.credentials.email = this.authenticationService.getMail();
      this.credentials.name = this.authenticationService.getName();  
    }
  }
  public onLoginSubmit(): void {
     //console.log(this.credentials);

    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = '全部欄位都必填';
    } else {
      this.doLogin();
    }
  }
  private doLogin(): void {
    this.credentials.name = this.credentials.name;
    this.authenticationService.login(this.credentials)
      .then(() => {        
        this.router.navigateByUrl(this.historyService.getLastNonLoginUrl());
      })
      .catch((message) => {
        this.formError = message
      });
  }


  clearErr(): void {
    this.formError = '';
    this.credentials.name = '';
  }

  public captalCase(input: string): string {
    if (!input) {
      return '';
    } else {
      return input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
    }
  }

}
