import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tour-of-heroes-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Tour of Heroes';

  ngOnInit(): void {
  }

}
