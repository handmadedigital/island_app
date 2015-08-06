import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find("product", {includes: "categories", limit: 150});
	}
});
