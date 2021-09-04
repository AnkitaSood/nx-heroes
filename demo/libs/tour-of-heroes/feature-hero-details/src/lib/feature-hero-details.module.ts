import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DataAccessHeroesModule } from '@shared/data-access-heroes';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from "@angular/material/input";

const routes: Routes = [
  { path: ':id', component: HeroDetailComponent },
]

@NgModule({
  imports: [
    CommonModule,
    DataAccessHeroesModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatInputModule
  ],
  declarations: [HeroDetailComponent],
  exports: [HeroDetailComponent]
})
export class FeatureHeroDetailsModule {}
