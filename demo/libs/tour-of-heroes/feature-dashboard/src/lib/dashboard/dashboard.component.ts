import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from '@shared/models';
import { HeroService } from '@toh/data-access-heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  heroes$: Observable<Hero[]> = this.heroService
    .pluckStateProperty('heroes')
    .pipe(map((heroes) => heroes.filter((hero) => hero.isFavHero)));

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.loadHeroes();
  }
}
