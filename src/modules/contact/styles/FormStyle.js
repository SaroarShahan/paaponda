import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
`;

const FormStyle = styled.form`
  background-color: #fff;
  padding: 4rem;
  border-radius: 4px;

  div {
    margin-bottom: 3rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.greyDarkOne};
  }
  input {
    width: 100%;
    height: 4rem;
    border-radius: 4px;
    border: none;
    background-color: ${({ theme }) => theme.greyLighThree};
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    &:focus {
      outline: 1px solid ${({ theme }) => theme.greyDarkOne};
    }
  }

  button {
    background-color: ${({ theme }) => theme.greyDarkOne};
    color: #fff;
    border: none;
    padding: 1.2rem 3rem;
    font-size: 1.6rem;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease-in-out 0s;

    &:hover {
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;

const ButtonWrap = styled.div`
  text-align: center;
`;

export { Wrapper, FormStyle, ButtonWrap };
