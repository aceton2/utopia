import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit, OnDestroy{

  routeSubscription: Subscription;
  flair: boolean | string;
  current: boolean | string;

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

  ngOnInit() {
    this.routeSubscription = this.router.events
      .pipe(filter( event => event instanceof NavigationEnd))
      .subscribe( (event: NavigationEnd) => this.current = this.letters.find( l => l.route === event.url).letter )
  }

  logoClick(route:string) {
    this.router.navigate([route]);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
