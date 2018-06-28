'use strict';

import Util from './../utils/Util';
import Model from './../Model';
import * as STATE from './../constants/StateConstants';

// UI controls for controlling tabs and other non-game related UI elements
export default class Ui {
  constructor(manager) {
    this.manager = manager;
  }

  loaded() {
    const LOADER_DIV = document.getElementById('loader');
    LOADER_DIV.classList.add('loaded');
  }
}