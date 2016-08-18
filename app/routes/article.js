import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },
  actions: {
    saveComment3(params) {
      console.log(params.article.get("title"));
      var newComment = this.store.createRecord('comment', params);
      var article = params.article;
      article.get('comments').addObject(newArticle);
      newArticle.save().then(function() {
        return article.save();
      });
      this.transitionTo('article', params.article);
    }
  }
});
// actions: {
//   debug(){
//     debugger;
//   }
// }
