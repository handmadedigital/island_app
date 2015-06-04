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
      this.route('cart');
      this.route('orders');
      this.route('order', {path: '/order/:order_number'})
  });
});

export default Router;
