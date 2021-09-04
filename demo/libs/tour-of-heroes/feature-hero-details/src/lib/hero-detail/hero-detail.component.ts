import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '@shared/models';
import { HeroService } from '@shared/data-access-heroes';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  hero$: Observable<Hero> = this.route.data.pipe(map((data) => data.hero));

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private snackbar: MatSnackBar
  ) {}

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    if (hero) {
      this.heroService.updateHero(hero);
      this.snackbar.open('Updated hero successfully!');
    }
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id);
  }
}
