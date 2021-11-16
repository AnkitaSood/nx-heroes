import { Component } from '@angular/core';

@Component({
  selector: 'tour-of-heroes-header',
  templateUrl: './heroes-header.component.html',
  styleUrls: ['./heroes-header.component.scss'],
})
export class HeroesHeaderComponent {
  navLinks = [
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
  activeLink = this.navLinks[0].link;
}
