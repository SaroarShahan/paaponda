import styled from "styled-components";

const InforCartWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  margin-bottom: 3rem;
`;

const InforCart = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  background-color: #fff;
  padding: 4rem 2rem;
  border-radius: 8px;

  i {
    background-color: ${({ theme }) => theme.greyDarkOne};
    color: #fff;
    width: 10rem;
    height: 10rem;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  div {
    span {
      display: block;
      color: ${({ theme }) => theme.greyDarkTwo};
    }
    text-align: center;
  }
`;

export { InforCart, InforCartWrap };
