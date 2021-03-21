import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const location = {
    lat: -3.745,
    lng: -38.523
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="YOUR_API_KEY"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={20}
            >
                <Marker
                    onLoad={onLoad}
                    position={location}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)