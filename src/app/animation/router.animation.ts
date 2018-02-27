import { trigger, state, style, animate, transition, query } from '@angular/animations';

export const routeAnimation = {
  animate: () => {
    return trigger('fadeInOut', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0}),
          animate('400ms ease-out', style({opacity: 1}))
        ], { optional: true })
      ])
    ]);
  }
};
