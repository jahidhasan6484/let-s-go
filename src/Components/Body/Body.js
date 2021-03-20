import { Card, Button } from 'react-bootstrap';
import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body = (props) => {
    const { name, photo, id } = props.transport;

    return (
        <div className="col-md-3 my-3">
            <Card>
                <Card.Img style={{ width: 200, height: 200, cursor: 'pointer', textAlign: 'center' }} className="imgStyle" src={photo} />
                <Card.Body>
                    <div className="text-center">
                        <h3 className="text-dark">{name}</h3>
                        <Button as={Link} to={`/destinations/${id}`} className="btn btn-info mr-1 mt-1">Ticket</Button>
                        {/* <Button as={Link} to="destinations" className="btn btn-info mt-1">Ticket1</Button> */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Body;