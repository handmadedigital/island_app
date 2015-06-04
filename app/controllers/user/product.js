import Ember from 'ember';

export default Ember.Controller.extend({
	quantity: 1,

	clearProperties: function(){
		this.setProperties({
			quantity: "",
			variant_id: "",
		});
	},

    selectedProduct: null,

    actions:{
    	radioChecked: function(value){
			this.set('selectedProduct', value);
		},
		submit: function(){
			var self = this;
			var data = self.getProperties('quantity', 'selectedProduct');
			console.log(data.selectedProduct);

			if(data.selectedProduct == null){
				this.flashMessage({
				  	content: 'Please select a product!', // String
				  	duration: 3000, // Number in milliseconds
				  	type: 'warning', // String
				});

				return;
			}
			else
			{
				var cart = self.store.createRecord('cart', {
					quantity: data.quantity,
					variant_id: data.selectedProduct
				});

				cart.save();

				this.flashMessage({
				  content: 'Product was added to the cart!', // String
				  duration: 9000, // Number in milliseconds
				  type: 'success', // String
				});	

				self.clearProperties();

				location.reload();
			}
		}
    }
	
});
