import { Component } from '@angular/core';

import { Hero } from '@shared/models';

import { Observable } from 'rxjs';
import { HeroService } from '@toh/data-access-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes$: Observable<Hero[]> = this.heroService.pluckStateProperty('heroes');

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.loadHeroes();
  }

  delete(hero: Hero, $event: Event): void {
    $event.stopPropagation();
    this.heroService.deleteHero(hero.id);
  }

  toggleFavorite(hero: Hero, $event: Event) {
    $event.stopPropagation();
    hero.isFavHero = !hero.isFavHero;
    this.heroService.updateHero(hero);
  }
}
