import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class.light-theme') classBinding = true;
  dark = true;
  transformTheme() {
    this.dark = this.dark == true ? false : true;
  }

}
