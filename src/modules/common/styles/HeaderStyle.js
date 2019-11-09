import styled from "styled-components";

const HeaderArea = styled.header`
  background-color: #fff;
  font-size: 1.4rem;
  height: 7rem;
  border-bottom: ${({ theme }) => theme.line};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 0;
    a {
      color: ${({ theme }) => theme.greyDarkTwo};
    }
  }

  form {
    display: flex;
    flex: 0 0 40%;
    align-items: center;
    justify-content: center;
  }
  input {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: ${({ theme }) => theme.greyLightTwo};
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 100px;
    width: 90%;
    transition: all 0.2s;
    margin-right: -3.25rem;
    &:focus {
      outline: none;
      width: 100%;
    }
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.greyLightTwo};
    color: ${({ theme }) => theme.greyDarkTwo};
    line-height: 1;
  }
`;

const FooterArea = styled.footer`
  background-color: #fff;
  font-size: 1.4rem;
  height: 7rem;
  border-top: ${({ theme }) => theme.line};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

export { HeaderArea, FooterArea };
