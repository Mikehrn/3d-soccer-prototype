/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var CHANGED=exports.CHANGED='changed';var LOADED=exports.LOADED='loaded';var CHANGED_FORMATION=exports.CHANGED_FORMATION='formation';var CHANGED_DESIGN=exports.CHANGED_DESIGN='design';var CHANGED_TEAM=exports.CHANGED_TEAM='team';var SELECTED_PLAYER=exports.SELECTED_PLAYER='playerSelect';var RENAME=exports.RENAME='playerRename';var CHANGED_POSITION=exports.CHANGED_POSITION='playerPosition';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
'use stric';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _StateConstants=__webpack_require__(0);var STATE=_interopRequireWildcard(_StateConstants);var _Formation=__webpack_require__(5);var _Formation2=_interopRequireDefault(_Formation);var _Canvas=__webpack_require__(6);var _Canvas2=_interopRequireDefault(_Canvas);var _Util=__webpack_require__(4);var _Util2=_interopRequireDefault(_Util);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Model=function(){function Model(manager){_classCallCheck(this,Model);this.manager=manager;this.currentFormationIndex=0;this.currentDesignIndex=0;this.currentTeamIndex=0;this.setupButtons(this);}_createClass(Model,[{key:'setupButtons',value:function setupButtons(that){this.$teamButton=document.querySelectorAll('.country-list__option');this.$designButton=document.querySelectorAll('.design-list__option');for(var i=0;i<this.$teamButton.length;i++){this.$teamButton[i].onclick=function(){_Util2.default.resetClass('country-list__option');this.classList.add('active');var teamIndex=this.dataset.team;that.currentTeamIndex=parseInt(teamIndex);that.manager.setState(STATE.CHANGED_TEAM);};}for(var i=0;i<this.$designButton.length;i++){this.$designButton[i].onclick=function(){_Util2.default.resetClass('design-list__option');this.classList.add('active');var designIndex=this.dataset.design;that.currentDesignIndex=parseInt(designIndex);that.manager.setState(STATE.CHANGED_DESIGN);};}}},{key:'currentFormation',set:function set(index){this.currentFormationIndex=index;},get:function get(){return this.currentFormationIndex;}},{key:'currentDesign',set:function set(index){this.currentDesignIndex=index;},get:function get(){return this.currentDesignIndex;}},{key:'currentTeam',set:function set(index){this.currentTeamIndex=index;},get:function get(){return this.currentTeamIndex;}}]);return Model;}();exports.default=Model;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var PATH=exports.PATH='assets/img/';var BACKGROUND=exports.BACKGROUND={B01:'background/background_01.jpg',B02:'background/background_02.jpg',B03:'background/background_03.jpg'};var KEEPER=exports.KEEPER={K01:'keeper/keeper_01.png',K02:'keeper/keeper_02.png',K03:'keeper/keeper_03.png'};var PLAYER=exports.PLAYER={P01:'player/player_01.png',P02:'player/player_02.png',P03:'player/player_03.png'};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.IMG=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _StateConstants=__webpack_require__(0);var STATE=_interopRequireWildcard(_StateConstants);var _DesignConstants=__webpack_require__(2);var designConstants=_interopRequireWildcard(_DesignConstants);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var IMG=exports.IMG=[];var Loader=function(){function Loader(manager){_classCallCheck(this,Loader);this.manager=manager;this.checkLoaded=this._checkLoaded.bind(this);this.load();}_createClass(Loader,[{key:'load',value:function load(){this.imageCount=0;this.loadCount=0;this.loadImage(designConstants.BACKGROUND);this.loadImage(designConstants.KEEPER);this.loadImage(designConstants.PLAYER);}},{key:'loadImage',value:function loadImage(type){for(var source in type){var image=new Image();IMG[source]=image;image.onload=this.checkLoaded;image.src=designConstants.PATH+type[source];this.imageCount++;}}},{key:'_checkLoaded',value:function _checkLoaded(){this.loadCount++;if(this.loadCount===this.imageCount){this.manager.setState(STATE.LOADED);}}}]);return Loader;}();exports.default=Loader;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Util=function(){function Util(){_classCallCheck(this,Util);}_createClass(Util,null,[{key:'resetClass',value:function resetClass(className){var TARGET_ELEMENTS=document.getElementsByClassName(className);var LENGTH=TARGET_ELEMENTS.length;for(var i=0;i<LENGTH;i++){TARGET_ELEMENTS[i].className=className;}}}]);return Util;}();exports.default=Util;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _StateConstants=__webpack_require__(0);var STATE=_interopRequireWildcard(_StateConstants);var _Model=__webpack_require__(1);var _Model2=_interopRequireDefault(_Model);var _Util=__webpack_require__(4);var _Util2=_interopRequireDefault(_Util);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Formation=function(){function Formation(manager){_classCallCheck(this,Formation);this.currentFormationIndex=0;this.manager=manager;this.setupButtons(this);}_createClass(Formation,[{key:'setupButtons',value:function setupButtons(that){this.$button=document.querySelectorAll('.formation-list__option');for(var i=0;i<this.$button.length;i++){this.$button[i].onclick=function(){that.setFormation(this.dataset.formation,this);};}}},{key:'setFormation',value:function setFormation(index,own){_Util2.default.resetClass('formation-list__option');this.currentFormation=index;this.manager.setState(STATE.CHANGED_FORMATION);own.classList.add('active');}},{key:'currentFormation',set:function set(index){this.currentFormationIndex=index;},get:function get(){return this.currentFormationIndex;}}]);return Formation;}();exports.default=Formation;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _Model=__webpack_require__(1);var _Model2=_interopRequireDefault(_Model);var _Player=__webpack_require__(11);var _Player2=_interopRequireDefault(_Player);var _FormationConstants=__webpack_require__(12);var _FormationConstants2=_interopRequireDefault(_FormationConstants);var _DesignConstants=__webpack_require__(2);var Designlist=_interopRequireWildcard(_DesignConstants);var _NameConstants=__webpack_require__(13);var _NameConstants2=_interopRequireDefault(_NameConstants);var _StateConstants=__webpack_require__(0);var STATE=_interopRequireWildcard(_StateConstants);var _Loader=__webpack_require__(3);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Canvas=function(){function Canvas(){_classCallCheck(this,Canvas);this.canvasId=document.getElementById('canvas');this.ctx=document.getElementById('canvas').getContext('2d');this.canvasRatio=1200/this.canvasId.offsetWidth;this.selectedPlayer;this.mousePressed=false;}_createClass(Canvas,[{key:'init',value:function init(manager,formation,design){this.manager=manager;this.playersDrawn=false;this.createPlayers();this.currentDesignIndex=design;this.currentFormationIndex=formation;for(var i=0;i<=10;i++){this.playerList[i].xAxis=_FormationConstants2.default[this.currentFormationIndex][i][0];this.playerList[i].yAxis=_FormationConstants2.default[this.currentFormationIndex][i][1];this.playerList[i].position=_FormationConstants2.default[this.currentFormationIndex][i][2];}this.createCanvas();this.selecting();}},{key:'selecting',value:function selecting(){var _this=this;this.canvasId.addEventListener("touchstart",function(e){_this.mouseX=e.targetTouches[0].pageX*_this.canvasRatio;_this.mouseY=e.targetTouches[0].pageY*_this.canvasRatio;_this.mousePressed=true;for(var i=0;i<=10;i++){if(_this.mouseX<_this.playerList[i].right&&_this.mouseX>_this.playerList[i].left&&_this.mouseY<_this.playerList[i].bottom&&_this.mouseY>_this.playerList[i].top){_this.selectedPlayer=_this.playerList[i].index;_this.playerList[i].isSelected=true;_this.manager.setSelectedPlayer(_this.playerList[i].index,_this.playerList[i].name,_this.playerList[i].position,STATE.SELECTED_PLAYER);}else{_this.playerList[i].isSelected=false;}}});this.canvasId.addEventListener("touchend",function(e){_this.mousePressed=false;});this.canvasId.addEventListener("touchmove",function(e){if(_this.mousePressed=true){_this.mouseX=e.targetTouches[0].pageX*_this.canvasRatio;_this.mouseY=e.targetTouches[0].pageY*_this.canvasRatio;_this.playerList[_this.selectedPlayer].xAxis=_this.mouseX-95;_this.playerList[_this.selectedPlayer].yAxis=_this.mouseY-63;_this.drawPlayers();}});}},{key:'createCanvas',value:function createCanvas(){this.canvasWidth=1200;this.canvasHeight=630;this.ctx.canvas.width=this.canvasWidth;this.ctx.canvas.height=this.canvasHeight;this.drawFrame();}},{key:'createPlayers',value:function createPlayers(){this.playerList=[];for(var i=0;i<=10;i++){this.playerList.push(new _Player2.default(i));this.playerList[i].name=_NameConstants2.default[0][i];this.playerList[i].index=i;this.playerList[i].setup();}}},{key:'drawFrame',value:function drawFrame(){var backgroundImage=this.getBackgroundImage();this.ctx.drawImage(backgroundImage,0,0,this.canvasWidth,this.canvasHeight);this.drawPlayers();requestAnimationFrame(this.drawFrame.bind(this));}},{key:'drawPlayers',value:function drawPlayers(){for(var i=0;i<=10;i++){this.playerList[i].updatePosition();this.playerList[i].draw();}this.playersDrawn=true;}},{key:'setFormation',value:function setFormation(index){for(var i=0;i<=10;i++){this.playerList[i].xAxis=_FormationConstants2.default[index][i][0];this.playerList[i].yAxis=_FormationConstants2.default[index][i][1];this.playerList[i].position=_FormationConstants2.default[index][i][2];}}},{key:'setTeam',value:function setTeam(index){for(var i=0;i<=10;i++){this.playerList[i].name=_NameConstants2.default[index][i];}}},{key:'setDesign',value:function setDesign(index){this.currentDesignIndex=index;for(var i=0;i<=10;i++){this.playerList[i].design=index;}}},{key:'setPlayerName',value:function setPlayerName(i,newName){this.playerList[i].name=newName;}},{key:'setPlayerPosition',value:function setPlayerPosition(i,newPosition){this.playerList[i].position=newPosition;}},{key:'getBackgroundImage',value:function getBackgroundImage(){switch(this.currentDesignIndex){case 0:return _Loader.IMG.B01;break;case 1:return _Loader.IMG.B02;break;case 2:return _Loader.IMG.B03;break;}}}]);return Canvas;}();exports.default=Canvas;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var FW=exports.FW='FW';var MF=exports.MF='MF';var DF=exports.DF='DF';var CF=exports.CF='CF';var GK=exports.GK='GK';

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
module.exports = __webpack_require__(15);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _Manager=__webpack_require__(10);var _Manager2=_interopRequireDefault(_Manager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}document.addEventListener('DOMContentLoaded',function(){new _Manager2.default();});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _Formation=__webpack_require__(5);var _Formation2=_interopRequireDefault(_Formation);var _UiControls=__webpack_require__(14);var _UiControls2=_interopRequireDefault(_UiControls);var _Canvas=__webpack_require__(6);var _Canvas2=_interopRequireDefault(_Canvas);var _Loader=__webpack_require__(3);var _Loader2=_interopRequireDefault(_Loader);var _Model=__webpack_require__(1);var _Model2=_interopRequireDefault(_Model);var _StateConstants=__webpack_require__(0);var STATE=_interopRequireWildcard(_StateConstants);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Manager=function(){function Manager(){_classCallCheck(this,Manager);this.initStates();this.init();}_createClass(Manager,[{key:'initStates',value:function initStates(){var _this=this;this.states={loaded:function loaded(){_this.formation=new _Formation2.default(_this);_this.canvas=new _Canvas2.default();_this.canvas.init(_this,_this.model.currentFormation,_this.model.currentDesign);},formation:function formation(){var newFormationIndex=_this.formation.currentFormation;_this.model.currentFormation=newFormationIndex;_this.canvas.setFormation(newFormationIndex);},design:function design(){_this.canvas.setDesign(_this.model.currentDesign);},team:function team(){_this.canvas.setTeam(_this.model.currentTeam);},playerSelect:function playerSelect(){_this.ui.changeSelectedPlayer(_this.selectedPlayerName,_this.selectedPlayerPosition);},playerRename:function playerRename(){_this.canvas.setPlayerName(_this.selectedPlayerIndex,_this.ui.playerInputValue);},playerPosition:function playerPosition(){_this.canvas.setPlayerPosition(_this.selectedPlayerIndex,_this.ui.playerPositionValue);}};}},{key:'init',value:function init(){this.model=new _Model2.default(this);this.loader=new _Loader2.default(this);this.ui=new _UiControls2.default(this);}},{key:'setState',value:function setState(stateName){var inputState=this.states[stateName];inputState();}},{key:'setSelectedPlayer',value:function setSelectedPlayer(playerIndex,playerName,playerPosition){this.selectedPlayerIndex=playerIndex;this.selectedPlayerName=playerName;this.selectedPlayerPosition=playerPosition;}}]);return Manager;}();exports.default=Manager;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _PositionConstants=__webpack_require__(7);var PositionConstants=_interopRequireWildcard(_PositionConstants);var _DesignConstants=__webpack_require__(2);var Designlist=_interopRequireWildcard(_DesignConstants);var _Model=__webpack_require__(1);var _Model2=_interopRequireDefault(_Model);var _Loader=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Player=function(){function Player(){_classCallCheck(this,Player);this.design=0;}_createClass(Player,[{key:'setup',value:function setup(){this.isSelected;this.ctx=document.getElementById('canvas').getContext('2d');this.select=false;}},{key:'updatePosition',value:function updatePosition(){this.left=this.xAxis;this.right=this.xAxis+190;this.top=this.yAxis;this.bottom=this.yAxis+125;}},{key:'draw',value:function draw(){if(this.isSelected){this.ctx.fillStyle='rgba(244,45,30,0.65)';this.ctx.fillRect(this.xAxis,this.yAxis,190,125);;}this.ctx.fillStyle='#ffff';this.ctx.fillRect(this.xAxis,this.yAxis+50,190,75);this.ctx.font='30px sans-serif';this.ctx.textBaseline='middle';this.ctx.textAlign='center';this.ctx.fillStyle='#292b2e';this.ctx.fillText(this.name,this.xAxis+95,this.yAxis+87,190,85);this.ctx.fillStyle=this.getTagColor(this.position);this.ctx.fillRect(this.xAxis+137,this.yAxis+10,52,40);this.ctx.font='23px sans-serif';this.ctx.fillStyle='#ffffff';this.ctx.fillText(this.position,this.xAxis+163,this.yAxis+30);var uniform=this.getUniform();this.ctx.drawImage(uniform,this.xAxis+60,this.yAxis,70,70);this.playerNumber=this.index+1;this.ctx.font='bold 24px sans-serif';this.ctx.fillStyle='#ffffff';this.ctx.textAlign='center';this.ctx.strokeStyle='#000';this.ctx.lineWidth=4;this.ctx.strokeText(this.playerNumber,this.xAxis+94,this.yAxis+30);this.ctx.fillText(this.playerNumber,this.xAxis+94,this.yAxis+30);if(this.isSelected){this.ctx.strokeStyle='#f42d1f';this.ctx.lineWidth=3;this.ctx.strokeRect(this.xAxis,this.yAxis,190,125);}}},{key:'getTagColor',value:function getTagColor(position){switch(position){case PositionConstants.GK:return'#7a4cc4';break;case PositionConstants.DF:return'#1da1f2';break;case PositionConstants.MF:return'#1fb74f';break;case PositionConstants.CF:return'#1a9c43';break;case PositionConstants.FW:return'#da235a';break;}}},{key:'setDesign',value:function setDesign(index){this.currentDesignIndex=index;}},{key:'getUniform',value:function getUniform(position){if(this.position===PositionConstants.GK){switch(this.design){case 0:return _Loader.IMG.K01;break;case 1:return _Loader.IMG.K02;break;case 2:return _Loader.IMG.K03;break;}}else{switch(this.design){case 0:return _Loader.IMG.P01;break;case 1:return _Loader.IMG.P02;break;case 2:return _Loader.IMG.P03;break;}}}}]);return Player;}();exports.default=Player;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _PositionConstants=__webpack_require__(7);var PositionConstants=_interopRequireWildcard(_PositionConstants);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}exports.default=[[[50,250,PositionConstants.GK],[270,40,PositionConstants.DF],[270,185,PositionConstants.DF],[270,325,PositionConstants.DF],[270,470,PositionConstants.DF],[500,250,PositionConstants.MF],[720,140,PositionConstants.MF],[720,380,PositionConstants.MF],[950,40,PositionConstants.FW],[950,250,PositionConstants.FW],[950,470,PositionConstants.FW]],[[50,250,PositionConstants.GK],[270,40,PositionConstants.DF],[270,185,PositionConstants.DF],[270,325,PositionConstants.DF],[270,470,PositionConstants.DF],[500,185,PositionConstants.MF],[500,325,PositionConstants.MF],[720,40,PositionConstants.MF],[720,470,PositionConstants.MF],[950,185,PositionConstants.FW],[950,325,PositionConstants.FW]],[[50,250,PositionConstants.GK],[270,40,PositionConstants.DF],[270,250,PositionConstants.DF],[270,470,PositionConstants.DF],[500,185,PositionConstants.MF],[500,325,PositionConstants.MF],[720,140,PositionConstants.MF],[720,380,PositionConstants.MF],[950,40,PositionConstants.FW],[950,250,PositionConstants.FW],[950,470,PositionConstants.FW]],[[50,250,PositionConstants.GK],[270,40,PositionConstants.DF],[270,250,PositionConstants.DF],[270,470,PositionConstants.DF],[500,250,PositionConstants.MF],[612,40,PositionConstants.MF],[720,185,PositionConstants.MF],[720,325,PositionConstants.MF],[612,470,PositionConstants.MF],[950,185,PositionConstants.FW],[950,325,PositionConstants.FW]],[[50,250,PositionConstants.GK],[270,40,PositionConstants.DF],[270,185,PositionConstants.DF],[270,325,PositionConstants.DF],[270,470,PositionConstants.DF],[500,185,PositionConstants.MF],[500,325,PositionConstants.MF],[720,40,PositionConstants.MF],[720,250,PositionConstants.MF],[720,470,PositionConstants.MF],[950,250,PositionConstants.FW]],[[50,100,PositionConstants.GK],[50,250,PositionConstants.GK],[50,410,PositionConstants.GK],[500,40,PositionConstants.MF],[500,185,PositionConstants.MF],[500,325,PositionConstants.MF],[500,470,PositionConstants.MF],[850,100,PositionConstants.FW],[720,250,PositionConstants.FW],[850,410,PositionConstants.FW],[980,250,PositionConstants.FW]]];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=[['Kawashima','Sakai','Makino','Ueda','Nagatomo','Hasebe','Yamaguchi','Honda','Kubo','Harguchi','Osako'],['Lloris','Sidibe','Varane','Umtiti','Kurzawa','Kante','Rabiot','Pogba','Griezmann','Mbappe','Lemar'],['Courtois','Meunier','Alderweireld','Vertonghen','Lukaku','De Bruyne','Dembele','Nainggolan','Mertens','Hazard','Lukaku']];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _Util=__webpack_require__(4);var _Util2=_interopRequireDefault(_Util);var _Model=__webpack_require__(1);var _Model2=_interopRequireDefault(_Model);var _StateConstants=__webpack_require__(0);var STATE=_interopRequireWildcard(_StateConstants);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Ui=function(){function Ui(manager){_classCallCheck(this,Ui);this.$playerInput=document.getElementById('rename-input');this.$positionDropdown=document.getElementById('position-dropdown');this.$positionDropdownInput=document.getElementById('position-dropdown-input');this.playerPositionValue;this.playerInputValue;this.tabs(this);this.positionDropdownButton(this);this.updateText(this);this.positionButtonClick(this);this.manager=manager;}_createClass(Ui,[{key:'tabs',value:function tabs(that){this.$tab=document.querySelectorAll('.tabs__tab');this.$menu_drawer=document.getElementById('menu-drawer');for(var i=0;i<this.$tab.length;i++){this.$tab[i].onclick=function(){var tabNumber=this.dataset.tabindex;that.tabClick(tabNumber,this);};}}},{key:'positionButtonClick',value:function positionButtonClick(that){this.$positionButton=document.querySelectorAll('.player-info__dropdown__input__option');for(var i=0;i<this.$positionButton.length;i++){this.$positionButton[i].onclick=function(){var selectPosition=this.dataset.position;that.playerPositionValue=selectPosition;that.$positionDropdown.innerHTML=selectPosition;that.manager.setState(STATE.CHANGED_POSITION);};}}},{key:'positionDropdownButton',value:function positionDropdownButton(that){this.$positionDropdown.onclick=function(){if(that.$positionDropdownInput.classList.contains('show')){that.$positionDropdownInput.className='player-info__dropdown__input';this.className='player-info__dropdown dropdown';}else{that.$positionDropdownInput.className='player-info__dropdown__input show';this.className='player-info__dropdown dropdown show';}};}},{key:'updateText',value:function updateText(that){window.onkeyup=function(e){e.preventDefault();that.playerInputValue=that.$playerInput.value;that.manager.setState(STATE.RENAME);};}},{key:'tabClick',value:function tabClick(tabNumber,own){_Util2.default.resetClass('tabs__tab');this.$menu_drawer.className='options menu-'+tabNumber+'-open';own.classList.add('active');}},{key:'changeSelectedPlayer',value:function changeSelectedPlayer(playerName,playerPosition){this.$positionDropdownInput.className='player-info__dropdown__input';this.$playerInput.value='';_Util2.default.resetClass('tabs__tab');this.$tab[0].className='tabs__tab active';this.$menu_drawer.className='options menu-1-open';this.$playerInput.placeholder=playerName;this.$positionDropdown.innerHTML=playerPosition;}}]);return Ui;}();exports.default=Ui;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearfix":"clearfix","menu":"menu","tabs":"tabs","tabs__tab":"tabs__tab","tabsTab":"tabs__tab","active":"active","button":"button","label":"label","input":"input","dropdown":"dropdown","options":"options","menu-1-open":"menu-1-open","menu1Open":"menu-1-open","player-info":"player-info","playerInfo":"player-info","formation-info":"formation-info","formationInfo":"formation-info","design-options":"design-options","designOptions":"design-options","menu-2-open":"menu-2-open","menu2Open":"menu-2-open","menu-3-open":"menu-3-open","menu3Open":"menu-3-open","options__tab":"options__tab","optionsTab":"options__tab","player-info__dropdown":"player-info__dropdown","playerInfoDropdown":"player-info__dropdown","player-info__dropdown__wrapper":"player-info__dropdown__wrapper","playerInfoDropdownWrapper":"player-info__dropdown__wrapper","player-info__dropdown__input":"player-info__dropdown__input","playerInfoDropdownInput":"player-info__dropdown__input","player-info__dropdown__input__option":"player-info__dropdown__input__option","playerInfoDropdownInputOption":"player-info__dropdown__input__option","show":"show","player-info__input":"player-info__input","playerInfoInput":"player-info__input","country-list__option":"country-list__option","countryListOption":"country-list__option","design-list__option":"design-list__option","designListOption":"design-list__option","formation-list__option":"formation-list__option","formationListOption":"formation-list__option","label--country":"label--country","labelCountry":"label--country","design-button-1":"design-button-1","designButton1":"design-button-1","design-button-2":"design-button-2","designButton2":"design-button-2","design-button-3":"design-button-3","designButton3":"design-button-3","country-button-1":"country-button-1","countryButton1":"country-button-1","country-button-2":"country-button-2","countryButton2":"country-button-2","country-button-3":"country-button-3","countryButton3":"country-button-3"};

/***/ })
/******/ ]);