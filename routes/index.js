var express = require('express');
var twit = require('twitter');
var router = express.Router();
var path = require('path');

var twitter = new twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

router.get('/tweets', function(req, res, next) {
  twitter.get('search/tweets', { q: 'the "Corcoran Group"'}, function(error, tweets, response){
    if(error) throw error;
    res.send(tweets);
  });
});

router.get('/tweetsjade', function(req, res, next) {
  twitter.get('search/tweets', { q: "the 'Corcoran Group'"}, function(error, tweets, response){
    if(error) throw error;

    for (var tweet in tweets.statuses){
      var oneTweet = tweets.statuses[tweet].text;
    }
    res.render("tweets", {one: oneTweet})
  });
});

router.get('/app/corc-tweets', function(req, res, next) {
  twitter.get('search/tweets', { q: "the 'Corcoran Group'"}, function(error, tweets, response){
    if(error) throw error;
    res.send(tweets.statuses);
  });
});

router.get('/app/corc-followers', function(req, res, next) {
  twitter.get('followers/list', { screen_name: "corcorangroup", count: 200}, function(error, followers, response){
    if(error) throw error;
    res.send(followers.users);
  });
});

router.get('/stream', function(req, res, next) {
  twitter.stream('statuses/filter', {track: 'NYC'}, function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet.text);
    });

    stream.on('error', function(error) {
      throw error;
    });
  });
});

router.get('/rate_limits', function(req, res, next) {
  twitter.get('application/rate_limit_status', { screen_name: "corcorangroup"}, function(error, limits, response){
    if(error) throw error;
    res.send(limits);
  });
});

module.exports = router;
