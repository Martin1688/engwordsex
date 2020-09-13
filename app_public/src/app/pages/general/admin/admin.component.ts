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
  setUser:User;
  uploadFileName='';
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
  fileContent:any;
  aryContent:string[];
  constructor(private authService: AuthenticationService,
    private dataService: GeneralService,
    private wordsService:VocabularyService
  ) { 
    this.user=this.authService.getCurrentUser();
  }

  ngOnInit(): void {
  }

  public onUpfile(fileList: FileList): void {
    let file = fileList[0];
    this.uploadFileName=file.name;
    //console.log(file.name);
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      //self.aryContent=;
      self.dealWordBase(fileReader.result.toString().split("/\r\n|\r|\n/", 10000));
      // self.fileContent = fileReader.result;
      // console.log(self.aryContent);
      //console.log(x);
    }
    fileReader.readAsText(file);
  }
  pressBtn(){
    document.getElementById('myFile').click();

  }
  dealWordBase(ary:string[]){
    //this.wordsService.sendwords(ary).then(ans=>console.log(ans));
    for(let i of ary){
    const wary=i.split(',',10);
    this.wordsService.sendwords({
      wdId:wary[0] ,
      eng:wary[1],
      chi: wary[2],
      grade:wary[4],
      memo: ''
    })
      console.log(i);
    }

  }
}
