import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const Header = () => {
    document.title="Let'sGO!";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link className="navbar-brand h3 m-0 mr-5" to="/">Let's<span className="text-primary">GO!</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ml-5">
                        <li className="nav-item">
                            <Link className="nav-link text-dark active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/home">Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            {
                                loggedInUser.email ? <Link className="nav-link text-dark" to="/profile">{loggedInUser.name || loggedInUser.email}</Link> :
                                    <Link className="nav-link text-dark btn btn-info" to="/login">login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;