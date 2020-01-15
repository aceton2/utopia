import {
    trigger,
    query,
    style,
    animate,
    transition
  } from '@angular/animations';


function transitionDoesNotInvolveCover(fromState: string, toState: string) {
  return fromState !== 'cover' && toState !== 'cover';
}

export const fadeInOutAnimation =
  trigger('fadeInOutAnimation', [

    transition('cover => *', [

      query(':enter', [
        style({ opacity: '0'}),
      ], { optional: true }),

      query(':leave', [
          style({ opacity: '1'}),
          animate('500ms 500ms ease-in-out', style({ opacity: '0' }))
      ], { optional: true }),
    ]),

    transition('* => cover', [

      query(':enter', [
        style({ opacity: '0'}),
      ], { optional: true }),

      query(':enter', [
        animate('500ms 0ms ease-in-out', style({ opacity: '1' }))
      ], { optional: true })

    ]),

    transition(transitionDoesNotInvolveCover, [

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