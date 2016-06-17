import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { TwitterService } from './twitter.service';
import { User } from './user';

@Component({
  selector: 'corc-followers',
  templateUrl: 'app/followers.component.html',
  styleUrls: [ 'app/followers.component.css' ]
})

export class FollowersComponent implements OnInit {
  errorMessage: string;
  users: User[];
  mode = 'Observable';

  constructor(private _router: Router, private _TwitterService: TwitterService) { }

  ngOnInit() {
   this._TwitterService.getTweeters()
    .subscribe(
          users => this.users = users,
          error =>  this.errorMessage = <any>error);
    }
}
