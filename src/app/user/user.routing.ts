import {Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';

export const UserRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        data: {
            breadcrumb: 'User Profile',
            status: false
        }
    }
]
