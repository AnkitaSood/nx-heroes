
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { StateService } from '@shared/data-access-state-base';
import { AddToFavoritesResponse, DogApiOrder, DogBreed, FavoriteImage, ImageSearchResponse, TourOfDogsConfig } from '@tod/tod-models';
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

  getDogBreeds(page: number, limit: number, order: DogApiOrder): Observable<DogBreed[]> {
    const params = new HttpParams()
      .set('limit', limit)
      .set('page', page)
      .set('order', order)
    return this.httpClient.get<DogBreed[]>(`${this.config.baseUrl}/v1/breeds`, {
      headers: this.headers,
      params: params
    })
  }

  getImagesByBreedId(page: number, limit: number, order: DogApiOrder, breedId: number): Observable<ImageSearchResponse> {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit)
      .set('order', order)
      .set('breed_id', breedId)

    return this.httpClient.get<ImageSearchResponse>(`${this.config.baseUrl}/v1/images/search`, {
      headers: this.headers,
      params
    })
  }

  getFavoriteImages(subId: string, page: number, limit: number): Observable<FavoriteImage[]> {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit)
      .set('sub_id', subId)

    return this.httpClient.get<FavoriteImage[]>(`${this.config.baseUrl}/v1/favourites`, {
      headers: this.headers,
      params
    })
  }

  addImageToFavorites(subId: string, imageId: string): Observable<AddToFavoritesResponse> {
    const body = {
      image_id: imageId,
      sub_id: subId
    };

    return this.httpClient.post<AddToFavoritesResponse>(`${this.config.baseUrl}/v1/favourites`, body, {
      headers: this.headers
    })
  }

  deleteImageFromFavorites(favoriteId: string | number): Observable<{ message: string }> {
    return this.httpClient.delete<{ message: string }>(`${this.config.baseUrl}/v1/favourites/${favoriteId.toString()}`, {
      headers: this.headers
    })
  }

}
