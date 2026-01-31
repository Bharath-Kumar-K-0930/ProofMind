import React from 'react';

const VerifyResult = ({ result }) => {
    return (
        <div className="verify-result">
            <h3>Verification Status:</h3>
            <p>{result ? 'Valid' : 'Invalid'}</p>
        </div>
    );
};

export default VerifyResult;
