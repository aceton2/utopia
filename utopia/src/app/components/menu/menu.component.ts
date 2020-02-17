import { Component, Input } from '@angular/core';
import { MenuItems, MenuTree } from '../accordion/types/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() currentPath: string;

  menuItems: MenuItems = [
    { id: 16, name: 'idea', active: false, url: '/idea' },
    { id: 1, name: 'island', active: false, url: '/island' },
    { id: 2, name: 'workshops', active: false, url: '/workshops'  },
    { id: 3, name: 'show', active: false,  url: '/show' },
    { id: 18, name: 'network', active: false,  url: '/network' },
    { id: 17, name: 'contact', active: false,  url: '/contact' },
    { id: 4, name: 'activities', url: '/island', fragment: 'activities' },
    { id: 5, name: 'self-organization', url: '/island', fragment: 'organization' },
    { id: 15, name: 'community', url: '/island',  fragment: 'community' },
    { id: 6, name: 'follow-up networking', url: '/island',  fragment: 'follow-up' },
    { id: 7, name: '2017', url: '/workshops/2017' },
    { id: 8, name: '2016', url: '/workshops/2016'  },
    { id: 24, name: '2018', url: '/workshops/2018'  },
    { id: 19, name: '2018', url: '/show/2018', active: false },
    { id: 9, name: '2017', url: '/show/2017', active: false },
    { id: 10, name: '2016', url: '/show/2016', active: false },
    // { id: 11, name: 'Berlin', url: '/show/2017', fragment: 'berlin' },
    // { id: 12, name: 'Tbilisi', url: '/show/2017', fragment: 'tbilisi' },
    // { id: 13, name: 'Baku', url: '/show/2017', fragment: 'baku' },
    // { id: 14, name: 'Yerevan', url: '/show/2017', fragment: 'yerevan' },
    // { id: 20, name: 'Juist', url: '/show/2018', fragment: 'juist' },
    // { id: 21, name: 'Tbilisi', url: '/show/2018', fragment: 'tbilisi' },
    // { id: 22, name: 'Baku', url: '/show/2018', fragment: 'baku' },
    // { id: 23, name: 'Yerevan', url: '/show/2018', fragment: 'yerevan' },
  ];

  menuTree: MenuTree = [
    {id: 16, children: [] },
    {id: 1, children: [4, 5, 15, 6]},
    {id: 2, children: [24, 7, 8]},
    {id: 3, children: [ 19, 9, 10 ]},
    {id: 18, children: [] },
    {id: 17, children: [] }
  ];

}
