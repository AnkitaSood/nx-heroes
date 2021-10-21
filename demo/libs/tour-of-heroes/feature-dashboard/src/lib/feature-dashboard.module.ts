import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroCardModule } from '@toh/ui-kit-heroes-card';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    HeroCardModule,
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class FeatureDashboardModule {}
