import React, { Component } from 'react';

export const DisplayAsKelvin = ({ temp }) => {
    return <span>{(((temp - 273.15) * 9 / 5) + 32).toFixed(2)} <i> degrees farenheit</i></span>
}