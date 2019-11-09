import styled from "styled-components";

const Content = styled.div`
  display: flex;
`;

const SidebarStyle = styled.aside`
  background-color: ${({ theme }) => theme.greyDarkOne};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 18%;

  ul {
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;
  }
  li {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
  a {
    color: ${({ theme }) => theme.greyLightOne};
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    position: relative;
    z-index: 10;

    display: flex;
    align-items: center;
  }
`;

const MenuActive = styled.div`
  width: 100%;
  padding: 1.5rem 3rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ isActive }) => (isActive ? "100%" : "3px")};
    background-color: ${({ theme, isActive }) => isActive && theme.primary};
    transform: ${({ isActive }) => (isActive ? "scaleY(1)" : "scaleY(0)")};
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
    z-index: -1;
  }
  &:hover::before {
    transform: scaleY(1);
    background-color: ${({ theme }) => theme.primary};
    width: 100%;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.greyLightTwo};
  overflow-x: hidden;
`;

const Main = styled.main`
  padding: 2rem;
  min-height: calc(100vh - 14rem);
`;

export { Content, MainWrapper, SidebarStyle, Main, MenuActive };
