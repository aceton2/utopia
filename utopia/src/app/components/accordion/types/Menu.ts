
type Item = { 
  name: string, 
  url: string
}

export type Menu = {
  name: string, 
  active: boolean,
  submenu: Array<Menu | Item>
}

interface TreeItem {
  id: number,
  children: Array<number | TreeItem>
}

export interface MenuItem {
  id: number,
  name: string,
  url?: string,
  active?: boolean
}

export type MenuTree = Array<TreeItem>;
export type MenuItems = Array<MenuItem>;