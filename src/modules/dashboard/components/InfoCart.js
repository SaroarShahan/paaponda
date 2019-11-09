import React from "react";
import { FaUserFriends } from "react-icons/fa";

const InfoCart = ({ icon, title, count }) => {
  return (
    <div>
      <div>
        <i>
          <FaUserFriends />
        </i>
      </div>
      <div>
        <h2>Appointments</h2>
        <span>450</span>
      </div>
    </div>
  );
};

export default InfoCart;
