import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data/data.json';
import './Destination.css';
import map from '../../images/Map.png';

const Destinations = () => {
    document.title="Let'sGO!/Destination";
    const { id } = useParams();

    const transport = data.find(transport => transport.id == id)

    const [transportDetail, setTransportDetail] = useState([]);

    useEffect(() => {
        setTransportDetail(data);
    }, [id])

    const { name, photo, person, price } = transport;

    const [searchLocation, setSearchLocation] = useState({
        pickFrom: '',
        pickTo: '',
        search: false
    });

    const handleChange = (e) => {
        const newSearchLocation = { ...searchLocation };
        newSearchLocation[e.target.name] = e.target.value;
        setSearchLocation(newSearchLocation);
    }

    const handleSearch = (e) => {
        if(searchLocation.pickFrom && searchLocation.pickTo) {
            const finalSearch = {...searchLocation};
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
                    <div>
                    {
                        searchLocation.search && <p>{searchLocation.pickFrom} <br/>{searchLocation.pickTo}</p>
                    }
                    </div>
                </div>
                <div className="col-md-8">

                    {/* {
                        searchLocation.search && <p>{searchLocation.pickFrom} <br/>{searchLocation.pickTo}</p>
                    } */}
                    {/* <p>Name: {name}</p>
                    <p>Price: {price}</p> */}

                </div>
            </div>
        </div>


        // <div className="container my-5" width="2rem">
        //     <div className="row">
        //         <div className="col-md-4 mt-5">
        //             <div className="container search-location">
        // <form className="form my-4">
        //     <div className="mb-3">
        //         <p>Pick From</p>
        //         <input type="text" onBlur={handleBlur} name="pickFrom" id="" placeholder="Enter a valid location" className="form-control" required />
        //     </div>
        //     <div className="mb-3">
        //         <p>Pick To</p>
        //         <input type="text" onBlur={handleBlur} name="pickTo" id="" placeholder="Enter a valid location" className="form-control" required />
        //     </div>
        //     <div className="mb-3">
        //         <input type="submit" value="Search" className="btn btn-info form-control" />
        //     </div>
        // </form>
        //                 <div className="ticket-details">
        //                     <div>
        //                         <p>{searchLocation.pickFrom}</p>
        //                         <p>{searchLocation.pickTo}</p>
        //                     </div>
        //                     <div>
        //                         <div>
        //                             <img src={photo} alt="" srcset="" width="50px" />
        //                         </div>
        //                         <div>
        //                             <p>{name}</p>
        //                         </div>
        //                         <div>
        //                             <img src={person} alt="" srcset="" width="50px" />
        //                         </div>
        //                         <div>
        //                             <p>${price}</p>
        //                         </div>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-md-8">
        //             <img className="img-fluid" src={map} alt="" />
        //         </div>
        //     </div>
        // </div>
    );
};

export default Destinations;