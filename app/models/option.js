import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  values: DS.hasMany('value')
});
