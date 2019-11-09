import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { InforCartWrap, InforCart } from "../styles/InforCart";
import LineCharts from "../components/LineChart";
import BreadCrumbs from "../../common/BreadCrumbs";

const Dashboard = () => {
  return (
    <>
      <BreadCrumbs title="Dashboard" />

      <InforCartWrap>
        <InforCart>
          <div>
            <i>
              <FaUserFriends />
            </i>
          </div>
          <div>
            <span>Appointments</span>
            <span>450</span>
          </div>
        </InforCart>
        <InforCart>
          <div>
            <i>
              <FaUserFriends />
            </i>
          </div>
          <div>
            <span>Appointments</span>
            <span>450</span>
          </div>
        </InforCart>
        <InforCart>
          <div>
            <i>
              <FaUserFriends />
            </i>
          </div>
          <div>
            <span>Appointments</span>
            <span>450</span>
          </div>
        </InforCart>
        <InforCart>
          <div>
            <i>
              <FaUserFriends />
            </i>
          </div>
          <div>
            <span>Appointments</span>
            <span>450</span>
          </div>
        </InforCart>
      </InforCartWrap>

      <LineCharts />
    </>
  );
};

export const DashboardContainer = withRouter(Dashboard);
