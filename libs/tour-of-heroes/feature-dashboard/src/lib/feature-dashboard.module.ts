import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroCardModule } from '@toh/ui-kit-heroes';
import { DataAccessHeroesModule } from '@toh/data-access-heroes';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        HeroCardModule,
        DataAccessHeroesModule.forRoot(),
        MatButtonToggleModule,
        MatIconModule,
    ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class FeatureDashboardModule {}
