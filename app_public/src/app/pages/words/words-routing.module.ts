import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingpageComponent } from './settingpage/settingpage.component';
import { WordspellComponent } from './wordspell/wordspell.component';

const routes: Routes = [
  {
    path:'',
    component:SettingpageComponent,
  },{
    path:'spellex',
    component:WordspellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsRoutingModule { }
