import {
    trigger,
    state,
    query,
    style,
    animate,
    transition,
    animateChild,
    group
  } from '@angular/animations';

export const fadeInOutAnimation =
  trigger('fadeInOutAnimation', [

    transition('* <=> *', [

      query(':enter', [
        style({ opacity: '0', position: 'absolute'}),
      ], { optional: true }),

      query(':leave', [
          style({ opacity: '1', position: 'absolute'}),
          animate('500ms 0ms ease-in-out', style({ opacity: '0' }))
      ], { optional: true }),

      query(':enter', [
        animate('500ms 0ms ease-in-out', style({ opacity: '1' }))
      ], { optional: true })

    ]),
  ]);