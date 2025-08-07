import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLink to="/terms">이용약관</FooterLink>
      <Separator>|</Separator>
      <FooterLink to="/privacy">개인정보처리방침</FooterLink>
      <Separator>|</Separator>
      <FooterLink to="/support">고객센터</FooterLink>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 16px;
  right: 24px;
  display: flex;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
  opacity: 0.6;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  opacity: 0.5;
`;
