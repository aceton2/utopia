import { Component, Input } from '@angular/core';
import { MenuTree, MenuItems, MenuItem } from './types/Menu';
import { Router, NavigationExtras } from '@angular/router';
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
      const path = value.split('#');
      this.menuItems.forEach( item => item.active = this.isItemActive(item, path) );
    }
  }

  constructor(private router: Router) {}

  getItem(item: number | any) {
    const id = item.id | item;
    return this.menuItems.find(item => item.id === id);
  }

  isItemActive(item: MenuItem, path: Array<string>) {
    const fragmentsMatch = item.fragment ? path[1] === item.fragment : true;
    const urlMatch = path[0].indexOf(item.url) != -1;
    return urlMatch && fragmentsMatch;
  }

  toggle(item: MenuItem) {
    if(item.url) { 
      const options: NavigationExtras = { fragment: item.fragment ? item.fragment : null };
      setTimeout( () => this.router.navigate([item.url], options), 100 ); 
    }
  }
}
