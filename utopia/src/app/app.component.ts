import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { fadeInOutAnimation } from './app.animations';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ 
    fadeInOutAnimation
  ]
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  currentPath: string;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap( (event: NavigationEnd) => this.currentPath = event.urlAfterRedirects)
    )
    .subscribe( ev => {
      const path = ev.url.split('#');
      path[1] ? this.viewportScroller.scrollToAnchor(path[1]) : this.viewportScroller.scrollToPosition([0, 0]);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
