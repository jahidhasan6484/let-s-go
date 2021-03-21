import { Card, Button } from 'react-bootstrap';
import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body = (props) => {
    const { name, photo, id } = props.transport;

    return (
        <div className="col-md-3 my-3 mt-5">
            <Card>
                <Card.Img variant="top" src={photo} className="imgStyle" height="150px" />
                <Card.Body>
                    <div className="text-center">
                        <h3 className="text-dark">{name}</h3>
                        <Button as={Link} to={`/destination/${id}`} className="btn btn-info mr-1 mt-1">Ticket</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Body;