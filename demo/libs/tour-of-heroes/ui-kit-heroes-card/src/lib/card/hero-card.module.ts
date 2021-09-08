import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './hero-card.component';
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [
        HeroCardComponent
    ],
    exports: [
        HeroCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        MatIconModule
    ]
})
export class HeroCardModule { }
