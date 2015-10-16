import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['order:desc'],
  sortedModel: Ember.computed.sort('model', 'sortProperties')
});
