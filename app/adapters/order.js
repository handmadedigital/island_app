import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	find: function(store, type, id) {
		console.log(type.typeKey);
		return this.ajax(this.buildURL(type.typeKey, id)+"?includes=order_details", 'GET');
	}
});
