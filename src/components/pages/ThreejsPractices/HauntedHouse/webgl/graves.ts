// three
import * as THREE from 'three';

export default class Graves {
    private _group: THREE.Group;

    private _config = {
        numOfGraves: 30,
        minBoundaryRadius: 5,
        maxBoundaryRadius: 8,
        geometry: new THREE.BoxGeometry(0.5, 1, 0.25),
        material: new THREE.MeshStandardMaterial(),
    } as const;

    constructor() {
        this._group = this._createGraves();
    }

    private _createGraves() {
        const group = new THREE.Group();

        Array.from(
            { length: this._config.numOfGraves },
            () => {
                const grave = this._createGraveMesh();

                group.add(grave);
            }
        );

        return group;
    }

    private _createGraveMesh() {
        const {
            minBoundaryRadius,
            maxBoundaryRadius,
            geometry,
            material,
        } = this._config;

        const radius = minBoundaryRadius
            + Math.random() * (maxBoundaryRadius - minBoundaryRadius);

        const angle = Math.PI * 2 * Math.random();

        const grave = new THREE.Mesh(geometry, material);

        grave.position.x = Math.cos(angle) * radius;
        grave.position.y = 0.5 * Math.random();
        grave.position.z = Math.sin(angle) * radius;

        grave.rotation.x = (Math.PI * (10 / 180)) * (Math.random() * 2 - 1);

        return grave;
    }

    get mesh() {
        return this._group;
    }
}