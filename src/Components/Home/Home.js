import React, { useEffect, useState } from 'react';
import Body from '../Body/Body';
import data from '../Data/data.json';

const Home = () => {
    const [transports, setTransport] = useState([]);

    useEffect(() => {
        setTransport(data);
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    transports.map(transport => <Body transport={transport}></Body>)
                }
            </div>
        </div>
    );
};

export default Home;