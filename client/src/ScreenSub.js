import React, { useEffect } from 'react';
import styled from 'styled-components';


function ScreenSub() {
    return (
        <Section>
            <article>
                <section>
                    <div>Bye.</div>
                </section>
                <section>
                    <span>Press the Enter Key and bye.</span>
                </section>
            </article>
            <div className="bios-manual">
                <p>
                    <span className="bios-manual-key">&#x21C4;</span>
                    <span className="bios-manual-value">Select Screen</span>
                </p>
                <p>
                    <span className="bios-manual-key">&#x21C5;</span>
                    <span className="bios-manual-value">Select Item</span>
                </p>
            </div>
        </Section>
    );
}

const Section = styled.section`
    position: relative;
    margin: 10px 10px 0 0;
    padding: 10px;
    width: calc(30% - 1rem);
    height: calc(100% - 3rem);
    overflow-y: auto;
    border: 2px solid #110088;

    .bios-manual {
        position: absolute;
        bottom: 10px;
    }
    .bios-manual-key {
        font-size: 1.2rem;
    }
    .bios-manual-value {
        margin: 5px 0 0 5rem;
    }
`;

export default ScreenSub;