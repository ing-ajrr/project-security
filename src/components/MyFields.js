import React from 'react';

export const myField = ({ input, type, placeholder, myClass }) => (
    <input {...input} type={!type ? "text" : type} className={`form-control ${!myClass ? "": myClass}`} placeholder={placeholder} />
);