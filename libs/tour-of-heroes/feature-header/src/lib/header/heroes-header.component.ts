import { Component } from '@angular/core';
import {HeaderLinks} from "@shared/models";

@Component({
  selector: 'tour-of-heroes-header',
  templateUrl: './heroes-header.component.html',
  styleUrls: ['./heroes-header.component.scss'],
})
export class HeroesHeaderComponent {
  navLinks: HeaderLinks = [
    {
      link: '/dashboard',
      label: 'Favorites',
    },
    {
      link: '/heroes',
      label: 'Configure',
    },
    {
      link: '/add-new',
      label: 'Add Hero',
    },
  ];
}
