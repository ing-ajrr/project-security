import React from 'react';
import Header from './Header';

const AppFrame = ({ body }) => (
    <div className="app-frame">
        <Header/>
        { body }
    </div>
);

export default AppFrame;