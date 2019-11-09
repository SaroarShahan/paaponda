import React, { Component } from "react";
import styled from "styled-components";
import { FooterArea } from "./styles/HeaderStyle";

class Footer extends Component {
  render() {
    return (
      <FooterArea>
        <p>
          Copyright &copy; {new Date().getFullYear()} Developed by
          <DevelopedLink
            href="https://www.facebook.com/SaroarShahan"
            rel="noopener noreferrer"
            target="_blank"
          >
            SaroarShahan
          </DevelopedLink>
          .
        </p>
      </FooterArea>
    );
  }
}

export default Footer;

const DevelopedLink = styled.a`
  display: inline-block;
  margin-left: 0.3rem;
  color: ${({ theme }) => theme.greyDarkOne};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
