import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Hero } from '@shared/models';
import { HeroService } from '@shared/data-access-heroes';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  search = new FormControl();

  heroes$: Observable<Hero[]> = this.heroService.pluckStateProperty('heroes');
  filteredHeroes$!: Observable<Hero[]>;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    this.heroes$.subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.filteredHeroes$ = this.search.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return typeof value === 'string' ? value : value.name;
      }),
      map((name) => {
        return name ? this._filter(name) : this.heroes.slice();
      })
    );
  }

  displayFn(hero: Hero): string {
    return hero?.name ?? '';
  }

  private _filter(name: string): Hero[] {
    const filterValue = name.toLowerCase();

    return this.heroes.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}
