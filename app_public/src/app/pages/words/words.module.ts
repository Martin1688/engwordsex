import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsRoutingModule } from './words-routing.module';
import { SettingpageComponent } from './settingpage/settingpage.component';
import {ReactiveFormsModule,FormsModule } from '@angular/forms';
import { WordspellComponent } from './wordspell/wordspell.component';

@NgModule({
  declarations: [SettingpageComponent, WordspellComponent],
  imports: [
    CommonModule,
    WordsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WordsModule { }
