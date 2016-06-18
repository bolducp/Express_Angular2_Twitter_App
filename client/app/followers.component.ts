import { Component, OnInit } from '@angular/core';

import { TwitterService } from './twitter.service';
import { TwitterDatePipe } from './twitter-dates.pipe';
import { User } from './user';

@Component({
  selector: 'corc-followers',
  templateUrl: 'app/followers.component.html',
  styleUrls: [ 'app/followers.component.css' ],
  pipes: [TwitterDatePipe]
})

export class FollowersComponent implements OnInit {
  errorMessage: string;
  users: User[];
  mode = 'Observable';

  constructor(private _TwitterService: TwitterService) { }

  ngOnInit() {
   this._TwitterService.getFollowers()
     .subscribe(
        users => this.users = users,
        error =>  this.errorMessage = <any>error);
    }
}
