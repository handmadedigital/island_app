import Ember from 'ember';

export default Ember.Controller.extend({
	variant_ids: Ember.computed.mapBy('model.cart', 'variant_id'),
	quantities: Ember.computed.mapBy('model.cart', 'quantity'),
	totalPrices: Ember.computed.mapBy('model.cart', 'total_price'),
    total_price: Ember.computed.sum('totalPrices'),
    allWeights: Ember.computed.mapBy('model.cart', 'weight'),
    weight: Ember.computed.sum('allWeights'),
    allCubicFeet: Ember.computed.mapBy('model.cart', 'cubic_feet'),
    cubic_feet: Ember.computed.sum('allCubicFeet'),

    actions: {
    	placeOrder: function(){
    		var self = this;
    		var data = self.getProperties(
    			'variant_ids', 
    			'quantities', 
    			'weight', 
    			'cubic_feet', 
    			'total_price'
    		);

            $.post('https://island-api.herokuapp.com/api/v1/orders', data).then(function(response){
                
            });

            this.flashMessage({
                content: 'Order was placed!', // String
                duration: 2000, // Number in milliseconds
                type: 'success', // String
            });

            this.store.unloadAll('cart');
    	}
    }
});
