import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsHeaderComponent } from './dogs-header.component';
import { HeaderModule } from '@shared-ui-kit'
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, HeaderModule, RouterModule],
  declarations: [
    DogsHeaderComponent
  ],
  exports: [
    DogsHeaderComponent
  ]
})
export class DogsHeaderModule {}
