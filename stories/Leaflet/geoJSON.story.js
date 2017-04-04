import React from 'react';
import { Map, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import { interpolateReds } from 'd3-scale-chromatic';
import { assocPath } from 'ramda';
import { select } from '@kadira/storybook-addon-knobs';
import { features } from './neighborhoods.json';

const neighborhoods = features.map(feature => assocPath(
  ['properties', 'fakeData'],
  Math.random(),
  feature,
));

/**
 * Leaflet map requires
 */
const mapStyle = {
  height: 600,
};

const basicDemo = () => {
  const portlandBounds = [
    [45.654527, -122.464291],
    [45.431897, -122.836892],
  ];

  const downtownBounds = [
    [45.523803, -122.689453],
    [45.504023, -122.669497],
  ];

  const boundType = select('Bounds', [
    'portland',
    'downtown',
  ], 'portland');

  const geoStyle = neighborhood => ({
    color: interpolateReds(neighborhood.properties.fakeData),
    weight: 0,
    fillOpacity: 0.7,
  });

  const mapProps = {
    bounds: boundType === 'portland' ? portlandBounds : downtownBounds,
    scrollWheelZoom: false,
  };

  return (<Map {...mapProps} style={mapStyle}>
    <TileLayer
      url="http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png"
      attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>"
      subdomains="abcd"
    />
    {neighborhoods.map(neighborhood =>
      <GeoJSON
        key={neighborhood.properties.cartodb_id}
        data={neighborhood}
        style={geoStyle(neighborhood)}
        onClick={() => console.log(`You clicked ${neighborhood.properties.name}`)}
      >
        <Popup>
          <span>{neighborhood.properties.name}</span>
        </Popup>
      </GeoJSON >,
    )}
  </Map>);
};

const title = 'Geo JSON';
const description = `
  Leatlet GeoJSON demo. .`;

const propDocs = { inline: true, propTables: [Map] };

export default [
  title,
  description,
  basicDemo,
  propDocs,
];
