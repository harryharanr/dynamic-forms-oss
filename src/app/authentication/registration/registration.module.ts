import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {RegistrationRoutes} from './registration.routing';
import { WithSocialComponent } from './with-social/with-social.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RegistrationRoutes),
    SharedModule
  ],
  declarations: [WithSocialComponent]
})
export class RegistrationModule { }

