import {AccountComponent} from './account/account.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {OverviewComponent} from './overview/overview.component';
import {ViewUserComponent} from './view-user/view-user.component';

export const routes =
  [
    {path: '', component: OverviewComponent},
    {path: 'overview', component: OverviewComponent},
    {path: 'account', component: AccountComponent},
    {path: 'manage-users', component: ManageUsersComponent},
    {path: 'manage-users/user-detail/:id', component: ViewUserComponent},

  ];
