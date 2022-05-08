import React from 'react';
const Spinner = () => {
    return (
        <div>
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <h5><span className="text-danger">Loading...</span></h5>
                </div>
            </div>
        </div>
    );
};

export default Spinner;