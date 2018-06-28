'use strict';

import Formation from './../team/Formation';
import Ui from './../ui/UiControls';
import SceneManager from '../SceneManager';
import Loader from './../Loader';
import Model from './../Model';
import * as STATE from './../constants/StateConstants';

export default class Manager {
  constructor() {
    this.initStates();
    this.init();
  }
  
  initStates() {
    this.states = {
      loaded: () => {
        // this.sceneManager.init();
        this.ui.loaded();
        this.formation = new Formation(this);
        // this.canvas = new Scene();
        // console.log(this.model.currentFormation);
        // console.log(this.model.currentDesign);
        this.sceneManager.init(this, this.model.currentFormation ,this.model.currentScene);
      },
      formation: () => {
        let newFormationIndex = this.formation.currentFormation;
        this.model.currentFormation = newFormationIndex;
        this.sceneManager.setFormation(newFormationIndex);
      },
      changedScene: () => {
        // this.loader.loadScene(this.model.currentScene);
        //this.sceneManager.setSceneIndex(this.model.currentScene);
      },
      loadedScene: () => {
        this.sceneManager.setSceneIndex(this.model.currentScene);
      }
    //   team: () => {
    //     this.canvas.setTeam(this.model.currentTeam);
    //   },
    //   playerSelect: () => {
    //     this.ui.changeSelectedPlayer(this.selectedPlayerName, this.selectedPlayerPosition);
    //   },
    //   playerRename: () => {
    //     this.canvas.setPlayerName(this.selectedPlayerIndex, this.ui.playerInputValue);
    //   },
    //   playerPosition: () => {
    //     this.canvas.setPlayerPosition(this.selectedPlayerIndex, this.ui.playerPositionValue);
    //   }
    }
  }

  init() {
    this.model = new Model(this);
    this.sceneManager = new SceneManager();
    this.loader = new Loader(this);
    this.ui = new Ui(this);
  }

  setState(stateName) {
    const inputState = this.states[stateName];
    inputState();
  }

  // setSelectedPlayer(playerIndex, playerName, playerPosition) {
  //   this.selectedPlayerIndex = playerIndex;
  //   this.selectedPlayerName = playerName;
  //   this.selectedPlayerPosition = playerPosition;
  // }
}
