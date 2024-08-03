'use client';

// three
import GalaxyGeneratorWebGL from './webgl/galaxyGeneratorWebGL';
// ui
import ThreejsPracticesPageTemplate from '../ThreejsPracticesPageTemplate/ThreejsPracticesPageTemplate';
// styled-components
import styled from 'styled-components';

const StyledGalaxyGeneratorRoot = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    .GalaxyGenerator {
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;

        .lil-gui.root {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
`;

function GalaxyGenerator() {
    return (
        <StyledGalaxyGeneratorRoot>
            <ThreejsPracticesPageTemplate
                className="GalaxyGenerator"
                WebGL={GalaxyGeneratorWebGL} />
        </StyledGalaxyGeneratorRoot>
    );
}

export default GalaxyGenerator;
