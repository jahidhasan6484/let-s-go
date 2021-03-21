import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data/data.json';
import './Destination.css';
import Direction from '../Map/Direction';

const Destinations = () => {
    document.title = "Let'sGO!/Destination";
    const { id } = useParams();

    const transport = data.find(transport => transport.id == id)

    const [transportDetail, setTransportDetail] = useState([]);

    useEffect(() => {
        setTransportDetail(data);
    }, [id])

    const { name, photo, person, person_no, price } = transport;

    const [searchLocation, setSearchLocation] = useState({
        pickFrom: '',
        pickTo: '',
        search: false
    });

    const handleBlur = (e) => {
        const newSearchLocation = { ...searchLocation };
        newSearchLocation[e.target.name] = e.target.value;
        setSearchLocation(newSearchLocation);
    }

    const handleSearch = (e) => {
        if (searchLocation.pickFrom && searchLocation.pickTo) {
            const finalSearch = { ...searchLocation };
            finalSearch.search = true;
            setSearchLocation(finalSearch);
        }
        e.preventDefault();
    }

    return (
        <div className="container mt-5 my-5 search-form">
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={handleSearch} className="form my-4">
                        <div className="mb-3">
                            <p>Pick From</p>
                            <input type="text" onBlur={handleBlur} name="pickFrom" id="" placeholder="Enter a valid location" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <p>Pick To</p>
                            <input type="text" onBlur={handleBlur} name="pickTo" id="" placeholder="Enter a valid location" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <input type="submit" value="Search" className="btn btn-info form-control" />
                        </div>
                    </form>
                    <div>
                        {
                            searchLocation.search && <p>From: {searchLocation.pickFrom} <br />To: {searchLocation.pickTo}</p>
                        }
                    </div>
                </div>
                <div className="col-md-8">
                    <Direction origin={searchLocation.pickFrom} destination={searchLocation.pickTo}></Direction>
                </div>
            </div>
        </div>
    );
};

export default Destinations;