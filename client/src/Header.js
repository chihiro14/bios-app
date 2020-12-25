import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <header className="header">
        <h1>BIOS SETUP UTILITY.</h1>
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .header {
    padding: 5px 0;
    color: #EAEFEA;
    text-align: center;
    display: none¥0;
  }
`;

export default Header;