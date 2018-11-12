import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute, Router} from '@angular/router';

import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import {Subscription} from 'rxjs/internal/Subscription';
// const URL = '/api/';
const URL = 'https://rig-selector.appspot.com/api/media';

@Component({
  selector: 'user-detail',
  templateUrl: 'user-detail.component.html',
  providers: [MessageService]
})

export class UserDetailComponent implements OnInit {

  public msgs: Message[] = [];

  public avatar: any;

  public user;
  private sub: Subscription;

  constructor(private _usersService: UsersService,
              private _router: Router,
              private _route: ActivatedRoute,
              ) {


  }

  public ngOnInit(): void {

    this.sub = this._route.params.subscribe(
      (params) => {
        const id = params['id'];
        this._usersService.getUser(id).subscribe(
          (data) => {
            this.user = data;
          },
          (err) => console.log(err)
        );
      });
  }


}
