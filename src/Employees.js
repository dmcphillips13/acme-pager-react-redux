import React from "react";
import { connect } from "react-redux";
import { loadEmployees, deleteEmployee } from "./store";

class Employees extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const page = this.props.match.params.page;
    if (page !== undefined) {
      this.props.getPage(page);
    } else {
      this.props.getPage(0);
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.match.params.page !== this.props.match.params.page) {
      this.props.getPage(this.props.match.params.page);
    }
  }

  render() {
    const { employees } = this.props;
    if (employees.rows !== undefined) {
      return (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.rows.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.title}</td>
                  <td>
                    <button
                      onClick={() =>
                        this.props.destroy(
                          employee.id,
                          this.props.match.params.page,
                          this.props.history.push
                        )
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return <h3>Loading...</h3>;
    }
  }
}

const mapStateToProps = ({ employees }) => {
  return { employees };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPage: (pageNum) => dispatch(loadEmployees(pageNum)),
    destroy: (id, pageNum, push) => dispatch(deleteEmployee(id, pageNum, push)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
