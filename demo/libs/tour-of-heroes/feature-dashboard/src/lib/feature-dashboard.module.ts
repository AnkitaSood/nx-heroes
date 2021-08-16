import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DataAccessHeroesModule } from '@shared/data-access-heroes';
import {CardModule} from "@toh/shared-ui-kit";

const routes: Routes = [
  { path: '', component: DashboardComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DataAccessHeroesModule,
    RouterModule.forChild(routes),
    CardModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [
    DashboardComponent
  ]
})
export class FeatureDashboardModule {}
