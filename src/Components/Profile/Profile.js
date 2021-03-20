import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleLogOut = ()=> {
        setLoggedInUser("");
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="card text-center col-md-8 mx-auto">
                    <div className="card-header">
                        <h4>My Profile</h4>
            </div>
                    <div className="card-body py-5">
                        <img src={loggedInUser.photo} width="100" alt="Profile Pic" />
                        <h5 className="card-title pt-4">{loggedInUser.email}</h5>
                        <hp className="card-text">{loggedInUser.email}</hp>
                        <br/><br/><br/>
                        <Nav.Link as={Link} onClick={handleLogOut} className="btn btn-info" to="/home">Log Out</Nav.Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile; <p>This is profile</p>