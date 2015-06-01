import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.resource('user', {path: ':username'}, function(){
      this.route('dashboard');
      this.route('products', {path: '/products'});
      this.route('product', {path: '/product/:product_slug'});
  });
});

export default Router;
