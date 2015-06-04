import Ember from 'ember';

export default Ember.Controller.extend({
	displayAddProduct: false,
	displayAddVariation: true,
	options: {},

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
			this.options = {
				"size":{
					"13_ft":{
						"width": 15,
						"length": 20
					}
				}
			}

			console.log(this.options.size);
		}
	}
});
