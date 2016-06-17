import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import './rxjs-operators';

import { Tweet } from './tweet';
import { User } from './user';

@Injectable()
export class TwitterService {
  constructor (private http: Http) {}

  getTweets(): Observable<Tweet[]> {
    return this.http.get('app/corc-tweets')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getTweeters(): Observable<User[]> {
    return this.http.get('app/corc-followers')
                    .map(this.extractUserData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private extractUserData(res: Response) {
    let body = res.json();
    let users = [];

    for (var item in body){
      let user = body[item];
      let userData = {
        name: user.name,
        location: user.location,
        profile_image_url: user.profile_image_url,
        created_at: sanitizeDate(user.created_at),
        followers_count: user.followers_count
      };
      users.push(userData);
    }
    return users;

    function sanitizeDate(date){
      let dateArray = date.split(" ");
      dateArray.splice(3, 2);
      return dateArray.join(" ");
    }
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
