import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { DogBreedsPageComponent } from '@tod/feature-dog-breeds';

const routes: Routes = [{ path: '', component: DogBreedsPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
