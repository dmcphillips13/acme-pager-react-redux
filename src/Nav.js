import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = ({ employees }) => {
  const numberOfPages = Math.ceil(employees.count / 50);
  if (numberOfPages) {
    let pages = [];
    for (let i = 0; i < numberOfPages; i++) {
      pages.push(i);
    }
    return (
      <div className="pages">
        {pages.map((page) => (
          <Link
            to={`${page}`}
            key={page}
            className={location.hash.slice(2) === `${page}` ? "selected" : null}
          >
            {page + 1}
          </Link>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = ({ employees }) => {
  return { employees };
};

export default connect(mapStateToProps)(Nav);
