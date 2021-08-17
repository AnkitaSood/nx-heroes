import { Component, OnInit } from '@angular/core';

import { Hero } from '@shared/models';
import { HeroService } from '@shared/data-access-heroes';
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  private heroesSubject$ = new BehaviorSubject<Hero[]>([]);
  heroes$: Observable<Hero[]> = this.heroesSubject$.asObservable();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.loadHeroes();
  }

  loadHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroesSubject$.next(heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        const heroes = this.heroesSubject$.value;
        this.heroesSubject$.next([...heroes, hero]);
      });
  }

  delete(hero: Hero): void {
    const heroes = this.heroesSubject$.value.filter(h => h !== hero);
    this.heroesSubject$.next(heroes);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
