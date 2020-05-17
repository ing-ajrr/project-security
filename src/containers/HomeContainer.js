import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import { insertUser } from './../actions/users';
import AppFrame from './../components/AppFrame';
import Register from './../components/Home/Register';
import Login from './../components/Home/Login';
import './../components/Home/styles.css'

class HomeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            newUser : this.initializeUser()
        };
    }
    initializeUser = () => {
        const user = {
            id:"",
            name:"",
            last_name:"",
            email:"",
            password:"",
            password_confirm:""
        };
        return user;
    }
    handleSubmitRegister = values => {
        return this.props.insertUser(values).then( r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    }
    handleCloseAlert = () => {
        this.setState({show:false});
    }

    handleOnSubmitSuccessRegister = () => {
        this.setState({
            show:true,
            newUser: this.initializeUser()
        });
    }

    renderBody = () => {
        return(
            <div className="main-section container-fluid">
                <div className="row">
                    <div className="col-md-3 main-section__left">
                        <Login/>                    
                    </div>
                    <div className="col-md-9 main-section__right">
                        <Register {...this.state.newUser} onSubmit={this.handleSubmitRegister}
                    onSubmitSuccess={this.handleOnSubmitSuccessRegister} onHandleCloseAlert={this.handleCloseAlert} show={this.state.show}/>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <AppFrame nameClass="home" body={
                this.renderBody()
            }/>
        );
    }
}

HomeContainer.propTypes = {
    insertUser: PropTypes.func.isRequired,
};


export default withRouter(connect(null, { insertUser })(HomeContainer));