import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunks from "redux-thunk";
import { createLogger } from "redux-logger";

//ACTIONS
const LOAD_EMPLOYEES = "LOAD_EMPLOYEES";
const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";

//ACTION CREATORS
const _loadEmployees = (employees) => ({ type: LOAD_EMPLOYEES, employees });
const _deleteEmployee = (id) => ({ type: DELETE_EMPLOYEE, id });

//THUNKS
const loadEmployees = (page) => {
  return async (dispatch) => {
    const response = (await axios.get(`/api/employees/${page}`)).data;
    dispatch(_loadEmployees(response));
  };
};

const deleteEmployee = (id, pageNumber, push) => {
  return async (dispatch) => {
    await axios.delete(`/api/employees/${pageNumber}/${id}`);
    dispatch(_deleteEmployee(id));
    push(`/${pageNumber}`);
  };
};

//REDUCERS
const employeesReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_EMPLOYEES: {
      state = action.employees;
      return state;
    }

    case DELETE_EMPLOYEE: {
      state.rows = state.rows.filter((employee) => employee.id !== action.id);
      return state;
    }

    default:
      return state;
  }
};

const reducer = combineReducers({
  employees: employeesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunks, createLogger({ collapsed: true }))
);

export default store;

export { loadEmployees, deleteEmployee };
