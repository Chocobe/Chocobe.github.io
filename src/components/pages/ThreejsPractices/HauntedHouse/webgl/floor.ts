// three
import * as THREE from 'three';

export default class Floor {
    private _mesh: THREE.Mesh;

    constructor(textureLoader: THREE.TextureLoader) {
        this._mesh = this._createFloor(textureLoader);
    }

    private _createFloor(textureLoader: THREE.TextureLoader) {
        const geometry = new THREE.PlaneGeometry(20, 20, 100, 100);
        const material = new THREE.MeshStandardMaterial({
            transparent: true,
            alphaMap: textureLoader.load('/threejs-practices/textures/textures/floor/floor_alpha.jpg'),
            map: textureLoader.load('/threejs-practices/textures/textures/floor/stony_dirt_path_1k/floor_diff_1k.jpg', texture => {
                texture.colorSpace = THREE.SRGBColorSpace;
            }),
            aoMap: textureLoader.load('/threejs-practices/textures/textures/floor/stony_dirt_path_1k/floor_arm_1k.jpg'),
            roughnessMap: textureLoader.load('/threejs-practices/textures/textures/floor/stony_dirt_path_1k/floor_arm_1k.jpg'),
            metalnessMap: textureLoader.load('/threejs-practices/textures/textures/floor/stony_dirt_path_1k/floor_arm_1k.jpg'),
            normalMap: textureLoader.load('/threejs-practices/textures/textures/floor/stony_dirt_path_1k/floor_nor_gl_1k.jpg'),
            displacementMap: textureLoader.load('/threejs-practices/textures/textures/floor/stony_dirt_path_1k/floor_disp_1k.jpg'),
            displacementScale: 0.5,
            displacementBias: -0.25,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.receiveShadow = true;
        mesh.rotation.x -= Math.PI * 0.5;

        return mesh;
    }

    get mesh() {
        return this._mesh;
    }
}
