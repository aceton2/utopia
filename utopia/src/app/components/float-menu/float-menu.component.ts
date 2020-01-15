import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss']
})
export class FloatMenuComponent {
  @Input() currentPath: string;
  @Output() closeMenu: EventEmitter<void> = new EventEmitter()
}
