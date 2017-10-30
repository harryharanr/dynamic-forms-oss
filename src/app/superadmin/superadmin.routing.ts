import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
// import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const SuperadminRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    }
  ]
}, {
  path: '**',
  redirectTo: 'dashboard'
}];
