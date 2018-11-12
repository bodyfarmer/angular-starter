import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {UsersService} from '../users.service';

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.component.html'
})

export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  public msgs = [];

  constructor(private usersService: UsersService,
              private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.signUpForm = new FormGroup({
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
  }

  public onSignUp() {
    // console.log(this.signUpForm);
    this.usersService.signUp(this.signUpForm.value)
      .subscribe(
        (data) => {
          this.msgs.push({
            severity: 'success',
            summary: 'Info Message',
            detail: 'Successfully signed up. Redirect to sign in page.'
          });
          setTimeout(() => {
            this.router.navigate(['/users/sign-in']);
          }, 2000);  // 2s delay
        },
        (err) => console.log(err)
      );
    // maybe reset form
    this.signUpForm.reset();
  }
}
