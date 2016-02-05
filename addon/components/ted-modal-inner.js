import ModalDialog from 'ember-modal-dialog/components/modal-dialog';
import Ember from 'ember';

export default ModalDialog.extend({

  classNames: ['Ted-modal-inner'],
  overlayClassNames: ['Ted-modal-overlay'],
  containerClassNames: ['Ted-modal'],
  translucentOverlay: true,

  actions: {
    dismiss() {
      this.sendAction('close');
    }
  }

});
