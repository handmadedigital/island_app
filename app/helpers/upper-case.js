import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) 
{
	return value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
});
