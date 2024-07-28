// three
import * as THREE from 'three';

export default class MainLight {
    private _ambientLight: THREE.AmbientLight;
    private _directionalLight: THREE.DirectionalLight;

    constructor() {
        this._ambientLight = this._createAmbientLight();
        this._directionalLight = this._createDirectionalLight();
    }

    private _createAmbientLight() {
        const light = new THREE.AmbientLight('#fff', 0.5);

        return light;
    }

    private _createDirectionalLight() {
        const light = new THREE.DirectionalLight('#fff', 3);
        light.position.set(3, 4, -10);
        light.castShadow = true;

        light.shadow.camera.near = 1;
        light.shadow.camera.far = 20;
        light.shadow.camera.top = 4;
        light.shadow.camera.right = 9;
        light.shadow.camera.bottom = -4;
        light.shadow.camera.left = -9;

        return light;
    }

    get ambientLight() {
        return this._ambientLight;
    }

    get directionalLight() {
        return this._directionalLight;
    }
}