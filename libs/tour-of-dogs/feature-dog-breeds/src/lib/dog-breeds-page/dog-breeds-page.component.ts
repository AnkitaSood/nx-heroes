import { Component } from '@angular/core';
import { DogsService } from 'libs/tour-of-dogs/data-access-dogs/src/lib/dogs.service';

@Component({
  selector: 'tod-dog-breeds-page',
  templateUrl: './dog-breeds-page.component.html',
  styleUrls: ['./dog-breeds-page.component.scss'],
})
export class DogBreedsPageComponent {
  dogBreeds$ = this.dogsService.getDogBreeds(0, 20, 'DESC');

  constructor(private dogsService: DogsService) {}
}
