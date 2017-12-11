import React, { Component } from 'react';

export const Remove = (props) => {
    return <button className="button" onClick={props.onRemove}>Remove</button>
}