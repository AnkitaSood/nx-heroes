import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FeatureHeroSearchModule } from '@toh/feature-hero-search';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatTabsModule, FeatureHeroSearchModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
