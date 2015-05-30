import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value, options) 
{
   return value.charAt(0).toUpperCase() + value.substring(1);
});
