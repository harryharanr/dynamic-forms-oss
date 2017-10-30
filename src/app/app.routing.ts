import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { LoginComponent } from './login/login.component';


export const AppRoutes: Routes = [
  { 
    path: '',
    component: LoginComponent,
  },
  {
    path:'superadmin',
    loadChildren: './superadmin/superadmin.module#SuperadminModule'
  }
]
