import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import data from '../Data/data.json';
import './Destination.css';
import map from '../../images/Map.png';

const Destinations = () => {
    const { id } = useParams();

    const selectedTransport = data.find(transport => transport.id == id)

    const [transportDetail, setTransportDetail] = useState({});

    useEffect(() => {
        setTransportDetail(data[0]);
    }, [])

     const { name } = transportDetail;


    const [searchLocation, setSearchLocation] = useState({
        pickFrom: '',
        pickTo: ''
    });

    const handleChange = (e) => {
        const newSearchLocation = { ...searchLocation };
        newSearchLocation[e.target.name] = e.target.value;
        setSearchLocation(newSearchLocation);
    }

    return (
        <div className="container my-5" width="2rem">
            <div className="row">
                <div className="col-md-4 mt-5">
                    <div className="container search-location">
                        <form className="form my-4">
                            <div className="mb-3">
                                <p>Pick From</p>
                                <input type="text" onChange={handleChange} name="pickFrom" id="" placeholder="Enter a valid location" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <p>Pick To</p>
                                <input type="text" onChange={handleChange} name="pickTo" id="" placeholder="Enter a valid location" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <input type="submit" value="Search" className="btn btn-info form-control" />
                            </div>
                        </form>
                        <p>{searchLocation.pickFrom}</p>
                        <p>{searchLocation.pickTo}</p>
                    </div>
                </div>
                <div className="col-md-8">
                    <p>{name}</p>
                    <img className="img-fluid" src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destinations;