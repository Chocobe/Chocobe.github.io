// three
import * as THREE from 'three';

export default class House {
    private _group: THREE.Group;

    constructor() {
        this._group = new THREE.Group();

        this._initWall();
        this._initRoof();
        this._initDoor();
    }

    private _initWall() {
        const geometry = new THREE.BoxGeometry(4, 2.5, 4);
        const material = new THREE.MeshStandardMaterial();

        const wall = new THREE.Mesh(geometry, material);

        this._group.add(wall);
    }

    private _initRoof() {
        const geometry = new THREE.ConeGeometry(4, 1.5, 4);
        const material = new THREE.MeshStandardMaterial();

        const roof = new THREE.Mesh(geometry, material);
        roof.position.set(0, 1.25 + 0.75, 0);
        roof.rotation.y = Math.PI * 0.25;

        this._group.add(roof);
    }

    private _initDoor() {
        const geometry = new THREE.PlaneGeometry(2.5, 2.5);
        const material = new THREE.MeshStandardMaterial({
            color: '#ff1483',
        });

        const door = new THREE.Mesh(geometry, material);
        door.position.set(0, 0, 2.0001);

        this._group.add(door);
    }

    get mesh() {
        return this._group;
    }
}