import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {UserListComponent} from './user-list/user-list.component';
import {MyDetailComponent} from './my-detail/my-detail.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {EditUserComponent} from './edit-user/edit-user.component';

const usersRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'my-detail', component: MyDetailComponent},
  {path: 'user-detail/:id', component: UserDetailComponent},
  {path: 'user-detail/:id/edit', component: EditUserComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {
}
