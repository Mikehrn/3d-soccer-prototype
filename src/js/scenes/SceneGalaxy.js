'use strict';
import * as THREE from 'three';
import {TEXTURE_GALAXY as TEXTURE_GALAXY} from './../Loader';
// import {OBJECT_STREET as OBJECT_STREET} from './../Loader';

export default class SceneGalaxy {
  constructor() {
    this.scene = new THREE.Scene();
    this.gridHelper = new THREE.GridHelper(240,20);
    this.scene.add(this.gridHelper);
    this.initBackground();
    this.initLights();
    this.initModels();
    this.initStart();
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
    const SPHERE_GEOMETRY = new THREE.SphereGeometry(500, 60, 40)
    const SPHERE_MATERIAL = new THREE.MeshBasicMaterial({
      map: TEXTURE_GALAXY.BACKGROUND,
      side: THREE.DoubleSide
    })
    this.background = new THREE.Mesh(SPHERE_GEOMETRY, SPHERE_MATERIAL);
    this.background.scale.set( -1, 1, 1 );
    this.background.position.set( 0, 0, 0 )
    this.scene.add(this.background);
  }

  initStart() {
    const FLAKE_COUNT = 3000;
    const FLAKE_GEOMETRY = new THREE.SphereGeometry(0.1);
    const FLAKE_MATERIAL = new THREE.MeshPhongMaterial({ color: 0xffffff });
    this.snow = new THREE.Group();

    for (let i = 0; i < FLAKE_COUNT; i++) {
      let flakeMesh = new THREE.Mesh(FLAKE_GEOMETRY, FLAKE_MATERIAL);
      flakeMesh.position.set(
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300
      );
      this.snow.add(flakeMesh);
    }
    this.scene.add(this.snow);
    this.animateStars();
  }

  animateStars() {
    requestAnimationFrame(() => { 
      this.snow.rotation.y -= 0.0002;
      this.animateStars();
    });
  }


  initModels() {
    this.modelField();
  }

  modelField() {
    const FIELD_GEOMETRY = new THREE.BoxGeometry(240, 2, 240);
    const FIELD_MATERIAL = new THREE.MeshLambertMaterial({map: TEXTURE_GALAXY.FIELD});
    this.field = new THREE.Mesh(FIELD_GEOMETRY, FIELD_MATERIAL);
    this.field.receiveShadow = true;
    this.scene.add(this.field);
  }
}