import Ember from 'ember';
import layout from '../templates/components/ted-modal-header';

export default Ember.Component.extend({
  layout,

  classNames: ['Ted-modal-header'],

  actions: {
    dismiss() {
      this.sendAction('close');
    }
  }
});
