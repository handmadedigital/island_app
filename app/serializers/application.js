import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
   	 categories: {embedded: 'always'}
    },

  	extractArray: function(store, typeClass, payload) {
	    var root_key = Ember.Inflector.inflector.pluralize(typeClass.typeKey);

		payload[root_key] = payload.data;
		delete payload.data;

		return this._super(store, typeClass, payload);
	},

	normalize: function(typeClass, hash, prop){
		self = this;

		typeClass.eachRelationship(function(key, relationship){
			if(relationship.kind === "hasMany"){
				if( ! hash[key]){
					return hash;
				}

				var hashed = hash[key].data;

				hash[key] = hashed;

				return hashed;
			}
		});

		return this._super(typeClass, hash, prop);
	},

	extractSingle: function(store, typeClass, payload, id){
		var root_key = typeClass.typeKey;

		payload[root_key] = payload.data;
		delete payload.data;

		return this._super(store, typeClass, payload, id);
	}
});
