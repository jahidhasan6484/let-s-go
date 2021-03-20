import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div className="col-md-6">
                    <Link className="navbar-brand h3 m-0" to="/">Let's<span className="text-primary">GO!</span></Link>
                </div>
                <div className="col-md-6">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} className="text-dark" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/destinations">Destination</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" >Blog</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" >Contact</Nav.Link>
                        {
                            loggedInUser.email ? <Nav.Link as={Link} className="text-dark" to="/profile">{loggedInUser.name || loggedInUser.email}</Nav.Link> :
                            <Nav.Link as={Link} className="btn btn-info" to="/login">login</Nav.Link>
                        }
                        
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;