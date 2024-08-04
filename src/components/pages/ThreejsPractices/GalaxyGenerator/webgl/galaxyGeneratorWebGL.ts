// three
import * as THREE from 'three';
import BaseWebGL, {
    TBaseWebGLConfig,
} from '../../ThreejsPracticesPageTemplate/BaseWebGL';
// three - addons
import { 
    OrbitControls,
} from 'three/examples/jsm/Addons.js';
// gui
import GUI from 'lil-gui';
// mesh
import GalaxyParticle from './galaxyParticle';

export default class GalaxyGeneratorWebGL extends BaseWebGL {
    private _renderer: THREE.WebGLRenderer;
    private _scene: THREE.Scene;
    private _camera: THREE.PerspectiveCamera;
    private _axesHelper: THREE.AxesHelper;
    private _controls: OrbitControls;
    private _gui: GUI;

    private _particle: GalaxyParticle;

    protected override _config: TBaseWebGLConfig & {
        helper: {
            showAxes: boolean;
        };
        controls: {
            autoRotate: boolean;
        };
    };

    constructor($canvas: HTMLCanvasElement) {
        super($canvas);

        // config
        this._config = {
            ...super._createInitialBaseConfig(),
            helper: {
                showAxes: false,
            },
            controls: {
                autoRotate: true,
            },
        };

        const {
            size: {
                width,
                height,
            },
        } = this._config;

        // scene
        this._scene = new THREE.Scene();

        // camera
        const camera = new THREE.PerspectiveCamera();
        camera.fov = 45;
        camera.aspect = width / height;
        camera.position.set(-5, 7, 10);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();

        this._camera = camera;

        // axes helper
        this._axesHelper = new THREE.AxesHelper(3);
        this._axesHelper.visible = this._config.helper.showAxes;
        this._scene.add(this._axesHelper);

        // controls
        this._controls = new OrbitControls(camera, $canvas);
        this._controls.enableDamping = true;
        this._controls.autoRotate = this._config.controls.autoRotate;

        // particle
        this._particle = new GalaxyParticle();
        this._scene.add(this._particle.particle);

        // gui
        this._gui = this._createGUI();

        // renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: $canvas,
        });
        renderer.pixelRatio = Math.min(window.devicePixelRatio, 2);
        renderer.setSize(width, height);

        this._renderer = renderer;
    }

    private _createGUI() {
        const gui = new GUI({
            container: this._$parent,
            injectStyles: true,
        });

        const {
            _scene: scene,
            _particle: particle,
        } = this;

        // helper
        const helperGUI = gui.addFolder('Helper');

        helperGUI.add(this._config.helper, 'showAxes').onChange(() => {
            const {
                showAxes,
            } = this._config.helper;

            this._axesHelper.visible = showAxes;
        });

        // controls
        const controlsGUI = gui.addFolder('Controls');

        controlsGUI.add(this._config.controls, 'autoRotate').onChange(() => {
            const {
                autoRotate,
            } = this._config.controls;

            this._controls.autoRotate = autoRotate;
        });

        // galaxyParticle
        const particleGUI = gui.addFolder('Particle');

        // particleGUI.add(particle.config, 'count').min(100).max(50_000).step(100).onFinishChange(() => {
        particleGUI.add(particle.config, 'count').min(100).max(100_000).step(100).onFinishChange(() => {
            scene.remove(particle.particle);

            particle.generateGalaxy();
            scene.add(particle.particle);
        });

        particleGUI.add(particle.config, 'branch').min(2).max(10).step(1).onFinishChange(() => {
            scene.remove(particle.particle);

            particle.generateGalaxy();
            scene.add(particle.particle);
        });

        particleGUI.add(particle.config, 'maxRadius').min(1).max(10).step(0.0001).onFinishChange(() => {
            scene.remove(particle.particle);

            particle.generateGalaxy();
            scene.add(particle.particle);
        });

        particleGUI.add(particle.config, 'spin').min(0).max(2).step(0.0001).onFinishChange(() => {
            scene.remove(particle.particle);

            particle.generateGalaxy();
            scene.add(particle.particle);
        });

        particleGUI.add(particle.config, 'spread').min(0).max(1).step(0.0001).onFinishChange(() => {
            scene.remove(particle.particle);

            particle.generateGalaxy();
            scene.add(particle.particle);
        });

        particleGUI.add(particle.config, 'spreadPower').min(1).max(10).step(0.0001).onFinishChange(() => {
            scene.remove(particle.particle);

            particle.generateGalaxy();
            scene.add(particle.particle);
        });

        particleGUI.addColor(particle.config, 'innerColor').onChange(() =>  {
            scene.remove(particle.particle);

            particle.generateGalaxy();
            scene.add(particle.particle);
        });

        particleGUI.addColor(particle.config, 'outerColor').onChange(() => {
            scene.remove(particle.particle);

            particle.generateGalaxy();
            scene.add(particle.particle);
        });

        return gui;
    }

    override tick() {
        window.requestAnimationFrame(this.tick.bind(this));

        this._controls.update();
        this._renderer.render(this._scene, this._camera);
    }

    override run() {
        this.tick();
    }

    override dispose() {
        //
    }
}
