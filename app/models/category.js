import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    image_src: DS.attr('string')
});
