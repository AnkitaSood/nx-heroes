import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from '@shared/models';
import {HeroService} from '@shared/data-access-heroes';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero$!: Observable<Hero>;

  isFavHeroControl = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private snackbar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get('id') ?? 0;
      this.hero$ = this.heroService.getHero(+id);
    })
  }

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
