'use stric';
import * as STATE from './constants/StateConstants';
import Formation from './team/Formation';
import SceneManager from './SceneManager';
import Util from './utils/Util';

export default class Model {
  constructor(manager) {
    this.manager = manager;
    this.currentSceneIndex = 0;
    this.currentFormationIndex = 0;
    // this.currentDesignIndex = 0;
    // this.currentTeamIndex = 0;
    this.setupButtons(this);
  }
  
  setupButtons(that) {
    // this.$teamButton = document.querySelectorAll('.design__option');
    this.$sceneButton = document.querySelectorAll('.scene__option');

    for (var i = 0; i < this.$sceneButton.length; i++) {
      this.$sceneButton[i].onclick = function() {
        Util.resetClass('scene__option');
        this.classList.add('active');
        let sceneIndex = this.dataset.scene;
        that.currentSceneIndex = parseInt(sceneIndex);
        that.manager.setState(STATE.LOADED_SCENE);
      }
    }
  }

  set currentFormation(index) {
    this.currentFormationIndex = index;
  }

  get currentFormation() {
    return this.currentFormationIndex;
  }

  set currentScene(index) {
    this.currentSceneIndex = index;
  }

  get currentScene() {
    return this.currentSceneIndex;
  }

  // set currentTeam(index) {
  //   this.currentTeamIndex = index;
  // }

  // get currentTeam() {
  //   return this.currentTeamIndex;
  // }
}