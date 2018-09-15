import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Route,Routes, RouterModule} from "@angular/router";
import {BoardComponent} from "./board/board.component";
import {HomeComponent} from "./home/home.component"

const routes: Routes = [
  {
    path:"home", component : HomeComponent
  },
  {
    path:"boards/:id", component : BoardComponent
  },
  {
    path:"", redirectTo:'home', pathMatch:'full'
  },
  {
    path:"**", redirectTo:'home', pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
