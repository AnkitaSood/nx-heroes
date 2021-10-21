import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FlipCardModule } from '@toh/shared-ui-kit';
import { DataAccessHeroesModule } from '@toh/data-access-heroes';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [{ path: '', component: HeroesComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DataAccessHeroesModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    FlipCardModule,
  ],
  declarations: [HeroesComponent],
  exports: [HeroesComponent],
})
export class FeatureHeroesModule {}
