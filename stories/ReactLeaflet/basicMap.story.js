import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const theMotherShip = [45.526907, -122.6741];

const mapStyle = {
  height: 600,
};

const mapProps = {
  bounds: [
    [45.654527, -122.464291],
    [45.431897, -122.836892],
  ],
  scrollWheelZoom: false,
};

const basicDemo = () => (
  <Map {...mapProps} style={mapStyle}>
    <TileLayer
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
    />
    <Marker position={theMotherShip}>
      <Popup>
        <span>A pretty CSS3 popup.<br />Easily customizable.</span>
      </Popup>
    </Marker>
  </Map>
);

const title = 'Basic Map';
const description = `
  This is a very basic react-leaflet map example. It should be initially zoomed to portland
  with a marker on the mothership.`;

const propDocs = { inline: true, propTables: [Map] };

export default [
  title,
  description,
  basicDemo,
  propDocs,
];
