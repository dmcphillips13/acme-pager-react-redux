import React from "react";
import { connect } from "react-redux";
import EmployeeCard from "./EmployeeCard";

const Employees = ({ employees }) => {
  console.log(employees);
  return (
    <div>
      <ul>
        {employees.length ? (
          employees.map((employee) => <EmployeeCard {...employee} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ employees }) => {
  return { employees };
};

export default connect(mapStateToProps)(Employees);
