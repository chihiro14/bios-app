import styled from 'styled-components';

import ScreenMain from './ScreenMain';
import ScreenSub from './ScreenSub';
import Footer from './Footer';

const windowHeight = window.innerHeight;

function Screen() {
    return (
        <Main>
            <ScreenMain />
            <ScreenSub />
            <Footer />
        </Main>
    );
}

const Main = styled.div`
    position: relative;
    display: flex;
    width: calc(100% - 20px);
    min-width: 450px;
    height: calc(${windowHeight}px - 60px);
    margin: 3px 10px 0;
    background-Color: #ADADAD;
    font-size: 1rem;
`;

export default Screen;