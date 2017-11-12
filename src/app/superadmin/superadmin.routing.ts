import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
// import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HospitalComponent } from './components/hospital/hospital.component';
import { AddHospitalComponent } from './components/hospital/add-hospital/add-hospital.component';
import { AddBranchComponent } from './components/hospital/add-branch/add-branch.component';

import { UserComponent } from './components/user/user.component';
import { AddHospitalAdminComponent } from './components/user/add-hospital-admin/add-hospital-admin.component';
import { AddBranchAdminComponent } from './components/user/add-branch-admin/add-branch-admin.component';
import { AddSurgeonComponent } from './components/user/add-surgeon/add-surgeon.component';
import { AddSupportStaffComponent } from './components/user/add-support-staff/add-support-staff.component';

import { RegionComponent } from './components/region/region.component';
import { AddRegionComponent } from './components/region/add-region/add-region.component';

import { FormsComponent } from './components/forms/forms.component';
import { AddFormComponent } from './components/forms/add-form/add-form.component';

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
    },
    {
      path: 'hospital',
      component: HospitalComponent,
      children:[{
        path:'add-hospital',
        component:AddHospitalComponent
      },
      {
        path:'add-branch',
        component:AddBranchComponent
      }]
    },
    {
      path: 'user',
      component: UserComponent,
      children:[{
        path:'add-hospital-admin',
        component:AddHospitalAdminComponent
      },
      {
        path:'add-branch-admin',
        component:AddBranchAdminComponent
      },
      {
        path:'add-surgeon',
        component:AddSurgeonComponent
      },
      {
        path:'add-support-staff',
        component:AddSupportStaffComponent
      }]
    },
    {
      path: 'region',
      component: RegionComponent,
      children:[{
        path:'add-region',
        component:AddRegionComponent
      }]
    },
    {
      path: 'forms',
      component: FormsComponent,
      children:[{
        path:'add-form',
        component:AddFormComponent
      }]
    }
  ]
}, {
  path: '**',
  redirectTo: 'dashboard'
}];
