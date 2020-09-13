import { Injectable, Inject } from '@angular/core';
//import { BROWSER_STORAGE } from '../classes/storage';
import { User } from '../classes/user';
import { Authresponse } from '../classes/authresponse';
import { GeneralService } from '../services/general.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private generalService: GeneralService) { }//@Inject(BROWSER_STORAGE) private storage: Storage,


  public getToken(): string {
    return localStorage.getItem('token');
  }
  public saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  public login(user: User): Promise<any> {
    return this.generalService.login(user)
      .then((authResp: Authresponse) => {
        if (user.keep) {
          localStorage.setItem('password', user.password);
          localStorage.setItem('useremail', user.email);
        } else {
          localStorage.setItem('password', '');
          localStorage.setItem('useremail', '');
        }
        // console.log(authResp.name);
        localStorage.setItem('username',authResp.name)
        localStorage.setItem('grade',authResp.grade)
        this.saveToken(authResp.token);
      });
  }
  public register(user: User): Promise<any> {
    return this.generalService.register(user)
      .then((authResp: Authresponse) => {
        localStorage.setItem('username', authResp.name);
        localStorage.setItem('grade',authResp.grade)
        this.saveToken(authResp.token);
      });
  }

  public logout(): void {
    localStorage.removeItem('token');
  }
  public isLoggedIn(): boolean {
    // console.log('Martin in isLogin')
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }
  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, role } = JSON.parse(atob(token.split('.')[1]));
      //console.log({ email, name, role });
      const user={ email,  role } as User;
      user.name=this.getName();
      user.grade=localStorage.getItem('grade');
      return user;
    }
  }
  public getName(): string {
    //console.log(localStorage.getItem('username'));
    return localStorage.getItem('username');
  }
  public getMail(): string {
    return localStorage.getItem('useremail');
  }

}
