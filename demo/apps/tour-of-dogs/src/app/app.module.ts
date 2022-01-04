import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DogsHeaderModule } from '@tod/feature-header';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DogsHeaderModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
