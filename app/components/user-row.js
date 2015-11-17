import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  actions: {
    updateModel(model) {
      model.save();
    }
  }
});
