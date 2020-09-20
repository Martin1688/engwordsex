import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selfwords',
  templateUrl: './selfwords.component.html',
  styleUrls: ['./selfwords.component.css']
})
export class SelfwordsComponent implements OnInit {
  message:string;
  constructor() { }

  ngOnInit(): void {
  }

}
