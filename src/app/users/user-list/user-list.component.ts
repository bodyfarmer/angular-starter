import {Component, OnInit} from '@angular/core';
import {User} from '../user.interface';
import {UsersService} from '../users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html'
})

export class UserListComponent implements OnInit {
  public newUserForm: FormGroup;
  public msgs = [];
  public users: User[];
  public user: User;
  public display: boolean = false;
  public count: number = 0;
  public pageNum: number = 1;

  constructor(private usersService: UsersService,
  ) {
  }

  public ngOnInit(): void {
    this.newUserForm = new FormGroup({
      firstName: new FormControl(null, Validators.compose(
        [Validators.required,
          Validators.minLength(3),
        ]
      )),
      lastName: new FormControl(null, Validators.compose(
        [Validators.required,
          Validators.minLength(3),
        ]
      )),
      username: new FormControl(null, Validators.compose(
        [Validators.required,
          Validators.minLength(5),
          Validators.pattern('[^ @]*@[^ @]*')]
      )),
      password: new FormControl(null, Validators.compose(
        [Validators.required,
          Validators.minLength(5),
        ]
      ))
    });
    this.getAllUsers();
  }

  public getAllUsers() {
    let params = new HttpParams();
    params = params.append('page', String(this.pageNum));

    this.usersService.getUsers(params).subscribe(
      (data) => {
        this.users = data;
      },
      (err) => console.log(err)
    );
  }

  public showDialog() {
    this.display = true;
  }

  public onDelete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.usersService.deleteUser(user).subscribe();
  }

  public onSignUp() {
    this.usersService.signUp(this.newUserForm.value)
      .subscribe(
        (data) => {
          // console.log(data);
          // refresh users collection
          this.getAllUsers();
          this.msgs.push({
            severity: 'success',
            summary: 'Info Message',
            detail: 'Successfully added new user.'
          });
        },
        (err) => console.log(err)
      );
    // maybe reset form
    this.newUserForm.reset();
  }

  public onPageChange(event) {
    this.pageNum = event;
    this.getAllUsers();
  }
}
