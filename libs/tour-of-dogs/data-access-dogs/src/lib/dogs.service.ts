import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { StateService } from '@shared/data-access-state-base';
import { DogBreed, TourOfDogsConfig } from 'libs/tour-of-dogs/tod-models/src';
import { Observable } from 'rxjs';

interface DogsState {
  breeds: DogBreed[];
  isLoading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DogsService extends StateService<DogsState> {
  private headers = new HttpHeaders().set(
    'x-api-key',
    this.config.apiKey
  );

  constructor(private httpClient: HttpClient, @Inject('congif') private config: TourOfDogsConfig) {
    super();
  }

  getDogBreeds(): Observable<DogBreed[]> {
    return this.httpClient.get<DogBreed[]>(
      `${this.config.baseUrl}/v1/breeds`,
      { headers: this.headers }
    )
  }


}
