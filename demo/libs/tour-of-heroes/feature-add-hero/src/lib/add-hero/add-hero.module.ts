import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroComponent } from './add-hero.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeroFormModule } from '@toh/ui-kit-heroes';

const routes: Routes = [{ path: '', component: AddHeroComponent }];

@NgModule({
  declarations: [AddHeroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSnackBarModule,
    HeroFormModule,
  ],
})
export class AddHeroModule {}
