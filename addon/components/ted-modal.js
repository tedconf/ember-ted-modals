import Ember from 'ember';
import layout from '../templates/components/ted-modal';

export default Ember.Component.extend({
  layout,

  screen: Ember.inject.service(),

  shouldShowModal: true,

  setup: Ember.on('didInsertElement', function() {
    Ember.$('body').addClass('modal-showing');

    Ember.$('body').on('keyup.modal-dialog', (e) => {
      if (e.keyCode === 27) {
        this.sendAction('close');
      }
    });
  }),

  teardown: Ember.on('willDestroyElement', function() {
    Ember.$('body').off('keyup.modal-dialog');
    Ember.$('body').removeClass('modal-showing');
  }),

  actions: {
    close() {
      this.sendAction('close');
    }
  }

});
