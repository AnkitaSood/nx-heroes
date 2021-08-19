import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {DataAccessHeroesModule, HeroService} from '@shared/data-access-heroes';
import { FeatureDashboardModule } from '@toh/feature-dashboard';
import {FeatureHeroSearchModule} from "@toh/feature-hero-search";
import {HeaderModule} from "@toh/shared-ui-kit";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataAccessHeroesModule.forRoot(),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FeatureDashboardModule,
    FeatureHeroSearchModule,
    HeaderModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
