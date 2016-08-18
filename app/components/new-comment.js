import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment1() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        article: this.get('article')
      };
      this.set('addNewRental', false);
      this.sendAction('saveComment2', params);
    }
  }
});
