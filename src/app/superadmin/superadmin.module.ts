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

@NgModule({
  declarations: [
    SuperAdminComponent,
    AdminLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent,
    DashboardComponent
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
