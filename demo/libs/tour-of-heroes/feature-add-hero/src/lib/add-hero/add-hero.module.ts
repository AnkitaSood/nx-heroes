import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroComponent } from './add-hero.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: AddHeroComponent },
]

@NgModule({
  declarations: [
    AddHeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AddHeroModule { }
