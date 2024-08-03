'use client';

// react
import {
    useRef,
    useEffect,
} from 'react';
// three
import BaseWebGL from './BaseWebGL';
// style
import styled from 'styled-components';

const StyledThreejsPracticesPageTemplateRoot = styled.div<{
    $overflow: 'hidden' | 'auto';
}>`
    width: 100%;
    height: 100%;

    overflow: ${({ $overflow }) => $overflow};
`;

type TThreejsPracticesPageTemplateProps<T extends BaseWebGL> = {
    className?: string;
    overflow?: 'hidden' | 'auto';
    WebGL: new ($canvas: HTMLCanvasElement) => T;
};

function ThreejsPracticesPageTemplate<T extends BaseWebGL>(
    props: TThreejsPracticesPageTemplateProps<T>) {
    const {
        className,
        overflow = 'hidden',
        WebGL,
    } = props;

    //
    // ref
    //
    const $canvasRef = useRef<HTMLCanvasElement | null>(null);
    const webGLRef = useRef<T | null>(null);

    //
    // effect
    //
    useEffect(function initWebGLRef() {
        if ($canvasRef.current) {
            console.log('Template 초기화');

            webGLRef.current = new WebGL($canvasRef.current);
            webGLRef.current.run();
        }

        return () => {
            console.log('Template 클린업');

            webGLRef.current?.dispose();
            webGLRef.current = null;
        };
    }, [WebGL]);

    return (
        <StyledThreejsPracticesPageTemplateRoot 
            className={className}
            $overflow={overflow}>
            <canvas ref={$canvasRef} />
        </StyledThreejsPracticesPageTemplateRoot>
    );
}

export default ThreejsPracticesPageTemplate;
