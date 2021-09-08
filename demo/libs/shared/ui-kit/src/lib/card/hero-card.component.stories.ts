import {Story} from '@storybook/angular/types-6-0';

import {HeroCardComponent} from './hero-card.component';
import {Meta, moduleMetadata} from "@storybook/angular";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {Hero} from "../../../../models";

export default {
  title: 'Cards',
  component: HeroCardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatIconModule]
    })
  ]
} as Meta<HeroCardComponent>;

/*
* No args passed - hence will display card when data is null
* */
export const NoHeroCard: Story<HeroCardComponent> = () => ({});

/*
* Basic mock data being passed as args to show how content gets displayed in the card
* */

export const BasicHeroCard: Story<HeroCardComponent> = (args) => ({
  props: {
    ...args
  }
});

BasicHeroCard.args = {
  hero: {
    id: 12,
    name: 'Mr. Fancy Pants',
    isFavHero: true,
    category: ['Unicornverse'],
    superPowers: ['fanciness', 'sparkles']
  } as Hero
}
