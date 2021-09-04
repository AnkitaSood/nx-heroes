import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {
        id: 11,
        name: 'Captain America',
        category: ['Marvel'],
        superPowers: ['superhuman agility', 'superhuman stamina', 'Bulletproof Armor', 'Fire-Resistant Armor'],
        isFavHero: true
      },
      {
        id: 12,
        name: 'Iron Man',
        category: ['Marvel'],
        superPowers: ['Powered armor suit', 'Genius level intellect', 'agility', 'reflexes'],
        isFavHero: true
      },
      {
        id: 13,
        name: 'Thor',
        category: ['Marvel'],
        superPowers: ['superhuman strength', 'agility', 'durability', 'immunity', 'power'],
        isFavHero: true
      },
      {
        id: 14,
        name: 'Wolverine',
        category: ['Marvel'],
        superPowers: ['reflexes', 'superhuman strength', 'slow aging', 'mutant powers'],
        isFavHero: true
      },
      {
        id: 15,
        name: 'Hulk',
        category: ['Marvel'],
        superPowers: ['superhuman strength', 'intellect', 'anger'],
        isFavHero: true
      },
      {
        id: 16,
        name: 'Cat Woman',
        category: ['DC'],
        superPowers: ['speed', 'balance', 'agility', 'reflexes'],
        isFavHero: true
      },
      {
        id: 17,
        name: 'Wonder Woman',
        category: ['DC'],
        superPowers: ['superhuman strength', 'invulnerable', 'speed'],
        isFavHero: true
      },
      {
        id: 18,
        name: 'Batman',
        category: ['DC'],
        superPowers: ['hi tech gear', 'personality', 'athletic'],
        isFavHero: true
      },
      {
        id: 19,
        name: 'Superman',
        category: ['DC'],
        superPowers: ['superhuman strength', 'flight', 'x-ray vision', 'enhanced hearing'],
        isFavHero: true
      },
      {
        id: 20,
        name: 'Spider-Man',
        category: ['DC'],
        superPowers: ['superhuman strength', 'balance', 'agility', 'webbing', 'web-slinging'],
        isFavHero: true
      }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
