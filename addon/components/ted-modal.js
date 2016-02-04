import ModalDialog from 'ember-modal-dialog/components/modal-dialog';
import Ember from 'ember';

export default ModalDialog.extend({

  // dismiss: 'dismiss',
  // close: 'dismiss',

  overlayClassNames: ['Ted-modal-overlay'],
  containerClassNames: ['Ted-modal'],
  translucentOverlay: true,
  screen: Ember.inject.service(),

  setup: Ember.on('didInsertElement', function() {

    if (this.get('screen.width') < 420) {
      // This order works best for mobile rendering perf.
      // Why?  ¯\_(ツ)_/¯  CSS
      this.set('openedAt', Ember.$(window).scrollTop());
      window.scrollTo(0, 0);
    }
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
    if (this.get('openedAt')) {
      window.scrollTo(0, this.get('openedAt'));
    }
  }),

  actions: {
    dismiss() {
      this.sendAction('close');
    }
  }

});
