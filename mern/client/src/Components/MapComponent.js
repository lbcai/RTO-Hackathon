import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: 40.738833492365465,
    lng: -73.9976128429272
};

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}

function MapComponent() {
    return (
        <LoadScript
      googleMapsApiKey="AIzaSyDgP-XRNwmXcIcTbaYXO-UQBJ5IhzQAAKo"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
      >

        <InfoWindow
        position={center}
        >
        <div style={divStyle}>
            <h1>InfoWindow</h1>
        </div>
        </InfoWindow>

      </GoogleMap>
    </LoadScript>
    );
}

export default React.memo(MapComponent);
