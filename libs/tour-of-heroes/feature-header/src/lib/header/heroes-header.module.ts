import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesHeaderComponent } from './heroes-header.component';
import { RouterModule } from '@angular/router';
import {HeaderModule} from "@shared-ui-kit";
import { FeatureHeroSearchModule } from '@toh/feature-hero-search';

@NgModule({
  declarations: [HeroesHeaderComponent],
  imports: [CommonModule, RouterModule, HeaderModule, FeatureHeroSearchModule],
  exports: [HeroesHeaderComponent],
})
export class HeroesHeaderModule {}
