import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '@toh/feature-dashboard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('@toh/feature-hero-details').then(
        (m) => m.FeatureHeroDetailsModule
      ),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('@toh/feature-heroes').then((m) => m.FeatureHeroesModule),
  },
  {
    path: 'add-new',
    loadChildren: () =>
      import('@tour-of-heroes/tour-of-heroes/feature-add-hero').then((m) => m.AddHeroModule),
  },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
