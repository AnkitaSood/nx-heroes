import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {FlipCardModule} from "@shared-ui-kit";
import { DataAccessHeroesModule } from '@toh/data-access-heroes';
import { HeroesComponent } from './heroes/heroes.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

const routes: Routes = [{ path: '', component: HeroesComponent }];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DataAccessHeroesModule.forRoot(),
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        FlipCardModule,
        MatButtonToggleModule,
    ],
  declarations: [HeroesComponent],
  exports: [HeroesComponent],
})
export class FeatureHeroesModule {}
