'use client';

// react
import {
    useRef,
    useEffect,
} from 'react';
// wegbl
import HauntedHouseWegGL from './webgl/hauntedHouseWebGL';
// styled-components
import styled from 'styled-components';

const StyledHauntedHouseRoot = styled.div`
    width: 100%;
    height: 100%;

    overflow: hidden;
`;

function HauntedHouse() {
    //
    // ref
    //
    const $canvasRef = useRef<HTMLCanvasElement | null>(null);
    const webGLRef = useRef<HauntedHouseWegGL | null>(null);

    //
    // effect
    //
    useEffect(function initWebGLRef() {
        if ($canvasRef.current) {
            webGLRef.current = new HauntedHouseWegGL($canvasRef.current);
            webGLRef.current.run();
        }

        return () => {
            webGLRef.current?.dispose();
        };
    }, []);

    return (
        <StyledHauntedHouseRoot>
            <canvas ref={$canvasRef} />
        </StyledHauntedHouseRoot>
    );
}

export default HauntedHouse;
