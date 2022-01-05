import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DataAccessHeroesModule } from '@toh/data-access-heroes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    DataAccessHeroesModule.forRoot(),
  ],
  exports: [HeroSearchComponent],
  declarations: [HeroSearchComponent],
})
export class FeatureHeroSearchModule {}
