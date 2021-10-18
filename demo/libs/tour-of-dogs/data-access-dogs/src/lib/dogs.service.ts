import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from '@shared/data-access-state-base';

interface DogsState {
  dogs: any;
  isLoading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DogsService extends StateService<DogsState> {
  private headers = new HttpHeaders().set(
    'x-api-key',
    'get from environment injection token'
  );

  constructor(private httpClient: HttpClient) {
    super();
  }
}
