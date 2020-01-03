import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { showHideAnimation } from './logo.animations';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: [
    showHideAnimation
  ]
})
export class LogoComponent {

  routeSubscription: Subscription;
  flair: boolean | string;
  current: boolean | string;

  @Input() set currentPath(value: string) {
    const newCurrent = this.getCurrent(value);
    if(newCurrent != this.current) { this.animateChange(newCurrent) }
  }

  letters = [
    { letter: 'u', route: '/idea' },
    { letter: 't', route: '/island' },
    { letter: 'o', route: '/workshops' },
    { letter: 'p', route: '/show' },
    { letter: 'i', route: '/documentary' },
    { letter: 'a', route: '/contact' }
  ]
  
  constructor(
    private router: Router
  ) {}

  getCurrent(path: string) {
    const l = path ? this.letters.find( l => path.indexOf(l.route) != -1) : false;
    return l ? l.letter : false;
  }

  animateChange(newCurrent) {
    this.current = false; // to trigger animation
    setTimeout( () => this.current = newCurrent, 500);
  }

  logoClick(route:string) {
    this.router.navigate([route]);
  }
}
