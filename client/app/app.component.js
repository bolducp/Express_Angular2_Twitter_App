System.register(['@angular/core', '@angular/http', '@angular/router-deprecated', './twitter.service', './followers.component', './tweets.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_deprecated_1, twitter_service_1, followers_component_1, tweets_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (twitter_service_1_1) {
                twitter_service_1 = twitter_service_1_1;
            },
            function (followers_component_1_1) {
                followers_component_1 = followers_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Corcoran Twitter Stats';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'twitter-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_deprecated_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                            twitter_service_1.TwitterService
                        ]
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/followers',
                            name: 'Followers',
                            component: followers_component_1.FollowersComponent
                        },
                        {
                            path: '/corc-tweets',
                            name: 'Tweets',
                            component: tweets_component_1.TweetsComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map