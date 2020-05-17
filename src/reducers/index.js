import { combineReducers } from 'redux';
import { users } from './users';
import { reducer as reduxForm } from 'redux-form';
//import { CUSTOMER_VIEW, CUSTOMER_LIST, CUSTOMER_EDIT } from './../constants/permissions';
/*
const user = (state, action) => (
    {
        permissions: [CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT]
    }
);*/

export default combineReducers({
    users,
    form: reduxForm
});