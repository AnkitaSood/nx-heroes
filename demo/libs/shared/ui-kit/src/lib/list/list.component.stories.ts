import {moduleMetadata, Story, Meta} from '@storybook/angular';
import {ListComponent} from './list.component';

export default {
  title: 'Lists',
  component: ListComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ListComponent>;

const Template: Story<ListComponent> = (args: ListComponent) => ({
  component: ListComponent,
  props: args,
});


export const BasicList = Template.bind({});
BasicList.args = {}
