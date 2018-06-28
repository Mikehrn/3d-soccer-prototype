'use strict';

import * as PositionConstants from "./../constants/PositionConstants";
import * as Designlist from './../constants/DesignConstants';
import Model from './../Model';
import {IMG as IMG} from './../Loader';
import {OBJECT_GENERAL as OBJECT_GENERAL} from './../Loader';

export default class Player {
  constructor() {
    this.model = OBJECT_GENERAL.SHIRT;
    // this.model.traverse(function(node) {
    //   if (node instanceof THREE.Mesh) {
    //     node.castShadow = true;
    //   }
    // });
    this.model.scale.set(0.12,0.12,0.12);
    this.model.rotation.set(0,10.9,0);
  }

  setup() {

  }

  updatePosition() {

  }

  draw() {
  }

  // setDesign(index) {
  //   this.currentDesignIndex = index;
  // }

  getUniform(position) {
    // if (this.position === PositionConstants.GK) {
    //   switch(this.design) {
    //     case 0: return IMG.K01; break; 
    //     case 1: return IMG.K02; break; 
    //     case 2: return IMG.K03; break; 
    //   }
    // } else {
    //   switch(this.design) {
    //     case 0: return IMG.P01; break; 
    //     case 1: return IMG.P02; break; 
    //     case 2: return IMG.P03; break; 
    //   }
    // }
  }
}