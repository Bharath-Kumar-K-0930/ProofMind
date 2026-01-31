import React from 'react';

const OutputBox = ({ content }) => {
    return (
        <div className="output-box">
            <h3>Result:</h3>
            <pre>{content}</pre>
        </div>
    );
};

export default OutputBox;
