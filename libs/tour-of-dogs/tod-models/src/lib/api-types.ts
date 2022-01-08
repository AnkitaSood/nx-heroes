export interface DogBreed {
  alt_names: string;
  experimental: number;
  hairless: number;
  hypoallergenic: number;
  id: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  short_legs: number;
  suppressed_tail: number;
  temperament: string;
  weight_imperial: string;
  wikipedia_url: string;
}

export type DogApiOrder = 'RANDOM' | 'ASC' | 'DESC';

export interface Height {
  imperial: string;
  metric: string;
}

export interface Weight {
  imperial: string;
  metric: string;
}

export interface Breed {
  bred_for: string;
  breed_group: string;
  height: Height;
  id: number;
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: Weight;
}

export interface ImageSearchResponse {
  breeds: Breed[];
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface Image {
  id: string;
  url: string;
}

export interface FavoriteImage {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: Date;
  image: Image;
}

export interface AddToFavoritesResponse {
  message: string;
  id: string | number; // favoriteId
}
