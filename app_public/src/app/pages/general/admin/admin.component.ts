import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GeneralService } from 'src/app/services/general.service';
import { VocabularyService } from 'src/app/services/vocabulary.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: User;
  setUser: User;
  uploadFileName = '';
  mailData: any[] = [];
  public formError: string = '';
  public credentials = {
    _id: '',
    name: '',
    email: '',
    password: '',
    role: 'client',
    grade: '初級',
    memo: '',
    signdate: '',
    keep: true
  };
  fileContent: any;
  mailList1: string[];
  lastkeydown1: number = 0;
  retObj: { "ary": any };
  roleops = ['client', 'user', 'admin'];
  gradeops = ['初級', '中級', '中高級'];
  constructor(private authService: AuthenticationService,
    private generalService: GeneralService,
    private wordsService: VocabularyService
  ) {
    this.user = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    this.lastkeydown1 = new Date().getTime();
    this.getAutoMails();

  }

  onSubmit() {
    //check parameters
    this.generalService.updateUser(this.credentials).then(
      data => {
        const { message } = data;
        this.formError = message;
      },
      error => {
        console.log("Something wrong here", error);
      });
  }

  onDelete(){
    this.generalService.deleteUser(this.credentials.email).then(
      data => {
        const { message } = data;
        this.formError = message;
      },
      error => {
        console.log("Something wrong here", error);
      });

  }

  onBlur() {
    const temMail = this.credentials.email;
    this.generalService.getAUser(temMail).then(x => {
      const { grade, role, name, _id } = x;
      //this.credentials.email=email;
      this.credentials.grade = grade;
      this.credentials.name = name;
      this.credentials.role = role;
      this.credentials._id = _id;
      console.log(x);
      console.log(this.credentials);
      //this.credentials = row ;
    });
  }
  getAutoMails() {
    this.generalService.mailAutoComp().then(
      data => {
        this.retObj = data as { "ary": any };
        Object.assign(this.mailData, this.retObj.ary);
        setTimeout(() => {
          console.log(this.mailData);
        }, 100);
      },
      error => {
        console.log("Something wrong here", error);
      });

  }

  getMailsFirstWay($event) {
    this.mailList1 = [];
    //    let wordId = (<HTMLInputElement>document.getElementById('WordIdFirstWay')).value.trim();
    const temMail = this.credentials.email;
    if (temMail.length == 0) {
      return false;
    }

    //console.log(temMail);
    if (temMail.length > 1) {
      const decision = this.lastkeydown1 - $event.timeStamp;
      //console.log(decision);
      if (decision > 200) {
        this.mailList1 = this.searchFromArray(this.mailData, temMail);
        //this.showBox=true;
        //console.log(this.wordList1);
      }
    }

  }


  searchFromArray(arr, regex) {
    let matches = [], i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].match(regex)) {
        matches.push(arr[i]);
      }
    }
    return matches;
  }


  // public onUpfile(fileList: FileList): void {
  //   let file = fileList[0];
  //   this.uploadFileName=file.name;
  //   //console.log(file.name);
  //   let fileReader: FileReader = new FileReader();
  //   let self = this;
  //   fileReader.onloadend = function(x) {
  //     //self.aryContent=;
  //     self.dealWordBase(fileReader.result.toString().split("/\r\n|\r|\n/", 10000));
  //     // self.fileContent = fileReader.result;
  //     // console.log(self.aryContent);
  //     //console.log(x);
  //   }
  //   fileReader.readAsText(file);
  // }
  // pressBtn(){
  //   document.getElementById('myFile').click();

  // }
  // dealWordBase(ary:string[]){
  //   //this.wordsService.sendwords(ary).then(ans=>console.log(ans));
  //   for(let i of ary){
  //   const wary=i.split(',',10);
  //   this.wordsService.sendwords({
  //     wdId:wary[0] ,
  //     eng:wary[1],
  //     chi: wary[2],
  //     grade:wary[4],
  //     memo: ''
  //   })
  //     console.log(i);
  //   }

  // }
}
