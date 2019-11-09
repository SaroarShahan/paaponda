import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BreadcrumbStyle } from "../dashboard/styles/Breadcrumbs";

const BreadCrumbs = ({ title }) => {
  return (
    <BreadcrumbStyle>
      <h1>{title}</h1>

      <ul>
        <li>
          <Link to="/home">Home</Link>
          <i>
            <FaAngleRight />
          </i>
        </li>
        <li>{title}</li>
      </ul>
    </BreadcrumbStyle>
  );
};

export default BreadCrumbs;
