// three
import * as THREE from 'three';
// three - addons
import {
    OrbitControls,
} from 'three/addons/controls/OrbitControls.js';
// mesh
import MainLight from './mainLight';
import Floor from './floor';
import House from './house';
import Graves from './graves';

export default class HauntedHouseWegGL {
    private _$parent: HTMLElement;

    private _renderer: THREE.WebGLRenderer;
    private _scene: THREE.Scene;
    private _camera: THREE.PerspectiveCamera;
    private _controls: OrbitControls;

    private _config: {
        size: {
            width: number;
            height: number;
        };
        resizeTimeoutId: ReturnType<typeof setTimeout> | null;
    };

    private _mainLight: MainLight;

    private _floor: Floor;
    private _house: House;
    private _graves: Graves;

    constructor($canvas: HTMLCanvasElement) {
        if (!$canvas?.parentElement) {
            throw new Error('can not access parentElement');
        }

        // $parent
        this._$parent = $canvas.parentElement;

        // config.size
        const {
            width,
            height,
        } = $canvas.parentElement.getBoundingClientRect();

        this._config = {
            size: {
                width,
                height,
            },
            resizeTimeoutId: null,
        };

        // scene
        this._scene = new THREE.Scene();
        this._scene.background = new THREE.Color('#000');
        // this.scene.add(new THREE.AxesHelper());

        // camera
        const camera = new THREE.PerspectiveCamera();
        camera.fov = 45;
        camera.aspect = width / height;
        camera.near = 1;
        camera.far = 2000;
        camera.position.set(10, 7.5, 15);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();

        this._camera = camera;

        // controls
        const controls = new OrbitControls(camera, $canvas);
        controls.enableDamping = true;

        this._controls = controls;

        // renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: $canvas,
        });
        renderer.pixelRatio = Math.min(window.devicePixelRatio, 2);
        renderer.setSize(width, height);

        this._renderer = renderer;

        this._initResize();

        this._mainLight = this._createMainLight();

        this._floor = this._createFloor();
        this._house = this._createHouse();
        this._graves = this._createGraves();
    }

    private _resize() {
        const {
            _$parent: $parent,
            _renderer: renderer,
            _camera: camera,
        } = this;

        if (this._config.resizeTimeoutId) {
            window.clearTimeout(this._config.resizeTimeoutId);
        }

        this._config.resizeTimeoutId = setTimeout(() => {
            const {
                width,
                height,
            } = $parent.getBoundingClientRect();

            renderer.pixelRatio = Math.min(window.devicePixelRatio, 2);
            renderer.setSize(width, height);

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            this._config.resizeTimeoutId = null;
        }, 500);
    }

    private _initResize() {
        window.addEventListener('resize', this._resize.bind(this));
    }

    private _createMainLight() {
        const mainLight = new MainLight();

        this._scene.add(mainLight.ambientLight);
        this._scene.add(mainLight.directionalLight);

        return mainLight;
    }

    private _createFloor() {
        const floor = new Floor();
        this._scene.add(floor.mesh);

        return floor;
    }

    private _createHouse() {
        const house = new House();
        house.mesh.position.set(0, 1.25, 0);

        this._scene.add(house.mesh);

        return house;
    }

    private _createGraves() {
        const graves = new Graves();

        this._scene.add(graves.mesh);

        return graves;
    }

    private tick() {
        window.requestAnimationFrame(this.tick.bind(this));

        this._controls.update();
        this._renderer.render(this._scene, this._camera);
    }

    run() {
        this.tick();
    }

    dispose() {
        window.removeEventListener('resize', this._initResize);
    }
}
