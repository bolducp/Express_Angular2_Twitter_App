import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Tweet } from './tweet';
import { User } from './user';
import { TwitterService } from './twitter.service';
import { TwitterDateWithTimePipe } from './twitter-dates.pipe';

@Component({
  selector: 'corc-tweets',
  templateUrl: 'app/tweets.component.html',
  styleUrls: ['app/tweets.component.css'],
  pipes: [TwitterDateWithTimePipe]
})

export class TweetsComponent implements OnInit {
  errorMessage: string;
  tweets: Tweet[];
  users: User[];
  mode = 'Observable';

  constructor(private _router: Router, private _TwitterService: TwitterService) { }

  ngOnInit() {
    this._TwitterService.getTweets()
      .subscribe(
         tweets => this.tweets = tweets,
         error =>  this.errorMessage = <any>error);
  }
}
