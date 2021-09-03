import {Component} from '@angular/core';

@Component({
  selector: 'tour-of-heroes-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navLinks = [{
    link: '/dashboard',
    label: 'Dashboard'
  },
    {
      link: '/heroes',
      label: 'Heroes'
    }]
  activeLink= this.navLinks[0].link;
}
