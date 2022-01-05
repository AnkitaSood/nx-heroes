import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FlipCardComponent } from './flip-card.component';
import { MatDividerModule } from '@angular/material/divider';

export default {
  title: 'FlipCardComponent',
  component: FlipCardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatDividerModule],
    }),
  ],
} as Meta<FlipCardComponent>;

export const BasicFlipCard: Story = (args) => ({
  props: args,
  template: `<app-flip-card>
                <ng-container title>${args.title}</ng-container>
                <ng-container content-title>${args['content-title']}</ng-container>
                <ng-container details>${args.details}</ng-container>
                <ng-container back-content>${args['back-content']}</ng-container>
                </app-flip-card>`,
});

BasicFlipCard.args = {
  title: 'Fancy Card Title',
  'content-title': 'Fancy Card Content Title',
  details: 'Fancy Card Details',
  'back-content': 'Fancy Card Back Side',
};
