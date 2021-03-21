import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const location = {
    lat: -3.745,
    lng: -38.523
};

function Direction({ origin, destination }) {

    const [directionResponse, setDirectionResponse] = useState(null);
    return (
        <LoadScript
            googleMapsApiKey="YOUR_API_KEY"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={20}
            >
                {
                    origin !== '' && destination !== '' && <DirectionsService
                        options={{
                            destination: destination,
                            origin: origin,
                            travelMode: 'DRIVING'
                        }}
                        callback={res => {
                            if (res !== null) {
                                setDirectionResponse(res);
                            }
                        }}
                    />
                }
                {
                    directionResponse && <DirectionsRenderer
                        options={{
                            directions: directionResponse
                        }}
                    />
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)