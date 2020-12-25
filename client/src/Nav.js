import React, { useState } from 'react';
import styled from 'styled-components';

function Nav() {
    const [screenTab1, setscreenTab1] = useState(true);
    const [screenTab2, setscreenTab2] = useState(false);
    const [screenTab3, setscreenTab3] = useState(false);
    const [screenTab4, setscreenTab4] = useState(false);

    return (
        <Wrapper>
            <nav className="nav">
                <input type="radio" id="screenTab1" name="tab_items" className="bios-tab-checker" onChange={() => setscreenTab1(!screenTab1)} checked={screenTab1} />
                <label for="screenTab1" className="bios-tab-label">Main</label>
                <input type="radio" id="screenTab2" name="tab_items" className="bios-tab-checker" onChange={() => setscreenTab2(!screenTab2)} checked={screenTab2} />
                <label for="screenTab2" className="bios-tab-label">Advanced</label>
                <input type="radio" id="screenTab3" name="tab_items" className="bios-tab-checker" onChange={() => setscreenTab3(!screenTab3)} checked={screenTab3} />
                <label for="screenTab3" className="bios-tab-label">Settings</label>
                <input type="radio" id="screenTab4" name="tab_items" className="bios-tab-checker" onChange={() => setscreenTab4(!screenTab4)} checked={screenTab4} />
                <label for="screenTab4" className="bios-tab-label">Exit</label>
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .nav {
        margin: 0 10px;
        border: none;
        font-size: 1.4rem;
        line-height: 1.2rem;
    }
    nav label.bios-tab-label {
        display: none¥0;
        padding: 2px 10px;
        margin-right: 10px;
        background-color: #110088;
        color: #ADADAD;
        line-height: 1.2rem;
        cursor: pointer;
    }
    nav input[type="radio"].bios-tab-checker {
        display: none;
    }
    nav input[type="radio"].bios-tab-checker:checked + label.bios-tab-label {
        color: #110088;
        background-color: #ADADAD;
    }
`;

export default Nav;
