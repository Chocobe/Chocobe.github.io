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
        const light = new THREE.AmbientLight('#fff', 1);

        return light;
    }

    private _createDirectionalLight() {
        const light = new THREE.DirectionalLight('#fff', 3);

        return light;
    }

    get ambientLight() {
        return this._ambientLight;
    }

    get directionalLight() {
        return this._directionalLight;
    }
}