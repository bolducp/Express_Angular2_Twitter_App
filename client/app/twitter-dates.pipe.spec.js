System.register(['./twitter-dates.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var twitter_dates_pipe_1;
    return {
        setters:[
            function (twitter_dates_pipe_1_1) {
                twitter_dates_pipe_1 = twitter_dates_pipe_1_1;
            }],
        execute: function() {
            describe('TwitterDatePipe', function () {
                var pipe;
                beforeEach(function () {
                    pipe = new twitter_dates_pipe_1.TwitterDatePipe();
                });
                it('strips out the time and timezone data', function () {
                    expect(pipe.transform('Tue Dec 23 04:03:33 +0000 2008')).toEqual('Tue Dec 23 2008');
                });
                describe('if date in unexpected format, returns "Not Available"', function () {
                    it('date string not 6 words long', function () {
                        expect(pipe.transform('Dec 23 040333 +0000 2008')).toEqual('Not Available');
                    });
                    it('forth word is not a time stamp', function () {
                        expect(pipe.transform('Tue Dec 23 +0000 2008')).toEqual('Not Available');
                    });
                    it('fifth word is not a timezone', function () {
                        expect(pipe.transform('Tue Dec 23 04:03:33 2008')).toEqual('Not Available');
                    });
                });
            });
            describe('TwitterDateWithTimePipe', function () {
                var pipe;
                beforeEach(function () {
                    pipe = new twitter_dates_pipe_1.TwitterDateWithTimePipe();
                });
                it('strips out only the timezone data', function () {
                    expect(pipe.transform('Tue Dec 23 04:03:33 +0000 2008')).toEqual('Tue Dec 23 04:03:33 2008');
                });
                describe('if date in unexpected format, does not transform string', function () {
                    it('date string not 6 words long', function () {
                        expect(pipe.transform('Dec 23 040333 +0000 2008')).toEqual('Not Available');
                    });
                    it('forth word is not a time stamp', function () {
                        expect(pipe.transform('Tue Dec 23 +0000 2008')).toEqual('Not Available');
                    });
                    it('fifth word is not a timezone', function () {
                        expect(pipe.transform('Tue Dec 23 04:03:33 2008')).toEqual('Not Available');
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=twitter-dates.pipe.spec.js.map