import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { VocabularyService } from 'src/app/services/vocabulary.service';
import { User } from 'src/app/classes/user';
import { WordsRoutingModule } from '../words-routing.module';

@Component({
  selector: 'app-settingpage',
  templateUrl: './settingpage.component.html',
  styleUrls: ['./settingpage.component.css']
})
export class SettingpageComponent implements OnInit {
  user:User;
  constructor(private authService: AuthenticationService,
    private wordService:VocabularyService) { }
  viewModel = {
    "exCount": [10, 20, 30, 40, 50],
    'rptCount': [1 , 2 , 3 ,4]
  };
  model = {
    'exCount': 10,
    'rptCount': 3
  }
  ngOnInit(): void {
    const user =this.authService.getCurrentUser();
    const nm =user.name;
    console.log(user);
  }
  SetExCount(){}

  SetRptCount(){}

  onSubmit(){
    //console.log(this.model);
    this.user =this.authService.getCurrentUser();
    this.wordService.getWords(this.user.email, this.model.exCount, this.model.rptCount, this.user.grade).then(words=>{
      const exWords =words.map(x=>{
       return  {wdId:x.wdId, eng: x.eng, chi: x.chi, grade: x.grade}
      });
      localStorage.setItem("exWords",JSON.stringify(exWords));
      const reWords= JSON.parse(localStorage.getItem("exWords"));
      //console.log(words);
      console.log(reWords);
    });

  }
}
