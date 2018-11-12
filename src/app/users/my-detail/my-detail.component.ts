import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../user.interface';
import { UsersService } from '../users.service';

import { JwtHelperService } from '@auth0/angular-jwt';

import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'my-detail',
  templateUrl: 'my-detail.component.html'
})

export class MyDetailComponent implements OnInit {
  user: User;
  errorMessage: string;
  private sub: Subscription;
  jwtHelper = new JwtHelperService();

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private  _usersService: UsersService) {

  }

  ngOnInit(): void {
    const token = localStorage.getItem('id_token');

    const decoded = this.jwtHelper.decodeToken(token);

    this.getUser(decoded._id);
  }

  getUser(id: string): void {
    this._usersService.getUser(id).subscribe(
      (user) => this.user = user,
      (error) => this.errorMessage = <any> error
    );
  }

}
