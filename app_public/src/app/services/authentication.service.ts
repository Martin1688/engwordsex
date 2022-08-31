import { Injectable, Inject, IterableDiffers } from '@angular/core';
import { BROWSER_STORAGE } from '../classes/storage';
import { User } from '../classes/user';
import { Authresponse } from '../classes/authresponse';
import { GeneralService } from '../services/general.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage,
    private generalService: GeneralService) { }//


  public getToken(): string {
    let ret = this.storage.getItem('token');
    //console.log(`token is ${ret}`);
    ret = ret === null || ret === undefined ? "" : ret;
    return ret;
  }
  public saveToken(token: string): void {
    if (this.removePrjItem('token')) {
      this.setPrjItem('token', token);
    }
  }
  public login(user: User): Promise<any> {
    return this.generalService.login(user)
      .then((authResp: Authresponse) => {
        if (user.keep) {
          this.setPrjItem('password', user.password);
          this.setPrjItem('useremail', user.email);
        } else {
          this.storage.removeItem('password');
          this.storage.removeItem('useremail');
        }
        //console.log(authResp.name);
        this.setPrjItem('username', authResp.name)
        this.setPrjItem('grade', authResp.grade)
        this.saveToken(authResp.token);
      });
  }
  public register(user: User): Promise<any> {
    return this.generalService.register(user)
      .then((authResp: Authresponse) => {
        this.setPrjItem('username', authResp.name);
        this.setPrjItem('grade', authResp.grade)
        this.saveToken(authResp.token);
      });
  }

  public isLoggedIn(): boolean {
    let ret = false;
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      //console.log(`payload is ${JSON.stringify(payload)}`);
      const nowStamp =Date.now() / 1000;
      //console.log(` now is ${nowStamp}`)
      ret = payload.exp > nowStamp;
      if(!ret){
        this.storage.removeItem('token');
      }
      return ret;
    } else {
      return ret;
    }
    
  }

  public getCurrentUser(): User {
    console.log('getinguser');
    const user = new User();
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, role } = JSON.parse(atob(token.split('.')[1]));
      //console.log({ email, name, role });
      user.email = email;
      user.role = role;
      user.name = this.getName();
      user.grade = this.getPrjItem('grade');
    }
    return user;
  }
  public getName(): string {
    let ret = this.storage.getItem('username');
    if(!ret){
      ret="";
    }
    return ret;
  }
  public getMail(): string {
    let ret = this.storage.getItem('useremail');
    if(!ret){
      ret="";
    }
    return ret;
  }

  public setPrjItem(itmName: string, itmValue: string) {
    if (this.removePrjItem(itmName)) {
      this.storage.setItem(itmName, itmValue);
    }
  }

  public getPrjItem(itmName: string): string {
    let ret = this.storage.getItem(itmName);
    if(!ret){
      ret="";
    }
    return ret;
  }

  public removePrjItem(itmName: string): boolean {
    if (this.storage.getItem(itmName) !== null && this.getPrjItem(itmName).length > 0) {
      this.storage.removeItem(itmName);
    }
    return true;
  }
  public logout(): void {
    this.storage.removeItem('token');
    this.storage.removeItem('username');
    this.storage.removeItem('role');
  }


}
