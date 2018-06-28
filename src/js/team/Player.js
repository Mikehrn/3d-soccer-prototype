'use strict';

import * as PositionConstants from "./../constants/PositionConstants";
import * as Designlist from './../constants/DesignConstants';
import Model from './../Model';
import {IMG as IMG} from './../Loader';
import {OBJECT_GENERAL as OBJECT_GENERAL} from './../Loader';
import * as TWEEN from '@tweenjs/tween.js';

export default class Player {
  constructor() {
    

  }

  setPosition(x, z) {
    this.model.position.set(x, 6, z);
  }

  draw() {
    this.setUniform();
    this.model = this.uniform;
    this.model.scale.set(0.12, 0.12, 0.12);
    this.model.rotation.set(0, 10.9, 0);
    this.tweenY = new TWEEN.Tween(this.model.position).to({y: 10}, 1000).start();
    this.tweenY.repeat(Infinity); 
    this.tweenY.yoyo(true);
  }

  // setDesign(index) {
  //   this.currentDesignIndex = index;
  // }

  setUniform() {
    console.log(this.position);
    if (this.position === PositionConstants.GK) {
      // switch(this.design) {
      //   case 0: return IMG.K01; break; 
      //   case 1: return IMG.K02; break; 
      //   case 2: return IMG.K03; break; 
      // }
      this.uniform = OBJECT_GENERAL.SHIRT_KEEPER.clone();
    } else {
      // switch(this.design) {
      //   case 0: return IMG.P01; break; 
      //   case 1: return IMG.P02; break; 
      //   case 2: return IMG.P03; break; 
      // }
      this.uniform = OBJECT_GENERAL.SHIRT_PLAYER.clone();
    }
  }
}