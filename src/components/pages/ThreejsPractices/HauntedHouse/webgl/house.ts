// three
import * as THREE from 'three';

export default class House {
    private _group: THREE.Group;

    constructor(textureLoader: THREE.TextureLoader) {
        this._group = new THREE.Group();

        this._initWall(textureLoader);
        this._initRoof(textureLoader);
        this._initDoor(textureLoader);
        this._createDoorLight();
    }

    private _initWall(textureLoader: THREE.TextureLoader) {
        const geometry = new THREE.BoxGeometry(4, 2.5, 4);
        const material = new THREE.MeshStandardMaterial({
            map: textureLoader.load('/threejs-practices/textures/textures/wall/rough_block_wall_1k/wall_diff_1k.jpg', this._onLoadColorTexture),
            aoMap: textureLoader.load('/threejs-practices/textures/textures/wall/rough_block_wall_1k/wall_arm_1k.jpg'),
            roughnessMap: textureLoader.load('/threejs-practices/textures/textures/wall/rough_block_wall_1k/wall_arm_1k.jpg'),
            metalnessMap: textureLoader.load('/threejs-practices/textures/textures/wall/rough_block_wall_1k/wall_arm_1k.jpg'),
            normalMap: textureLoader.load('/threejs-practices/textures/textures/wall/rough_block_wall_1k/wall_nor_gl_1k.jpg'),
        });

        const wall = new THREE.Mesh(geometry, material);
        wall.castShadow = true;
        wall.receiveShadow = true;

        this._group.add(wall);
    }

    private _initRoof(textureLoader: THREE.TextureLoader) {
        const geometry = new THREE.ConeGeometry(4, 1.5, 4);
        const material = new THREE.MeshStandardMaterial({
            color: '#6c5343',
            map: textureLoader.load('/threejs-practices/textures/textures/roof/clay_roof_tiles_03_1k/roof_diff_1k.jpg', texture => {
                this._onLoadColorTexture(texture);
                this._onLoadRoofTexture(texture);
            }),
            aoMap: textureLoader.load('/threejs-practices/textures/textures/roof/clay_roof_tiles_03_1k/roof_arm_1k.jpg', this._onLoadRoofTexture),
            roughnessMap: textureLoader.load('/threejs-practices/textures/textures/roof/clay_roof_tiles_03_1k/roof_arm_1k.jpg', this._onLoadRoofTexture),
            metalnessMap: textureLoader.load('/threejs-practices/textures/textures/roof/clay_roof_tiles_03_1k/roof_arm_1k.jpg', this._onLoadRoofTexture),
            normalMap: textureLoader.load('/threejs-practices/textures/textures/roof/clay_roof_tiles_03_1k/roof_nor_gl_1k.jpg', this._onLoadRoofTexture),
        });

        const roof = new THREE.Mesh(geometry, material);
        roof.castShadow = true;
        roof.position.set(0, 1.25 + 0.75, 0);
        roof.rotation.y = Math.PI * 0.25;

        this._group.add(roof);
    }

    private _initDoor(textureLoader: THREE.TextureLoader) {
        const geometry = new THREE.PlaneGeometry(2.5, 2.5, 100, 100);
        const material = new THREE.MeshStandardMaterial({
            transparent: true,
            alphaMap: textureLoader.load('/threejs-practices/textures/textures/door/door_alpha.jpg'),
            map: textureLoader.load('/threejs-practices/textures/textures/door/door_color.jpg', this._onLoadColorTexture),
            aoMap: textureLoader.load('/threejs-practices/textures/textures/door/door_ambientOcclusion.jpg'),
            roughnessMap: textureLoader.load('/threejs-practices/textures/textures/door/door_ambientOcclusion.jpg'),
            metalnessMap: textureLoader.load('/threejs-practices/textures/textures/door/door_metalness.jpg'),
            normalMap: textureLoader.load('/threejs-practices/textures/textures/door/door_normal.jpg'),
            displacementMap: textureLoader.load('/threejs-practices/textures/textures/door/door_height.jpg'),
            displacementScale: 0.1,
            displacementBias: -0.02,
        });

        const door = new THREE.Mesh(geometry, material);
        door.receiveShadow = true;
        door.position.set(0, -0.1, 2.0001);

        this._group.add(door);
    }

    private _createDoorLight() {
        const light = new THREE.PointLight('#fffe40', 5);
        light.castShadow = true;
        light.position.set(0, 1.2, 2.2);

        // debug
        // const helper = new THREE.PointLightHelper(light);
        // this._group.add(helper);

        this._group.add(light);
    }

    private _onLoadColorTexture(texture: THREE.Texture) {
        texture.colorSpace = THREE.SRGBColorSpace;
    }

    private _onLoadRoofTexture(texture: THREE.Texture) {
        texture.repeat.x = 2.5;
        texture.repeat.y = 2.5;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
    }

    get mesh() {
        return this._group;
    }
}