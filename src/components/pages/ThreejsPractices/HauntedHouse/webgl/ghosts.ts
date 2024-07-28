// three
import * as THREE from 'three';

export default class Ghosts {
    private _group: THREE.Group;

    constructor() {
        this._group = this._createGhosts();
    }

    private _createGhosts() {
        const group = new THREE.Group();

        group.add(this._createGhost1());
        group.add(this._createGhost2());
        group.add(this._createGhost3());

        return group;
    }

    private _createGhost1() {
        const light = new THREE.PointLight('#ff1493', 7);
        light.name = 'ghost1';
        light.castShadow = true;

        return light;
    }

    private _createGhost2() {
        const light = new THREE.PointLight('#03a9f4', 7);
        light.name = 'ghost2';
        light.castShadow = true;

        return light;
    }

    private _createGhost3() {
        const light = new THREE.PointLight('#00ff00', 7);
        light.name = 'ghost3';
        light.castShadow = true;

        return light;
    }

    animateGhosts(elapsedTime: number) {
        const ghostAngle1 = elapsedTime * 0.5;
        this.ghost1.position.x = Math.cos(ghostAngle1) * 5;
        this.ghost1.position.y = Math.sin(ghostAngle1) * Math.sin(ghostAngle1 * 2.34) + 0.5;
        this.ghost1.position.z = Math.sin(ghostAngle1) * 5;

        const ghostAngle2 = elapsedTime * -0.5;
        this.ghost2.position.x = Math.cos(ghostAngle2) * 6;
        this.ghost2.position.y = Math.sin(ghostAngle2) * Math.sin(ghostAngle2 * 5.5);
        this.ghost2.position.z = Math.sin(ghostAngle2) * 6;

        const ghostAngle3 = elapsedTime * 0.3;
        this.ghost3.position.x = Math.cos(ghostAngle3) * 7;
        this.ghost3.position.y = Math.sin(ghostAngle3) * Math.sin(ghostAngle3);
        this.ghost3.position.z = Math.sin(ghostAngle3) * 7;
    }

    get mesh() {
        return this._group;
    }

    get ghost1() {
        return this._group.getObjectByName('ghost1') as THREE.PointLight;
    }

    get ghost2() {
        return this._group.getObjectByName('ghost2') as THREE.PointLight;
    }

    get ghost3() {
        return this._group.getObjectByName('ghost3') as THREE.PointLight;
    }
}
