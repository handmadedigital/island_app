import Ember from 'ember';

export default Ember.Controller.extend({
	displayAddProduct: false,
	displayAddVariation: false,
	optionValue: Ember.A([]),
	optionWidth: Ember.A([]),
	optionLength: Ember.A([]),
	optionHeight: Ember.A([]),
	optionCubicFeet: Ember.A([]),
	optionWeight: Ember.A([]),
	optionPrice: Ember.A([]),

	clearOptionProperties: function(){
		this.setProperties({
			option_value: "",
			option_width: "",
			option_length: "",
			option_height: "",
			option_cubic_feet: "",
			option_weight: "",
			option_price: ""
		});
	},

	clearProperties: function(){
		this.setProperties({
			name: "",
			description: "",
			length: "",
			width: "",
			height: "",
			weight:"",
			cubic_feet: "",
			price: "",
			option_value: "",
			option_width: "",
			option_length: "",
			option_height: "",
			option_cubic_feet: "",
			option_weight: "",
			option_price: "",
			displayAddProduct: false,
			displayAddVariation: false,
		});
	},

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
			var data = this.getProperties('option', 'option_value', 'option_width', 'option_length', 'option_height', 'option_cubic_feet', 'option_weight', 'option_price');

			this.optionValue.pushObject(data.option_value);
			this.optionWidth.pushObject(data.option_width);
			this.optionLength.pushObject(data.option_length);
			this.optionHeight.pushObject(data.option_height);
			this.optionCubicFeet.pushObject(data.option_cubic_feet);
			this.optionWeight.pushObject(data.option_weight);
			this.optionPrice.pushObject(data.option_price);

			this.clearOptionProperties();

			this.flashMessage({
				content: 'Variant was added!', // String
				duration: 1000, // Number in milliseconds
				type: 'success', // String
			});

		},
		addVariantProduct: function(){
			var data = this.getProperties('image_src', 'name', 'description', 'option', 'optionValue', 'optionLength', 'optionWidth', 'optionHeight', 'optionCubicFeet', 'optionWeight', 'optionPrice');

			var product =  {
				name: data.name,
				description: data.description,
				image_src: data.image_src,
				option: data.option,
				option_value: data.optionValue,
				width: data.optionWidth,
				length: data.optionLength,
				height: data.optionHeight,
				cubic_feet: data.optionCubicFeet,
				weight: data.optionWeight,
				price: data.optionPrice
			};

			$.post('https://island-api.herokuapp.com/api/v1/products', product).then(function(response){
				console.log(response);	
			});

			this.clearProperties();

			this.flashMessage({
				content: 'Product was added!', // String
				duration: 3000, // Number in milliseconds
				type: 'success', // String
			});

			
		},
		addProduct: function(){

			var data = this.getProperties('image_src', 'name', 'description',  'length', 'width', 'height', 'cubic_feet', 'weight', 'price');

			$.post('https://island-api.herokuapp.com/api/v1/products', data).then(function(response){
					
			});

			this.clearProperties();

			this.flashMessage({
				content: 'Product was added!', // String
				duration: 3000, // Number in milliseconds
				type: 'success', // String
			});

			
		}
	}
});
