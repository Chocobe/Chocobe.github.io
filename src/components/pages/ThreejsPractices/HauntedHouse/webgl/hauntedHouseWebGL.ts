// three
import BaseWebGL, {
    TBaseWebGLConfig,
} from '../../ThreejsPracticesPageTemplate/BaseWebGL';
import * as THREE from 'three';
// three - addons
import {
    OrbitControls,
} from 'three/addons/controls/OrbitControls.js';
import { 
    Timer,
} from 'three/examples/jsm/Addons.js';
// mesh
import MainLight from './mainLight';
import Floor from './floor';
import House from './house';
import Graves from './graves';
import SkyEnvironment from './skyEnvironment';
import Ghosts from './ghosts';

export default class HauntedHouseWegGL extends BaseWebGL {
    private _renderer: THREE.WebGLRenderer;
    private _scene: THREE.Scene;
    private _camera: THREE.PerspectiveCamera;
    private _controls: OrbitControls;
    private _timer: Timer;

    private _textureLoader: THREE.TextureLoader;
    private _mainLight: MainLight;

    private _floor: Floor;
    private _house: House;
    private _graves: Graves;
    private _skyEnvironment: SkyEnvironment;
    private _ghosts: Ghosts;

    protected _config: TBaseWebGLConfig;

    constructor($canvas: HTMLCanvasElement) {
        super($canvas);

        this._config = this._createInitialBaseConfig();
        const {
            size: {
                width,
                height,
            },
        } = this._config;

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
        camera.position.set(7, 5, 15);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();

        this._camera = camera;

        // controls
        const controls = new OrbitControls(camera, $canvas);
        controls.enableDamping = true;

        this._controls = controls;

        // timer
        this._timer = new Timer();

        // renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: $canvas,
        });
        renderer.pixelRatio = Math.min(window.devicePixelRatio, 2);
        renderer.setSize(width, height);
        renderer.shadowMap.enabled = true;

        this._renderer = renderer;

        this._initResize();

        this._textureLoader = new THREE.TextureLoader();
        this._mainLight = this._createMainLight();

        this._floor = this._createFloor();
        this._house = this._createHouse();
        this._graves = this._createGraves();
        this._skyEnvironment = this._createSkyEnvironment();
        this._ghosts = this._createGhosts();
    }

    private _resize() {
        const {
            _renderer: renderer,
            _camera: camera,
        } = this;

        if (this._config.resizeTimeoutID) {
            window.clearTimeout(this._config.resizeTimeoutID);
        }

        this._config.resizeTimeoutID = setTimeout(() => {
            const {
                width,
                height,
            } = this._getSize();

            renderer.pixelRatio = Math.min(window.devicePixelRatio, 2);
            renderer.setSize(width, height);

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            this._config.resizeTimeoutID = null;
        }, 500);
    }

    private _initResize() {
        window.addEventListener('resize', this._resize.bind(this));
    }

    private _createMainLight() {
        const mainLight = new MainLight();

        this._scene.add(mainLight.ambientLight);
        this._scene.add(mainLight.directionalLight);

        // shadow debug
        // const shadowCamera = mainLight.directionalLight.shadow.camera;
        // this._scene.add(new THREE.CameraHelper(shadowCamera));

        return mainLight;
    }

    private _createFloor() {
        const floor = new Floor(this._textureLoader);
        this._scene.add(floor.mesh);

        return floor;
    }

    private _createHouse() {
        const house = new House(this._textureLoader);
        house.mesh.position.set(0, 1.25, 0);

        this._scene.add(house.mesh);

        return house;
    }

    private _createGraves() {
        const graves = new Graves(this._textureLoader);

        this._scene.add(graves.mesh);

        return graves;
    }

    private _createSkyEnvironment() {
        const skyEnvironment = new SkyEnvironment();

        this._scene.add(skyEnvironment.mesh);

        return skyEnvironment;
    }

    private _createGhosts() {
        const ghosts = new Ghosts();

        this._scene.add(ghosts.mesh);

        return ghosts;
    }

    protected override tick() {
        window.requestAnimationFrame(this.tick.bind(this));

        const elapsedTime = this._timer.getElapsed();

        // ghosts
        this._ghosts.animateGhosts(elapsedTime);

        this._timer.update();
        this._controls.update();
        this._renderer.render(this._scene, this._camera);
    }

    override run() {
        this.tick();
    }

    dispose() {
        window.removeEventListener('resize', this._initResize);
    }
}
