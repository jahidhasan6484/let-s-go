import React from 'react';
import './NotFound.css';

const NotFound = () => {
    document.title="Let'sGO!/NotFound";
    return (
        <div className="container text-center not-found">
            <h1 className="text-danger">Error-4O4 Not Found!</h1>
        </div>
    );
};

export default NotFound;