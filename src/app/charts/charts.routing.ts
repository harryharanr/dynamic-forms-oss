import {Routes} from '@angular/router';
import {MorrisJsComponent} from './morris-js/morris-js.component';

export const ChartRoutes: Routes = [
    {
        path: '',
        component: MorrisJsComponent,
        data: {
            breadcrumb: 'Chart',
            status: false
        }
    }
]
