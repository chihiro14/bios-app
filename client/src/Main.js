import styled from 'styled-components'
import Footer from './Footer';

const windowHeight = window.innerHeight;

function Main() {
    return (
        <Wrapper>
            <main className="biosScreen">
                <div class="biosScreen__main">
                    {/* main */}
                    <article>
                        <section>
                            <h1>System Setup Utility Version</h1>
                            <span>94.4.14</span>
                        </section>
                        <section>
                            <h1>System Build Date :</h1>
                            <span>20.12.21</span>
                        </section>
                    </article>
                    <article>
                        <section>
                            <h1>WELCOME TO :</h1>
                            <span>the Under ground.</span>
                        </section>
                    </article>

                    {/* advanced */}
                    <article>
                        <section>
                            <h1>
                                <label>The Web Server :</label>
                            </h1>
                            <span>[node.js express]</span>
                        </section>
                    </article>

                    {/* settings */}
                    <article>
                        <section>
                            <h1>
                                <label>Select Language :</label>
                            </h1>
                            <span>
                                <select>
                                    <option value="en">English</option>
                                    <option value="eo">Esperanto</option>
                                    <option value="ja">日本語</option>
                                </select>
                            </span>
                        </section>
                    </article>

                    {/* exit */}
                    <article>
                        <section>
                            <h1>
                                <label>Click to :</label>
                            </h1>
                            <span>Sign out</span>
                        </section>
                    </article>
                </div>
                <div class="biosScreen__sub">
                    <article>
                        <section>
                            <div>Bye.</div>
                        </section>
                        <section>
                            <span>Press the Enter Key and bye.</span>
                        </section>
                    </article>
                </div>
                <Footer />
            </main>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  .biosScreen {
    position: relative;
    display: flex;
    height: calc(${windowHeight}px - 60px);
    margin: .2rem 1rem;
    background-Color: #ADADAD;
  }
  .biosScreen__main {
    margin: 10px 0 0 10px;
    width: calc(70% - 1rem);
    height: calc(100% - 3rem);
    overflow-y: auto;
    border: 2px solid #110088;
  }
  .biosScreen__sub {
    margin: 10px 10px 0 0;
    width: calc(30% - 1rem);
    height: calc(100% - 3rem);
    overflow-y: auto;
    border: 2px solid #110088;
  }
`;

export default Main;