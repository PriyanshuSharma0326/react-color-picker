import React from 'react'
import rgbToHex from '../utils/util';

function SingleColor({ rgb, weight, index }) {
    let hex = rgbToHex(...rgb);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(hex)
        .then(() => {
            alert('Color code copied to clipboard!');
        })
        .catch((error) => {
            console.error('Failed to copy: ', error);
        });
    }

    return (
        <div 
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${rgb})` }} 
            onClick={() => copyToClipboard()}
        >
            <p className="percent-value">
                {weight}%
            </p>

            <p className="color-value">
                {hex}
            </p>
        </div>
    );
}

export default SingleColor;
