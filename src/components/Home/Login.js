import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { myField } from './../MyFields';

const Login = () => {
    return (
        <div className="login">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=" Logo"/>
            <h3>Bienvenido</h3>
            <p>Ingresa a Tu Cuenta!</p>
            <div className="d-flex justify-content-center form_container">
                <form>
                    <div className="input-group mb-3">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <Field
                            component={myField}
                            name="username"
                            placeholder="username / rut"
                            myClass="input_user"/>
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                        </div>
                        <Field
                            component={myField}
                            name="password"
                            placeholder="clave"
                            myClass="input_pass"
                            type="password"/>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                            <label className="custom-control-label" htmlFor="customControlInline">Recuerdame</label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3 login_container">
                        <button type="submit" name="button" className="btn login_btn">Ingresar</button>
                    </div>
                </form>
            </div>
		
            <div className="mt-4">
                <div className="d-flex justify-content-center links">
                    <a href="/">Se te olvido tu contraseña?</a>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
};

const LoginForm = reduxForm(
    { 
        form: 'Login'
    })(Login);

export default LoginForm; 