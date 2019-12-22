import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  routeSubscription: Subscription;
  flair: boolean | string;
  current: boolean | string;

  @Input() set currentPath(value: string) {
    this.setCurrent(value);
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

  setCurrent(path: string) {
    const l = this.letters.find( l => l.route === path);
    this.current = l ? l.letter : false;
  }

  logoClick(route:string) {
    this.router.navigate([route]);
  }
}
