import { handleActions } from 'redux-actions';
import { FETCH_USERS, 
    INSERT_USER, 
    UPDATE_USER, 
    DELETE_USER,
    SET_SHOW_ALERT } from './../constants/actions';

export const users = handleActions({
    [FETCH_USERS]: (state, action) => [ ...action.payload],
    [INSERT_USER]: (state, action) => [ ...state, action.payload ],
    [UPDATE_USER]: (state, action) => {
        const customerPayload = action.payload;
        const { id } = customerPayload;
        const customers = state;
        const initialValue = [];
        const newCustomers = customers.reduce( (acc, customer) => {
            if (customer.id === id) {
                return [ ...acc, customerPayload];
            } else {
                return [ ...acc, customer ];
            }
        }, initialValue);

        return newCustomers;
    },
    [DELETE_USER]: (state, action) => state.filter(c => c.id !== action.payload),
    [SET_SHOW_ALERT]: (state, action) => action.payload
}, []);

