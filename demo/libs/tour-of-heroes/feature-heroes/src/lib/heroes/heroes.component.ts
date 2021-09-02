import { Component, OnInit } from '@angular/core';

import { Hero } from '@shared/models';
import { HeroService } from '@shared/data-access-heroes';
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes$: Observable<Hero[]> = this.heroService.pluckStateProperty('heroes')

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.loadHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero);
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id);
  }

}
