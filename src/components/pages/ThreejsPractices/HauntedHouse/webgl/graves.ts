// three
import * as THREE from 'three';

export default class Graves {
    private _group: THREE.Group;
    private _textureLoader: THREE.TextureLoader;

    private _config: {
        numOfGraves: number;
        minBoundaryRadius: number;
        maxBoundaryRadius: number;
        geometry: THREE.BoxGeometry | null;
        material: THREE.MeshStandardMaterial | null;
    } = {
        numOfGraves: 30,
        minBoundaryRadius: 5,
        maxBoundaryRadius: 8,
        geometry: null,
        material: null,
    } as const;

    constructor(textureLoader: THREE.TextureLoader) {
        this._textureLoader = textureLoader;
        this._config.geometry = this._createGeometry();
        this._config.material = this._createMaterial(textureLoader);
        this._group = this._createGraves();
    }

    private _createGeometry() {
        return new THREE.BoxGeometry(0.5, 1, 0.25);
    }

    private _createMaterial(textureLoader: THREE.TextureLoader) {
        return new THREE.MeshStandardMaterial({
            map: textureLoader.load('/threejs-practices/textures/textures/grave/lichen_rock_1k/grave_diff_1k.jpg', texture => {
                texture.colorSpace = THREE.SRGBColorSpace;
            }),
            aoMap: textureLoader.load('/threejs-practices/textures/textures/grave/lichen_rock_1k/grave_arm_1k.jpg'),
            roughnessMap: textureLoader.load('/threejs-practices/textures/textures/grave/lichen_rock_1k/grave_arm_1k.jpg'),
            metalnessMap: textureLoader.load('/threejs-practices/textures/textures/grave/lichen_rock_1k/grave_arm_1k.jpg'),
            normalMap: textureLoader.load('/threejs-practices/textures/textures/grave/lichen_rock_1k/grave_nor_gl_1k.jpg'),
        });
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

        const grave = new THREE.Mesh(geometry!, material!);
        grave.castShadow = true;
        grave.receiveShadow = true;

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