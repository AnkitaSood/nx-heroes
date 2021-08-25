import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Hero} from "@shared/models";

@Component({
  selector: 'tour-of-heroes-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() hero!: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
