import DS from 'ember-data';

export default DS.Model.extend({
  activity: DS.attr(),
  img: DS.attr(),
  duration: DS.attr(),
  bestTime: DS.attr(),
  notes: DS.attr()
});
