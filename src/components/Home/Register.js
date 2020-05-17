import React from 'react';
import PropTypes from 'prop-types';
import { setPropsAsInitial } from './../../helpers/setPropsAsInitial';
import { reduxForm, Field } from 'redux-form';
import { myField } from './../MyFields';

const Register = ({ handleSubmit, submitting, pristine, show, onHandleCloseAlert, onPrueba }) => (
    <div className="register">
        <div className={`alert alert-warning alert-dismissible fade${show ? ' show' : ''}`} role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" className="close" onClick={onHandleCloseAlert}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="register-heading">Crea tu Cuenta!</h3>
                <form onSubmit={handleSubmit} className="row register-form">
                    <div className="col-md-6">
                        <div className="form-group">
                            <Field 
                                component = {myField}
                                placeholder="Nombre *"
                                name="name"/>
                        </div>
                        <div className="form-group">
                            <Field 
                                component = {myField}
                                placeholder="Apellido *"
                                name="last_name"/>
                        </div>
                        <div className="form-group">
                            <Field 
                                component = {myField}
                                placeholder="Clave *"
                                name="password"
                                type="password"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Field 
                                component = {myField}
                                placeholder="Rut *"
                                name="rut"/>
                        </div>
                        <div className="form-group">
                            <Field 
                                component = {myField}
                                placeholder="Tu Email *"
                                name="email"
                                type="email"/>
                        </div>
                        <div className="form-group">
                            <Field 
                                component = {myField}
                                placeholder="Confirmar Clave *"
                                name="password_confirm"
                                type="password"/>
                        </div>
                        
                        <button type="submit" className="btnRegister" disabled={pristine || submitting}>Crear Cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

Register.propTypes = {
    name:PropTypes.string,
    last_name:PropTypes.string,
    email:PropTypes.string,
    password:PropTypes.string,
    password_confirm:PropTypes.string
};

const RegisterForm = reduxForm(
    { 
        form: 'Register'
    })(Register);

export default setPropsAsInitial(RegisterForm); 