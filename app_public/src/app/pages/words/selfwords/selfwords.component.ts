import { Component, OnInit } from '@angular/core';
import { VocabularyService } from 'src/app/services/vocabulary.service';
import { Vcblry } from 'src/app/classes/vcblry';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-selfwords',
  templateUrl: './selfwords.component.html',
  styleUrls: ['./selfwords.component.css']
})
export class SelfwordsComponent implements OnInit {
  message: string;
  wordData: any[] = [];
  retObj: { "ary": any };
  lastkeydown1: number = 0;
  subscription: any;
  wordList1: any[];
  newWord: Vcblry = {
    wdId:'',
    eng:'',
    chi:'',
    grade:''
  };
  chiAry: string[];
  wordAry: Vcblry[] = [];
  isMobile=false;
  //showBox=false;
  constructor(private authService: AuthenticationService,
    private wordService: VocabularyService) {
    //Get the user data from users.json

  }

  ngOnInit(): void {
    this.lastkeydown1 = new Date().getTime();
    //console.log(this.newWord);
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.isMobile=true;
      //this.formError="mobile device";
    }else{
      this.isMobile=false;
      //this.formError="not mobile device";
    }

  }
  getAutoWords(chr: string) {
    if(this.isMobile){
      return;
    }
    this.wordService.getAutoComp(chr).subscribe(
      data => {
        this.retObj = data as { "ary": any };
        Object.assign(this.wordData, this.retObj.ary);
        // setTimeout(() => {
        //   console.log(this.wordData);
        // }, 10);
      },
      error => {
        console.log("Something wrong here", error);
      });

  }
  // onKeydown($event){
  //   this.lastkeydown1=$event.timeStamp;
  // }

  getWordIdsFirstWay($event) {
    if(this.isMobile){
      return;
    } else if($event.key ==='Enter'){
      return;
    }
    this.wordList1 = [];
//    let wordId = (<HTMLInputElement>document.getElementById('WordIdFirstWay')).value.trim();
    const wordId= this.newWord.eng;
    if (wordId.length == 0) {
      return false;
    }
    else if (wordId.length == 1) {
      this.getAutoWords(wordId);
    }
    //console.log(wordId);
    if (wordId.length > 1) {
      const decision = this.lastkeydown1 - $event.timeStamp;
      //console.log(decision);
      if (decision > 200) {
        this.wordList1 = this.searchFromArray(this.wordData, wordId);
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
 
  onEnter() {
    //let wordId = (<HTMLInputElement>document.getElementById('WordIdFirstWay')).value.trim();
    const wordId = this.newWord.eng;
    this.wordService.getAWord(wordId).subscribe(x => {
      const { row } = x as { row: any };
      this.newWord = row as Vcblry;
      //this.message=this.newWord.chi;
    })
  }

  itemSelected(item: string){
    this.newWord.eng=item;
    this.wordList1=[];
    document.getElementById('WordIdFirstWay').focus();
    //this.onEnter();
  }

  Add2List() {
    this.wordAry.push(this.newWord);
    this.newWord =  {
      wdId:'',
      eng:'',
      chi:'',
      grade:''
    };
    //(<HTMLInputElement>document.getElementById('WordIdFirstWay')).value='';
  }
  Save2Local() {
    this.authService.setPrjItem("exWords", JSON.stringify(this.wordAry));
  }
}
