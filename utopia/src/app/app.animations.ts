import {
    trigger,
    query,
    style,
    animate,
    transition,
    group
  } from '@angular/animations';

function transitionDoesNotInvolveCover(fromState: string, toState: string) {
  return fromState !== 'cover' && toState !== 'cover';
}

export const fadeInOutAnimation =
  trigger('fadeInOutAnimation', [

    transition(transitionDoesNotInvolveCover, [

      query(':enter', [
        style({ opacity: '0', position: 'absolute'}),
      ], { optional: true }),

      group( [
        query(':leave', [
          style({ opacity: '1', position: 'absolute'}),
          animate('300ms 0ms ease-in-out', style({ opacity: '0' }))
        ], { optional: true }),

        query(':enter', [
          animate('300ms 0ms ease-in-out', style({ opacity: '1' }))
        ], { optional: true })

      ])
    ]),
  ]);