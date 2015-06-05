import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return $.get('https://island-api.herokuapp.com/api/v1/'+params.category+'/products').then(function(response){
			return response.data;		
		});
	}
});
