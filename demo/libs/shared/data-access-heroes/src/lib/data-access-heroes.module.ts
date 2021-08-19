import {forwardRef, ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from './hero.service';
import {StateService} from "./state.service";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HeroService),
      multi: false
    }
  ]
})
export class DataAccessHeroesModule {
  static forRoot(): ModuleWithProviders<DataAccessHeroesModule> {
    return {
      ngModule: DataAccessHeroesModule,
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => HeroService),
          multi: false
        }
      ]
    }
  }
}
