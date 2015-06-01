import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
      return Ember.RSVP.hash({
          categories: this.store.find('category'),
          newest_products: this.store.find('product', {limit: 8})
      });
    }
});
