import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('asnwer-question', 'Integration | Component | asnwer question', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{asnwer-question}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#asnwer-question}}
      template block text
    {{/asnwer-question}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
