import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  SidebarStyle,
  Content,
  Main,
  MenuActive,
  MainWrapper
} from "./styles/SidebarStyle";
import Footer from "./Footer";
import Header from "./Header";

class Sidebar extends Component {
  render() {
    return (
      <>
        <Header />
        <Content>
          <SidebarStyle>
            <ul>
              <li>
                <Link to="/home">
                  <MenuActive
                    isActive={this.props.location.pathname.includes("/home")}
                  >
                    Home
                  </MenuActive>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <MenuActive
                    isActive={this.props.location.pathname.includes("/contact")}
                  >
                    contact
                  </MenuActive>
                </Link>
              </li>
            </ul>
          </SidebarStyle>
          <MainWrapper>
            <Main>{this.props.children}</Main>
            <Footer />
          </MainWrapper>
        </Content>
      </>
    );
  }
}

export default withRouter(Sidebar);
