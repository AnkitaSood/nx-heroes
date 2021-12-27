import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '@shared/models';

@Component({
  selector: 'tour-of-heroes-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent {
  @Input() hero!: Hero;
  @Input() showDeleteOption = true;
  @Output() saveHero = new EventEmitter<Hero>();
  @Output() deleteHero = new EventEmitter<Hero>();
  @Output() goBack = new EventEmitter<void>();

  save(hero: Hero): void {
    if (hero) {
      this.saveHero.emit(hero);
    }
  }

  delete(hero: Hero) {
    if (hero) {
      this.deleteHero.emit(hero);
    }
  }
}
