import DS from 'ember-data';

export default DS.Model.extend({
  screen-name: DS.attr(),
  avatar: DS.attr(),
  query: DS.attr(),
  content: DS.attr(),
});
