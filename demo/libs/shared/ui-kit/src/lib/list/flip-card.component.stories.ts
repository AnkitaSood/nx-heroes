import {moduleMetadata, Story, Meta} from '@storybook/angular';
import {FlipCardComponent} from './flip-card.component';

export default {
  title: 'FlipCard',
  component: FlipCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FlipCardComponent>;

const Template: Story<FlipCardComponent> = (args: FlipCardComponent) => ({
  component: FlipCardComponent,
  props: args,
});


export const BasicFlipCard = Template.bind({});
BasicFlipCard.args = {}
