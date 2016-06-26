System.register(['@angular/core', './twitter.service', './twitter-dates.pipe'], function(exports_1, context_1) {
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
    var core_1, twitter_service_1, twitter_dates_pipe_1;
    var TweetsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (twitter_service_1_1) {
                twitter_service_1 = twitter_service_1_1;
            },
            function (twitter_dates_pipe_1_1) {
                twitter_dates_pipe_1 = twitter_dates_pipe_1_1;
            }],
        execute: function() {
            TweetsComponent = (function () {
                function TweetsComponent(_TwitterService) {
                    this._TwitterService = _TwitterService;
                    this.mode = 'Observable';
                }
                TweetsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._TwitterService.getTweets()
                        .subscribe(function (tweets) { return _this.tweets = tweets; }, function (error) { return _this.errorMessage = error; });
                };
                TweetsComponent = __decorate([
                    core_1.Component({
                        selector: 'corc-tweets',
                        templateUrl: 'app/tweets.component.html',
                        styleUrls: ['app/tweets.component.css'],
                        pipes: [twitter_dates_pipe_1.TwitterDateWithTimePipe]
                    }), 
                    __metadata('design:paramtypes', [twitter_service_1.TwitterService])
                ], TweetsComponent);
                return TweetsComponent;
            }());
            exports_1("TweetsComponent", TweetsComponent);
        }
    }
});
//# sourceMappingURL=tweets.component.js.map