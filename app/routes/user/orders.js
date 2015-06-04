import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		this.store.unloadAll('order');
		return this.store.find('order');
	}
});
