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


// animation object used in component decorator
export const slideInAnimation =

  // trigger name used in template
  trigger('routeAnimations', [

    // defines a transition between states in first argument
    transition('HomePage <=> AboutPage', [

      // styles the host div irrespective of state
      style({ position: 'relative' }),

      // style specific child elements
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),

      // position the enter page off to the left
      query(':enter', [
        style({ left: '-100%'})
      ]),

      // execute any pending leave page animations
      query(':leave', animateChild()),

      // animations to run concurrently
      group([
        query(':leave', [
          // move the leave view 100 right
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          // move the enter view into view
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),

      // execute any pending enter page animations
      query(':enter', animateChild()),
    ]),

    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);