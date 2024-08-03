'use client';

// wegbl
import HauntedHouseWegGL from './webgl/hauntedHouseWebGL';
// ui
import ThreejsPracticesPageTemplate from '../ThreejsPracticesPageTemplate/ThreejsPracticesPageTemplate';

function HauntedHouse() {
    return (
        <ThreejsPracticesPageTemplate 
            WebGL={HauntedHouseWegGL} />
    );
}

export default HauntedHouse;
