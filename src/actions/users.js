import { createAction } from 'redux-actions';
import { INSERT_USER, SET_SHOW_ALERT } from './../constants/actions';
import { apiPost } from './../api';
import { urlUser } from './../api/urls';

export const setShowAlert = payload => ({type:SET_SHOW_ALERT, payload});

export const insertUser = createAction(INSERT_USER, 
    user => apiPost(urlUser, user)() );