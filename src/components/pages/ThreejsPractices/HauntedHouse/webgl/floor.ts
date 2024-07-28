// three
import * as THREE from 'three';

export default class Floor {
    private _mesh: THREE.Mesh;

    constructor() {
        this._mesh = this._createFloor();
    }

    private _createFloor() {
        const geometry = new THREE.PlaneGeometry(20, 20);
        const material = new THREE.MeshStandardMaterial();

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x -= Math.PI * 0.5;

        return mesh;
    }

    get mesh() {
        return this._mesh;
    }
}
