import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
    width: '100vw',
    height: '100vh'
  };

  const center = {
    lat: 40.738833492365465,
    lng: -73.9976128429272
  };

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


        { /* Child components, such as markers, info windows, etc. */ }



      </GoogleMap>
    </LoadScript>
    );
}

export default React.memo(MapComponent);
