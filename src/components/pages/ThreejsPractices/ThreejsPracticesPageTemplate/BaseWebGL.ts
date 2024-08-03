type TBaseWebGLConfig = {
    size: {
        width: number;
        height: number;
    };
    resizeTimeoutID: ReturnType<typeof setTimeout> | null;
};

abstract class BaseWebGL {
    protected _$parent: HTMLElement;
    protected _$canvas: HTMLElement;

    protected abstract _config: TBaseWebGLConfig;

    constructor($canvas: HTMLCanvasElement) {
        if (!$canvas?.parentElement) {
            throw new Error('Can not access parentElement');
        }

        this._$parent = $canvas.parentElement;
        this._$canvas = $canvas;
    }

    protected _getSize() {
        const {
            width,
            height,
        } = this._$parent.getBoundingClientRect();

        return {
            width,
            height,
        };
    }

    protected _createInitialBaseConfig(): TBaseWebGLConfig {
        const {
            width,
            height,
        } = this._getSize();

        return {
            size: {
                width,
                height,
            },
            resizeTimeoutID: null,
        };
    }

    protected abstract tick(): void;
    abstract run(): void;
    abstract dispose(): void;
}

export default BaseWebGL;
export type {
    TBaseWebGLConfig,
};
