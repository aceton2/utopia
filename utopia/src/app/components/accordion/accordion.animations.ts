import {
    trigger,
    style,
    animate,
    transition,
} from '@angular/animations';

export const collapseAnimation = trigger('collapseAnimation', [

    transition(':enter', [
        style({ height: '0px' }),
        animate('500ms 0ms ease-in-out', style({ height: '*' }))
    ]),

    transition(':leave', [
        style({ height: '*' }),
        animate('500ms 0ms ease-in-out', style({ height: '0px' }))
    ])
]);