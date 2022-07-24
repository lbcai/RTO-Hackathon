import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import React from 'react';
import { useState, useEffect } from "react";
import './MapComponent.css';
import Profile from './Profile';

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
  width: '5vw',
  height: '5vw',
  overflow: 'hidden'
}

const imgStyle = {
  width: `100%`,
  height: `100%`
}

function MapComponent() {

  const [record, setRecord] = useState([]);
  const [profile, setProfile] = useState(false);
  const showProfile = () => {
    setProfile(!profile);
  };

  useEffect(() => {
      fetch("http://localhost:9000/record")
      .then((response) => response.json())
      .then((data) => {return(data)})
      .then((record) => setRecord(record));
    }, []);

    return (
      <div>
      {profile && <Profile />}

        <LoadScript
      googleMapsApiKey={process.env.REACT_APP_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
      >

    {record.map((value, index) => (
        <InfoWindow
        position={{lat: value.lat, lng: value.lng}}
        key={index}
        >
        <div onClick={showProfile} style={divStyle}>
            <img style={imgStyle} src={value.image} alt='' />
        </div>
        </InfoWindow>
    ))}

      </GoogleMap>
    </LoadScript>

    </div>
    );
}

export default React.memo(MapComponent);
