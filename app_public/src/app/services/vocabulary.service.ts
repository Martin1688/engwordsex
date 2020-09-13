import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  private handleError(error: any): Promise<any> {
    console.log(error.status);
    if (error.status == 401) {
      return Promise.reject('帳號不存在，請先註冊');
    } else if (error.status == 402) {
      return Promise.reject('密碼不正確');
    }
    //console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public sendwords(word:{wdId:string, eng:string, chi:string, grade:string, memo: string}):Promise<boolean>{
    const url: string = `${this.apiBaseUrl}/words`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http
      .post(url,word,httpOptions)
      .toPromise()
      .then(response => response as boolean)
      .catch(this.handleError);
  }
}
