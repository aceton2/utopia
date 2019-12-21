import {
    trigger,
    state,
    style,
    animate,
    transition,
    query
  } from '@angular/animations';

// on center
export const openClose = trigger('openClose', [
    state('closed', style({
      position: 'absolute',
      top: '100px',
      left: '50%',

    })),
    state('open', style({
      position: 'absolute',
      left: '50%',
      top: '50%'
    })),

    transition('open => closed', [
      animate('1s ease-in-out')
    ]),

    transition('closed => open', [
      animate('0.5s ease-in-out')

    ]),
]);