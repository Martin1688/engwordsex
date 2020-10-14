import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vcblry } from 'src/app/classes/vcblry';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { VocabularyService } from 'src/app/services/vocabulary.service';

@Component({
  selector: 'app-testfill',
  templateUrl: './testfill.component.html',
  styleUrls: ['./testfill.component.css']
})
export class TestfillComponent implements OnInit {
  currentWord: Vcblry;
  wordAry: Vcblry[];
  wIndex: number = 1;
  total: number;
  exWord: string;
  errCount = 0;
  message = "";
  errCorrect = '';
  redoFlag = false;
  hideWord='';
  chiHint= false;
  constructor(private router: Router,
    private wordService: VocabularyService,
    private authService: AuthenticationService) {
    this.wordAry = JSON.parse(authService.getPrjItem('exWords'));
  }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/general/login');
    }
    this.currentWord = this.wordAry[this.wIndex - 1];
    console.log(this.currentWord.sentence);
    if (!this.currentWord.sentence) {
      this.getSentence();
    }
  }

  reset() {
    this.wIndex=1;
    this.errCount=0;
    this.redoFlag=false;
    this.errCorrect="";
    this.message='';
    this.currentWord = this.wordAry[this.wIndex - 1];
    if (!this.currentWord.sentence) {
      this.getSentence();
    }
    this.total = this.wordAry.length;
    //this.speakEng();
  }

  onEnter() {
    this.errCorrect='';
    this.chiHint=false;
    if (this.exWord === this.currentWord.eng) {
      this.message = "正確";
      this.errCorrect = '';
    } else {
      this.message = "錯誤";
      this.errCount++;
      this.errCorrect = `${this.currentWord.eng}(${this.currentWord.chi})`;
    }

    if (this.wIndex === this.wordAry.length) {
      const score = Math.floor(((this.wordAry.length - this.errCount) / this.wordAry.length) * 100);
      this.message = `測驗結束，分數：${score}`;
      this.redoFlag = true;
      //this.reset();
    } else {
      this.wIndex++;
      this.currentWord = this.wordAry[this.wIndex - 1];
      if (!this.currentWord.sentence) {
        this.getSentence();
      }
    }
    //console.log(this.exWord);
    this.exWord = '';
  }

  getSentence() {
    console.log('go fetch eng '+ this.currentWord.eng);
    this.getHideWord();
    const wd =this.currentWord.eng;
    this.wordService.getASentence(wd).then(x => {
      //console.log(x);
      const y = x as {word:string};
      console.log(this.hideWord+'martin');
      this.currentWord.sentence =y.word.replace(this.currentWord.eng, this.hideWord);

    }).catch(err => {
      this.message = err;
      console.log(err);
    });
  }

  getHideWord(){
    //const endchar =;
    if(this.currentWord.eng.length > 5){
      this.hideWord=this.currentWord.eng.substr(0,1);
      for(let i =1; i<= this.currentWord.eng.length; i++){
        if(i === (this.currentWord.eng.length)){
          this.hideWord += this.currentWord.eng.substr(this.currentWord.eng.length-1);
          console.log(this.hideWord);
        } else {
          this.hideWord += '_';
        }        
      }      
    }
  }

  hint(){
    this.chiHint=!this.chiHint;
  }
}
