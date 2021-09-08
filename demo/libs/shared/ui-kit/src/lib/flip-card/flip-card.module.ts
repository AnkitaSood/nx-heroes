import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    FlipCardComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [
    FlipCardComponent
  ]
})
export class FlipCardModule { }
