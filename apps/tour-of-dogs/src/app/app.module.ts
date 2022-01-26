import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DogsHeaderModule } from '@tod/feature-header';
import { FeatureShellModule } from '@tod/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DogsHeaderModule,
    FeatureShellModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
