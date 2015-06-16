import Ember from "ember";  
import Session from "simple-auth/session";

export default {
  name: "current-user",
  before: "simple-auth",

  initialize: function(container) {
    Session.reopen({
      setCurrentUser: function() {

        if(this.get('secure.token') !== undefined){
          var accessToken = this.get('secure.token');
          var tokenData = getTokenData(accessToken);
          var user_id = tokenData['sub'];
          var self = this;

          if (!Ember.isEmpty(accessToken)) {
            return container.lookup('store:main').find('user', user_id).then(function(user) {
              self.set('content.currentUser', user);
            });
          }
        }
      }.observes('secure.token')
    });
  },

};

function getTokenData(token) {
    var tokenData = atob(token.split('.')[1]);

    try {
      return JSON.parse(tokenData);
    } catch (e) {
      //jshint unused:false
      return tokenData;
    }
}