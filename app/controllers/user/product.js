import Ember from 'ember';

export default Ember.Controller.extend({
	quantity: 1,

	clearProperties: function(){
		this.setProperties({
			variant_id: "",
			quantity: 1
		});
	},

    variant_id: null,

    actions:{
    	radioChecked: function(value){
			this.set('variant_id', value);
		},
		submit: function(){
			var self = this;
			var data = self.getProperties('quantity', 'variant_id');
			console.log(data);

			if(data.variant_id == null){
				this.flashMessage({
				  	content: 'Please select a product!', // String
				  	duration: 3000, // Number in milliseconds
				  	type: 'warning', // String
				});

				return;
			}
			else
			{
				$.post('https://island-api.herokuapp.com/api/v1/carts', data).then(function(response){
					
				});

				this.flashMessage({
					content: 'Product was added to the cart!', // String
					duration: 2000, // Number in milliseconds
					type: 'success', // String
				});

				self.clearProperties();
			}
		}
    }
	
});
