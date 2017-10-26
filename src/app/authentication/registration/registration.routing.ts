import {Routes} from '@angular/router';
import {WithSocialComponent} from './with-social/with-social.component';

export const RegistrationRoutes: Routes = [
    {
        path: '',
        component: WithSocialComponent,
        data: {
            breadcrumb: 'Registration'
        }
    }
];
