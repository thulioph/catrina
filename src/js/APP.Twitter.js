var APP = APP || {};
APP.Twitter = {
  setUp: function() {
    this.getData();
  },

  getData: function() {
    var that = this;

    var tweets = {
      "id": '562454560720302080',
      "maxTweets": 7,
      "enableLinks": true,
      "showUser": true,
      "showImages": false,
      "showTime": false,
      "showInteraction": false,
      "customCallback": inserTweets
    };

    function inserTweets(tweets){
      for (var i = 0; i < tweets.length; i++) {
        var tweet = tweets[i];
        that.createStructure(tweet);
      }

      // start progressBar
      APP.Scroll.progressBar();
    }

    twitterFetcher.fetch(tweets);
  },

  createStructure: function(tweet) {
    var feedsList = document.querySelector('#feeds-twitter ul'),
        li = document.createElement('li');

        li.classList.add('feeds-twitter-item');

        li.innerHTML = tweet;

        feedsList.appendChild(li);
  }
}
