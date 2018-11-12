import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NoContentComponent} from './no-content';

const appRoutes: Routes = [
  // Fallback when no prior route is matched
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'users', loadChildren: './users/users.module#UsersModule'},
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: '**', component: NoContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    {
      enableTracing: false, // <-- debugging purposes only
      // preloadingStrategy: PreloadAllModules,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
