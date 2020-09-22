import { Component, OnInit } from '@angular/core';
import { Vcblry } from 'src/app/classes/vcblry';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subject, interval } from 'rxjs';

@Component({
  selector: 'app-autospell',
  templateUrl: './autospell.component.html',
  styleUrls: ['./autospell.component.css']
})
export class AutospellComponent implements OnInit {
  currentWord: Vcblry;
  wordAry: Vcblry[];
  wIndex: number = 1;
  total: number;
  exWord: string;
  totalRpt: string="3";
  rptCount = 1;
  message = "";
  utterTW: SpeechSynthesisUtterance;
  utterboy: SpeechSynthesisUtterance;
  uttergirl: SpeechSynthesisUtterance;
  playSubject: Subject<Vcblry>;
  charDelayTime=1100;
  constructor(private authService: AuthenticationService) {
    this.wordAry = JSON.parse(authService.getPrjItem('exWords'));
    this.totalRpt = this.authService.getPrjItem('repCount');
    this.currentWord = this.wordAry[this.wIndex - 1];
    this.playSubject = new Subject<Vcblry>();
  }

  ngOnInit(): void {
    this.initBoy();
    this.initGirl();
    this.initTW();
  }
  initTW() {
    this.utterTW = new SpeechSynthesisUtterance();
    this.utterTW.lang = 'zh-TW';
    this.utterTW.rate = 0.9;
    this.utterTW.pitch = 1;
  }

  initBoy() {
    this.utterboy = new SpeechSynthesisUtterance();
    this.utterboy.lang = 'en-US';
    //this.utterboy.lang = 'en-GB';
    this.utterboy.rate = 1;
    this.utterboy.pitch = 1;
  }

  initGirl() {
    this.uttergirl = new SpeechSynthesisUtterance();
    //this.uttergirl.lang = 'en-GB';
    this.utterboy.lang = 'en-US';
    this.uttergirl.rate = 1;
    this.uttergirl.pitch = 1;
  }

  playWord() {
    if (this.currentWord) {
      if(this.currentWord.eng.length > 10){
        this.charDelayTime = 1300;
      } else{
        this.charDelayTime =1100;
      }
      this.speakEng(this.currentWord.eng, this.currentWord.eng.length % 2);
      setTimeout(() => {
        this.playChar(this.currentWord.eng);
      }, this.charDelayTime);
    }
  }
  playChar(aWord: string) {
    //console.log(aWord);
    if (aWord.length > 0) {
      const myWord = aWord.substr(0, 1);
      this.speakEng(myWord, aWord.length % 2);
      if (aWord.length > 1) {
        setTimeout(() => {
          const restWord = aWord.substr(1);
          console.log(`${myWord}  ${restWord}`);
          this.playChar(restWord);
        }, this.charDelayTime);
      }
      else {
        this.utterTW.text = this.currentWord.chi;
        speechSynthesis.speak(this.utterTW);
        setTimeout(() => {
          this.rptCount++;
          if (this.rptCount > parseInt(this.totalRpt)) {
            this.wIndex++;
            this.rptCount = 1;
          }
          if (this.wIndex <= this.wordAry.length) {
            this.currentWord = this.wordAry[this.wIndex - 1];
            this.playWord();
          } else {
            this.wIndex =1;
            this.currentWord = this.wordAry[this.wIndex - 1];
            this.message="撥放完畢";
          }
        }, 7000);
      }
    }
  }
  speakEng(aChar: string, pIdx: number) {
    if (aChar) {
      if (pIdx === 0) {
        this.utterboy.text = aChar;
        speechSynthesis.speak(this.utterboy);
      } else {
        this.utterboy.text = aChar;
        speechSynthesis.speak(this.utterboy);
      }
    }
  }
}
