import {Component} from '@angular/core';

@Component({
  selector: 'tour-of-heroes-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navLinks = [{
    link: '/dashboard',
    label: 'Favorites'
  },
    {
      link: '/heroes',
      label: 'Configure'
    },
    {
      link: '/add-new',
      label: 'Add Hero'
    }]
  activeLink= this.navLinks[0].link;
}
