import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  paragraph1: DS.attr(),
  paragraph2: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
