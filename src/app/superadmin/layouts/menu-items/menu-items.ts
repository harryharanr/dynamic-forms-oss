import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Layout',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'hospital',
        name: 'Hospital Management',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'addhospital',
            name: 'Add Hospital'
          },
          {
            state: 'addbranch',
            name: 'Add Branch'
          }
        ]
      },
      {
        state: 'user',
        name: 'User Management',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'addhospitaladmin',
            name: 'Add Hospital Admin'
          },
          {
            state: 'addbranchadmin',
            name: 'Add Branch Admin'
          },
          {
            state: 'addsurgeon',
            name: 'Add Surgeon'
          },
          {
            state: 'addsupportstaff',
            name: 'Add Support Staff'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
