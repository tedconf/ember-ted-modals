import Ember from 'ember';

export default Ember.Controller.extend({

  isShowingModal: false,

  actions: {
    toggleIsShowingModal() {
      this.toggleProperty('isShowingModal');
    }
  }

});

