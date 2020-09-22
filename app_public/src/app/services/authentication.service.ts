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
    return this.storage.getItem('token');
  }
  public saveToken(token: string): void {
    if(this.removePrjItem('token')){
      this.setPrjItem('token',token);
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
        this.setPrjItem('username',authResp.name)
        this.setPrjItem('grade',authResp.grade)
        this.saveToken(authResp.token);
      });
  }
  public register(user: User): Promise<any> {
    return this.generalService.register(user)
      .then((authResp: Authresponse) => {
        this.setPrjItem('username', authResp.name);
        this.setPrjItem('grade',authResp.grade)
        this.saveToken(authResp.token);
      });
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
      user.grade=this.storage.getItem('grade');
      return user;
    }
  }
  public getName(): string {
    //console.log(this.storage.getItem('username'));
    return this.storage.getItem('username');
  }
  public getMail(): string {
    return this.storage.getItem('useremail');
  }

  public setPrjItem(itmName:string, itmValue:string){
    if(this.removePrjItem(itmName)){
      this.storage.setItem(itmName,itmValue);
    }
  }

  public getPrjItem(itmName:string):string{
    return this.storage.getItem(itmName);
  }

  public removePrjItem(itmName:string):boolean{
    if(this.storage.getItem(itmName) !== null && this.storage.getItem(itmName).length > 0){
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
