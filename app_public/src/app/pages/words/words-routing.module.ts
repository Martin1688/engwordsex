import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingpageComponent } from './settingpage/settingpage.component';

const routes: Routes = [
  {
    path:'',
    component:SettingpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsRoutingModule { }
