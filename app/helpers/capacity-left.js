import Ember from 'ember';

export function capacityLeft(params) {
	console.log(params);
	var left = params[0] - params[1];

	if( left < 0){
		left = 0;
	}
	return left;
}

export default Ember.HTMLBars.makeBoundHelper(capacityLeft);
