import React, { useState } from 'react';
import styled from 'styled-components';

function Nav() {
    const [screenTab1, setscreenTab1] = useState(true);
    const [screenTab2, setscreenTab2] = useState(false);
    const [screenTab3, setscreenTab3] = useState(false);
    const [screenTab4, setscreenTab4] = useState(false);

    return (
        <NavElem>
            <input type="radio" id="screenTab1" name="tab_items" className="bios-tab-checker"
                onChange={() => screenTab1 ? setscreenTab1(false) : setscreenTab1(true)}
                checked={screenTab1}
            />
            <label htmlFor="screenTab1" className="bios-tab-label">Main</label>
            <input type="radio" id="screenTab2" name="tab_items" className="bios-tab-checker"
                onChange={() => screenTab2 ? setscreenTab2(false) : setscreenTab2(true)}
                checked={screenTab2}
            />
            <label htmlFor="screenTab2" className="bios-tab-label">Advanced</label>
            <input type="radio" id="screenTab3" name="tab_items" className="bios-tab-checker"
                onChange={() => screenTab3 ? setscreenTab3(false) : setscreenTab3(true)}
                checked={screenTab3}
            />
            <label htmlFor="screenTab3" className="bios-tab-label">Settings</label>
            <input type="radio" id="screenTab4" name="tab_items" className="bios-tab-checker"
                onChange={() => screenTab4 ? setscreenTab4(false) : setscreenTab4(true)}
                checked={screenTab4}
            />
            <label htmlFor="screenTab4" className="bios-tab-label">Exit</label>
        </NavElem>
    );
}

const NavElem = styled.nav`
    margin: 0 10px;
    border: none;
    font-size: 1.4rem;
    line-height: 1.2rem;

    .bios-tab-label {
        display: none¥0;
        padding: 2px 10px;
        margin-right: 10px;
        background-color: #110088;
        color: #ADADAD;
        line-height: 1.2rem;
        cursor: pointer;
    }
    input[type="radio"].bios-tab-checker {
        display: none;
    }
    input[type="radio"].bios-tab-checker:checked + label.bios-tab-label {
        color: #110088;
        background-color: #ADADAD;
    }
`;

export default Nav;
