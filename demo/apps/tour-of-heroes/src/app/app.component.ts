import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {class: 'light-theme'}, //adding light-theme as default to the app
})
export class AppComponent {
}

