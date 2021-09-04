import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Hero } from '@shared/models';
import { Observable } from 'rxjs';
import { filter, map, take, takeLast, tap } from 'rxjs/operators';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root',
})
export class HeroResolver implements Resolve<Hero> {
  constructor(private heroServie: HeroService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Hero> {
    const heroId = Number(route.queryParams.id);
    // populate heroes state
    this.heroServie.loadHeroes();
    // ensure state is populated before route resolves
    return this.heroServie.getHero(heroId).pipe(
      filter((hero) => !!hero),
      take(1)
    );
  }
}
