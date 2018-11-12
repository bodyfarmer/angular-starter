import {NgModule} from '@angular/core';
import {AccountComponent} from './account/account.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {routes} from './dashboard.routes';
import {UsersModule} from '../users';
import {DashboardMenuComponent} from './dashboard-menu/dashboard-menu.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {OverviewComponent} from './overview/overview.component';
import {ViewUserComponent} from './view-user/view-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    UsersModule
  ],
  declarations: [AccountComponent, DashboardMenuComponent, ManageUsersComponent, OverviewComponent, ViewUserComponent
  ],
  exports: [DashboardMenuComponent]
})

export class DashboardModule {

}
