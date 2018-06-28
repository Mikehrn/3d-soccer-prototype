'use strict';
import * as THREE from 'three';
import {TEXTURE_STREET as TEXTURE_STREET} from './../Loader';
import {OBJECT_STREET as OBJECT_STREET} from './../Loader';

export default class SceneStreet {
  constructor() {
    this.scene = new THREE.Scene();
    this.gridHelper = new THREE.GridHelper(240,20);
    this.scene.add(this.gridHelper);
    this.initModels();
    this.initLights();
    this.initBackground();
  }

  initLights() {
    this.ambientLight = new THREE.AmbientLight(0x404040, 1.25);
    this.ambientLight.position.set(0, 100, 0);
    this.scene.add(this.ambientLight);

    this.pointLight = new THREE.PointLight(0xFFFFFF, 0.45);
    this.pointLight.position.set(200, 200, -60);
    this.pointLight.castShadow = true;
    this.scene.add(this.pointLight);
  }

  initBackground() {
    const SPHERE_GEOMETRY = new THREE.SphereGeometry( 500, 60, 40 )
    const SPHERE_MATERIAL = new THREE.MeshBasicMaterial({
      map: TEXTURE_STREET.BACKGROUND,
      side: THREE.DoubleSide
    })
    this.background = new THREE.Mesh(SPHERE_GEOMETRY, SPHERE_MATERIAL);
    this.background.scale.set( -1, 1, 1 );
    this.background.position.set( 0, 0, 0 )
    this.scene.add(this.background);
  }

  initModels() {
    this.modelField();
    this.modelRoads();
    this.modelWalls();
    this.modelFences();
    this.modelBall();
    this.modelCones();
    this.modelBenches();
  }

  modelField() {
    const FIELD_GEOMETRY = new THREE.BoxGeometry(240, 2, 170);
    const FIELD_MATERIAL = new THREE.MeshLambertMaterial({map: TEXTURE_STREET.FIELD});
    this.field = new THREE.Mesh(FIELD_GEOMETRY, FIELD_MATERIAL);
    this.field.receiveShadow = true;
    this.scene.add(this.field);
  }

  modelRoads() {
    const ROAD_GEOMETRY = new THREE.BoxGeometry(280, 2, 40);
    const ROAD_MATERIAL = new THREE.MeshBasicMaterial( {map: TEXTURE_STREET.ROAD} );
    this.road = new THREE.Mesh(ROAD_GEOMETRY, ROAD_MATERIAL);
    this.road.position.set(-20, 0, 105);
    this.road.receiveShadow = true;
    this.scene.add(this.road);
  }

  modelWalls() {
    const WALL01_GEOMETRY = new THREE.BoxGeometry(240, 50, 2);
    const WALL01_MATERIAL = new THREE.MeshLambertMaterial({map: TEXTURE_STREET.WALL_01})
    this.wall01 = new THREE.Mesh(WALL01_GEOMETRY, WALL01_MATERIAL);
    this.wall01.position.set(0, 25, -85);
    this.wall01.receiveShadow = true;
    this.wall01.castShadow = true;
    this.scene.add(this.wall01);

    const WALL02_GEOMETRY = new THREE.BoxGeometry(2, 50, 172);
    const WALL02_MATERIAL = new THREE.MeshLambertMaterial({map: TEXTURE_STREET.WALL_02})
    this.wall02 = new THREE.Mesh(WALL02_GEOMETRY, WALL02_MATERIAL);
    this.wall02.position.set(-120, 25, 0);
    this.wall02.receiveShadow = true;
    this.wall02.castShadow = true;
    this.scene.add(this.wall02);

    const WALL03_GEOMETRY = new THREE.BoxGeometry(40, 50, 2);
    const WALL03_MATERIAL = new THREE.MeshLambertMaterial({map: TEXTURE_STREET.WALL_03})
    this.wall03 = new THREE.Mesh(WALL03_GEOMETRY, WALL03_MATERIAL);
    this.wall03.position.set(-140, 25, 85);
    this.wall03.receiveShadow = true;
    this.wall03.castShadow = true;
    this.scene.add(this.wall03);
  }

  modelFences() {
    let fenceMaterial = new THREE.MeshPhongMaterial({color: "#fff", transparent: true, alphaTest: 0});
    let fence02_alphamap = TEXTURE_STREET.FENCE_02;
    fenceMaterial.alphaMap = fence02_alphamap;
    fenceMaterial.alphaMap.magFilter = THREE.NearestFilter;
    fenceMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
    fenceMaterial.alphaMap.repeat.y = 1;

    const FENCE02_GEOMETERY = new THREE.BoxGeometry(1, 24, 50);
    this.fence02 = new THREE.Mesh(FENCE02_GEOMETERY, fenceMaterial);
    this.fence02.position.set(-115, 12, 0);
    this.fence02.rotation.set(0, 0, 9.85);
    this.fence02.receiveShadow = true;
    this.fence02.castShadow = true;
    this.scene.add(this.fence02);


    let fence01_alphamap = TEXTURE_STREET.FENCE_01;
    fenceMaterial.alphaMap = fence01_alphamap;
    fenceMaterial.alphaMap.magFilter = THREE.NearestFilter;
    fenceMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
    fenceMaterial.alphaMap.repeat.y = 1;

    const FENCE01_GEOMETERY = new THREE.BoxGeometry(1, 24, 170);
    this.fence01 = new THREE.Mesh(FENCE01_GEOMETERY, fenceMaterial);
    this.fence01.position.set(120, 12, 0);
    this.fence01.receiveShadow = true;
    this.fence01.castShadow = true;
    this.scene.add(this.fence01);
  }

  modelBall() {
    this.ball = OBJECT_STREET.CONE;
    this.ball.traverse(function(node) {
      if (node instanceof THREE.Mesh) {
        node.castShadow = true;
      }
    });

    this.scene.add(this.ball);
    this.ball.scale.set(2,2,2);
    this.ball.position.set(-105,-23,-10);
  }

  modelCones() {
    this.cone01 = OBJECT_STREET.CONE;
    this.cone01.traverse(function(node) {
      if (node instanceof THREE.Mesh) {
        node.castShadow = true;
      }
    });

    this.cone01.scale.set(4,4,4);
    this.cone01.position.set(-100,1,-22);
    this.scene.add(this.cone01);
    
    this.cone02 = this.cone01.clone();
    this.cone02.position.set(-102,1,22);
    this.cone02 .scale.set(4,4,4);
    this.scene.add(this.cone02);
    
    this.cone03 = this.cone01.clone();
    this.cone03.scale.set(4,4,4);
    this.cone03.position.set(101,1,22);
    this.scene.add(this.cone03);

    this.cone04 = this.cone01.clone();
    this.cone04.scale.set(4,4,4);
    this.cone04.position.set(104,1,-22);
    this.scene.add(this.cone04);
  }

  modelBenches() {
    this.bench01 = OBJECT_STREET.BENCH;
    this.bench01.traverse(function(node) {
      if (node instanceof THREE.Mesh) {
        node.castShadow = true;
      }
    });

    this.bench01.scale.set(0.35,0.35,0.35);
    this.bench01.position.set(40,7.85,73);
    this.bench01.rotation.set(0,9.5,0);
    this.scene.add(this.bench01);

    this.bench02 = this.bench01.clone();
    this.bench02.position.set(-54,7.85,73);
    this.bench02.rotation.set(0,9.3,0);
    this.scene.add(this.bench02);
  }
}