import Ember from 'ember';

export default Ember.Controller.extend({
	displayAddProduct: false,
	displayAddVariation: true,

	actions:{
		displayAddProduct:function(){
			if(this.displayAddVariation === false){
				this.toggleProperty('displayAddProduct');
			}
			else if(this.displayAddVariation === true)
			{
				this.set('displayAddVariation', false);
				this.toggleProperty('displayAddProduct');
			}
		},
		displayAddVariation: function(){
			if(this.displayAddProduct === false){
				this.toggleProperty('displayAddVariation');
			}
			else if(this.displayAddProduct === true)
			{
				this.set('displayAddProduct', false);
				this.toggleProperty('displayAddVariation');
			}
		},
		addOptionValue: function(){
			var data = this.getProperties('option', 'option_value', 'option_width', 'option_height');

			this.store.push('product')
			
		}
	}
});
