import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Hero } from '@shared/models';

@Component({
  selector: 'tour-of-heroes-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent {
  @Input() hero!: Hero;
}
