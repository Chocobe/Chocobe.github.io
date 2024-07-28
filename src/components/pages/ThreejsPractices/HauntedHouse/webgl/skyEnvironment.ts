// three
import * as THREE from 'three';
// three - addons
import { Sky } from 'three/examples/jsm/Addons.js';

export default class SkyEnvironment {
    private _mesh: Sky;

    constructor() {
        const sky = new Sky();
        sky.scale.setScalar( 450000 );

        const phi = THREE.MathUtils.degToRad( 90 );
        const theta = THREE.MathUtils.degToRad( 180 );
        const sunPosition = new THREE.Vector3().setFromSphericalCoords( 1, phi, theta );

        sky.material.uniforms.sunPosition.value = sunPosition;

        this._mesh = sky;
    }

    get mesh() {
        return this._mesh;
    }
}
