import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';

import {UsersService} from './users.service';
import {
  ButtonModule, CalendarModule,
  DataTableModule,
  DialogModule,
  InputTextModule,
  MessageModule,
  MessagesModule, PasswordModule
} from 'primeng/primeng';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';


import {GrowlModule} from 'primeng/growl';
import {EditUserComponent} from './edit-user/edit-user.component';
import {MyDetailComponent} from './my-detail/my-detail.component';
import {UsersRoutingModule} from './users-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {MomentModule} from 'ngx-moment';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, UsersRoutingModule,
    // pagination
    NgxPaginationModule,
    // primeng
    InputTextModule,
    DataTableModule,
    GrowlModule,
    MessageModule,
    MessagesModule,
    ButtonModule,
    DialogModule,
    PasswordModule,
    CalendarModule,
    // moment
    MomentModule

  ],
  exports: [UserListComponent, UserDetailComponent, MyDetailComponent],
  declarations: [SignInComponent, SignUpComponent, UserListComponent, UserDetailComponent,
    EditUserComponent, MyDetailComponent
  ],
  providers: [UsersService]
})

export class UsersModule {
}
