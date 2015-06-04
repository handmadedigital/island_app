import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		this.store.unloadAll('cart');
		return this.store.find("cart");
	}
});