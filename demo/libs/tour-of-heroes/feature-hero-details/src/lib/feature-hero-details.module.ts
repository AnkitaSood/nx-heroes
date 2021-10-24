import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { DataAccessHeroesModule } from '@toh/data-access-heroes';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormModule } from '@toh/ui-kit-heroes';

import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    component: HeroDetailComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    DataAccessHeroesModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCheckboxModule,
    HeroFormModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
  declarations: [HeroDetailComponent],
  exports: [HeroDetailComponent],
})
export class FeatureHeroDetailsModule {}
