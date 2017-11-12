// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuItems } from './layouts/menu-items/menu-items';

import { SuperadminRoutes } from './superadmin.routing';

import { SuperAdminComponent } from './superadmin.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

import { SharedModule } from '../shared/shared.module';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layouts/admin/title/title.component';

import {ScrollModule} from '../scroll/scroll.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';

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

@NgModule({
  declarations: [
    SuperAdminComponent,
    AdminLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent,
    DashboardComponent,
    HospitalComponent,
    AddHospitalComponent,
    AddBranchComponent,
    UserComponent,
    AddHospitalAdminComponent,
    AddBranchAdminComponent,
    AddSurgeonComponent,
    AddSupportStaffComponent,
    RegionComponent,
    AddRegionComponent,
    FormsComponent,
    AddFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(SuperadminRoutes),
    FormsModule,
    HttpModule,
    ScrollModule
  ],
  exports: [ScrollModule],
  providers: [
      { provide: LocationStrategy, useClass: PathLocationStrategy },
      MenuItems
  ],
  bootstrap: [SuperAdminComponent]
})

export class SuperadminModule {}
