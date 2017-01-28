# Express_Angular2_Twitter_App

an Express-Angular 2 app using the Twitter API to display Corcoran data

## Update
There have been some changes to Angular 2 since the creation of this app (esp in regards to the router). 
I've made another starter Angular 2 Express App with a more recent version of Angular 2 here: https://github.com/bolducp/angular2-express-app-starter

### View App
Deployed via Heroku here:  https://young-meadow-25237.herokuapp.com/

### Usage

1: clone the repo

2: `npm install` in outer directory & inner Client directory

3: get developer API keys from Twitter

4: fillout the .env.template and copy it as ".env". It should include the following keys:
```
TWITTER_CONSUMER_KEY=your_key_here
TWITTER_CONSUMER_SECRET=your_key_here
TWITTER_ACCESS_TOKEN_KEY=your_key_here
TWITTER_ACCESS_TOKEN_SECRET=your_key_here
```

5: cd into the Client directory and run `tsc` to compile the Typescript

6: run `npm start` or `nodemon` from the terminal, and navigate to localhost:3000 in the browser
