import styled from 'styled-components';

function Footer() {
  return (
    <FooterElem>
      <small>Version 94.4.14 </small>
    </FooterElem>
  );
}

const FooterElem = styled.footer`
  position: absolute;
  right: 1.5rem;
  bottom: .5rem;
  text-align: right;
`;

export default Footer;