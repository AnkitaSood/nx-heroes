import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FeatureDashboardModule } from '@toh/feature-dashboard';
import { HeroesHeaderModule } from '@toh/feature-header';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_RIPPLE_GLOBAL_OPTIONS} from "@angular/material/core";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    FeatureDashboardModule,
    HeroesHeaderModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: {disabled: true}}
  ],
})
export class AppModule {}
