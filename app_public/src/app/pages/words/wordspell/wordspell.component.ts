import { Component, OnInit } from '@angular/core';
import { Vcblry } from 'src/app/classes/vcblry';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-wordspell',
  templateUrl: './wordspell.component.html',
  styleUrls: ['./wordspell.component.css']
})
 
export class WordspellComponent implements OnInit {
  currentWord:Vcblry;
  wordAry:Vcblry[];
  wIndex:number=1;
  total:number;
  exWord:string;
  totalRpt:string;
  rptCount=1;
  message="";
  utterThis :SpeechSynthesisUtterance; 
  constructor(private authService:AuthenticationService) {
    this.wordAry = JSON.parse(authService.getPrjItem('exWords'));
    this.totalRpt = this.authService.getPrjItem('repCount');
   }

  ngOnInit(): void {
    this.utterThis= new SpeechSynthesisUtterance();
    //this.utterThis.lang='zh-TW';
    //this.utterThis.lang = 'en-GB'
    this.utterThis.lang = 'en-US'
    //this.utterThis.text = engText;
    this.utterThis.rate = 0.9;  //0.1~10
    this.utterThis.pitch = 1; //0~2
    this.checkSuport();
    this.reset();
  }
  checkSuport(){
    if(speechSynthesis)
    {
      this.message="瀏覽器支援英文發音";
    } else{
      this.message="瀏覽器支援英文發音，改用Chrome";
    }
  }
  speakEng(){
    if(this.currentWord){
      this.utterThis.text=this.currentWord.eng;
      speechSynthesis.speak(this.utterThis);  
    } else {
      this.message = this.wIndex.toString();
    }
  }
  reset(){
    this.wIndex=1;
    this.currentWord = this.wordAry[this.wIndex -1];
    this.total = this.wordAry.length;
    this.speakEng();
  }
  onKeydown(event){
    //this.message=event.key;
    if (event.key === "Enter"){
      this.onEnter();
    } else if(event.key === "Escape") {
      this.wIndex++;
      this.rptCount=1;
      this.currentWord=this.wordAry[this.wIndex -1];
      this.speakEng();
      this.message='';
      if(this.wIndex > this.wordAry.length){
        this.message="練習完成"
        this.reset();
      }
    }
  }
  onEnter(){
    if(this.exWord === this.currentWord.eng)
    {
      this.message="正確"
    } else {
      this.message="錯誤"
    }
    if(this.rptCount.toString() === this.totalRpt){
      this.rptCount=1;
      this.wIndex++;
      this.currentWord=this.wordAry[this.wIndex -1];
      this.speakEng();
    } else {
      this.rptCount++;
      this.speakEng();
    }
    if(this.wIndex > this.wordAry.length){
      this.message="練習完成"
      this.reset();
    }
    this.exWord='';
    console.log(this.exWord);
  }



  
}
