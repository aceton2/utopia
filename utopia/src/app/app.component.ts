import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { fadeInOutAnimation, drawerAnimation } from './app.animations';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ 
    drawerAnimation,
    fadeInOutAnimation
  ]
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  currentPath: string;
  showFloatingMenu: boolean = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap( () => this.closeFloatingMenu() ),
      tap( (event: NavigationEnd) => this.currentPath = event.urlAfterRedirects)
    )
    .subscribe( ev => {
      const path = ev.url.split('#');
      path[1] ? this.viewportScroller.scrollToAnchor(path[1]) : null;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeFloatingMenu() {
    setTimeout( () => this.showFloatingMenu = false, 0);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
