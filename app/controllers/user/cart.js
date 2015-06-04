import Ember from 'ember';

export default Ember.Controller.extend({
	variantIds: Ember.computed.mapBy('model', 'variant_id'),
	quantity: Ember.computed.mapBy('model', 'quantity'),
	totalPrices: Ember.computed.mapBy('model', 'total_price'),
    orderTotal: Ember.computed.sum('totalPrices'),
    allWeights: Ember.computed.mapBy('model', 'weight'),
    totalWeight: Ember.computed.sum('allWeights'),
    allCubicFeet: Ember.computed.mapBy('model', 'cubic_feet'),
    totalCubicFeet: Ember.computed.sum('allCubicFeet'),

    actions: {
    	placeOrder: function(){
    		var self = this;
    		var data = self.getProperties(
    			'variantIds', 
    			'quantity', 
    			'totalWeight', 
    			'totalCubicFeet', 
    			'orderTotal'
    		);

    		var order = self.store.createRecord('order', {
				quantities: data.quantity,
				variant_ids: data.variantIds,
				weight: data.totalWeight,
				cubic_feet: data.totalCubicFeet,
				total_price: data.orderTotal
			});

			order.save();

			self.store.unloadAll('cart');

			this.flashMessage({
			  content: 'Order was placed', // String
			  duration: 3000, // Number in milliseconds
			  type: 'success', // String
			});	


    	}
    }
});
