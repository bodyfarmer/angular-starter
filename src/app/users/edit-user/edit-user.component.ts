import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'edit-user',
  templateUrl: 'edit-user.component.html'
})

export class EditUserComponent implements OnInit {

  public user;
  public editUserForm: FormGroup;
  private sub: Subscription;
  public msgs;


  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router
  ) {
  }

  public ngOnInit(): void {

    // init form
    this.editUserForm = new FormGroup({
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
      )),
      mobileNumber: new FormControl(null),
      dob: new FormControl(null),
      street: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null),
      zip: new FormControl(null)
    });

    this.sub = this.route.params.subscribe(
      (params) => {
        const id = params['id'];
        this.usersService.getUser(id).subscribe(
          (data) => {
            this.user = data;
            this.editUserForm.patchValue({
              _id: this.user._id,
              firstName: this.user.firstName,
              lastName: this.user.lastName,
              username: this.user.username,
              mobileNumber: this.user.mobileNumber,
              dob: new Date(this.user.dob),
              street: this.user.street,
              city: this.user.city,
              state: this.user.state,
              zip: this.user.zip

            });
          },
          (err) => console.log(err)
        );
      });
  }

  public save() {
    this.usersService.updateUser(this.editUserForm.value, this.user._id).subscribe(
      (data) => {
        this.msgs = [];
        this.msgs.push({
          severity: 'success',
          summary: 'Success Message',
          detail: 'Successfully updated user account.'
        });
        this.router.navigate(['/dashboard/manage-users']);
      },
      (err) => {
        // console.log(err);
        this.msgs = [];
        this.msgs.push({
          severity: 'error',
          summary: 'Error Message',
          detail: 'Incorrect username and password combination. Please try again.'
        });
      }
    );
  }
}
