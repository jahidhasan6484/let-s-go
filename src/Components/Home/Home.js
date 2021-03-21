import React, { useEffect, useState } from 'react';
import Body from '../Body/Body';
import data from '../Data/data.json';
import Header from '../Header/Header';

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
                {
                    transports.map(transport => <Header transport={transport}></Header>)
                }
            </div>
        </div>
    );
};

export default Home;