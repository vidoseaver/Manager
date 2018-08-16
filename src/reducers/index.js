import { combineReducers } from "redux";
import authReducer from './authReducer'
import EmployeeFormReducer from "./EmployeeFormReducer";

export default combineReducers({
    auth: authReducer,
    employeeForm: EmployeeFormReducer
})