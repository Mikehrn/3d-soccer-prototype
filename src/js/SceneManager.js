'use strict';
import Model from './Model';
import Player from './team/Player';
import FormationConstants from './constants/FormationConstants';
import * as Designlist from './constants/DesignConstants';
import NameConstants from './constants/NameConstants';
import * as STATE from './constants/StateConstants';
import {IMG as IMG} from './Loader';

import SceneStreet from './scenes/SceneStreet';
let OrbitControls = require('three-orbit-controls')(THREE);
import * as THREE from 'three';
import SceneGalaxy from './scenes/SceneGalaxy';
import SceneStadium from './scenes/SceneStadium';

export default class SceneManager {
  constructor(manager) {
    this.currentSceneIndex = 0;
    this.currentFormationIndex = 0;
    this.manager = manager;
    this.sceneToRender;
  }

  init() {
    this.setUp();
    this.initRenderer();
  }

  setUp() {
    this.sceneStreet = new SceneStreet();
    this.sceneGalaxy = new SceneGalaxy();
    this.sceneStadium = new SceneStadium();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    this.camera.position.set(150, 120, 50);
    this.controls = new OrbitControls(this.camera);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.setCurrentSceneName();
    this.createPlayers();
    this.renderLoop();
  }

  createPlayers() {
    this.playerList = [];
    for (let i = 0; i <= 10; i++) {
      this.playerList.push(new Player());
      this.playerList[i].name = NameConstants[0][i];
      this.playerList[i].index = i;
      this.playerList[i].xAxis = FormationConstants[this.currentFormationIndex][i][0];
      this.playerList[i].yAxis = FormationConstants[this.currentFormationIndex][i][1];
      this.playerList[i].position = FormationConstants[this.currentFormationIndex][i][2];
      this.sceneStreet.scene.add(this.playerList[i].model);
      // this.sceneGalaxy.scene.add(this.playerList[i].model);
      // this.sceneStadium.scene.add(this.playerList[i].model);
    }
  }

  setSceneIndex(index) { 
    this.currentSceneIndex = index;
    this.setCurrentSceneName();
  }

  setCurrentSceneName() {
    switch(this.currentSceneIndex) {
      case 0: this.sceneToRender = this.sceneStreet.scene; break; 
      case 1: this.sceneToRender = this.sceneGalaxy.scene; break;
      case 2: this.sceneToRender = this.sceneStadium.scene; break;
    }
  }

  renderLoop() {
    this.renderer.render(this.sceneToRender, this.camera);
    requestAnimationFrame(() => { 
      this.renderLoop();
    });
  }
}