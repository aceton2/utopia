
interface TreeItem {
  id: number,
  children: Array<number | TreeItem>
}

export interface MenuItem {
  id: number,
  name: string,
  url?: string,
  fragment?: string,
  active?: boolean
}

export type MenuTree = Array<TreeItem>;
export type MenuItems = Array<MenuItem>;
