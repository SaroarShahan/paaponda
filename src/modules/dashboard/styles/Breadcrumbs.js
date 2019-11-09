import styled from "styled-components";

const BreadcrumbStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  text-transform: capitalize;

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.greyDarkTwo};
    margin-bottom: 0;
  }

  ul {
    display: flex;
    list-style: none;
    background-color: rgba(220, 208, 208, 0.3);
    border-radius: 50px;
    padding: 1.5rem 2rem;

    li,
    a {
      color: ${({ theme }) => theme.greyDarkThree};
    }
    li {
      display: flex;
      align-items: center;
      i {
        display: inline-block;
        margin-right: 0.5rem;
        line-height: 1;
      }
    }
    a {
      margin-right: 0.5rem;
      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

export { BreadcrumbStyle };
