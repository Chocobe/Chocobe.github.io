// styled-components
import { 
    createGlobalStyle,
} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Pretendard Variable", sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;

        overflow: hidden;
    }

    canvas.webgl {
        display: block;
    }
`;

export default GlobalStyles;
