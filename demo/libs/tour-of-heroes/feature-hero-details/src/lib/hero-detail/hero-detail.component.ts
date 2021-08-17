import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '@shared/models';
import { HeroService } from '@shared/data-access-heroes';
import { switchMap } from 'rxjs/operators';
import {Observable} from "rxjs";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent {
  hero$: Observable<Hero> = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id')!;
      return this.heroService.getHero(+id);
    })
  )

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    if (hero) {
      this.heroService.updateHero(hero)
        .subscribe(() => this.goBack());
    }
  }
}
