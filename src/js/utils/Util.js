'use strict';

export default class Util {
  // [General Util] Get all elements by className and reset class to className
  static resetClass(className) {
    const TARGET_ELEMENTS = document.getElementsByClassName(className);
    const LENGTH = TARGET_ELEMENTS.length;
    for(let i = 0; i < LENGTH; i++ ) {
      TARGET_ELEMENTS[i].className = className;
    }
  }
}