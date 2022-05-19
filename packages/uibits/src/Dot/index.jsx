import React from 'react';

export const Dot = ({size = 16, color = '#cccccc', borderColor = '#fff'}) => <div style={{
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: '50%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor
}}/>;