import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('user', {path: ':username'}, function(){
      this.route('dashboard');
    });
  this.route('user', function() {
    this.route('dashboard');
  });
});

export default Router;
