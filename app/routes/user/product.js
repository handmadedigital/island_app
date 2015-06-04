import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return Ember.RSVP.hash({
          product: this.store.find('product', params.product_slug),
          newest_products: this.store.find('product', {limit: 4})
      });
	}
});
