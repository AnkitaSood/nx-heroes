import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        MatTabsModule
    ]
})
export class HeaderModule { }
