import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, Subject } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Hero } from '@shared/models';
import { StateService } from './state.service';

interface HeroState {
  heroes: Hero[];
}

@Injectable({ providedIn: 'root' })
export class HeroService extends StateService<HeroState> {
  private heroesUrl = 'api/heroes'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    super();
  }

  ngOnDestroy(): void {
    this.endStateObservation();
  }

  /** GET heroes from the server */
  loadHeroes(): void {
    this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError<Hero[]>('getHeroes', [])))
      .subscribe((heroes) => {
        this.setState({ heroes });
      });
  }

  getHero(id: number): Observable<Hero> {
    return this.state$.pipe(
      map((heroState) => {
        if (!heroState?.heroes) {
          return null;
        }
        return heroState?.heroes.find((h) => h.id === id);
      }),
      tap((hero) => {
        if (!hero) {
          this.loadHeroes();
        }
      })
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http
      .get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(catchError(this.handleError<Hero[]>('searchHeroes', [])));
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero(hero: Hero): void {
    this.http
      .post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(catchError(this.handleError<Hero>('addHero')))
      .subscribe((hero) => {
        const stateCopy = this.getStateCopy();
        const heroes = [...stateCopy.heroes, hero];
        this.setState({ heroes });
      });
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): void {
    const url = `${this.heroesUrl}/${id}`;
    this.http
      .delete<Hero>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Hero>('deleteHero')))
      .subscribe(() => {
        const stateCopy = this.getStateCopy();
        const heroes = stateCopy.heroes.filter((h) => h.id !== id);
        this.setState({ heroes });
      });
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): void {
    this.http
      .put(this.heroesUrl, hero, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateHero')))
      .subscribe(() => {
        const stateCopy = this.getStateCopy();
        const heroes = stateCopy.heroes;
        const heroIndex = heroes.findIndex((h) => h.id === hero.id);
        const updatedHero = { ...heroes[heroIndex], ...hero };
        heroes.splice(heroIndex, 1, updatedHero);
        this.setState({ heroes });
      });
  }

  private updateHeroEvent$ = new Subject<Hero>();

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
