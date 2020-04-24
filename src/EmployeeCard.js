import React from "react";
import { connect } from "react-redux";

const EmployeeCard = ({ firstName, lastName }) => {
  return (
    <li>
      {firstName} {lastName}
    </li>
  );
};

const mapStateToProps = null;

export default connect(mapStateToProps)(EmployeeCard);
