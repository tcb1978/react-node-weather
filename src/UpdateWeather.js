import React, { Component } from 'react';

export const UpdateWeather = (props) => {
    return <button className="button" onClick={props.onUpdateWeather}>Update</button>
}
