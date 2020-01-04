import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {
  @Input() currentPath: string;
  @Output() toggleMenu: EventEmitter<void> = new EventEmitter();
}
