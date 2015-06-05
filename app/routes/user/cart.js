import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return Ember.RSVP.hash({
          cart: this.store.find('cart'),
          shipping_container: this.store.find('shipping-container')
      });
	}
});