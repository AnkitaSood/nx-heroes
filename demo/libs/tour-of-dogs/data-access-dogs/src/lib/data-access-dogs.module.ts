import { forwardRef, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DogsService } from './dogs.service';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DogsService),
      multi: false,
    },
  ],
})
export class DataAccessDogsModule {
  static forRoot(): ModuleWithProviders<DataAccessDogsModule> {
    return {
      ngModule: DataAccessDogsModule,
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => DogsService),
          multi: false,
        },
      ],
    };
  }
}
