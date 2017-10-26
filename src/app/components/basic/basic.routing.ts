import { Routes } from '@angular/router';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {ButtonComponent} from './button/button.component';
import {AccordionComponent} from './accordion/accordion.component';
import {TabsComponent} from './tabs/tabs.component';
import {TypographyComponent} from './typography/typography.component';
import {LabelBadgeComponent} from './label-badge/label-badge.component';

export const BasicRoutes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Basic Components',
            status: false
        },
        children: [
            {
                path: 'breadcrumb',
                component: BreadcrumbComponent,
                data: {
                    breadcrumb: 'Breadcrumb Style',
                    status: true
                }
            }, {
                path: 'button',
                component: ButtonComponent,
                data: {
                    breadcrumb: 'Button',
                    status: true
                }
            }, {
                path: 'accordion',
                component: AccordionComponent,
                data: {
                    breadcrumb: 'Accordion',
                    status: true
                }
            }, {
                path: 'tabs',
                component: TabsComponent,
                data: {
                    breadcrumb: 'Tabs',
                    status: true
                }
            }, {
                path: 'label-badge',
                component: LabelBadgeComponent,
                data: {
                    breadcrumb: 'Label Badge',
                    status: true
                }
            }, {
                path: 'typography',
                component: TypographyComponent,
                data: {
                    breadcrumb: 'Typography',
                    status: true
                }
            }
        ]
    }
];
