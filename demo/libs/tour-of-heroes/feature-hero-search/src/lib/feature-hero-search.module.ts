import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroSearchComponent} from "./hero-search/hero-search.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    HeroSearchComponent
  ],
  declarations: [HeroSearchComponent]
})
export class FeatureHeroSearchModule {
}
