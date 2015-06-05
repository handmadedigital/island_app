import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    slug: DS.attr('string'),
    image_src: DS.attr('string'),
    products: DS.hasMany('product')
});
