import {Story} from '@storybook/angular/types-6-0';

import {CardComponent} from './card.component';
import {Meta, moduleMetadata} from "@storybook/angular";

export default {
  title: 'Cards',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: []
    })
  ]
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args) => ({
  component: CardComponent,
  props: args,
})

export const NoHeroCard = Template.bind({});
NoHeroCard.args = {
  hero: undefined
}
