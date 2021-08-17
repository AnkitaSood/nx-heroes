import { Component } from '@angular/core';
import { Hero } from '@shared/models';
import { HeroService } from '@shared/data-access-heroes';
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent {

  heroes$: Observable<Hero[]> = this.heroService.getHeroes().pipe(
    map(heroes => heroes.slice(0, 4))
  );

  constructor(private heroService: HeroService) { }
}
