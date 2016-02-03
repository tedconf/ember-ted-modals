import Ember from 'ember';
import layout from '../templates/components/ted-modal-footer';

export default Ember.Component.extend({
  layout,

  classNames: ['Ted-modal-footer'],

  dismiss: 'dismiss',

  actions: {

    dismiss() {
      this.sendAction('dismiss');
    },

    sendPrimaryAction(cb) {
      this.sendAction('action', cb);
    }

  }
});
