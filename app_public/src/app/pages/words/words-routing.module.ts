import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingpageComponent } from './settingpage/settingpage.component';
import { WordspellComponent } from './wordspell/wordspell.component';
import { AutospellComponent } from './autospell/autospell.component';
import { SelfwordsComponent } from './selfwords/selfwords.component';

const routes: Routes = [
  {
    path:'',
    component:SettingpageComponent,
  },{
    path:'spellex',
    component:WordspellComponent
  },{
    path:'autospell',
    component:AutospellComponent
  },{
    path:'selfwordset',
    component:SelfwordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsRoutingModule { }
