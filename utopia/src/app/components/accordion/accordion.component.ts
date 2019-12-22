import { Component, Input } from '@angular/core';
import { MenuTree, MenuItems, MenuItem } from './types/Menu';
import { Router } from '@angular/router';
import { collapseAnimation } from './accordion.animations';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    collapseAnimation
  ]
})
export class AccordionComponent {

  @Input() menuItems: MenuItems;
  @Input() menuTree: MenuTree;

  @Input() set currentPath(value: string) {
    if(value) {
      this.menuItems.forEach( item => item.active = value.indexOf(item.url) != -1)
    }
  }

  constructor(private router: Router) { console.log(this); }

  getItem(item: number | any) {
    const id = item.id | item;
    return this.menuItems.find(item => item.id === id);
  }

  toggle(item: MenuItem) {
    if(item.url) { 
      setTimeout( () => this.router.navigate([item.url]), 100 ); 
    }
  }
}
