import { Component, Input } from '@angular/core';
import { MenuTree, MenuItems, MenuItem } from './types';
import { Router } from '@angular/router';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
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

  toggle(item: MenuItem, branchItems: Array<any>) {
    if(item.url) { this.router.navigate([item.url]); }
    const ids = branchItems.map( item => item.id | item );
    this.menuItems.forEach( item => item.active = this.itemInBranch(item.id, ids) );
  }

  itemInBranch(itemId, ids): boolean {
    return ids.indexOf( itemId ) != -1
  }
}