import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from '../users.service';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html'
})

export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public currentData: any;
  public msgs;

  constructor(private usersService: UsersService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null, Validators.compose(
        [Validators.required, Validators.minLength(5)]
      )),
      password: new FormControl(null, Validators.compose(
        [Validators.required]
      ))
    });
  }

  public onSignIn() {
    this.usersService.signIn(this.signInForm.value.username, this.signInForm.value.password)
      .subscribe(
        (data) => {
          // log-in successful if there's a jwt token in the response
          this.currentData = data;
          const token = this.currentData.token;
          if (token) {
            // set token property
            localStorage.setItem('id_token', token);
            this.router.navigate(['/dashboard/overview']);
            // return true to indicate successful log-in
            return true;
          }
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
