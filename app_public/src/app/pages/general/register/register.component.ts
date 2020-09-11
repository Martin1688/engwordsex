import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { HistoryService } from '../../../services/history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private historyService: HistoryService) { }

  ngOnInit(): void {
  }
  public onRegisterSubmit(): void {
    // console.log(this.credentials);
    this.formError = '';
    if (
      !this.credentials.name ||
      !this.credentials.email ||
      !this.credentials.password
    ) {
      this.formError = '全部欄位都是必填，請再試一次';
    } else {
      this.doRegister();
    }
  }
  private doRegister(): void {
    this.authenticationService.register(this.credentials)
      .then(() => this.router.navigateByUrl(this.historyService.getLastNonLoginUrl()))  //() => this.router.navigateByUrl(this.historyService.getLastNonLoginUrl())
      .catch((message) => this.formError = message);
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
