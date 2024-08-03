// three
import * as THREE from 'three';

class GalaxyParticle {
    private _mesh: THREE.Points;

    config: {
        size: number;

        count: number;
        branch: number;
        maxRadius: number;
        spin: number;
        spread: number;

        innerColor: string;
        outerColor: string;
    };

    constructor() {
        this.config = {
            size: 0.01,

            count: 25_000,
            branch: 3,
            maxRadius: 5,
            spin: 1,
            spread: 0.3,

            innerColor: '#ad61d6',
            outerColor: '#7f96f0',
        };

        this._mesh = this.generateGalaxy();
    }

    private _createGeometry() {
        const {
            count,
            branch,
            maxRadius,
            spin,
            spread,

            innerColor,
            outerColor,
        } = this.config;

        const positionBuffer = new Float32Array(count * 3);
        const colorBuffer = new Float32Array(count * 3);

        const originInnerColor = new THREE.Color(innerColor);
        const originOuterColor = new THREE.Color(outerColor);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // positionBuffer
            const branchAngle = (Math.PI * 2) * (i % branch) / branch;
            const radius = Math.random() * maxRadius;
            const spinAngle = radius * spin;

            const spreadX = (Math.random() - 0.5) * spread * radius;
            const spreadY = (Math.random() - 0.5) * spread * radius;
            const spreadZ = (Math.random() - 0.5) * spread * radius;

            positionBuffer[i3] = Math.cos(branchAngle + spinAngle) * radius + spreadX;
            positionBuffer[i3 + 1] = spreadY;
            positionBuffer[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + spreadZ;

            // colorBuffer
            const mixedColor = originInnerColor.clone();
            mixedColor.lerp(originOuterColor, radius / maxRadius);

            colorBuffer[i3] = mixedColor.r;
            colorBuffer[i3 + 1] = mixedColor.g;
            colorBuffer[i3 + 2] = mixedColor.b;
        }

        const geometry = new THREE.BufferGeometry();

        geometry.setAttribute('position', new THREE.BufferAttribute(
            positionBuffer,
            3
        ));

        geometry.setAttribute('color', new THREE.BufferAttribute(
            colorBuffer,
            3
        ));

        return geometry;
    }

    private _createMaterial() {
        const size = this.config.size;

        const material = new THREE.PointsMaterial({
            size: size,
            vertexColors: true,
        });

        return material;
    }

    generateGalaxy() {
        console.log('generateGalaxy()');

        const {
            _mesh: mesh,
        } = this;

        if (mesh) {
            mesh.geometry?.dispose();
            (mesh.material as THREE.PointsMaterial)?.dispose();
        }

        const geometry = this._createGeometry();
        const material = this._createMaterial();

        const newMesh = new THREE.Points(geometry, material);
        this._mesh = newMesh;

        return newMesh;
    }

    dispose() {
        const {
            geometry,
            material,
        } = this._mesh;

        geometry?.dispose();
        (material as THREE.PointsMaterial)?.dispose();
    }

    get particle() {
        return this._mesh;
    }
}

export default GalaxyParticle;
