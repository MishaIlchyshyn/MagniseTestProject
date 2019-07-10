import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
    { path: '', redirectTo: 'projects', pathMatch: 'full' },
    {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule',
    },
    {
        path: '',
        canActivateChild: [MetaGuard],
        children: [{ path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' }],
    },
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
