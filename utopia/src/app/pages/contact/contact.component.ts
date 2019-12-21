import { Component } from '@angular/core';
import { openClose } from './animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    openClose
  ],
})
export class ContactComponent {

  isOpen = false;

  constructor(private router: Router) {}

  swapState() {
    this.isOpen = !this.isOpen;
    setTimeout(() => this.router.navigate(['/cover']), 2000);
  }
}
