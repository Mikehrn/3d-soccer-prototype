'use strict';
import * as THREE from 'three';
import * as STATE from './constants/StateConstants';
import * as TEXTURES from './constants/Textures';
import * as MODELS from './constants/Models';
import GLTFLoader from 'three-gltf-loader';

export const TEXTURE_STREET = [];
export const TEXTURE_GALAXY = [];
export const TEXTURE_STADIUM = [];
export const OBJECT_GENERAL = [];
export const OBJECT_STREET = [];

export default class Loader {
  constructor(manager) {
    this.manager = manager;
    this.currentSceneIndex = 0;
    this.checkLoaded = this._checkLoaded.bind(this);
    this.textureLoader = new THREE.TextureLoader();
    this.GLTFLoader = new GLTFLoader();
    // this.loadedStreet = false;
    // this.loadedGalaxy = false;
    // this.loadedStadium = false;
    // this.initLoad = false;
    this.load();
  }

  load() {
    this.imageCount = 0;
    this.loadCount = 0;
    this.loadTexture(TEXTURES.STREET, TEXTURE_STREET);
    this.loadModel(MODELS.STREET, OBJECT_STREET);
    this.loadTexture(TEXTURES.GALAXY, TEXTURE_GALAXY);
    this.loadTexture(TEXTURES.STADIUM, TEXTURE_STADIUM);
    this.loadModel(MODELS.GENERAL, OBJECT_GENERAL);
    // switch(this.currentSceneIndex) {
    //   case 0: 
    //     // if (!this.loadedStreet) {
    //       this.loadTexture(TEXTURES.STREET, TEXTURE_STREET);
    //       this.loadModel(MODELS.STREET, OBJECT_STREET);
    //       // this.loadedStreet = true;
    //     // } else {
    //     //   this.manager.setState(STATE.LOADED_SCENE);
    //     // }
    //   break;
    //   case 1:
    //     // if (!this.loadedGalaxy) {
    //       this.loadTexture(TEXTURES.GALAXY, TEXTURE_GALAXY);
    //       // this.loadedGalaxy = true;
    //     // } else {
    //       // this.manager.setState(STATE.LOADED_SCENE);
    //     // }
    //   break;
    //   case 2:
    //     // if (!this.loadedStadium) {
    //       this.loadTexture(TEXTURES.STADIUM, TEXTURE_STADIUM);
    //       // this.loadedStadium = true;
    //     // } else {
    //       // this.manager.setState(STATE.LOADED_SCENE);
    //     // }
    //   break;
    // }
  }

  loadScene(sceneIndex) {
    this.currentSceneIndex = sceneIndex;
    this.load();
  }

  loadTexture(type, target) {
    for (let source in type) {
      this.imageCount++;
      this.textureLoader.load(TEXTURES.PATH + type[source], (texture) => {
        target[source] = texture;
        this.checkLoaded(); 
      });
    }
  }

  loadModel(type, target) {
    for (let source in type) {
      this.imageCount++;
      this.GLTFLoader.load(
        MODELS.PATH + type[source], (model) => {
          target[source] = model.scene;
          this.checkLoaded(); 
        }
      );
    }
  }

  _checkLoaded() {
    this.loadCount++;
    // if (!this.initLoad) {
      if (this.loadCount === this.imageCount) {
        this.manager.setState(STATE.LOADED);
        this.initLoad = true;
      }
    // } else {
    //   if (this.loadCount === this.imageCount) {
    //     this.manager.setState(STATE.LOADED_SCENE);
    //   }
    // }
  }
}