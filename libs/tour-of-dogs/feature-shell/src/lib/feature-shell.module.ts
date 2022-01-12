import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { AppRoutingModule } from './app-routing.module';
import { DogsHeaderModule } from '@tod/feature-header';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    DogsHeaderModule
  ],
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ]
})
export class FeatureShellModule {}
