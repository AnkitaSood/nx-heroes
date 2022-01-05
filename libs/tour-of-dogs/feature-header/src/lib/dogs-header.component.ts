import { Component } from '@angular/core';
import {HeaderLinks} from "@shared/models";

@Component({
  selector: 'tour-of-dogs-header',
  templateUrl: './dogs-header.component.html',
  styleUrls: ['./dogs-header.component.scss']
})
export class DogsHeaderComponent {
  navLinks: HeaderLinks = [
    {
      link: '/dashboard',
      label: 'Favorites',
    },
    {
      link: '/dogs',
      label: 'Configure',
    },
    {
      link: '/add-new',
      label: 'Add Dog',
    },
  ];
}
