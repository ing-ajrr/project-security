import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import Dashboard from './../components/Dashboard';

class DashboardContainer extends Component {
    render() {
        return (
            <AppFrame body={
                <Dashboard/>
            }/>
        );
    }
}

DashboardContainer.propTypes = {

};

export default DashboardContainer;