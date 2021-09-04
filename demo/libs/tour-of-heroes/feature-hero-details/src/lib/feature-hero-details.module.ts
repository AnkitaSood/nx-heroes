import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {
  DataAccessHeroesModule,
  HeroResolver,
} from '@shared/data-access-heroes';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: '',
    component: HeroDetailComponent,
    resolve: { hero: HeroResolver },
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
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
  declarations: [HeroDetailComponent],
  exports: [HeroDetailComponent],
})
export class FeatureHeroDetailsModule {}
