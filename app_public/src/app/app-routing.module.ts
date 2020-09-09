import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    redirectTo: "words",
    pathMatch: "full"
  },   
  {
    path:'words',
    loadChildren:()=>import('./pages/words/words.module').then(m=> m.WordsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
