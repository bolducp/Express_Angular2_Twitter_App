System.register(['@angular/core', '@angular/http', 'rxjs/Observable', './rxjs-operators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var TwitterService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            TwitterService = (function () {
                function TwitterService(http) {
                    this.http = http;
                }
                TwitterService.prototype.getTweets = function () {
                    return this.http.get('app/corc-tweets')
                        .map(this.extractTweetData)
                        .catch(this.handleError);
                };
                TwitterService.prototype.getFollowers = function () {
                    return this.http.get('app/corc-followers')
                        .map(this.extractUserData)
                        .catch(this.handleError);
                };
                TwitterService.prototype.extractTweetData = function (res) {
                    var body = res.json();
                    return body || {};
                };
                TwitterService.prototype.extractUserData = function (res) {
                    var body = res.json();
                    var users = [];
                    for (var item in body) {
                        var user = body[item];
                        var userData = {
                            name: user.name,
                            location: user.location,
                            profile_image_url: user.profile_image_url,
                            created_at: user.created_at,
                            followers_count: user.followers_count
                        };
                        users.push(userData);
                    }
                    return users;
                };
                TwitterService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    return Observable_1.Observable.throw(errMsg);
                };
                TwitterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TwitterService);
                return TwitterService;
            }());
            exports_1("TwitterService", TwitterService);
        }
    }
});
//# sourceMappingURL=twitter.service.js.map