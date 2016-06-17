import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { TwitterService } from './twitter.service';
import { FollowersComponent } from './followers.component';
import { TweetsComponent } from './tweets.component';

@Component({
  selector: 'twitter-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    TwitterService
  ]
})

@RouteConfig([
  {
    path: '/followers',
    name: 'Followers',
    component: FollowersComponent
  },
  {
    path: '/corc-tweets',
    name: 'Tweets',
    component: TweetsComponent,
    useAsDefault: true
  }
])

export class AppComponent {
  title = 'Twitter Experiment';
}
