System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var TwitterDatePipe, TwitterDateWithTimePipe;
    function isExpectedDateFormat(date) {
        var dateArray = date.split(" ");
        return dateArray.length === 6 &&
            (dateArray[3].match(/:/g)).length === 2 &&
            dateArray[4].charAt(0) === "+";
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TwitterDatePipe = (function () {
                function TwitterDatePipe() {
                }
                TwitterDatePipe.prototype.transform = function (date) {
                    if (isExpectedDateFormat(date)) {
                        var dateArray = date.split(" ");
                        dateArray.splice(3, 2);
                        return dateArray.join(" ");
                    }
                    return "Not Available";
                };
                TwitterDatePipe = __decorate([
                    core_1.Pipe({ name: 'twitterDate' }), 
                    __metadata('design:paramtypes', [])
                ], TwitterDatePipe);
                return TwitterDatePipe;
            }());
            exports_1("TwitterDatePipe", TwitterDatePipe);
            TwitterDateWithTimePipe = (function () {
                function TwitterDateWithTimePipe() {
                }
                TwitterDateWithTimePipe.prototype.transform = function (date) {
                    if (isExpectedDateFormat(date)) {
                        var dateArray = date.split(" ");
                        dateArray.splice(4, 1);
                        return dateArray.join(" ");
                    }
                    return "Not Available";
                };
                TwitterDateWithTimePipe = __decorate([
                    core_1.Pipe({ name: 'twitterDateWithTime' }), 
                    __metadata('design:paramtypes', [])
                ], TwitterDateWithTimePipe);
                return TwitterDateWithTimePipe;
            }());
            exports_1("TwitterDateWithTimePipe", TwitterDateWithTimePipe);
        }
    }
});
//# sourceMappingURL=twitter-dates.pipe.js.map