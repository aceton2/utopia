import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() labelSelected: EventEmitter<string> = new EventEmitter();

  letters = [
    { letter: 'u', route: '/idea', label: 'the idea'},
    { letter: 't', route: '/island', label: 'the island'},
    { letter: 'o', route: '/workshops', label: 'the workshops'},
    { letter: 'p', route: '/show', label: 'the show'},
    { letter: 'i', route: '/documentary', label: 'documentary'},
    { letter: 'a', route: '/contact', label: 'contact'}
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
    setTimeout( () => this.current = newLetter, 0);
  }

  logoClick(route:string) {
    this.router.navigate([this.static ? '' : route]);
  }

  emitLabel(label?: string) {
    this.labelSelected.emit(label);
  }
}
