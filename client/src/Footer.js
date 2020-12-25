import styled from 'styled-components'

function Footer() {
    return (
        <Wrapper>
            <footer className="footer">
                <small>Version 94.4.14.</small>
            </footer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  .footer {
    position: absolute;
    right: 1.5rem;
    bottom: .5rem;
    text-align: right;
  }
`;

export default Footer;