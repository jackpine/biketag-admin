import Ember from 'ember';

export default Ember.ArrayController.extend({
    sortProperties: ['order:desc'],
    sortedModel: Ember.computed.sort('model', 'sortProperties')
});
