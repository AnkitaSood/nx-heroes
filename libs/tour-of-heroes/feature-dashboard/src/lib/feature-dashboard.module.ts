import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroCardModule } from '@toh/ui-kit-heroes';
import { DataAccessHeroesModule } from '@toh/data-access-heroes';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    HeroCardModule,
    DataAccessHeroesModule.forRoot(),
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class FeatureDashboardModule {}
