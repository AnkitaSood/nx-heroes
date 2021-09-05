import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {Hero} from '@shared/models';
import {HeroService} from '@shared/data-access-heroes';
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  search = new FormControl();

  heroes$: Observable<Hero[]> = this.heroService.pluckStateProperty('heroes')
  filteredHeroes$!: Observable<Hero[]>;
  heroes : Hero[] = [];

  constructor(private heroService: HeroService) {
    this.heroes$.subscribe((heroes)=> this.heroes = heroes);

  }

  ngOnInit(): void {

    this.filteredHeroes$ = this.search.valueChanges
      .pipe(
        startWith(''),
        map((value )=> {
          console.log('value', value)
          return typeof value === 'string' ? value : value.name
        }),
        map(name => {
          console.log('name', name)
          return name ? this._filter(name) : this.heroes.slice()
        })
      );

    /*    this.heroes$ = this.searchTerms.pipe(
          // wait 300ms after each keystroke before considering the term
          debounceTime(300),

          // ignore new term if same as previous term
          distinctUntilChanged(),

          // switch to new search observable each time the term changes
          switchMap((term: string) => this.heroService.searchHeroes(term)),
        );*/
  }

  displayFn(hero: Hero): string {
    return hero && hero.name? hero.name : '';
  }

  private _filter(name: string): Hero[] {
    const filterValue = name.toLowerCase();

    return this.heroes.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
