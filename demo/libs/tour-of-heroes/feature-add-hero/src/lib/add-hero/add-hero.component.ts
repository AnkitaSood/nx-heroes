import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hero } from '@shared/models';
import { HeroService } from '@toh/data-access-heroes';

@Component({
  selector: 'tour-of-heroes-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss'],
})
export class AddHeroComponent {
  hero: Hero = {
    category: [],
    id: 0,
    isFavHero: false,
    name: '',
    superPowers: [],
  };

  constructor(
    private heroService: HeroService,
    private snackbar: MatSnackBar
  ) {}

  add(): void {
    this.heroService.addHero(this.hero);
    this.snackbar.open(
      `${this.hero.name.toUpperCase()} details saved successfully!`
    );
  }
}
