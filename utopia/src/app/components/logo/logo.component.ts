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

  @Input() static;

  routeSubscription: Subscription;
  flair: boolean | string;
  current: boolean | string;

  @Input() set currentPath(value: string) {
    const newLetter = this.findLetter(value);
    if(newLetter != this.current) { this.animateChange(newLetter) }
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

  findLetter(path: string) {
    const l = path ? this.letters.find( l => path.indexOf(l.route) != -1) : false;
    return l ? l.letter : false;
  }

  animateChange(newLetter) {
    this.current = false;
    setTimeout( () => this.current = newLetter, 500);
  }

  logoClick(route:string) {
    const routeTo = this.static ? '/cover' : route;
    this.router.navigate([routeTo]);
  }
}
