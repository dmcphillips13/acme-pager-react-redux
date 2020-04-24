import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunks from "redux-thunk";
import { createLogger } from "redux-logger";

//ACTIONS
const LOAD_EMPLOYEES = "LOAD_EMPLOYEES";

//ACTION CREATORS
const _loadEmployees = (employees) => ({ type: LOAD_EMPLOYEES, employees });

//THUNKS
const loadEmployees = () => {
  return async (dispatch) => {
    const response = (await axios.get("/api/employees/")).data;
    dispatch(_loadEmployees(response));
  };
};

//REDUCERS
const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_EMPLOYEES: {
      state = action.employees.rows;
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

export { loadEmployees };
