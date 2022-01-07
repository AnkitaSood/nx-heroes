import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { StateService } from '@shared/data-access-state-base';
import { DogBreed, TourOfDogsConfig } from '@tod/tod-models';
import { Observable } from 'rxjs';

interface DogsState {
  breeds: DogBreed[];
  isLoading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DogsService extends StateService<DogsState> {
  private get headers(): HttpHeaders {
    return new HttpHeaders().set(
      'x-api-key',
      this.config.apiKey
    )
  }

  constructor(private httpClient: HttpClient, @Inject('config') private config: TourOfDogsConfig) {
    super();
  }

  getDogBreeds(): Observable<DogBreed[]> {
    return this.httpClient.get<DogBreed[]>(
      `${this.config.baseUrl}/v1/breeds`,
      { headers: this.headers }
    )
  }



}
