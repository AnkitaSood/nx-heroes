import {Component, OnInit} from '@angular/core';
import {Hero} from "@shared/models";
import {HeroService} from "@shared/data-access-heroes";

@Component({
  selector: 'tour-of-heroes-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero);
  }

}
