import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { LeafletMap } from '../../src';

const title = 'Basic Map';
const description = `
  Really basic leaflet map component to get us started, provide boilerplate environment for other
  storybook leaflet components. Can evolve as we refine our usage, Maybe eventually in to a
  'portland map' or other preconfigured maps.`;

const portland = [45.52, -122.67];

const mapProps = {
  width: 400,
  height: 300,
  bounds: [
    [45.654527, -122.464291],
    [45.431897, -122.836892],
  ],
};

const demo = () => (
  <LeafletMap {...mapProps} >
    <Marker position={portland}>
      <Popup>
        <span>You should be zoomed to me ;)</span>
      </Popup>
    </Marker>
  </LeafletMap>
);

const propDocs = { inline: true, propTables: [LeafletMap] };

export default [
  title,
  description,
  demo,
  propDocs,
];
