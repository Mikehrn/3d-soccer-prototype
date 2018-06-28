'use strict';

import * as STATE from './../constants/StateConstants';
import Model from './../Model';
import Util from './../utils/Util';

export default class Formation {
  constructor(manager) {
    this.currentFormationIndex = 0;
    this.manager = manager;
    this.setupButtons(this);
  }

  setupButtons(that) {    
    this.$button = document.querySelectorAll('.formation__option');
    for (var i = 0; i < this.$button.length; i++) {
      this.$button[i].onclick = function() {
        that.setFormation(this.dataset.formation, this);
      }
    }
  }

  setFormation(index, own) {
    Util.resetClass('formation__option');
    this.currentFormation = index;
    this.manager.setState(STATE.CHANGED_FORMATION);
    own.classList.add('active');
  }

  set currentFormation(index) {
    this.currentFormationIndex = index;
  }
  
  get currentFormation() {
    return this.currentFormationIndex;
  }
}