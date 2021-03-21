import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const Header = () => {
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
                            <Link className="nav-link text-dark" to="/destination">Destination</Link>
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

        // <Navbar bg="light" expand="lg">
        //     <Container>
        //         <div className="col-md-6">
        //             <Link className="navbar-brand h3 m-0" to="/">Let's<span className="text-primary">GO!</span></Link>
        //         </div>
        //         <div className="col-md-6">
        //             <Nav className="mr-auto">
        //                 <Nav.Link as={Link} className="text-dark" to="/home">Home</Nav.Link>
        //                 <Nav.Link as={Link} className="text-dark" to="/destinations">Destination</Nav.Link>
        //                 <Nav.Link as={Link} className="text-dark" >Blog</Nav.Link>
        //                 <Nav.Link as={Link} className="text-dark" >Contact</Nav.Link>
        //                 {
        //                     loggedInUser.email ? <Nav.Link as={Link} className="text-dark" to="/profile">{loggedInUser.name || loggedInUser.email}</Nav.Link> :
        //                     <Nav.Link as={Link} className="btn btn-info" to="/login">login</Nav.Link>
        //                 }

        //             </Nav>
        //         </div>
        //     </Container>
        // </Navbar>
    );
};

export default Header;