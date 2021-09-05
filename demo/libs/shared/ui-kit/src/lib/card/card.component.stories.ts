import { Story} from '@storybook/angular/types-6-0';

import {CardComponent} from './card.component';

const Template: Story<CardComponent> = (args) => ({
  props : args,
})

export const NoHeroCard = Template.bind({});
NoHeroCard.args = {
  hero: undefined
}
