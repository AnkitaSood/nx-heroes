import {Component, Input, OnInit} from '@angular/core';
import {HeaderLinks} from "@shared/models";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerLinks: HeaderLinks = [];
  activeLink = this.headerLinks[0]?.link;

  ngOnInit(): void {
    console.table(this.headerLinks);
  }

}
